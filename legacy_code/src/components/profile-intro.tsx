import React from "react";
import { Link2 } from "lucide-react";

import Link from "next/link";

const ProfileIntro = () => {
  return (
    <section className="pt-20 max-w-[1300px] mx-auto transition-all duration-300">
      <div className="flex flex-col p-2 xl:p-5 items-center justify-between transition-all duration-300">
        <div className="h-[85vh]  flex-c-center flex-col gap-10 ">
          <h2 className="head_text text-center transition-all duration-300">
            <span className="dark:bg-gradient-radial-text bg-clip-text dark:text-transparent transition-all duration-300">
              Hello, Welcomè to my TechSpace
            </span>
            <span className="hover:animate-bounce transform transition-all duration-300 ">
              😇
            </span>
          </h2>

          <p className="text-center text-xs dark:text-gray-200 text-gray-700 md:text-sm  w-[300px]">
            My name is Joseph. I make software using <b>Next.js</b>. Chat with
            the Assistant, ask more about me!
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default ProfileIntro;
