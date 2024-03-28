import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { GithubRepoLoader } from "langchain/document_loaders/web/github";

import { TextLoader } from "langchain/document_loaders/fs/text";
import { JSONLoader } from "langchain/document_loaders/fs/json";

export const generateEmbeddings = async () => {
  // const loader = new DirectoryLoader("../", {
  //   ".txt": (path) => new TextLoader(path),
  //   ".ts": (path) => new TextLoader(path),
  //   ".tsx": (path) => new TextLoader(path),
  //   ".md": (path) => new TextLoader(path),
  //   ".json": (path) => new JSONLoader(path, "/texts"),

  // });

  // // The pages need to be filtered
  // const docs = await loader.load()
  // console.log(docs);

  const loader = new GithubRepoLoader(
    "https://github.com/joe-jngigi/joe_jngigi-Beta",
    {
      branch: "next",
      recursive: true,
      processSubmodules: true,
      unknown: "warn",
    }
  );

  const docs = [];
  for await (const doc of loader.loadAsStream()) {
    docs.push(doc);
  }

  console.log({ docs });
};

generateEmbeddings();
