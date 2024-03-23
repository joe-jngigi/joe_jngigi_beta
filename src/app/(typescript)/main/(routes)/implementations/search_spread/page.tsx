import Postcard from "@/app/(typescript)/components.ts/postcard";

import { PostProps } from "@/types/types";
import React from "react";

import AppHeader from "@/components/_components/appHeader";
import { Search } from "@/app/(typescript)";

// This gets data from API
const getAPIData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// To use this piece of code, I can initialize it by initializing the returned data. The data returned is an array

const Typescript = async () => {
  const desc =
    "On this page we see how we can implement a search, also I will be implenting a reusable component. It is worth noting that I have implemented a spread operator on the cards making it more interesting on how it looks on the source code. The code is explained on the readme document, and also the source code is pulblicly available on the github";

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const slicedData = data.slice(0, 50);
    return slicedData;
  };

  // So the data comes in as arrays, but with the datatype of @*PostProps
  const FETCHED_DATA: PostProps[] = await getData();
  //   const marvelMovies = [
  //    { 1: "Iron Man (2008)"},
  //     {2: "The Incredible Hulk (2008)"},
  //     {3: "Iron Man 2 (2010)"},
  //     {4: "Thor (2011)"},
  //     {name: "Spider-Man: Far From Home (2019)"},
  //     "Black Widow (2021)",
  // ];

  // const FETCHED_DATA = marvelMovies

  // Remember the fetched data is inform of arrays.This means
  // console.log(FETCHED_DATA);
  // throw Error('New error')

  // getData()
  return (
    <main className="t-app">
      <AppHeader title="React Events With Typescript" description={desc} />
      <Search />

      <div className="grid_setup dark:bg-black bg-slate-100 rounded-2xl pt-3  mt-5 pb-10">
        {/* Map data into cards */}
        {
          // eachData needs to have a data type described. So we can have as show
          FETCHED_DATA.map((eachData: PostProps) => (
            // console.log({...eachData})  => For the data from the api, this is going to return i

            // Once I receive the data, I can pass the data through a spread operator
            <Postcard key={eachData.id} {...eachData} />
            // <Postcard title={eachData.title} description={eachData.body}/>
          ))
        }
      </div>
    </main>
  );
};

export default Typescript;

// Note for this import, we can have it here like this
// type PostProps = {
//   id: number,
//   title: string,
//   body: string,
// }
