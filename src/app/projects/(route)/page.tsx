import React from "react";
import { MyProjects } from "@/app/projects/private-components/my_projects";

const Page = () => {
  return (
    <section className="p-2 overflow-y-auto h-full">
      {/* TechStack */}
      <div className="grid_my pt-8">
        <MyProjects />
      </div>
    </section>
  );
};

export default Page;
