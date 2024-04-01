/**
 * !Must be at the top
 *
 */
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

import { AstraDB } from "@datastax/astra-db-ts";
import {
  AstraDBVectorStore,
  AstraLibArgs,
} from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { OpenAIEmbeddings } from "@langchain/openai";

// Initialize variables
const endpoint = process.env.ASTRA_DB_ENDPOINT as string;
const token = process.env.ASTRA_DB_APPLICATION_TOKEN as string;
const collection = process.env.ASTRA_DB_COLLECTION as string;
const openai_api = process.env.OPEN_AI_GPT_KEY as string;

console.log("endpoint", endpoint);
console.log("token", token);
console.log("collection", collection);
console.log(
  "========================================================================================="
);

if (!endpoint || !token || !collection) {
  console.log("goto: https://astra.datastax.com/org");
  throw new Error(
    "The environment variables have not been initialized! Confirm please"
  );
}

/**
 * Reference
 * [Class GoogleGenerativeAIEmbeddings](https://api.js.langchain.com/classes/langchain_google_genai.GoogleGenerativeAIEmbeddings.html)
 * @returns
 */
export const getGeminiAstraVectorStore = async () => {
  // Initialize the client
  return AstraDBVectorStore.fromExistingIndex(
    new GoogleGenerativeAIEmbeddings({
      modelName: "textembedding-gecko",
    }),
    {
      collection,

      endpoint,
      token,
      maxRetries: 1,
      collectionOptions: {
        vector: {
          dimension: 768,
          metric: "cosine",
        },
      },
    }
  );
};

/**
 * Open AI Embeddings
 * @returns
 */
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

export const getEmbeddingsCollection = async () => {
  return new AstraDB(token, endpoint).collection(collection);
};
