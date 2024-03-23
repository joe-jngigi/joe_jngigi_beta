"use client";
import React from "react";

import { tech_stack_icons } from "@/utils/ui_variables";
import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="flex md:p-2 flex-wrap xl:justify-end justify-center md:gap-2 gap-1">
      {tech_stack_icons.slice(0, 10).map((icon) => (
        <div
          key={icon.id}
          className="bg-white dark:bg-black p-1 md:p-3 cursor-pointer drop-shadow-lg rounded-lg dark:black text-xs tracking-wider flex items-center border-b-1"
        >
          <Image
            src={icon.link}
            height={20}
            width={20}
            alt="next_logos"
            className="h-full object-contain cursor-pointer  rounded-full"
          />
          <p className="px-2">{icon.title}</p>
        </div>
      ))}
    </div>
  );
};
