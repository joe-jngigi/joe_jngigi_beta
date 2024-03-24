"use client";
import React, { useState } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Linkedin } from "lucide-react";

import { FiCopy } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";

import { toast } from "sonner";
import { AestheticRog } from "@/components/_components/aesthetic-rog";
import { EmailDialog } from "../ui_children/email_dialog";
import { SiMinutemailer } from "react-icons/si";

export const SocialsTexts = () => {
  const [onCopy, setOnCopy] = useState(false);
  const email = "josephngigi775@gmail.com";

  const onClick = (email: string) => {
    setOnCopy(true);
    navigator.clipboard.writeText(email);
    toast.success("Email Copied Successfuly!");
    setTimeout(() => {
      setOnCopy(false);
    }, 2000);
  };
  return (
    <div className="flex-col flex gap-5">
      <div className="dark:bg-primary-dark-bg bg-white rounded-lg dark:text-white p-5 dark:shadow-emerald-950 dark:shadow-lg drop-shadow-lg border dark:border-none h-full">
        <div className="flex items-center">
          <AestheticRog />
          <p className=" text-lg logo_text text-center  w-full ">
            Let&apos;s connect
          </p>
        </div>

        <div className="mt-3 text-xs rounded-lg py-3">
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
          </div>

          {/*  */}
          <div className="w-full duration-300 transition-all">
            <div className="text-sm p-2 flex-c-center items-center">
              <p>{email}</p>
            </div>

            {/* Buttons */}
            <div className="rounded-md p-2 flex-c-center flex-row gap-3 sm:gap-5 ">
              <EmailDialog asChild>
                <button className="flex flex-col items-center justify-center rounded-full bg-emerald-500/20 dark:text-emerald-500 p-1.5 sm:p-4 sm:px-8  h-[56px] w-[56px] sm:h-auto sm:w-auto font-[500] text-xs cursor-pointer">
                  <span>DM Me</span>
                  <SiMinutemailer />
                </button>
              </EmailDialog>

              {/* <button
                onClick={() => onClick(email)}
                className="flex flex-row items-center justify-center rounded-full bg-emerald-500/20 dark:text-emerald-500 py-4 px-2 sm:px-8 font-[500] text-xs"
              >
                <span className="mr-2">Copy Email</span>
                {onCopy ? <LuCopyCheck /> : <FiCopy />}
              </button> */}
            </div>
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
