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
import { TLayoutProp } from "@/types/types";

export const EmailDialog: React.FC<TLayoutProp> = ({ asChild, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>

      {/* Body */}
      <DialogContent className="bg-white mr-3 dark:bg-black border-none dark:shadow-[0_0_8px_rgb(16,184,128)] ">
        {/* Title */}
        <DialogHeader>
          <DialogTitle className="text-center">Send me a Message</DialogTitle>
          <DialogDescription>
            Reach me out for Hire or for any collaboration. Also you can ask me
            any question, I will definitely reply as soon as possible.
          </DialogDescription>
        </DialogHeader>

        {/*EMails  */}
        <EmailMe />
      </DialogContent>
    </Dialog>
  );
};
