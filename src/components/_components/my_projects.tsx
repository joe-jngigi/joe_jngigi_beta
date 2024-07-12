"use client";
import React from "react";
import Image from "next/image";
import { project_details } from "@/utils/ui_variables";

import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const MyProjects = () => {
  return (
    <>
      {project_details.map((project) => (
        <div 
          key={Math.random()}
          className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] md:p-0 pb-5 mb-5 hover:scale-[1.01] duration-300 transition-all transform md:bg-white dark:md:bg-main-dark-bg md:rounded-lg dark:shadow-md shadow-md drop-shadow-sm  md:border border-b-1"
        >
          <div className="grid grid-cols-[132px_1fr] sm:flex items-center">
            {/* Image */}
            <div className="sm:w-full sm:h-[180px] pt-1 w-32 h-32 rounded-lg overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                className="object-cover w-full "
              />
            </div>

            {/* Links SM */}
            <Links
              badge={project.badge}
              code={project.source_code}
              preview={project.project_link}
              name={project.name}
              className="flex sm:hidden w-full h-full "
            />
          </div>

          {/* Details */}
          <div className="flex-grow sm:p-2">
            {/* link MD */}
            <Links
              badge={project.badge}
              code={project.source_code}
              preview={project.project_link}
              name={project.name}
              className="hidden sm:flex"
            />

            {/* Description */}
            <p className="text-xs lg:text-sm text-gray-700 dark:text-gray-400 mt-3 line-clamp-4 ">
              {project.description}
            </p>
            {/* ... (Other project details) */}
          </div>
        </div>
      ))}
    </>
  );
};

interface linksProps {
  code: string;
  preview: string;
  name: string;
  tech?: {};
  badge?: string;
  className?: string;
}

const Links: React.FC<linksProps> = ({
  code,
  preview,
  name,
  className,
  tech,
  badge,
}) => {
  return (
    <div className={cn("flex-col flex justify-between", className)}>
      <div className="flex sm:flex-row flex-col gap-1 justify-between">
        <h2 className="sm:text-lg font-medium truncate w-[200px] sm:w-[300px]">
          {name}
        </h2>
        <p >
          {badge ? (
            <span className="text-[10px] bg-emerald-500 rounded-md p-0.5">
              {badge}
            </span>
          ) : undefined}
        </p>
      </div>
      <div className="flex flex-row gap-5 text-xs text-emerald-500">
        <a
          className="flex flex-row items-center gap-1  rounded-lg p-1"
          target="_blank"
          href={code}
        >
          <FaGithub />
          Code
        </a>

        <a
          className="flex flex-row items-center gap-1 rounded-lg p-1 "
          target="_blank"
          href={preview}
        >
          <FaLink />
          Preview
        </a>
      </div>
    </div>
  );
};
