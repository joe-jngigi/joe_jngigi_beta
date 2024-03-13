"use client";
import React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { EmailMe } from "../email_me";
import { TLayoutProp } from "@/types/types";

export const EmailDialog: React.FC<TLayoutProp> = ({ asChild, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent className="bg-white dark:bg-main-dark-bg border-none w-auto ">
        <EmailMe />
      </DialogContent>
    </Dialog>
  );
};
