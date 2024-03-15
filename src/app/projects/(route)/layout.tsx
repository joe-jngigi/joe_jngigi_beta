import React from "react";
import { TechStack } from "@/app/projects/private-components/tech-stack";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[73vh] sm:h-[77vh]">
      <div className="p-2 dark:bg-black w-full">
        <TechStack />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
