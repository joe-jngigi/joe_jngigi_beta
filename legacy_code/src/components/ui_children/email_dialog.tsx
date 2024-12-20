"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { EmailMe } from "../email_me";
import { TLayoutProp } from "@/data_manipulation/types/types";

export const EmailDialog: React.FC<TLayoutProp> = ({ asChild, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>

      {/* Body */}
      <DialogContent className="bg-white mr-3 dark:bg-primary-dark-bg text-emerald-500 border-none dark:shadow-[0_0_2px_rgb(16,184,128)] w-[370px] sm:w-auto rounded-lg">
        {/* Title */}
        <DialogHeader>
          <DialogTitle className="text-center">Let&apos;s Talk</DialogTitle>
          <DialogDescription className="text-xs md:text-sm rounded-lg pt-3">
            Hello 👋! Reach me out for Hire or for any collaboration. Also you
            can ask me any question, I will definitely reply as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        {/*EMails  */}
        <EmailMe />
      </DialogContent>
    </Dialog>
  );
};
