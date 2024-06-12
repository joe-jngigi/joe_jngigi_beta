"use client";
import React from "react";

import { tech_stack_icons } from "@/utils/ui_variables";
import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="flex md:p-2 flex-wrap md:gap-2 gap-1">
      {tech_stack_icons.slice(0, 10).map((icon) => (
        <div
          key={icon.id}
          className="bg-white dark:bg-main-dark-bg p-1 cursor-pointer drop-shadow-lg rounded-full text-xs tracking-wider flex items-center border border-gray-300 dark:border-gray-900"
        >
          <p className="px-2">{icon.title}</p>
        </div>
      ))}
    </div>
  );
};
