import { cn } from "@/lib/utils";
import {  ListTodo } from "lucide-react";
import Link from "next/link";
import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Panel = ({ className }: { className: string }) => {
  return (
    <section
      className={cn(
        "h-[90vh] bg-red-80 overflow-y-auto px-1 pb-8  font-poppins rounded-s-md",
        className
      )}
    >
      <div className="flex-between cursor-pointer mt-2 p-5 dark:shadow-emerald-950 drop-shadow-lg shadow-md dark:border-none dark:bg-primary-dark-bg  bg-white rounded-xl flex-row items-center">
        <h2 className="text-xl font-semibold">Projects</h2>
        <span>
          <ListTodo size={32} />
        </span>
      </div>

      {/* Naviagtions */}
      <div className=" w-full flex flex-col px-0.5 bg-red-60 mt-16 ">
        {/* Home BTN */}
        <Link
          href={"/projects"}
          className="w-full flex-between text-sm py-4 px-2 hover:bg-slate-100 dark:hover:bg-main-dark-bg rounded-lg transition-all duration-300"
        >
          <span>Next.JS & React.JS</span>
          <MdOutlineKeyboardArrowRight />
        </Link>

        {/* NextJS BTN */}
        <Link
          href={"/projects/backend"}
          className="w-full flex-between text-sm gap-5 py-4 px-2 hover:bg-slate-100 dark:hover:bg-main-dark-bg rounded-lg transition-all duration-300"
        >
          <span>Future Projects</span>
          <MdOutlineKeyboardArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Panel;
