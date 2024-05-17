// import Image from 'next/image'
import { AestheticRog, ProfileIntro, SocialsTexts } from "@/components/index";
// import { NewLoader } from "@/components/_components/new_loader";
import { RiContrastDrop2Line } from "react-icons/ri";

export default function Home() {
  return (
    <section className="font-poppins bg-white dark:bg-black text-black dark:text-white mb-10 pb-20 md:p-0 min-h-[96vh] px-1 duration-300 transition-all">
      <ProfileIntro />

      <div className=" w-full h-full flex items-center justify-center flex-col gap-5 mt-12 py-6">
        <div className="dark:bg-primary-dark-bg md:w-[600px] w-full bg-white rounded-lg dark:text-white p-5 dark:shadow-emerald-950 shadow-md drop-shadow-lg border dark:border-none">
          <AestheticRog />
          <div className="tracking-wider mt-5 font-about ">
            <p className="pb-2 text-sm font-bold italic">
              &quot; ...A weaver of dreams at the loom of the mind &quot;
            </p>{" "}
            <br />
            <div className="text-xs md:text-sm tracking-widest">
              <p className="dark:text-gray-600 text-gray-300 italic">{`<span>`}</p>
              <br />
              <p className="flex flex-row items-center gap-2 mb-3">
                <RiContrastDrop2Line className="flex-none" />
                <span>
                  I make software using{" "}
                  <span className="text-emerald-500">Next.js</span>
                </span>
              </p>
              <p className="flex flex-row items-center gap-2 mb-3 ">
                <RiContrastDrop2Line className="flex-none justify-start" />
                <span className="">
                  I practice{" "}
                  <span className="text-emerald-500">Web Development</span> and
                  <span className="text-emerald-500">
                    {" "}
                    making fullstack applications
                  </span>{" "}
                  in next.js
                </span>
              </p>

              <br />
              <p className="dark:text-gray-600 text-gray-300 italic">{`</span>`}</p>
            </div>
          </div>
        </div>

        <SocialsTexts />
      </div>
    </section>
  );
}
