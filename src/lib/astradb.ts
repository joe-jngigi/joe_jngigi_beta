import { AstraDB } from "@datastax/astra-db-ts";
import {
  AstraDBVectorStore,
  AstraLibArgs,
} from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";


// Initialize variables
const endpoints = process.env.ASTRA_DB_ENDPOINT as string;
const application_token = process.env.ASTRA_DB_APPLICATION_TOKEN as string;
const collections = process.env.ASTRA_DB_COLLECTION as string;

if (!endpoints || !application_token || !collections) {
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
export const getAstraVectorStore = async () => {
  // Initialize the client
  return AstraDBVectorStore.fromExistingIndex(
    new GoogleGenerativeAIEmbeddings({
      modelName: "embedding-001",
      
    })
  );
};

getAstraVectorStore().catch(console.error);
