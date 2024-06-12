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
import { MeProfile } from "../_components/me_profile";
import PagesLinks from "../_components/pages-links";
import { SocialsTexts } from "../_components/my_links";

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
          {/* Profile Info */}
          <MeProfile />

          {/* Pages Links */}
          <PagesLinks />

          {/* Socials */}

          <SocialsTexts />
        </div>
      </SheetContent>
    </Sheet>
  );
};
