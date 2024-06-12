"use client";

import Link from "next/link";

import { FaTachometerAlt } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const PagesLinks = () => {
  return (
    <div className=" flex-col py-10 text-sm font-medium text-black dark:text-white">
      <Link
        className=" p-2 rounded-2xl transition-all duration-500 hover:text-emerald-500 flex flex-row items-center gap-5"
        href="/"
      >
        {/*  */}
        <FaTachometerAlt className="flex-none shrink-0" />
        <span className=" tracking-wide">Home</span>
      </Link>

      <Link
        className=" p-2 rounded-2xl transition-all duration-700 hover:text-emerald-500 flex flex-row items-center gap-5"
        href="/api/auth/sign-in"
      >
        <FcDocument className="flex-none shrink-0" />
        <span className=" tracking-wide">Documentations</span>
      </Link>

      <Link
        className=" p-2 rounded-2xl transition-all duration-700 hover:text-emerald-500 flex flex-row items-center gap-5"
        href="/projects"
      >
        <MdOutlineDashboardCustomize className="flex-none shrink-0" />
        <span className=" tracking-wide">Projects</span>
      </Link>
    </div>
  );
};

export default PagesLinks;
