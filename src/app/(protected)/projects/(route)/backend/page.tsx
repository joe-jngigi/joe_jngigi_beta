
import { HourglassIcon } from 'lucide-react';
import React from 'react'
import { BackBtn } from '../..';

const BackendPage = () => {
  return (
    <section className="overflow-y-auto lg:pb-8 md:p-5 p-3 h-full w-full ">
      <div className="h-full w-full border-dashed dark:border-slate-700 border-4 rounded-lg flex-c-center items-center flex-col">
        <span className="duration-500 transition-all text-slate-700 flex-c-center flex-col gap-5  ">
          <span className="">Projects coming soon</span>
          <HourglassIcon size={100} />
        </span>

        <div className="absolute bg-red-600 bottom-20">
          <BackBtn className_exp = "hidden" />
        </div>
      </div>
    </section>
  );
} 

export default BackendPage
