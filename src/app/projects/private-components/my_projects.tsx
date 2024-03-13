import React from "react";
import Image from "next/image";
import { project_details } from "@/utils/ui_variables";

import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

export const MyProjects = () => {
  return (
    <>
      {project_details.map((project) => (
        <div
          key={Math.random()}
          className="flex flex-col md:p-0 pb-5 md:bg-white dark:md:bg-primary-dark-bg md:rounded-lg shadow-md dark:md:shadow-emerald-900 md:border border-b-1 dark:border-slate-800"
        >
          {/* Image */}
          <div className="w-full h-[200px] container rounded-lg overflow-hidden md:mr-4 relative">
            <Image
              src={project.image}
              alt={project.name}
              layout="fill"
              className="object-fill"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-medium">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
            <div className="md:hidden flex-c-center flex-col gap-5">
              <a href={project.project_link}>
                <FaLink size={30} />
              </a>
              <a href={project.source_code}>
                <FaGithub />
              </a>
            </div>
            {/* ... (Other project details) */}
          </div>
        </div>
      ))}
    </>
  );
};
