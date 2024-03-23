# <p style = "color: cyan; font-size: 36px; ">AI integration in My next.js App</p>

I needed to first find out how I can work with the **Google AI** or the **OpenAI**. The first package I started with was installing LangChain. It is a framework that simplify the workflow of working with large language models (LLMs). I wanted to use **Gemini AI**. Check out this article [Getting started w/ Google's Gemini Pro LLM using Langchain JS](https://dev.to/oyemade/getting-started-w-googles-gemini-pro-llm-using-langchain-js-4o1). This is what we used to install the AI. We can find [LangChain for Gemini AI](https://js.langchain.com/docs/integrations/platforms/google)

```BASH
npm install -S langchain @langchain/google-genai ai --force
```

Also, for this project, I will be working on it using [OpenAI](https://js.langchain.com/docs/get_started/installation), which has also been well documented, but first we install the langchain, which has already been added to the project. For the setup of the langchain for OpenAI, we can check out this documentation, [LangChain for Open AI](https://js.langchain.com/docs/integrations/text_embedding/openai)

```BASH
npm install langchain dotenv
```

We then need to install the OpenAI setup in out project. Langchain is already installed using the Google bash script before

```BASH
npm install @langchain/openai openai --force
```

The other tools used in this project for the chat include the **react-markdown**, which will be used for formatting the chats used in the project. DataStax Astra DB Serverless is a cloud-based NoSQL database service that offers several advantages for your project, especially if it involves storing and managing data efficiently. Checkout the setup for [DataStax Astra DB Serverless](https://docs.datastax.com/en/astra/astra-db-vector/integrations/langchain-js.html)

```BASH
npm install @datastax/astra-db-ts@latest
```

The next pack is installing the client for interacting with **Redis**. It is a _Node.js_ client library for interacting with Redis, which is an open-source, in-memory data structure store used as a database, cache, and message broker. Redis is commonly employed in various applications to handle tasks such as caching, session management, real-time analytics, pub/sub messaging, and more.

```BASH
npm install @upstash/redis
```
