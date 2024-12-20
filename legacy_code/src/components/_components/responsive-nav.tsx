import { CgMenuRight } from "react-icons/cg";
import { SiGoogleassistant } from "react-icons/si";
import { RiMessage3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

import ChatDialogue from "@/components/ui_children/chat_dialogue";
import { SidePanel } from "@/components/ui_children/side_panel";
import { MenuDropdown } from "@/components/ui_children/menu_dropdown";
import { EmailDialog } from "@/components/ui_children/email_dialog";

export const ResponsiveNav = () => {
  // Now I Can come destructure the theme value, and now this component will always know the current state of the theme value
  return (
    <div className="flex flex-row gap-3 md:gap-1.5 items-center">
      <EmailDialog asChild>
        <button className="p-2 flex-c-center h-10 w-10 sm:w-auto sm:h-auto items-center bg-emerald-500/20 text-black dark:text-emerald-500 rounded-full cursor-pointer">
          <span className="sr-only">DM Me</span>
          <RiMessage3Line size={20} className="shrink-0 flex-none" />
        </button>
      </EmailDialog>

      {/* Desktop Navigation */}
      <ChatDialogue asChild>
        <button className="p-2 flex-c-center h-10 w-10 sm:w-auto sm:h-auto items-center bg-emerald-500/20 text-black dark:text-emerald-500 rounded-full cursor-pointer">
          <SiGoogleassistant size={20} className="shrink-0 flex-none" />
          <span className="sr-only">Assistant</span>
        </button>
      </ChatDialogue>

      {/* Sidemenu */}
      <SidePanel asChild>
        <button className="pr-3 md:hidden">
          <CgMenuRight size={20} className="shrink-0 flex-none" />
        </button>
      </SidePanel>

      {/* Avatar */}
      <div className="md:flex hidden cursor-pointer">
        <MenuDropdown asChild>
          <button className="p-2 flex-c-center h-10 w-10 sm:w-auto sm:h-auto items-center bg-emerald-500/20 text-black dark:text-emerald-500 rounded-full cursor-pointer">
            <IoSettingsOutline size={20} className="shrink-0 flex-none" />
          </button>
        </MenuDropdown>
      </div>
    </div>
  );
};
