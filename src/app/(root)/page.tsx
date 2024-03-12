// import Image from 'next/image'
import { ProfileIntro } from "@/components";
import { ExternalLink } from "lucide-react";
import Draggable from "react-draggable";

import { SiGoogleassistant } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-poppins bg-white dark:bg-black mb-10 pb-10 md:mb-5 min-h-[96vh] px-1 duration-300 transition-all">
      <>
        <ProfileIntro />
      </>
      <div className="relative p-3 max-w-[1300px] left-1/2 -translate-x-1/2 transition-all duration-300 h-[10vh] md:h-[24vh]">
        {/* <TechStack /> */}
        <div className="bottom-3 fixed left-1/2 -translate-x-1/2 w-full flex-c-center gap-3 text-base tracking-wider text-center flex flex-row">
          <Link
            className="flex flex-row items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 py-2 px-2 sm:px-8 font-[500] text-sm"
            href={"#"}
          >
            View CV <ExternalLink size={15} className="ml-3 hidde md:block" />
          </Link>
          <Link
            className="flex flex-row items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 py-2 px-2 sm:px-8 font-[500] text-sm"
            href={"#"}
          >
            My Work <ExternalLink size={15} className="ml-3 hidde md:block" />
          </Link>
        </div>
      </div>
    </main>
  );
}
