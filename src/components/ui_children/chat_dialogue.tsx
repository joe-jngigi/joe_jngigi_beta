"use client";
import React from "react";

import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { TLayoutProp } from "@/data_manipulation/types/types";
import { ChatBox } from "../chat_box";

export const ChatDialogue: React.FC<TLayoutProp> = ({ children, asChild }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild={asChild}>{children}</DrawerTrigger>
      <DrawerContent className="border-none outline-none h-[700px] sm:h-[800px] p-1 flex-c-center bg-white/20 dark:bg-transparent">
        <div className="md:w-[600px] w-full h-full rounded-lg dark:bg-primary-dark-bg text-black bg-white dark:text-white  mt-3 select-text">
          {/* Header */}
          <DrawerHeader>
            <DrawerTitle>Assitant</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>

          {/* Body */}
          <div className="p-1 pb-0 h-[480px] sm:h-[580px]">
            <ChatBox />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatDialogue;
