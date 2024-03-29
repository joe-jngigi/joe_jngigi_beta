// import Image from 'next/image'
import { ProfileIntro } from "@/components";
// import { NewLoader } from "@/components/_components/new_loader";
import { ExternalLink } from "lucide-react";

import Link from "next/link";

export default function Home() {

  return (
    <section className="font-poppins bg-white dark:bg-black text-black dark:text-white mb-10 pb-20 md:p-0 min-h-[96vh] px-1 duration-300 transition-all">
      <>
        <ProfileIntro />
      </>
      <div className="relative p-3 max-w-[1300px] mx-auto  transition-all duration-300 h-[10vh] md:h-[24vh]">
        {/* <TechStack /> */}
        <div className="w-full flex-c-center absolute bottom-0 left-1/2 -translate-x-1/2 gap-3 text-base tracking-wider text-center ">
          {/* <NewLoader /> */}
          <span>
            <Link
              className="flex flex-row items-center justify-center rounded-full bg-emerald-500/20 dark:text-emerald-500 py-4 px-2 sm:px-8 font-[500] text-sm"
              href={
                "https://docs.google.com/document/d/1j4ZvGG4xQ9ZRiobTiFqXHLZV7b73tt-i/edit?usp=sharing&ouid=118297919948625736584&rtpof=true&sd=true"
              }
              target="_blank"
            >
              View CV <ExternalLink size={15} className="ml-3 hidde md:block" />
            </Link>
          </span>
          <span>
            <Link
              className="flex flex-row items-center justify-center rounded-full bg-emerald-500/20 dark:text-emerald-500 py-4 px-2 sm:px-8 font-[500] text-sm"
              href="/projects"
            >
              My Work <ExternalLink size={15} className="ml-3 hidde md:block" />
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
