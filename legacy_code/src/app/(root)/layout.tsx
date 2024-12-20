import { HomeAside } from "@/components";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-2 grid xl:grid-cols-[1fr_350px] overflow-y-auto font-poppins bg-gray-50 dark:bg-black  text-black dark:text-white duration-300 transition-all">
      {children}
      <HomeAside className="sticky top-0 self-start xl:flex flex-col hidden" />
    </main>
  );
};

export default MainLayout;
