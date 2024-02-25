'use client'
import React from 'react'

import { tech_stack_icons } from '@/utils/ui_variables'
import Image from 'next/image'

const TechStack = () => {
  return (
    <div className='relative lg:hidden w-full md:w-[800px] md:left-1/2 md:-translate-x-1/2 min-h-[1vh] rounded-xl mt-5'>
      {/* <div className='absolute  bottom-0 p-2 w-full'> */}
        <div className='glassmorphism bg w-full md:max-w-[1200px] mx-auto p-3 flex flex-col md:flex-row items-center gap-5 rounded-xl'>
          {/* <h3 className=' border-r-2 dark:border-gray-300 border-gray-950 text-lg logo_text pr-5'>Tech Stack</h3> */}
          <div className='flex flex-wrap  justify-center gap-5'>
            {
              tech_stack_icons.slice(0, 10).map((icon) =>(
                <div key={icon.id} className='bg-white p-0.5 dark:bg-black text-xs tracking-wider rounded-xl flex-c-center border-1 text-emerald-500 border-emerald-500 '>
                  <Image src={icon.link} height={40} width={40} alt='student_logo' className='h-full object-contain cursor-pointer  rounded-xl'/>
                  <p className='px-2'>{icon.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      {/* </div> */}
      
    </div>
  )
}

export default TechStack
