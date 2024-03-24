"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import { PostProps } from "@/data_manipulation/types/types";
import { cn } from "@/lib/utils";

const AppHeader: FC<PostProps> = ({ title, description, className }) => {
  const router = useRouter();
  return (
    <div className="flex-between flex-row py-2">
      <div>
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <p className="pt-1">{description}</p>
      </div>

      <button
        onClick={() => router.back()}
        className={cn(
          "variant_side_btn text-xs p-2 flex items-center justify-center",
          className
        )}
      >
        Back
        <ArrowLeft size={15} />
      </button>
    </div>
  );
};

export default AppHeader;
