"use client";
import React from "react";

import { data } from "../../../../local_data/data_file";
import { PostProps } from "@/data_manipulation/types/types";

const FormEvent = () => {
  // console.log(data);

  const getdata: PostProps[] = data; //PostProps is represented as an object. I have to add the array to make the fetched data as array
  console.log(getdata);

  console.log(Math.random());
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => {
    e.preventDefault();

    console.log("submitted succesfully");
    console.log(id);
  };

  return (
    <div className="grid_setup ">
      {data.map((eachPost: PostProps) => (
        // console.log(eachPost)

        <div
          key={Math.random()}
          className="p-3 dark:bg-primary-dark-bg bg-white dark:text-white text-black rounded-xl"
        >
          <div>
            <h2 className="text-xl font-bold text-center">{eachPost.title}</h2>
            <p className="text-14 dark:text-gray-400 text-slate-700 mt-2">
              {eachPost.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormEvent;

// For this component, I would not map the data here since I want to use it as client, so I would map it in the other file
