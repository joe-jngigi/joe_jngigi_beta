"use client";

import React, { useState } from "react";

import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const USER_EXIST = await axios.post("/api/check-user", { userEmail });

      // console.log(USER_EXIST.data.u_mail);

      // if (!!USER_EXIST.data.u_mail) {
      //   toast.error("User already Exists");
      //   (e.target as HTMLFormElement).reset();
      //   router.refresh();
      //   router.replace("/api/auth/sign-in");
      //   return;
      // }

      console.log("cleint", userEmail, userPassword, userName);

      await axios.post("/api/sign-user", { userEmail, userPassword, userName });
      toast.success("Data Transfer Successful");

      (e.target as HTMLFormElement).reset();

      router.refresh();
      router.replace("/api/auth/sign-in");
    } catch (error) {
      console.log("Error When Transferring data", error);
      toast.error(
        "Data not transferred. Tell the developer to check his source code.. or else"
      );
    }
  };

  return (
    <div className=" w-full p-3 pt-32 flex justify-center items-center">
      <div className=" h-96 shadow-xl border-1 dark:border-none bg text-black bg-opacity-50 backdrop-blur-md  rounded-2xl p-2 w-full md:max-w-[700px] flex items-center justify-center flex-col">
        <h1 className="text-xl font-bold">
          This Page is under Renovation, Will be Back Soon
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
