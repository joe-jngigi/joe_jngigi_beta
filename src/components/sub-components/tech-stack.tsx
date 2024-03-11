"use client";
import React from "react";

import { tech_stack_icons } from "@/utils/ui_variables";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="relative w-full  md:max-w-[1300px] md:left-1/2 md:-translate-x-1/2 min-h-[10vh] sm:min-h-[23vh] rounded-xl mt-5 ">
      {/* Stack */}
      <div className="md:absolute w-full  bottom-0 p-2">
        <div className=" w-full mx-auto p-3 flex flex-col md:flex-row items-center justify-center gap-5 rounded-xl">
          <div className="md:flex grid grid-cols-2 sm:grid-cols-3 rounded-lg shadow-lg bg-white dark:bg-black w-full  p-5 flex-wrap justify-center gap-5 ">
            {tech_stack_icons.slice(0, 10).map((icon) => (
              <div
                key={icon.id}
                className="bg-white p-1 dark:bg-black text-xs tracking-wider rounded-xl flex items-center border-1  shadow-lg sm:w-[160px]"
              >
                <Image
                  src={icon.link}
                  height={40}
                  width={40}
                  alt="student_logo"
                  className="h-full object-contain cursor-pointer  rounded-xl"
                />
                <p className="px-2">{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
