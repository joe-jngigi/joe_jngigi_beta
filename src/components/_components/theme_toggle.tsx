"use client";

import React from "react";
import { useTheme } from "next-themes";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  console.log("theme", theme);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex flex-row bg-emerald-500/20 items-center gap-4 p-0.5 rounded-full">
      <CiLight
        size={24}
        className="transition-all rotate-90 scale-100 dark:rotate-0 dark:scale-0"
      />
      <CiDark
        size={24}
        className="transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};

export default ThemeToggle;
