import React from "react";

import { about_me_text } from "@/utils/ui_variables";

import { FaQuoteLeft } from "react-icons/fa";
import { LegendSeparator } from ".";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className=" p-2 mt-10 md:mt-16 max-w-[1300px] mx-auto transition-all duration-300 ">
      <LegendSeparator title="About me" />

      <div className="rounded-lg bg-white dark:bg-slate-900 p-3 mt-3">
        <div className=" transition-all duration-300 grid sm:grid-cols-[250px_1fr] gap-2">
          <div className="flex justify-center items-center pt-3 hover:scale-[1.01] group transition-all duration-300">
            <a href="https://app.daily.dev/joejngigi922">
              <Image
                height={550}
                src="https://api.daily.dev/devcards/8df8c3a9c9b0478a9c69c812579f2d8e.png?r=5r5"
                width="300"
                alt="Joseph Ngigi's Dev Card"
              />
            </a>
          </div>

          <div className="md:p-5 sm:p-2 pt-10 px-2 pb-2 md:mx-3 mt-3 rounded-3xl hover:scale-[1.01] group transition-all duration-300 border-1 dark:border-slate-800">
            <span className="italic text-gray-300 dark:text-gray-600">{`<p>`}</span>
            <p className="flex md:ml-10">
              <span className=" text-3xl text-emerald-500 ">
                <FaQuoteLeft />
              </span>
              <span className="peer p-1 tracking-wide text-sm group-hover:text-base  transition-all duration-300 font-about">
                {about_me_text}
              </span>
            </p>
            <span className="italic text-gray-300 dark:text-gray-600 ">{`<p>`}</span>
          </div>
        </div>
      </div>



    </section>
  );
};

export default AboutSection;


{/* <div className=" w-full h-full flex items-center justify-center flex-col gap-5 mt-12 py-6">
        <div className="dark:bg-primary-dark-bg md:w-[600px] w-full bg-white rounded-lg dark:text-white p-5 dark:shadow-emerald-950 shadow-md drop-shadow-lg border dark:border-none">

          <div className="tracking-wider mt-5 font-about ">
            <p className="pb-2 text-sm font-bold italic">
              &quot; ...A weaver of dreams at the loom of the mind &quot;
            </p>{" "}
            <br />
            <div className="text-xs md:text-sm tracking-widest">
              <p className="dark:text-gray-600 text-gray-300 italic">{`<span>`}</p>
              <br />
              <p className="flex flex-row items-center gap-2 mb-3">
                <RiContrastDrop2Line className="flex-none" />
                <span>
                  I make software using{" "}
                  <span className="text-emerald-500">Next.js</span>
                </span>
              </p>
              <p className="flex flex-row items-center gap-2 mb-3 ">
                <RiContrastDrop2Line className="flex-none justify-start" />
                <span className="">
                  I practice{" "}
                  <span className="text-emerald-500">Web Development</span> and
                  <span className="text-emerald-500">
                    {" "}
                    making fullstack applications
                  </span>{" "}
                  in next.js
                </span>
              </p>

              <br />
              <p className="dark:text-gray-600 text-gray-300 italic">{`</span>`}</p>
            </div>
          </div>
        </div>

      </div> */}