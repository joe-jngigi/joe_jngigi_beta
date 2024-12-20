import { ChatOpenAI } from "@langchain/openai";
import { LangChainStream, Message, StreamingTextResponse } from "ai";

import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";

import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";

import { UpstashRedisCache } from "@langchain/community/caches/upstash_redis";
import { getOpenaiAstraVectorStore } from "@/lib/astradb";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { Redis } from "@upstash/redis";

const time = new Date(new Date().getTime());
console.log(time);

export const POST = async (req: Request) => {
  try {
    /**
     * Retrieve messages from the Request the user
     *
     * The messages are arrays, with type message
     *
     * @type {Message}
     */
    const { messages } = await req.json();
    const { handlers, stream } = LangChainStream();

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    });

    /**
     * Accessing the model using langchain.
     *
     * We initialize a new instance by instantiating the {ChatOpenAI}.
     *
     * This will pass through the necessary connection variables to initialize the connection
     *
     */
    const genAI = new ChatOpenAI({
      modelName: "gpt-3.5-turbo-0125",
      openAIApiKey: process.env.OPEN_AI_GPT_KEY,
      streaming: true,
      callbacks: [handlers],
      cache: cache,

      /**
       * Whether to print out response text.
       */
      verbose: true,
    });
    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo-0125",
      openAIApiKey: process.env.OPEN_AI_GPT_KEY,
      cache: cache,
    });

    /**
     * This will retrieve the documents for the astradb vectorstore
     */
    const retriever = (await getOpenaiAstraVectorStore()).asRetriever();

    /**
     * Look at the list of messages (`messages`).
     * We will extract the content of the specfied index number, for this case it is for example
     *
     * if messages has 21 arrays, that is the length, so we have message at @index {20} as the index we want to extract
     *
     * @type ->{Message}
     *
     * Find the most recent message in the list (the last one because arrays start counting at 0).
     * Extract the text content (`content`) from that message and store it in the `currentMessage` variable.
     */
    const currentMessage = messages[messages.length - 1].content;

    /**
     * For the chat history, we want to make each in a format that langchain will understand
     * Whether it is either human or it is AI
     *
     * The algorithm will remove the last message: {messages.slice(0, -1)}
     */
    const chathistory = messages.slice(0, -1).map((text: Message) => {
      return text.role === "user"
        ? new HumanMessage(text.content)
        : new AIMessage(text.content);
    });

    // console.log(chathistory);

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
          "Don't leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    /**
     * ["user", "{input}"] => Input is a special langchain interpolation input
     */
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "Hello, my name is Joseph Ngigi" +
          "You will be my personal assistant, and will answer the questions about me from the website and the the context below. " +
          "I love the name Hinata, so your name is Hinata" +
          "Be lively and casual" +
          "Answer the user's questions based on the below context. " +
          "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
          "Format your messages in markdown format.\n\n" +
          "Context:\n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    /**
     * This is resposible for taking documents and putting them into the context in the @function {ChatPromptTemplate}
     *
     */
    const combineDocsChain = await createStuffDocumentsChain({
      llm: genAI,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage Content:\n{page_content}"
      ),
      documentSeparator: "\n------------------\n",
    });

    /**
     * The **retrieval_chain** will take the *user input*, and then turn it into a vector;
     * To do a **similarity search** in the vector database,
     */
    const retrieval_chain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    retrieval_chain.invoke({
      input: currentMessage,
      chat_history: chathistory,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};
