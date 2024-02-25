import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {BsArrowRight} from 'react-icons/bs'
import {SlOptions} from 'react-icons/sl'

import { app_modules } from '@/utils/ui_variables'

const Appmodules = () => {
  return (
    <div className='grid gap-1 md:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 '>
       {
            app_modules.map((modules) =>(
                <div key={modules.app_title} className = 'relative h-48 flex flex-col dark:bg-black border-1 dark:border-slate-800 bg-white shadow-md border-white rounded-lg p-3 hover:scale-[1.01] hover:transition-transform'>
                    <div className='relative '>
                        <span className='cursor-pointer absolute top-0 right-1 rounded-full hover:bg-gray-200 dark:hover:bg-main-dark-bg hover:transition-all duration-300 p-2'>
                        <SlOptions/>
                        </span>
                    </div>
                    <div className=' mt-10 flex flex-col justify-center items-center'>
                        <span  title='I know you really wanna see this pic in full, but naaaah, not now meeehn, its just a random' className='rounded-full dark:bg-slate-900'>
                            <Image  src={modules.avatar} height={30} width={30} alt='student_logo' className='h-full object-fill p-1 bg-white rounded-full'/>
                        </span>
                        <h2 className='mt-1 text-lg font-semibold'>{modules.app_title}</h2>
                    </div>
                    <div className=' absolute bottom-2 -translate-x-1/2 left-1/2 cursor-pointer mt-2 flex justify-center'>
                        <Link href={modules.link} className = ' variant_btn flex items-center px-5 py-1'>
                        View<span className='ml-2'><BsArrowRight/></span>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Appmodules
