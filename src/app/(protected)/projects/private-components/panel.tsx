import { cn } from '@/lib/utils'
import { FileJson2Icon, HourglassIcon, ListTodo } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Panel = ({className}: {className: string}) => {
  return (
    <section
      className={cn(
        "h-[90vh] overflow-y-auto pb-8  bg-primary-dark-bg font-poppins rounded-s-md",
        className
      )}
    >
      <h1 className="flex flex-row items-center bg-slate-950 justify-between gap-10 p-5 text-2xl font-bold border-b-1 dark:border-slate-800">
        <span>Project</span> <ListTodo className='cursor-pointer text-emerald-500 '/>
      </h1>
      <div className=" w-full flex flex-col px-0.5 bg-red-60 mt-16 ">
        <Link
          className="w-full flex items-center text-sm gap-5 p-3 hover:bg-slate-100 dark:hover:bg-main-dark-bg rounded-md transition-all duration-300"
          href={"/projects"}
        >
          <FileJson2Icon />
          Next.JS & React.JS
        </Link>
        <Link
          className="w-full flex items-center text-sm gap-5 p-3 hover:bg-slate-100 dark:hover:bg-main-dark-bg rounded-md transition-all duration-300"
          href={"/projects/backend"}
        >
          <HourglassIcon />
          Future Projects
        </Link>
      </div>
    </section>
  );
}

export default Panel
