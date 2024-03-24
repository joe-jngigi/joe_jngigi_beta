"use client";

import React from "react";
import { TLayoutProp } from "@/data_manipulation/types/types";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "../_components/theme_toggle";

export const SidePanel: React.FC<TLayoutProp> = ({ children, asChild }) => {
  return (
    <Sheet>
      <SheetTrigger asChild={asChild}>{children}</SheetTrigger>
      <SheetContent className="md:hidden block dark:bg-black bg-white dark:text-white text-black">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <div>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};
