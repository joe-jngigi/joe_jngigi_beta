import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { ExternalLink, LinkIcon, Linkedin } from "lucide-react";

import Link from "next/link";
import { AestheticRog } from "@/components/sub-components/aesthetic-rog";
import { MdMarkEmailRead } from "react-icons/md";

export const SocialsTexts = () => {
  return (
    <div className="flex-col flex gap-5">
      <div className=" w-ful p-3 dark:bg-black bg-white shadow-lg h-full rounded-lg border dark:border-gray-300">
        <div className="flex items-center">
          <AestheticRog />
          <p className=" text-lg logo_text text-center  w-full ">
            Let&apos;s connect
          </p>
        </div>

        <div className="mt-3 text-sm rounded-lg py-3">
          {/* Social links */}
          <div className="flex flex-row gap-3 sm:gap-16 p-5 justify-between sm:justify-center">
            <a
              title="My github link... Yey. This is where I store my code... it is private I am not sure why I like it like that"
              className="flex-c-center items-center gap-1 flex-col"
              href="https://github.com/joe-jngigi"
              target="_blank"
            >
              <FaGithub size={20} />

              <span>GitHub</span>
            </a>

            <a
              title="Twitter handle. I know it is X but for me it is twitter"
              className="flex-c-center gap-1 flex-col"
              href="https://twitter.com/joe_jngigi"
              target="_blank"
            >
              <FaXTwitter size={20} />
              <span>Twitter</span>
            </a>

            <a
              title="Well, this linkedin"
              className=" flex-c-center gap-1 flex-col"
              href="https://www.linkedin.com/in/joejngigi/"
              target="_blank"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
           
            <a
              title="Well, this is email"
              className=" flex-c-center gap-1 flex-col"
              href="mailto:josephngigi775@gmail.com"
              target="_blank"
            >
              <MdMarkEmailRead size={20} />
              <span>G-Mail</span>
            </a>
          </div>

          {/*  */}
          <div className=" text-emerald-500 flex-c-center gap-3 text-base tracking-wider text-center flex flex-row">
            <Link
              className="variant_btn w-[160px] flex flex-row items-center justify-center"
              href={"#"}
            >
              View CV <ExternalLink size={15} className="ml-3" />
            </Link>
            <Link
              className="variant_btn w-[160px] flex flex-row items-center justify-center"
              href={"#"}
            >
              My Work <ExternalLink size={15} className="ml-3" />
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col space-y-3 ">
          <div className="space-y-2 mt-3 p-3">
            <Skeleton className="h-4 w-[250px] dark:bg-slate-900 bg-slate-300" />
            <Skeleton className="h-4 w-[200px] dark:bg-slate-900 bg-slate-300" />
          </div>
        </div> */
}
