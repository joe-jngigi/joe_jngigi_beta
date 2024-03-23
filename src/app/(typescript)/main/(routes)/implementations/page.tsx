import React from "react";

import { Appmodule } from "@/app/(typescript)";
import AppHeader from "@/components/_components/appHeader";

const Page = () => {
  return (
    <main className="t-app px-1">
      <AppHeader title="Next.Js Implementations" />
      <>
        <Appmodule />
      </>
    </main>
  );
};

export default Page;
