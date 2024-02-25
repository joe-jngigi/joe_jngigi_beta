import { TLayoutProp } from '@/types/types'
import React, { FC } from 'react'

const Layout: FC<TLayoutProp> = ({children}) => {
  return (
    <div className='bg-red-500 t-app'>
      {children}
    </div>
  )
}

export default Layout
