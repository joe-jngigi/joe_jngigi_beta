import React from 'react'

import Image from 'next/image'

import { TImagesPropsExt } from '@/types/types'
import { cn } from '@/lib/utils'

const PhoneImages = ({TECHSTACKS}: {TECHSTACKS: TImagesPropsExt}) => {

  console.log(TECHSTACKS.className);
    
    

  return (
    <div title='Hover on the Techstack Icon 🤭🤭' className= {cn('group hidden xl:block absolute cursor-pointer hover:scale-[1.02] transition-all transform duration-300', TECHSTACKS.className)}>
      <span className='peer bg-white p-0.5 dark:bg-black text-xs w-[160px] h-[50px] tracking-wider rounded-xl flex flex-row items-center border-1 text-emerald-500 border-emerald-500'>
        <Image src={TECHSTACKS.link.src} height={40} width={40} alt='student_logo' className='transform hover-rotate h-full object-contain cursor-pointer  rounded-xl'/>
        <p className='px-2 group-hover:ml-3 duration-300 transition-all'>{TECHSTACKS.title}</p>
      </span>
    </div>
  )
}

export default PhoneImages
