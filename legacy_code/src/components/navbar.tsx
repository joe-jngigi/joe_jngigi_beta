"use client";

import { ResponsiveNav } from "@/components/_components/responsive-nav";

 export const Navbar = () => {
  return (
    <nav className="flex w-full px-3 md:px-6 py-2 flex-row items-center justify-between bg-[rgb(209,236,240)] dark:bg-black dark:text-white text-black">
      <p className="text-xs">Home</p>
      <ResponsiveNav />
    </nav>
  );
};
