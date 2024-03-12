import { ReactNode } from "react";

import { BackBtn, Panel } from ".";

const ShieldedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="lg:pt-24 bg-white dark:bg-black pt-16 h-screen  overflow-cli grid sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] lg:grid-cols-[350px_1fr] pb-10">
      <Panel className="hidden sm:block" />

      <div className="overflow-y-auto px-1">{children}</div>

      <>
        <BackBtn className_btn_back="hidden"/>
      </>
    </main>
  );
};

export default ShieldedLayout;
