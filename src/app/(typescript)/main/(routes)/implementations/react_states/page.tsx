import React from "react";

import Input from "./input";
import AppHeader from "@/components/_components/appHeader";
import { Pagination } from "@/app/(typescript)";

const States = () => {
  return (
    <div className="ml-[75px] mt-14">
      <AppHeader
        title="React States With Typescript"
        description="On this page we see how we can implement usestate in Next with Typescript"
      />
      <section className="grid flex-col-reverse grid-cols-2">
        <Input />
        <Pagination />
      </section>
    </div>
  );
};

export default States;
