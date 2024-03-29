import { AstraDB } from "@datastax/astra-db-ts";

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

export const astraAonnection = async () => {
  // Initialize the client
  const astraDb = new AstraDB(
    "YOUR_TOKEN",
    "https://ba4f1095-2c8a-4941-9544-355b865d4219-us-east1.apps.astra.datastax.com"
  );
};

astraAonnection().catch(console.error);
