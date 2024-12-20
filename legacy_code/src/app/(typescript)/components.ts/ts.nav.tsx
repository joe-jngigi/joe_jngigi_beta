"use client";
import React, { FC } from "react";

import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  GraduationCap,
  Home,
  LayoutGridIcon,
  Link2Icon,
  ListChecksIcon,
  PlusCircle,
  Settings2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { TPostPropsExt } from "@/data_manipulation/types/types";

const BackButton = () => {
  const cardcss =
    "p-3 w-52 absolute left-6 -top-12 dark:bg-black dark:text-white dark:border-slate-800";
  return (
    <div className="pt-20 sm:pt-16 glassmorphism fixed left-0 top-0 sm:left-auto h-full z-40 rounded-sm p-2 pb-10 flex flex-col flex-wrap gap-5 items-center">
      <div className="flex flex-wrap flex-col gap-2 sm:mt-10">
        <Link href={"/main"} className="variant_side_btn ">
          <Home />
        </Link>

        <Separator className="mb-3 dark:bg-slate-800 bg-slate-400" />

        <HoverCard>
          <HoverCardTrigger
            href="/main/documentation"
            className="variant_side_btn"
          >
            <GraduationCap />
          </HoverCardTrigger>
          <HoverCardContent className="p-3 w-52 absolute left-6 -top-12 dark:bg-black dark:text-white dark:border-slate-800">
            <HoverInfo
              link="/main/documentation"
              body="On this section, I document all I learn and understand. For now this include a subject on my NextJS docoumentation"
              title="Documentation"
            />
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger
            href="/main/implementations"
            className="variant_side_btn"
          >
            <LayoutGridIcon />
          </HoverCardTrigger>
          <HoverCardContent className={cardcss}>
            <HoverInfo
              link="/main/implementations"
              title="Implementations"
              body="On this section I showcase implementations of the NextJS and ReactJS concepts that I learn."
            />
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger href="/main/settings" className="variant_side_btn">
            <Settings2 />
          </HoverCardTrigger>
          <HoverCardContent className={cardcss}>
            <HoverInfo
              link="/main/settings"
              title="Settings"
              body="On this card, I will be making the a global settings page"
            />
          </HoverCardContent>
        </HoverCard>

        <Separator className="mt-3 dark:bg-slate-800 bg-slate-400" />

        <HoverCard>
          <HoverCardTrigger
            href="/main/settings"
            className="variant_side_btn text-emerald-500 border-2 border-emerald-500"
          >
            <PlusCircle />
          </HoverCardTrigger>
          <HoverCardContent className={cardcss}>
            <HoverInfo
              link="/main/settings"
              title="Custom Pages"
              body="On this card, I will showcase how one can create a Custom page"
            />
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default BackButton;

const HoverInfo: FC<TPostPropsExt> = ({ title, body, link }) => {
  return (
    <>
      <span className="flex flex-row items-center justify-between">
        <h2 className="font-semibold pb-1">{title}</h2>
        <Link className="text-blue-600" href={link}>
          <Link2Icon size={20} />
        </Link>
      </span>
      <Separator className="dark:bg-slate-800 bg-slate-300" />
      <p className="text-xs pt-1">{body}</p>
    </>
  );
};
