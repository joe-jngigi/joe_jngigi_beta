import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TLayoutProp } from "@/data_manipulation/types/types";
import ThemeToggle from "../_components/theme_toggle";

export const MenuDropdown: React.FC<TLayoutProp> = ({ children, asChild }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="hidden md:block mt-3 rounded-lg w-80 min-h-52 dark:bg-primary-dark-bg dark:border-none dark:text-white text-black shadow-sm shadow-emerald-500/20"
        align="end"
        alignOffset={-8}
      >
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator className="mb-3" />
        <div className="flex justify-between items-center drop-shadow-md hover:dark:bg-main-dark-bg hover:bg-slate-100 rounded-sm px-2 py-1.5 transition-all duration-300">
          Theme <ThemeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
