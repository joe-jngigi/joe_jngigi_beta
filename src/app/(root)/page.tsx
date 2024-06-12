// import Image from 'next/image'
import { HomeAside, HomeMain } from "@/components/index";
import { RiContrastDrop2Line } from "react-icons/ri";

export default function Home() {
  return (
    <main className="p-2 grid xl:grid-cols-[1fr_350px] overflow-y-auto font-poppins bg-gray-50 dark:bg-black  text-black dark:text-white duration-300 transition-all">
      <HomeMain />
      <HomeAside className="sticky top-0 self-start xl:flex flex-col hidden" />
    </main>
  );
}