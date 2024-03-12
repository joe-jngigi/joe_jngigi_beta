"use client";
import React from "react";

import { TbSortAscending2 } from "react-icons/tb";

import { TechStack } from "@/components";

const Page = () => {
  return (
    <section className="overflow-y-auto  h-full p-2">
      <div className=" flex items-center xl:justify-between">
        <div>
          <TechStack />
        </div>
        <button className="hidden xl:block font-semibold">
          <TbSortAscending2 size={32} />
        </button>
      </div>
      
    </section>
  );
};

export default Page;
