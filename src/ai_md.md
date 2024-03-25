# <p style = "color: cyan; font-size: 36px; ">AI integration in My next.js App</p>

I needed to first find out how I can work with the **Google AI** or the **OpenAI**. The first package I started with was installing LangChain. It is a framework that simplify the workflow of working with large language models (LLMs). I wanted to use **Gemini AI**. Check out this article [Getting started w/ Google's Gemini Pro LLM using Langchain JS](https://dev.to/oyemade/getting-started-w-googles-gemini-pro-llm-using-langchain-js-4o1). This is what we used to install the AI. We can find [LangChain for Gemini AI](https://js.langchain.com/docs/integrations/platforms/google)

```BASH
npm install -S langchain @langchain/google-genai ai --force
```

Also, you can use [OpenAI](https://js.langchain.com/docs/get_started/installation), which has also been well documented, but first we install the langchain, which has already been added to the project. For the setup of the langchain for OpenAI, we can check out this documentation, [LangChain for Open AI](https://js.langchain.com/docs/integrations/text_embedding/openai)

```BASH
npm install langchain dotenv
```

```BASH
npm install @langchain/openai openai --force
```

## Getting Started

The other tools used in this project for the chat include the **react-markdown**, which will be used for formatting the chats used in the project. DataStax Astra DB Serverless is a cloud-based NoSQL database service that offers several advantages for your project, especially if it involves storing and managing data efficiently. Checkout the setup for [DataStax Astra DB Serverless](https://docs.datastax.com/en/astra/astra-db-vector/integrations/langchain-js.html)

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

From the messages from `useChat()`, we can destructure it, it has the following types, so we can simply have the Props Message from `useChat`, from which we can extract the **content** and **role**

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
  return <div>Role: {role} Message { content}</div>;
};

```

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
