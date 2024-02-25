import React from 'react'

import { about_me_text } from "@/utils/ui_variables";

import { FaQuoteLeft  } from "react-icons/fa";
import { AestheticRog, LegendSeparator } from '.';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className=" p-2 mt-10 md:mt-16 max-w-[1300px] mx-auto transition-all duration-300 ">
      
        <LegendSeparator title = 'About me' />
        
        <div className='rounded-lg bg-white dark:bg-slate-900 p-3 mt-3'>
          <AestheticRog/>

          <div className=" transition-all duration-300 grid sm:grid-cols-[250px_1fr] gap-2">
            <div className='flex justify-center items-center pt-3 hover:scale-[1.01] group transition-all duration-300'>
              <a href="https://app.daily.dev/joejngigi922"><Image height={550} src="https://api.daily.dev/devcards/8df8c3a9c9b0478a9c69c812579f2d8e.png?r=5r5" width="300" alt="Joseph Ngigi's Dev Card"/></a>
            </div>

            <div className='md:p-5 sm:p-2 pt-10 px-2 pb-2 md:mx-3 mt-3 rounded-3xl hover:scale-[1.01] group transition-all duration-300 border-1 dark:border-slate-800'>
              <span className="italic text-gray-300 dark:text-gray-600">{`<p>`}</span>
              <p className="flex md:ml-10">
                <span className=" text-3xl text-emerald-500 "><FaQuoteLeft /></span>
                <span className="peer p-1 tracking-wide text-sm group-hover:text-base  transition-all duration-300 font-about">{about_me_text}</span>
              </p>
              <span className="italic text-gray-300 dark:text-gray-600 ">{`<p>`}</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection
