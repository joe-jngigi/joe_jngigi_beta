import React from "react";

import { tech_stack_icons } from "@/utils/ui_variables";
import { TImagesPropsExt } from "@/types/types";
import { AestheticRog, SocialsTexts } from ".";

const ProfileIntro = () => {
  return (
    <section className="pt-20 max-w-[1300px] mx-auto transition-all duration-300">
      <div className="flex flex-col p-2 xl:p-5 items-center justify-between md:min-h-[60vh] min-h-[57vh]">
        <h2 className="  head_text text-center sm:pt-10">
          <span className="animate_gradient text ">
            Hello, Welcomè to my TechSpace
          </span>
          <span className="hover:animate-bounce transform transition-all duration-100 ">
            😇
          </span>
        </h2>

        <div className=" w-full h-full relative grid md:grid-cols-2 gap-3 md:gap-5 mt-16">
          <div className="dark:bg-black bg-white shadow-lg rounded-lg dark:text-white p-3 border dark:border-gray-300 ">
            <AestheticRog />
            <div className="  tracking-wider mt-3 font-about ">
              <p className="pb-2 text-base font-bold italic">
                &quot; ...A weaver of dreams at the loom of the mind &quot;
              </p>{" "}
              <br />
              <div className="text-sm tracking-widest">
                <p className="dark:text-gray-500 text-gray-300 italic">{`<span>`}</p>
                <br />
                <p>
                  My name is Joseph, a developer passionate about crafting intuitive
                  software Applications. Currently, my main focus is on{" "}
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
