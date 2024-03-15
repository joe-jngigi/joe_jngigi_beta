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
          className="flex flex-col md:p-0 pb-5 hover:scale-[1.02] duration-300 transition-all transform md:bg-white dark:md:bg-primary-dark-bg md:rounded-lg dark:shadow-md shadow-lg drop-shadow-lg dark:md:shadow-emerald-900 md:border border-b-1 dark:border-slate-800"
        >
          <div className="grid grid-cols-[132px_1fr] sm:flex items-center">
            {/* Image */}
            <div className="sm:w-full sm:h-[180px] pt-1 w-32 h-32 rounded-lg overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                className="object-cover w-full hover:scale-[1.03] duration-300 transition-all transform"
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
            <p className="text-xs lg:text-sm text-gray-400 mt-3 ">
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
    <div
      className={cn(
        "flex-col sm:flex-row sm:items-center justify-between pl-1",
        className
      )}
    >
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        {badge ? <span className="text-[10px] bg-emerald-500 rounded-md p-0.5">{badge}</span>: undefined }
      </div>
      <div className="flex flex-row md:flex-col lg:flex-row sm:justify-between justify-end gap-5 text-xs text-emerald-500">
        <a
          className="flex flex-row items-center gap-1  rounded-lg p-1 bg-emerald-500/20"
          target="_blank"
          href={code}
        >
          <FaGithub />
          Code
        </a>

        <a
          className="flex flex-row items-center gap-1 rounded-lg p-1 bg-emerald-500/20"
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
