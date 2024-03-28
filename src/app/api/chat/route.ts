import {
  GoogleGenerativeAI,
  GenerateContentRequest,
} from "@google/generative-ai";

import {
  GoogleGenerativeAIStream,
  LangChainStream,
  Message,
  StreamingTextResponse,
} from "ai";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const runtime = "edge";
const { handlers, stream } = LangChainStream();

const time = new Date().getTime().toString()
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

    /**
     * Accessing the model using langchain
     */
    const genAI = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GEMINI_API as string,
      streaming: true,
      modelName: "gemini-pro",
      callbacks: [handlers],
    });

    /**
     * Look at the list of messages (`messages`).
     *
     * messages @type ->{Message}
     *
     * Find the most recent message in the list (the last one because arrays start counting at 0).
     * Extract the text content (`content`) from that message and store it in the `currentMessage` variable.
     */
    const currentMessage = messages[messages.length - 1].content;

    /**
     * ["user", "{input}"] => Input is a special langchain interpolation input
     */
    const prompts = ChatPromptTemplate.fromMessages([
      ["system", "You are a personal assistant, and your name is zephyr"],
      ["user", "{input}"],
    ]);

    const chain = prompts.pipe(genAI)
    chain.invoke({
      input: currentMessage
    })

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};
