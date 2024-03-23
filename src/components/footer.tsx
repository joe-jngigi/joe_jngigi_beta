import { GithubIcon } from "lucide-react";
import React from "react";
import { FaGithubAlt } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="sm:max-w-[1800px]  text-sm fixed_position z-40 bottom-0 rounded-sm  mt-1 mx-auto p-1.5 text-black dark:text-white">
      <div className="flex-between flex-row items-center">
        <div className="sm:flex gap-3 hidden font-semibold">
          <a
            className="text-emerald-500 text-xs"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.JS
          </a>

          <a
            className="text-emerald-500 text-xs"
            href="https://vercel.com/dashboard"
            target="_blank"
          >
            Vercel Servers
          </a>

          <a
            className="text-emerald-500 text-xs"
            href="https://www.mongodb.com/"
            target="_blank"
          >
            Mongo DB
          </a>

          <a
            className="text-emerald-500 text-xs"
            href="https://next-auth.js.org/"
            target="_blank"
          >
            Next-Auth
          </a>

          <a
            className="text-emerald-500 text-xs"
            href="https://ui.shadcn.com/"
            target="_blank"
          >
            ShadCN
          </a>

          <a
            className="text-emerald-500 text-xs"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind
          </a>
        </div>
        <a
          className="flex flex-row justify-end items-center gap-1 pr-2 font-bold text-emerald-500"
          href="https://github.com/joe-jngigi/next_learn_dev"
          target="_blank"
        >
          Source Code
          <FaGithubAlt size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
