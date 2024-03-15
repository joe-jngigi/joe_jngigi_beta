"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { AlignRightIcon, FileJson2Icon, HourglassIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BTNPROPS = {
  className_btn_menu?: string;
  className_btn_back?: string;
  className_exp?: string;
};

const BackBtn: React.FC<BTNPROPS> = ({
  className_btn_menu,
  className_btn_back,
  className_exp,
}) => {
  const [closeMenu, setCloseMenu] = React.useState(false);
  const router = useRouter();

  console.log("closeMenu: ", closeMenu);

  return (
    <div>
      <button
        onClick={() => setCloseMenu((prev) => !prev)}
        className={cn(
          "block sm:hidden h-12 w-12 border-1 border-emerald-500/20 bg-emerald-500/20 shadow-lg drop-shadow-lg rounded-full fixed bottom-10 right-2  flex-c-center",
          className_btn_menu
        )}
      >
        {closeMenu ? <X /> : <AlignRightIcon />}
      </button>

      {closeMenu && (
        <div
          className={
            closeMenu &&
            cn(
              "fixed min-h-[100px]  bottom-24 right-3  sm:hidden flex gap-2 flex-col b ",
              className_exp
            )
          }
        >
          <Link
            onClick={() => setCloseMenu((prev) => !prev)}
            href="/projects"
            className="flex-c-center flex-row  gap-2"
          >
            Next.JS & React.JS
            <span className="h-10 w-10 border-2 border-emerald-500 bg-emerald-500 rounded-full flex-c-center">
              <FileJson2Icon />
            </span>
          </Link>

          <Link
            onClick={() => setCloseMenu((prev) => !prev)}
            href="/projects/backend"
            className="flex items-center justify-between flex-row  "
          >
            Future Projects
            <span className="h-10 select-none w-10 border-2 border-emerald-500 bg-emerald-500 rounded-full flex-c-center ">
              <HourglassIcon />
            </span>
          </Link>
        </div>
      )}

      <button
        onClick={() => router.back()}
        className={cn(
          "absolute bottom-20 left-1/2 -translate-x-1/2 variant_btn sm:hidden",
          className_btn_back
        )}
      >
        Back
      </button>
    </div>
  );
};

export default BackBtn;
