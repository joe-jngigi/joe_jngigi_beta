import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-red-500 t-app">{children}</div>;
};

export default Layout;
