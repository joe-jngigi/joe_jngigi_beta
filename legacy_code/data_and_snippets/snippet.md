# <p style = "color: cyan; font-size: 36px; ">Algorithm</p>

```TS
const currentMessage = messages[messages.length - 1].content;
```

This line of code is written in JavaScript, and it's designed to extract the content of the most recent message from a list of messages. Here's a breakdown:

1. **`const currentMessage`:** This line declares a variable named `currentMessage`. The `const` keyword indicates that the value assigned to this variable cannot be changed later in the code.

2. **`messages`:** This represents an array that likely holds information about multiple messages. An array is an ordered collection of items, similar to a list.

3. **`messages.length - 1`:** This part accesses the length of the `messages` array. The `length` property of an array gives you the total number of elements it contains. Here, we subtract 1 because arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. So, subtracting 1 gives us the index of the last element in the array.

4. **`.content`:** This accesses a property named `content` within the element at the specified index (which is the last element in this case). Presumably, each element in the `messages` array is an object that holds information about a message, and the `content` property likely stores the actual text of the message.

**In simpler terms:**

This line of code is like saying:

* Look at the list of messages (`messages`).
* Find the most recent message in the list (the last one because arrays start counting at 0).
* Extract the text content (`content`) from that message and store it in the `currentMessage` variable.

# <p style = "color: cyan; font-size: 36px; ">Algorithm | NextJS Development</p>

This project is an implementation of Gemini to connect and implement a chatbot using the Google APIs

```TS
import {
  GoogleGenerativeAI,
  GenerateContentRequest,
} from "@google/generative-ai";

import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from "ai";

export const runtime = "edge";

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
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

// Later Usage

// const generationConfig = {
//   temperature: 0.9,
//   topK: 1,
//   topP: 1,
//   maxOutputTokens: 2048,
// };

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
// ];
```

# <p style = "color: cyan; font-size: 36px; ">NextJS Development | Script</p>

This is for generating script pages using langchain

```TS
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { DocumentInterface } from "@langchain/core/documents";
import { Redis } from "@upstash/redis";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getEmbeddingsCollection, getGeminiAstraVectorStore, getOpenaiAstraVectorStore } from "../src/lib/astradb";

async function generateEmbeddings() {
  const vectorStore = await getOpenaiAstraVectorStore();

  (await getEmbeddingsCollection()).deleteMany({});

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

  console.log(split_ts);

  await vectorStore.addDocuments(split_html);
  // await vectorStore.addDocuments(split_ts);
  // await vectorStore.addDocuments(split_html);
}

generateEmbeddings();
```

# <p style = "color: cyan; font-size: 36px; ">API | Google Gemini</p>

This API is used to connect to the Gemini model

```TS
import { LangChainStream, Message, StreamingTextResponse } from "ai";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const runtime = "edge";
const { handlers, stream } = LangChainStream();

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

    /**
     * Accessing the model using langchain
     */
    const genAI = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GEMINI_API as string,
      streaming: true,
      temperature: 0.7,
      modelName: "gemini-pro",
      topK: 40,
      topP: 1,
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