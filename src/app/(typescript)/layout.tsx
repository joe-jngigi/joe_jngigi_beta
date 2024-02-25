import { TLayoutProp } from '@/types/types'

import React, { FC } from 'react'
import BackButton from './components.ts/ts.nav'

const Layout: FC<TLayoutProp> = ({children}) => {
    
  return (
    <div className='h-screen flex flex-row sm:max-w-[1800px] mx-auto  sm:px-3 md:px-0'>
      <><BackButton/></>
      <>
        {children}
      </>
    </div>
  )
}

export default Layout
