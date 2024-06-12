import React from "react";
import { MyProjects } from "./_components/my_projects";

export const HomeMain = () => {
  return (
    <section className="h-[92vh] scroll-container overflow-y-auto overflow-hidden px-1.5 sm:px-8 pt-10">
      <MyProjects />
    </section>
  );
};
