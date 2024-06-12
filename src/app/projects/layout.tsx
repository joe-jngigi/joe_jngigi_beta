import { ReactNode } from "react";

import { BackBtn, Panel } from ".";

const ShieldedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" bg-white mx-auto dark:bg-black text-black dark:text-white overflow-y-auto h-[93dvh]">
      about me
      <p className="mt-10">
        My namè Is Joseph Ngigi
      </p>
    </main>
  );
};

export default ShieldedLayout;
