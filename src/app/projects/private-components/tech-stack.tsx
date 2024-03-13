"use client";
import React from "react";

import { tech_stack_icons } from "@/utils/ui_variables";
import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="flex p-2 flex-wrap xl:justify-end justify-center gap-2 ">
      {tech_stack_icons.slice(0, 10).map((icon) => (
        <div
          key={icon.id}
          className="bg-white p-1.5 cursor-pointer dark:bg-primary-dark-bg text-xs tracking-wider rounded-xl flex items-center border-1 dark:border-none dark:shadow-emerald-900 dark:shadow-md shadow-lg drop-shadow-lg"
        >
          <Image
            src={icon.link}
            height={28}
            width={28}
            alt="student_logo"
            className="h-full object-contain cursor-pointer  rounded-full"
          />
          <p className="px-2">{icon.title}</p>
        </div>
      ))}
    </div>
  );
};
