"use client";

import React, { useContext, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { SiGoogleassistant } from "react-icons/si";

import { SideMenuContext } from "@/context/sideBarContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaUserFriends } from "react-icons/fa";

const ResponsiveNav = () => {
  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  const { toggleSideMenu, settoggleSideMenu } = useContext(SideMenuContext);
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center cursor-pointer gap-6 dark:bg-primary-dark-bg border lg:border-none dark:border-none p-1 rounded-full dark:shadow-emerald-500 dark:shadow-sm">
        {/* Desktop Navigation */}
        <div className="p-2 flex-c-center h-10 w-10 sm:w-auto sm:h-auto items-center bg-emerald-500/20 text-emerald-500 rounded-full cursor-pointer">
          <SiGoogleassistant size={30} className="" />
          <span className="hidden sm:block ml-1">Assistant</span>
        </div>
        {/* Sidemenu */}
        <button
          onClick={() => {
            settoggleSideMenu((prev) => !prev);

            // document.body.style.overflow = 'unset'
          }}
          className="pr-3 sm:hidden"
        >
          <CgMenuRight size={20} />
        </button>

        {/* Avatar */}
        <div className="sm:flex hidden text-black">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>
              <FaUserFriends size={30} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNav;
