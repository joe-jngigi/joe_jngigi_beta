import { CgMenuRight } from "react-icons/cg";
import { SiGoogleassistant } from "react-icons/si";

import { MdOutlineDisplaySettings } from "react-icons/md";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatDialogue from "@/components/ui_children/chat_dialogue";
import { SidePanel } from "@/components/ui_children/side_panel";
import { MenuDropdown } from "@/components/ui_children/menu_dropdown";

export const ResponsiveNav = () => {
  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  return (
    <div className="flex flex-row gap-5 md:gap-1.5 items-center">
      {/* Desktop Navigation */}
      <ChatDialogue asChild>
        <div className="p-2 flex-c-center h-10 w-10 sm:w-auto sm:h-auto items-center bg-emerald-500/20 text-black dark:text-emerald-500 rounded-full cursor-pointer">
          <SiGoogleassistant size={20} />
          <span className="sr-only">Assistant</span>
        </div>
      </ChatDialogue>

      {/* Sidemenu */}
      <SidePanel asChild>
        <button className="pr-3 md:hidden">
          <CgMenuRight size={20} />
        </button>
      </SidePanel>

      {/* Avatar */}
      <div className="md:flex hidden cursor-pointer">
        <MenuDropdown asChild>
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback className="p-2 bg-transparent dark:text-white text-black">
              <MdOutlineDisplaySettings size={30} />
            </AvatarFallback>
          </Avatar>
        </MenuDropdown>
      </div>
    </div>
  );
};
