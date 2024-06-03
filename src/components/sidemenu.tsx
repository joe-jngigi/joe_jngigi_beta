import PagesLinks from "@/components/_components/pages-links";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import kalilinux from "@/public/kali.jpg";
import defaultsvg from "@/public/default.svg";
import { SocialsTexts } from "./_components/my_links";

export const SideMenu = () => {
  return (
    <div className="px-4 py-2 h-dvh hidden md:flex flex-col bg-white dark:bg-main-dark-bg dark:text-white text-black relative">
      {/* About me */}
      <div className="py-10 flex items-center gap-2 flex-col ">
        <Avatar className="h-36 w-36 border border-gray-200 ">
          <AvatarImage src="../public/kali.jpg" />
          <AvatarFallback className="bg-transparent dark:text-white">
            <Image
              src={kalilinux}
              width={144}
              height={144}
              alt="logo"
              className="rounded-full h-full w-full object-cover border transition-all duration-500 transform hover:scale-105"
            />
          </AvatarFallback>
        </Avatar>

        <h2 className="flex-none text-xl font-semibold text-gray-500 ">
          Joseph Ngigi
        </h2>
        <p className="text-xs italic text-gray-400">
          Next.js || Typescript || Web-3
        </p>
      </div>

      {/* Pages Links */}
      <PagesLinks />

      {/* Socials */}
      <div>
        <SocialsTexts />
      </div>
    </div>
  );
};
