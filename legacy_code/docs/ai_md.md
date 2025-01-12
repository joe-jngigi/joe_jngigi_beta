# <p style = "color: cyan; font-size: 36px; ">AI integration in My next.js App</p>

I needed to first find out how I can work with the **Google AI** or the **OpenAI**. I also needed to use **Langchain** as I wanted to make a more customized assistant for my project. **Langchain** simplifies LLM application development by providing the tools to manage **private or customized data access**, guide the LLM with well-crafted prompts, and leverage retrieved information for accurate and informative responses. It's like giving developers a recipe book for building effective LLM applications. This is the installation script of the langchain and the Google AI module. On this project I install **langchain**, **openai**, **dotenv** and **`ai`**, `ai` is from Vercel, for the Vercel AI SDK. For this blog, I will only connect to the Generative AI and langchain. I used Gemini to and tried to send data to astradb, but it failed. **Gemini** has no clear documentation in langchain of March 2024, so I chose to continue with **OpenAI**, because it is better with a clear langchain documentation. Remember you have to pay for the OpenAI APIs, $5 is enough for the implementation.


```BASH
npm install -S langchain ai dotenv --force
```

Also, you can check [OpenAI](https://js.langchain.com/docs/get_started/installation), which has also been well documented. For the setup of the langchain for OpenAI, we can check out this documentation, [LangChain for Open AI](https://js.langchain.com/docs/integrations/text_embedding/openai)

```BASH
npm install @langchain/openai openai --force
```

## Getting Started

The other tools used in this project for the chat include the **react-markdown**, which will be used for formatting the chats used in the project. DataStax Astra DB Serverless is a cloud-based NoSQL database service that offers several advantages for your project, especially if it involves storing and managing data efficiently. Checkout the setup for [DataStax Astra DB Serverless](https://docs.datastax.com/en/astra/astra-db-vector/integrations/langchain-js.html).

```BASH
npm install @datastax/astra-db-ts@latest react-markdown
```

The next pack is installing the client for interacting with **Redis**. It is a _Node.js_ client library for interacting with Redis, which is an open-source, in-memory data structure store used as a database, cache, and message broker. Redis is commonly employed in various applications to handle tasks such as caching, session management, real-time analytics, pub/sub messaging, and more.

```BASH
npm install @upstash/redis
```

We also will be using the [**Vercel AI SDK**](https://sdk.vercel.ai/docs). The Vercel AI SDK is a tool for developers to integrate artificial intelligence functionalities into their web applications. It specifically works with frameworks like React, Svelte, Vue.js, and Solid built with Vercel in mind. From this we have installed the package called ai.

```BASH
npm install ai
```

## Chat Implementation

In the implementation, I first implemented the client side rendering, and I am using the `ai` library from the Vercel. **`ai`** provides the **`useChat`** hook for the implementation of the chat. Simply, this provides different functions we can use to handle the **chats and messages** as it handles the API calls, simply allowing us to just put a UI over it to allow users to query from the API.

From [The Vercel AI SDK](https://sdk.vercel.ai/docs/api-reference/use-chat), we can note that:

> **`useChat`** is a utility to allow you to easily create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the state for chat input, and updates the UI automatically as new messages are received. After submitting a message, the `useChat` hook will automatically append a user message to the chat history and trigger an API call to the configured endpoint.

From the messages from `useChat()`, we can destructure it, where we have different functions we can use to create the chat panel. One collection in the object is **messages**

`**messages**` is returned as collection. The **messages** are array with objects of type `Message`. This means we can extract each message individually message as an object using the `map()` function, which will list all the object individually.

```TS
interface Message {
  id: string;
  tool_call_id?: string;
  createdAt?: Date;
  content: string;
  ui?: string | JSX.Element | JSX.Element[] | null | undefined;
  role: 'system' | 'user' | 'assistant' | 'function' | 'data' | 'tool';
  name?: string;
  function_call?: string | FunctionCall;
  data?: JSONValue;
  tool_calls?: string | ToolCall[];
  annotations?: JSONValue[] | undefined;
}
```

When we get each individual **message object**, we can now manipulate the **message**, like shown; in this example, we can render each message conditionally, according to the **role** of each **message** This is the implementation of the client side messages.

```TSX
import React from "react";

import { Message, useChat } from "ai/react";

interface messageProps {
  messages: Message
}

export const ChatBox = () => {
  const { messages,} = useChat();
  return (
    <div className="overflow-y-auto h-full">
      {messages.map((message) => (
        <MessageBox messages={message} />
      ))}
    </div>
  );
};

const MessageBox: React.FC<messageProps> = ({ messages: { role, content } }) => {
  const isAImessage = role === "assistant"
  return(
    <div className={cn("mb-4 flex p-2 rounded-lg")}>
      {isAImessage ? (
        <SiGoogleassistant size={17} className="text-emerald-500 flex-none mr-2" />
      ) : (
        <FaUserMd />
      )}
      {isAImessage ? <>Assistant {content}</> : <>User {content}</>}
    </div>
  )
};

```

From the messages, we can now extract, **content** and **role**. We will use **role** to render each message conditionally. The `content` variable is not being mixed up because it is being rendered conditionally based on the value of `isAImessage`.

- `{isAImessage ? ... : ...}` is a conditional (ternary) operator. It checks if `isAImessage` is true or false.
- If `isAImessage` is true (meaning the message is from the assistant), it renders the content preceded by the word "Assistant".
- If `isAImessage` is false (meaning the message is from the user), it renders the content preceded by the word "User".

> So, regardless of whether `isAImessage` is true or false, the `content` variable is being displayed appropriately with the corresponding label ("Assistant" or "User"). This ensures that the content is not mixed up because it's always preceded by an indicator of who sent the message.

# <p style = "color: cyan; font-size: 36px; ">Integrating with the Gemini Model</p>

We have noted that I am using **Vercel AI SDK** and **useChat()**. useChat enables **streaming**. In the context of useChat, streaming refers to the continuous flow of chat messages from your AI provider. Imagine it like a live feed of messages being sent one after another, instead of receiving them all at once in a big chunk. **useChat** connects with the `api/chat/route.ts` route.

In the API route, we implement the [**GoogleGenerativeAIStream**](https://sdk.vercel.ai/docs/api-reference/providers/google-generative-ai-stream). The GoogleGenerativeAIStream function is a utility that transforms the output from Google's Generative AI SDK into a **ReadableStream**. It uses **AIStream** under the hood, applying a specific parser for the Google's response data structure.

We also need to install **generative-ai**

```BASH
npm i @google/generative-ai prompt-sync --force
```

From here, we can now implement a post API, which will be used to connect with Google, so we can send the returned data. useChat returns **messages**, which has **role** and **content**. We then initialized the API key and the model to be used from which we can then pass the messages to the **GoogleGenerativeAIStream** for Gemini and for OpenAI we have **ChatOpenAI**. This will return a new instance of **StreamingTextResponse**. This will process and return readable data.

```json
[{ "role": "user", "content": "what is generative-ai" }]
```

````TS

/**
 * convert messages from the Vercel AI SDK Format to the format
 * that is expected by the Google GenAI SDK
 * @type
 * ```
 * export declare interface GenerateContentRequest extends BaseParams {
 *  contents: Content[];
 *   tools?: Tool[];
 * }
 * ```
 *
 * @param messages
 * @returns {GenerateContentRequest}
 */

const buildGoogleGeminiGenAI = (
  messages: Message[]
): GenerateContentRequest => ({
  contents: messages
    .filter(
      (message) => message.role === "user" || message.role === "assistant"
    )
    .map((message) => ({
      role: message.role === "user" ? "user" : "model",
      parts: [
        { text: message.content },
        {
          text: "You are my personal assistant, and your name is zephyr",
        },
      ],
    })),
});

export const POST = async (req: Request) => {
  try {
    const { messages } = await req.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GEMINI_API as string
    );

    const model_access = await genAI
      .getGenerativeModel({ model: "gemini-pro" })
      .generateContentStream(buildGoogleGeminiGenAI(messages));

    const gemini_stream = GoogleGenerativeAIStream(model_access);

    return new StreamingTextResponse(gemini_stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};
````

# <p style = "color: cyan; font-size: 36px; ">Langchain</p>

**Establishing connection using langchain**

From the previous section we have noted how to establish a connection **Gemini**, this can be the same case for establishing the connection to **OpenAI**. You can access Google's `gemini` and `gemini-vision` models, as well as other generative models in LangChain through ChatGoogleGenerativeAI class in the `@langchain/google-genai` integration package. By using **ChatGoogleGenerativeAI**, we now replace **GoogleGenerativeAI**, so we can now pass different settings and the API key to langchain to establish the connection. To set up **langchain for Google AI**, we can check out the following [**ChatGoogleGenerativeAI**](https://js.langchain.com/docs/integrations/chat/google_generativeai), here we can see how to configure langchain into our NodeJS project

```TS
import { LangChainStream, Message, StreamingTextResponse } from "ai";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const runtime = "edge";
const { handlers, stream } = LangChainStream();

const time = new Date().getTime().toString();
console.log(time);

export const POST = async (req: Request) => {
  try {
   
    const { messages } = await req.json();
    const genAI = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GEMINI_API as string,
      streaming: true,
      modelName: "gemini-pro",
      callbacks: [handlers],
    });

    const currentMessage = messages[messages.length - 1].content;
    const prompts = ChatPromptTemplate.fromMessages([
      ["system", "You are a personal assistant, and your name is zephyr"],
      ["user", "{input}"],
    ]);

    const chain = prompts.pipe(genAI);
    chain.invoke({
      input: currentMessage,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};
```

**Establishing connection for OpenAI**

```TS
import { LangChainStream, Message, StreamingTextResponse } from "ai";

import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";

import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { getOpenaiAstraVectorStore } from "@/lib/astradb";

const time = new Date(new Date().getTime());
console.log(time);

export const POST = async (req: Request) => {
  try {

    const { messages } = await req.json();
    const { handlers, stream } = LangChainStream();

    /**
     * We initialize a new instance by instantiating the {ChatOpenAI}.
     * This will pass through the necessary connection variables to initialize the connection
     */
    const genAI = new ChatOpenAI({
      modelName: "gpt-3.5-turbo-0125",
      openAIApiKey: process.env.OPEN_AI_GPT_KEY,
      streaming: true,
      callbacks: [handlers],
      verbose: true,
    });

    /**
     *
     * Find the most recent message in the list (the last one because arrays start counting at 0).
     * Extract the text content (`content`) from that message and store it in the `currentMessage` variable.
     */
    const currentMessage = messages[messages.length - 1].content;

    /**
     * ["user", "{input}"] => Input is a special langchain interpolation input
     */
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a personal assistant. You can impersonate the website's owner, be lively and moderately casual"
      ],
      // new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    /**
     * This is resposible for taking documents and putting them into the context in the @function {ChatPromptTemplate}
     * 
     */
    const prompts = ChatPromptTemplate.fromMessages([
      ["system", "You are a personal assistant, and your name is zephyr"],
      ["user", "{input}"],
    ]);

    const chain = prompts.pipe(genAI);
    chain.invoke({
      input: currentMessage,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};

```

**How does langchain work?**

**Here's an analogy**

Imagine a chef (LLM) with exceptional culinary skills but unfamiliar with a particular cuisine (your desired application). Langchain provides you with the tools to:

- Give the chef a recipe book (prompts) specific to that cuisine.
- Stock the kitchen (data access) with the necessary ingredients.
- Offer guidance on cooking techniques (components) for that cuisine.

By influencing these aspects, you can get the chef to create a dish (LLM response) that aligns with your taste (application goals) without directly teaching them new culinary skills (re-training the LLM).

While Langchain doesn't directly train the LLM itself, it empowers you as the developer to mold the LLM's responses within your application by influencing what data it sees and how it interprets your prompts. In that sense, you can customize the LLM's behavior for your specific use case.

**Streamlining Data Access and Prompt Engineering**

Imagine a large language model (LLM) as a powerful but information-hungry machine. Langchain acts as a bridge, **allowing developers to connect the LLM to various data sources**. This could be a **company knowledge base**, **web search results**, or even **previous conversation history**. LLMs rely on prompts, which are essentially instructions guiding the LLM towards the desired response. Langchain offers pre-built components for tasks like **data retrieval** and **text manipulation**. These components help developers craft effective prompts for the LLM, ensuring it has the right information and structure to deliver an accurate response.

**Retrieval Augmented Generation (RAG)**

This is a fancy term for how Langchain helps LLMs find relevant information to answer your query. Langchain uses retrieval modules to sift through the connected data sources based on the user's prompt. Imagine it like searching a library for relevant books before writing an essay. The LLM then uses this retrieved information along with the user's prompt to generate its response. This ensures the response is grounded in factual data and addresses the specific details of the prompt.

**Modular Components and Sequencing**

Langchain offers a toolbox of pre-built components, each handling specific tasks like data retrieval, text formatting, or generating different creative text formats. These components are like building blocks. Developers can sequence these components together to create complex workflows. This allows them to build applications that can reason about a situation, break it down into smaller tasks, and utilize the LLM's capabilities effectively for each step.

**LangChain is not a trainer**

Not exactly. Langchain isn't designed for directly training a large language model (LLM) from scratch in the way you might train a pet. LLMs typically require massive amounts of data and computing power for training, which Langchain doesn't provide itself. Langchain is a powerful tool to **work with** an already trained LLM and influence its responses in your application. Here's how:

1. **Prompt Engineering:**

   - Langchain offers tools to craft prompts that steer the LLM towards the kind of responses you desire for your application. Remember prompts are essentially instructions for the LLM. By providing specific and well-structured prompts, you can nudge the LLM to generate outputs that align with your goals.

2. **Data Access Control:**

   - Langchain allows you to connect the LLM to specific data sources relevant to your application. This way, the LLM primarily bases its responses on information you've chosen, shaping the overall direction of the conversation within your application.

3. **Modular Component Selection:**
 
   - Langchain provides a variety of pre-built components for various tasks. You can choose components that guide the LLM towards the type of reasoning or response generation you need within your application.

## **Implementation of the langchain in our Project**

In the project, I need the AI chatbot to achieve a certain behavior. This chatbot will be used in my project to answer questions about me, and my portfolio. Langchain will provide helper classes, and for this case, we want to read the content of our pages, and for this we will [**load them into langchain**](https://js.langchain.com/docs/integrations/platforms/google).

## Loading Pages into the database

I needed to load my pages and the documents to provide my personal data to the langchain, that is my external data source, so that I can get more personalized information from my data source. For this I am using [file loaders](https://js.langchain.com/docs/integrations/document_loaders/file_loaders/directory), so I can load my pages and markdowns to get more personalized answers. For this, I generate a function to extract these **files** and put their information in a **document**. This script is a crucial part of a system designed for document processing and analysis.

```TS
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { JSONLoader } from "langchain/document_loaders/fs/json";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { DocumentInterface } from "@langchain/core/documents";

async function generateEmbeddings() {

  const vectorStore = await getOpenaiAstraVectorStore();

  const html_loader = new DirectoryLoader(
    "src/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true
  );
  const typescript_loader = new DirectoryLoader(
    "src/",
    {
      ".ts": (path) => new TextLoader(path),
    },
    true
  );
  const rootmd_loader = new DirectoryLoader(
    "docs/",
    {
      ".md": (path) => new TextLoader(path),
    },
    true
  );

  // The pages need to be filtered
  const html_docs = await html_loader.load();
  const ts_docs = await typescript_loader.load();
  const rootmd_docs = await rootmd_loader.load();

  const final_html = html_docs.map((doc): DocumentInterface => {
    const url =
      doc.metadata.source
        .replace(/\\/g, "/") //Replace backward slashes with forward
        .split("/src")[1]
        .split("/page.", "/layout.")[0] || "/";

    const pageContentTrimmed = doc.pageContent
      // .replace(/^import.*$/gm, "") // Remove all import statements
      .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
      .replace(/^\s*[\r]/gm, "") // remove empty lines
      .trim();

    return {
      pageContent: pageContentTrimmed,
      metadata: { url },
    };
  });

  const final_typescript = ts_docs.map((doc): DocumentInterface => {
    const url = doc.metadata.source
      .replace(/\\/g, "/") //Replace backward slashes with forward
      .split("/src")[1];

    const pageContentTrimmed = doc.pageContent
      .replace(/^\s*[\r]/gm, "") // remove empty lines
      .trim();

    return {
      pageContent: pageContentTrimmed,
      metadata: { url },
    };
  });

  const final_rootmd = rootmd_docs.map((doc): DocumentInterface => {
    const url = doc.metadata.source
      .replace(/\\/g, "/") //Replace backward slashes with forward
      .split("/")[1];
    // .split("/page.")[0] || "/";

    const pageContentTrimmed = doc.pageContent
      .replace(/^\s*[\r]/gm, "") // remove empty lines
      .trim();

    return {
      pageContent: pageContentTrimmed,
      metadata: { url },
    };
  });

  // We need to split the documents generated
  const html_splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
  const md_splitter = RecursiveCharacterTextSplitter.fromLanguage("markdown");
  const ts_splitter = RecursiveCharacterTextSplitter.fromLanguage("markdown");

  const split_html = await html_splitter.splitDocuments(final_html);
  const split_rootmd = await md_splitter.splitDocuments(final_rootmd);
  const split_ts = await ts_splitter.splitDocuments(final_typescript);

  const new_docs = [...split_html, ...split_rootmd, ...split_ts]

  await vectorStore.addDocuments(newdocs);

  console.log(split_rootmd);
  
}

generateEmbeddings();

```

The TypeScript script defines a function `generateEmbeddings()` that orchestrates the loading, processing, and splitting of documents from different directories. It imports modules for loading various document types such as HTML, Markdown, and TypeScript. The script sets up **DirectoryLoader** instances to load documents from specific directories, followed by asynchronous loading of documents using these loaders. Each type of document undergoes specific processing, such as removing import statements and class names for HTML documents, and trimming empty lines for Markdown and TypeScript documents. Subsequently, the documents are split based on their type using **RecursiveCharacterTextSplitter**. So we can now easily send the document as smaller chunks to the AI model.

>In intend to use [GitHub Loaders](https://js.langchain.com/docs/integrations/document_loaders/web_loaders/github) to load information in the future, and I think this will be a more efficient way to use when you need your own data. Of course there are safer ways, one can explore other ways to load files from different sources that can be more private like private databases.

# <p style = "color: cyan; font-size: 36px; ">Vector Database</p>

Vector databases are a special type of database designed to store and manage information in a way that's particularly useful for artificial intelligence (AI) and machine learning applications. Unlike tradition databases that organize data in rows and tables, **Vector databases store data points as mathematical structures called vectors**. These vectors are essentially fixed-length lists of numbers that represent some underlying information. Vectors can have many dimensions, ranging from a few to even thousands, depending on the complexity of the data they represent. This allows them to capture rich and nuanced information about things like text, images, audio, or video. A key strength of vector databases is their ability to perform similarity searches. Instead of looking for exact matches, they can find data points in the database that are most similar to a given query vector.

**What do we do after process the files?**

We need to store these in a vector database, and we will be using Astra Database. Astra itself isn't a vector database, but rather a cloud-based NoSQL database platform by DataStax that offers vector search capabilities built on Apache Cassandra. Instead, it has **Vector Search** which is an extension or feature within Astra DB that allows you to store and perform similarity searches on vector embeddings. So, you can leverage Astra's core functionalities for data management and utilize the vector search capabilities for specific AI applications.

## Connecting to Astra DB

For open AI, this is how we connect to the astradb so that we can save our generated data to the database. **OpenAIEmbeddings** is a class for generating embeddings using the OpenAI API. It extends the Embeddings class and implements **OpenAIEmbeddingsParams**. It has an embedding method `(embedDocuments)` to generate embeddings for an array of documents. Splits the documents into batches and makes requests to the OpenAI API to generate embeddings. This will return promise that resolves to a **2D array** of embeddings for each document.

The **OpenAIEmbeddings** class takes textual data (such as a paragraph or document) as input and generates embeddings (vectors) for that data using the OpenAI API. These embeddings capture semantic information about the text's meaning and context.

Once the embeddings are generated by the OpenAIEmbeddings class, they can be passed to methods of the `AstraDBVectorStore` class for storage in the Astra database.

In the provided code below, the `AstraDBVectorStore.fromExistingIndex()` method is used to create an instance of `AstraDBVectorStore` and connect it to an existing index in the Astra database. Once the instance is created, you can use methods like `addVectors` or `addDocuments` to save the embeddings (vectors) generated by OpenAIEmbeddings to the Astra database.

>In Langchain, embeddings refer to a numerical representation of textual data. This basically means converting text into a series of numbers that capture the meaning and relationships within the text.

Langchain uses a special class called **Embeddings** to interact with different embedding models. Embeddings allow Langchain to process text data in a way that machine learning algorithms can understand. This is because machines can't directly work with raw text, but they can perform calculations and comparisons on vectors (which embeddings are).

`await vectorStore.addDocuments(newdocs);`

We can now initialize this in our script generating file, which will send the data to the database.

```TS
export const getOpenaiAstraVectorStore = async () => {
  // Initialize the client
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({
      openAIApiKey: openai_api,
      modelName: "text-embedding-3-small",
    }),

    {
      collection,
      endpoint,
      token,
      maxRetries: 2,
      collectionOptions: {
        vector: {
          dimension: 1536,
          metric: "cosine",
        },
      },
    }
  );
};
```

The OpenAIEmbeddings class is designed to generate vectors (embeddings) for textual data. When we are talk about embeddings, we're referring to these numerical vectors that represent textual data in a format that can be easily processed by machine learning algorithms These embeddings can then be used for various natural language processing tasks, such as similarity calculations, classification, or clustering.

## Using our Data

We have now stored our data in the database. Moving forward, we need to understand how to utilize this data effectively. Here's an overview of how the data is structured: it's stored in chunks, and each chunk contains an embedding labeled `"$vector"`. These embeddings, such as `[-0.028642498,-0.029153971,-0.019064,0.031362604,0.008538115,...]`, were generated by OpenAI and are now stored in our database. They are represented as vectors with 1536 dimensions, and they encapsulate and describe the semantic meaning of the corresponding text in the language of machine learning.

![Vector Database](./images/image.png)

And now, when we send a message to our chatbot, we want to find the relevant vectors in our database with a similar meaning, we pass them to our chatbot, which the reads the text in then answers the question, based on the information in the database.

**Using Langchain to query the LLM**

The main reason to have langchain is so that it can process and facilitate data in the database and the user prompts. To have the chatbot answering the answers to our liking, we need to create a chain that passes a list of documents to a model. A **chain** in this case refers to a sequence of steps or actions executed in a predefined order.

> `@param llm` — Language model to use for responding.

> `@param prompt` - Prompt template. Must contain input variable "context", which will be used for passing in the formatted documents.

We have already initialized the **model** and the **prompt**, which will be passed to **createStuffDocumentsChain** to create a `default` **combineDocsChain**.

```TS
import { LangChainStream, Message, StreamingTextResponse } from "ai";

import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";

import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { getOpenaiAstraVectorStore } from "@/lib/astradb";

const time = new Date(new Date().getTime());
console.log(time);

export const POST = async (req: Request) => {
  try {

    const { messages } = await req.json();
    const { handlers, stream } = LangChainStream();

    const genAI = new ChatOpenAI({
      modelName: "gpt-3.5-turbo-0125",
      openAIApiKey: process.env.OPEN_AI_GPT_KEY,
      streaming: true,
      callbacks: [handlers],
      verbose: true,
    });

  
    const currentMessage = messages[messages.length - 1].content;
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a personal assistant, and for my portfolio. You can impersonate the website's owner, be lively and moderately casual" +
          "Answer the user's questions based on the below context. " +
          "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
          "Format your messages in markdown format.\n\n" +
          "Context:\n{context}",
      ],
      // new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: genAI,
      prompt,
    });

    const retriever = (await getOpenaiAstraVectorStore()).asRetriever();

    const retrieval_chain = await createRetrievalChain({
      combineDocsChain,
      retriever,
    });

    retrieval_chain.invoke({
      input: currentMessage,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Iternal Server Error" }, { status: 500 });
  }
};
```

We then need to retrieve the data from the database so that it can be processed, where we also use a `default` value of **retriever** to assign the returned retrieved data by calling the `.asRetriever()` function from our database connection. Next step will then create a `retrieval_chain`, which will receive two arguments of **combineDocsChain** and the created **retriever**; note their names, that is why we called them as default variables. We will then **invoke** the **retrieval_chain**, which for now has accepts an input value from the user.

 - **combineDocsChain** - It is a `Runnable` that takes inputs and produces a string output. The inputs to this will be any original inputs to this chain, a new context key with the retrieved documents, and *chat_history* (if not present in the inputs) with a value of an array.

The **retrieval_chain** will take the *user input*, and then turn it into a vector, to do a **similarity search** in the vector database, where it will find documents with information similar to the user's input request. This will the pass the documents from the user and the database to the **createStuffDocumentsChain**, which will put them in the *context of the system*

The prompt *system* will have all the relevant documents and the predefined prompt, and the *user* will have the query. All the information will be sent to the GPT-Model, and it will then generate an answer. This should allow the model to answer questions about the website

**Streamlining the model queries**

When retrieving from the database, the default value that is returned is just the `pageContent`, but I also need to capture the `url` This I can then format it more formally. To achieve this, we pass `PromptTemplate` to the **combineDocsChain**, from which we can now format our messages

```TS
const combineDocsChain = await createStuffDocumentsChain({
  llm: genAI,
  prompt,
  documentPrompt: PromptTemplate.fromTemplate(
    "Page URL: {url}\n\nPage Content:\n{page_content}"
  ),

  documentSeparator: "\n------------------\n",
});
```

**Chat History**

In order to store the chat history, we need to distinguish the chat history for the human and the AI, so that means when we chat, once the response has been returned the API as messages, we rank them into `HumanMessage` and `AIMessage` like shown below.

```TS
const chat_history = messages.slice(0, -1).map((text: Message) => {
  text.role === "user" ? new HumanMessage(text.content): new AIMessage(text.content)
});
```

For the usage of the chat history, we need to turn it into a search query, that we can use to find the relevant vector embeddings. We could take the whole chat history as it is, turn it into a vector and use it for our search, but this will be in exact.

Suppose we were talking about something then we completely change the topic to another, so we have two completely different meanings in the same vector, but it will not be efficient.

In this case when we have a new topic, so we well only care about it, then we can use OpenAI to rephrase a new query, for this we create a **rephrasePrompt**. This will take our whole *chat history*, and separates them into objects that we can put into an array

```TS

const rephrasePrompt = ChatPromptTemplate.fromMessages([
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
  [
    "user",
    "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
    "Don't leave out any relevant keywords. Only return the query and no other text.",
  ],
]);
```
This will take the chat history, and it will put it in the above **rephrasePrompt** and the model will rephrase the chat history into a search query

```TS
const historyAwareRetrieverChain = await createHistoryAwareRetriever({
  llm: rephrasingModel,
  retriever,
  rephrasePrompt,
});
```

We still want to pass the same history to the actual prompt to the OpenAI model as it will be used to generate an appropriate answer, for that reason we then initialize **MessagesPlaceholder**. 

>It is a Class that represents a placeholder for messages in a chat prompt. It extends the **BaseMessagePromptTemplate**, which is an abstract class that serves as a base for creating message prompt templates. This defines how to format messages for different roles in a conversation.

Now instead just passing only the **retriever** to the retrieval chain, as this fetches the documents depending on the chat history now, not just the user input.

```TS
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "Hello, my name is Joseph Ngigi, or you can call me Joe. " +
    "You will be my personal assistant, and will answer the questions about me from the website and the the context below. " +
    "I sometimes call you Zephyr " +
    "You can impersonate the website's owner, be lively and casual" +
    "Answer the user's questions based on the below context. " +
    "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
    "Format your messages in markdown format.\n\n" +
    "Context:\n{context}",
  ],
  new MessagesPlaceholder("chat_history"),
  ["user", "{input}"],
]);

const retrieval_chain = await createRetrievalChain({
  combineDocsChain,
  retriever: historyAwareRetrieverChain,
});

```


