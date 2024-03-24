"use client";
import React, { FC, useState } from "react";
import { userType } from "@/data_manipulation/types/types";

import { useRouter } from "next/navigation";

const Input = () => {
  const [username, setUsername] = useState("");
  const [User, setUser] = useState<userType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleLogin = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    // On this, I need set user as username, and then I will give a sessionid
    setUser({
      name: username,
      sessionId: Math.random(),
    });
    console.log(User);
  };

  return (
    <div className="dark:bg-slate-950 p-2 rounded-2xl">
      <div className="flex items-center justify-center">
        {User ? (
          <ValuesDisplay sessionId={User?.sessionId} username={User?.name} />
        ) : (
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5 items-center bg-white dark:bg-secondary-dark-bg p-3 md:w-2/5 rounded-xl"
          >
            <input
              required={true}
              onChange={handleChange}
              className="w-full accent-emerald-500 dark:bg-[rgb(30,30,30)] bg-slate-200 border-none outline-emerald-500 focus:outline-none p-2 rounded-full"
              type="text"
              name="name"
              id="name"
              placeholder="Username"
            />
            <button
              type="submit"
              className="rounded-full sm:px-10 px-4 py-1 border-2"
            >
              Login
            </button>
            <p>Welcome, {username}</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Input;

interface IValuesDisplay {
  username: string;
  sessionId: number;
}
const ValuesDisplay: FC<IValuesDisplay> = ({ username, sessionId }) => {
  const router = useRouter();

  return (
    <div>
      User<p>{username}</p>
      <p>{sessionId}</p> logged in
      <button onClick={() => router.refresh()}>Refresh</button>
    </div>
  );
};
