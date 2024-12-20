import { TLayoutProp } from "@/data_manipulation/types/types";
import React, { FC } from "react";

const EventsParent: FC<TLayoutProp> = ({ children }) => {
  return <div className=" p-2 rounded-2xl">{children}</div>;
};

export default EventsParent;

// md:grid-cols-[400px_1fr]
