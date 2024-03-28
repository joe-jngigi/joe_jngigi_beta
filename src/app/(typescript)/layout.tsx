
import React from 'react'
import BackButton from './components.ts/ts.nav'

const Layout = ({children}:{children: React.ReactNode}) => {
    
  return (
    <div className="h-screen flex flex-row sm:max-w-[2000px] mx-auto  sm:px-3 md:px-0">
      <>
        <BackButton />
      </>
      <>{children}</>
    </div>
  );
}

export default Layout
