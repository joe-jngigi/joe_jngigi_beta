import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SignIn from "@/components/auth/sign-in";

const Spage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/main");
  }

  return (
    <main className="pt-20 min-h-screen bg-white dark:bg-black">
      <section className=" w-full ">
        <SignIn />
      </section>
    </main>
  );
};

export default Spage;
