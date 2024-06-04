import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

interface aside_menu {
  className: string;
}

export const HomeAside: React.FC<aside_menu> = ({ className }) => {
  return (
    <aside className={cn("p-2", className)}>
      <div className="border-l border-gray-400 px-4 pb-5" >
        <h2 className="font-semibold text-base flex flex-row items-center gap-3 dark:text-gray-300 text-gray-700">
          <span>Related Links</span>{" "}
          <span className="cursor-pointer transition-all duration-500 hover:text-emerald-500">
            <Link2 />
          </span>
        </h2>

        {/* <NewLoader /> */}

        <div className="flex flex-col gap-2 text-sm dark:text-gray-400 text-gray-600 mt-4">
          <Link
            className="hover:text-emerald-500 hover:underline transition-all duration-500"
            href="https://docs.google.com/document/d/1j4ZvGG4xQ9ZRiobTiFqXHLZV7b73tt-i/edit?usp=sharing&ouid=118297919948625736584&rtpof=true&sd=true"
            target="_blank"
          >
            View my CV in google documents
          </Link>
          <Link
            href="#"
            className="hover:text-emerald-500 hover:underline transition-all duration-500"
          >
            Link to Offin Finance
          </Link>
        </div>
      </div>
    </aside>
  );
};
