"use client";

import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { Linkedin } from "lucide-react";
import { SiGmail } from "react-icons/si";

export const SocialsTexts = () => {
  
  return (
    <div className="absolute bottom-0 left-0 px-4 w-[320px]  h-[80px]  flex flex-row items-center gap-3">
      <a
        className="flex-c-center items-center gap-1 flex-col bg-primary-dark-bg p-2 rounded-full border  "
        href="https://github.com/joe-jngigi"
        target="_blank"
      >
        <FaGithub size={17} />
        <span className="sr-only ">GitHub Link</span>
      </a>
      <a
        className="flex-c-center items-center gap-1 flex-col bg-primary-dark-bg p-2 rounded-full border"
        href="mailto:josephngigi775@gmail.com"
        target="_blank"
      >
        <SiGmail size={17} />
        <span className="sr-only">Email Me using mailto link</span>
      </a>

      <a
        className="flex-c-center gap-1 flex-col bg-primary-dark-bg p-2 rounded-full border"
        href="https://twitter.com/joe_jngigi"
        target="_blank"
      >
        <FaXTwitter size={17} />
        <span className="sr-only">My Twitter Link</span>
      </a>

      <a
        className=" flex-c-center gap-1 flex-col bg-primary-dark-bg p-2 rounded-full border"
        href="https://www.linkedin.com/in/joejngigi/"
        target="_blank"
      >
        <Linkedin size={17} />
        <span className="sr-only">Link to my LinkedIn</span>
      </a>

      <a
        className=" flex-c-center gap-1 flex-col bg-primary-dark-bg p-2 rounded-full border"
        href="https://dev.to/joe_jngigi"
        target="_blank"
      >
        <FaDev size={17} />
        <span className="sr-only">Link to my Dev.to Blog</span>
      </a>
    </div>
  );
};

{
  /* <div className="w-full duration-300 transition-all">
        {/* Buttons */
}
{
  /* <div className="rounded-md p-2 flex-c-center flex-row gap-3 sm:gap-5 ">
          
        </div> 
      </div> */
}
