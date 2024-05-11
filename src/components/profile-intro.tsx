import React from "react";
import { AestheticRog, SocialsTexts } from ".";
import { SiGoogleassistant } from "react-icons/si";

const ProfileIntro = () => {
  return (
    <section className="pt-20 max-w-[1300px] mx-auto transition-all duration-300">
      <div className="flex flex-col p-2 xl:p-5 items-center justify-between transition-all duration-300">
        <div className="h-[80vh] flex-c-center flex-col gap-10 ">
          <h2 className="head_text text-center transition-all duration-300">
            <span className="dark:bg-gradient-radial-text bg-clip-text dark:text-transparent transition-all duration-300">
              Hello, Welcomè to my TechSpace
            </span>
            <span className="hover:animate-bounce transform transition-all duration-300 ">
              😇
            </span>
          </h2>

          <p className="text-center text-xs dark:text-gray-200 text-gray-700 md:text-sm flex flex-row items-center gap-2">
            Chat with my Assistant, ask more about me!{" "}
            <SiGoogleassistant size={17} className="text-emerald-500" />
          </p>
        </div>

        <div className=" w-full h-full flex items-center justify-center flex-col gap-5 mt-12">
          <div className="dark:bg-primary-dark-bg md:w-[600px] w-full bg-white rounded-lg dark:text-white p-5 dark:shadow-emerald-950 dark:shadow-lg drop-shadow-lg border dark:border-none">
            <AestheticRog />
            <div className="tracking-wider mt-5 font-about ">
              <p className="pb-2 text-sm font-bold italic">
                &quot; ...A weaver of dreams at the loom of the mind &quot;
              </p>{" "}
              <br />
              <div className="text-xs md:text-sm tracking-widest">
                <p className="dark:text-gray-600 text-gray-300 italic">{`<span>`}</p>
                <br />
                <p>
                  My name is Joseph. I am a developer passionate about crafting
                  intuitive Web Applications. Currently, my main focus is on{" "}
                  <span className="text-emerald-500">web development</span>. I
                  have considerable experience with languages and frameworks ie.{" "}
                  <span className=" text-emerald-500">
                    React, NextJs, Python and Django.
                  </span>{" "}
                  My other areas of interest are in Web 3 and Data Engineering.
                </p>
                <br />
                <p className="dark:text-gray-500 text-gray-300 italic">{`</span>`}</p>
              </div>
            </div>
          </div>

          <SocialsTexts />
        </div>
      </div>
    </section>
  );
};

export default ProfileIntro;
