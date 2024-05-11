"use client";

import ResponsiveNav from "@/components/_components/responsive-nav";
import PagesLinks from "@/components/_components/pages-links";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname()
  
  return (
    <nav
      className={`${ path == "/"? "left-1/2 transform -translate-x-1/2 w-full xl:w-[1200px]" : "w-full"} duration-700 transition-all ease-in-out z-50 font-poppins text-sm p-4 fixed top-0 mx-auto backdrop-filter backdrop-blur-lg bg-opacity-50`}
    >
      <div className="flex-between h-full rounded-full text-black dark:text-white">
        {/* logo */}
        <h1
          title="This is just text, I don't want to make a logo"
          className="logo_text text-2xl select-none"
        >
          Zephyr<span className="text-emerald-500 font-extrabold">ONE</span>
        </h1>

        <>
          <PagesLinks />
        </>

        {/* Menu */}
        <>
          <ResponsiveNav />
        </>
      </div>
    </nav>
  );
};

export default Navbar;
