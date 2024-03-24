"use client";
import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { TLayoutProp } from "@/data_manipulation/types/types";

export const ChatDialogue: React.FC<TLayoutProp> = ({ children, asChild }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild={asChild}>{children}</DrawerTrigger>
      <DrawerContent className="bg-transparent border-none h-[570px] sm:h-[650px] p-2 flex-c-center ">
        <div className="md:w-[600px] w-full h-full rounded-lg dark:bg-primary-dark-bg text-black bg-white dark:text-white  mt-3">
          <DrawerHeader>
            <DrawerTitle>Assitant</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <div>children</div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline" asChild>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatDialogue;
