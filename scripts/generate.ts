import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { DocumentInterface } from "@langchain/core/documents";
import {
  getEmbeddingsCollection,
  getGeminiAstraVectorStore,
} from "../src/lib/astradb";

async function generateEmbeddings() {
  const vectorStore = await getGeminiAstraVectorStore();

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
