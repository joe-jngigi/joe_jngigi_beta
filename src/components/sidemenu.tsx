import PagesLinks from "@/components/_components/pages-links";
import { SocialsTexts } from "@/components/_components/my_links";
import { MeProfile } from "@/components/_components/me_profile";

export const SideMenu = () => {
  return (
    <div className="px-4 py-2 h-dvh border-r dark:border-none hidden md:flex flex-col bg-white dark:bg-main-dark-bg dark:text-white text-black relative">
      {/* Profile Info */}
      <MeProfile />

      {/* Pages Links */}
      <PagesLinks />

      {/* Socials */}

      <SocialsTexts />
    </div>
  );
};
