import React from "react";
import Link from "next/link";
import AppHeader from "@/components/_components/appHeader";

const ParentComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <AppHeader
        title="Parent Component"
        description="In this page we learn how we can implement a parent component to have children types"
      />
      {/*  */}
      <div className="dark:bg-slate-950 p-2 rounded-2xl mt-10">
        <p>
          In this parent component we have the children, which are other
          components. In the structure of this component, we have the parent
          component being a wrapper in the{" "}
          <span className="dark:bg-slate-900 p-1 rounded-xl">page.tsx</span>,
          wrapping other children components. Remember, the children act as a
          children prop, just like the layout component
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ParentComponent;
