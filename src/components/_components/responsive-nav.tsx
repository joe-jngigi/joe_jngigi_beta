"use client";

import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { SiGoogleassistant } from "react-icons/si";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUserFriends } from "react-icons/fa";
import ChatDialogue from "../ui_children/chat_dialogue";
import { SidePanel } from "../ui_children/side_panel";
import { MenuDropdown } from "../ui_children/menu_dropdown";

const ResponsiveNav = () => {
  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  return (
    <>
      <div className="flex justify-between items-center gap-6 dark:bg-primary-dark-bg border p-1 rounded-full dark:shadow-emerald-500 dark:shadow-sm shadow-lg drop-shadow-lg">
        {/* Desktop Navigation */}
        <ChatDialogue asChild>
          <div className="p-2 flex-c-center h-10 w-10 sm:w-auto sm:h-auto items-center bg-emerald-500/20 text-black dark:text-emerald-500 rounded-full cursor-pointer">
            <SiGoogleassistant size={30} />
            <span className="hidden sm:block ml-1">Assistant</span>
          </div>
        </ChatDialogue>

        {/* Sidemenu */}
        <SidePanel asChild>
          <button className="pr-3 md:hidden">
            <CgMenuRight size={20} />
          </button>
        </SidePanel>

        {/* Avatar */}
        <div className="md:flex hidden  cursor-pointer">
          <MenuDropdown asChild>
            <Avatar>
              <AvatarImage src="#" />
              <AvatarFallback className="p-2 bg-transparent  dark:text-white">
                <FaUserFriends size={30} />
              </AvatarFallback>
            </Avatar>
          </MenuDropdown>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNav;
