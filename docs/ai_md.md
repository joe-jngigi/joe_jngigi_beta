# <p style = "color: cyan; font-size: 36px; ">AI integration in My next.js App</p>

I needed to first find out how I can work with the **Google AI** or the **OpenAI**. I also needed to use **Langchain** as I wanted to make a more customized assistant for my project. **Langchain** simplifies LLM application development by providing the tools to manage data access, guide the LLM with well-crafted prompts, and leverage retrieved information for accurate and informative responses. It's like giving developers a recipe book for building effective LLM applications. This is the installation script of the langchain and the Google AI module. On this project I install **langchain**, **google-genai**, **dotenv** and **`ai`**, `ai` is from Vercel, for the Vercel AI SDK. For this blog, I will only connect to the Generative AI.

```BASH
npm install -S langchain @langchain/google-genai ai dotenv --force
```

Also, you can check [OpenAI](https://js.langchain.com/docs/get_started/installation), which has also been well documented. For the setup of the langchain for OpenAI, we can check out this documentation, [LangChain for Open AI](https://js.langchain.com/docs/integrations/text_embedding/openai)

```BASH
npm install @langchain/openai openai --force
```

## Getting Started

The other tools used in this project for the chat include the **react-markdown**, which will be used for formatting the chats used in the project. DataStax Astra DB Serverless is a cloud-based NoSQL database service that offers several advantages for your project, especially if it involves storing and managing data efficiently. Checkout the setup for [DataStax Astra DB Serverless](https://docs.datastax.com/en/astra/astra-db-vector/integrations/langchain-js.html).

```BASH
npm install @datastax/astra-db-ts@latest
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

In the implementation, I first implemented the client side rendering, and I am using the `ai` library from the Vercel. **`ai`** provides the **`useChat`** hook for the implementation of the chat. Simply, this provides different functions we can use to handle the **chats and messages** as it handles the API calls, simply allowing us to just put a skeleton over it to allow users to query from the API.

From [The Vercel AI SDK](https://sdk.vercel.ai/docs/api-reference/use-chat), we can check out this:

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

# <p style = "color: cyan; font-size: 36px; ">Integrating with Gemini</p>

We have noted that I am using **Vercel AI SDK** and **useChat()**. useChat enables **streaming**, In this context of useChat, streaming refers to the continuous flow of chat messages from your AI provider. Imagine it like a live feed of messages being sent one after another, instead of receiving them all at once in a big chunk. **useChat** connects with the `api/chat/route.ts` route, where we have implemented the **Google Gemini API** key.

In the API route, we implement the [**GoogleGenerativeAIStream**](https://sdk.vercel.ai/docs/api-reference/providers/google-generative-ai-stream). The GoogleGenerativeAIStream function is a utility that transforms the output from Google's Generative AI SDK into a **ReadableStream**. It uses **AIStream** under the hood, applying a specific parser for the Google's response data structure.

We also need to install **generative-ai**

```BASH
npm i @google/generative-ai prompt-sync --force
```

From here, we can now implement a post API, which will be used to connect with Google, so we can send the returned data. useChat returns **messages**, which has **role** and **content**. We then initialized the API key from Google and the model to be used from which we can then pass the messages to the **GoogleGenerativeAIStream**. This will return a new instance of **StreamingTextResponse**. This will process and return readable data.

```json
[{ "role": "user", "content": "what is generative-ai" }]
```

```TS

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
```

# <p style = "color: cyan; font-size: 36px; ">Langchain</p>

Langchain tackles simplifying LLM application development in a few key ways, let's delve into the "how" behind each

**Streamlining Data Access and Prompt Engineering**

Imagine a large language model (LLM) as a powerful but information-hungry machine. Langchain acts as a bridge, **allowing developers to connect the LLM to various data sources**. This could be a company knowledge base, web search results, or even previous conversation history. LLMs rely on prompts, which are essentially instructions guiding the LLM towards the desired response. Langchain offers pre-built components for tasks like data retrieval and text manipulation. These components help developers craft effective prompts for the LLM, ensuring it has the right information and structure to deliver an accurate response.

**Retrieval Augmented Generation (RAG)**

This is a fancy term for how Langchain helps LLMs find relevant information to answer your query. Langchain uses retrieval modules to sift through the connected data sources based on the user's prompt. Imagine it like searching a library for relevant books before writing an essay. The LLM then uses this retrieved information along with the user's prompt to generate its response. This ensures the response is grounded in factual data and addresses the specific details of the prompt.

**Modular Components and Sequencing**

Langchain offers a toolbox of pre-built components, each handling specific tasks like data retrieval, text formatting, or generating different creative text formats. These components are like building blocks. Developers can sequence these components together to create complex workflows. This allows them to build applications that can reason about a situation, break it down into smaller tasks, and utilize the LLM's capabilities effectively for each step.

**LangChain is not a trainer**

Not exactly. Langchain isn't designed for directly training a large language model (LLM) from scratch in the way you might train a pet. LLMs typically require massive amounts of data and computing power for training, which Langchain doesn't provide itself.

However, Langchain can be a powerful tool to **work with** an already trained LLM and influence its responses in your application. Here's how:

1. **Prompt Engineering:**

   - Langchain offers tools to craft prompts that steer the LLM towards the kind of responses you desire for your application. Remember prompts are essentially instructions for the LLM. By providing specific and well-structured prompts, you can nudge the LLM to generate outputs that align with your goals.

2. **Data Access Control:**

   - Langchain allows you to connect the LLM to specific data sources relevant to your application. This way, the LLM primarily bases its responses on information you've chosen, shaping the overall direction of the conversation within your application.

3. **Modular Component Selection:**

   - Langchain provides a variety of pre-built components for various tasks. You can choose components that guide the LLM towards the type of reasoning or response generation you need within your application.

While Langchain doesn't directly train the LLM itself, it empowers you to mold the LLM's responses within your application by influencing what data it sees and how it interprets your prompts. In that sense, you can customize the LLM's behavior for your specific use case.

Here's an analogy: Imagine a chef (LLM) with exceptional culinary skills but unfamiliar with a particular cuisine (your desired application). Langchain provides you with the tools to:

* Give the chef a recipe book (prompts) specific to that cuisine.
* Stock the kitchen (data access) with the necessary ingredients.
* Offer guidance on cooking techniques (components) for that cuisine.

By influencing these aspects, you can get the chef to create a dish (LLM response) that aligns with your taste (application goals) without directly teaching them new culinary skills (re-training the LLM).


## **Implementation of the langchain in our Project**

In the project, I need the AI chatbot to achieve a certain behavior. This chatbot will be used in my project to answer questions about me, and my portfolio. Langchain will provide helper classes, and for this case, we want to read the content of our pages, and for this we will [**load them into langchain**](https://js.langchain.com/docs/integrations/platforms/google).

We need to set up **langchain for Google AI**, we can check out the following [**ChatGoogleGenerativeAI**](https://js.langchain.com/docs/integrations/chat/google_generativeai), here we can see how to configure our NodeJS project

## Loading Pages

[Github Loaders](https://js.langchain.com/docs/integrations/document_loaders/web_loaders/github)