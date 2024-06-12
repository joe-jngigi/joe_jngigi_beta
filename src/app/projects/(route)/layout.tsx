import React from "react";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[73vh] sm:h-[77vh]">
     
      {children}
    </div>
  );
};

export default MainLayout;
