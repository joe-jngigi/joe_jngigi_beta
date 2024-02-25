'use client'
import React, { useState } from 'react'

import { LucideX } from 'lucide-react'

const HeaderCard = () => {

    const [closeCard, setcloseCard] = useState(false)

    const handleClose = () => {
        setcloseCard((prev) => !prev)
    }

  return (
    <>
      {!closeCard && (
        <div className='mt-2 text-sm transform hover:scale-[1.01] ease-in-out delay-500 select-none transition-all duration-700'>
          <div title='My bro Brian said that the box looks good' className='w-80  p-3 border-1 border-slate-400 dark:border-slate-800  rounded-2xl  relative z-0'>
            <span onClick={handleClose} className='absolute right-2 top-2 cursor-pointer'>
              <LucideX/>
            </span>
            <p className='p-2'>This is a client component, which includes the <b>use client</b> directive, meaning it it 
              has not been preloaded in the server component. It is a rule that the client components are called in the server component.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default HeaderCard


