import React from 'react'

import { FaGithub, FaXTwitter } from 'react-icons/fa6'

import svg from '@/public/light-phone.svg'
import svg2 from '@/public/dark-phone.svg'

import Image from 'next/image'

import {  ExternalLink, LinkIcon, Linkedin } from 'lucide-react'

import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'
import PhoneImages from './sub-components/phone-images'
import { tech_stack_icons } from '@/utils/ui_variables'
import { TImagesPropsExt } from '@/types/types'
import { AestheticRog } from '.'

const ProfileIntro = () => {
  
  const tech_stack: TImagesPropsExt[] = tech_stack_icons
  
  return(
    <section className='grid lg:grid-cols-2 px- pt-20 '>

      <div className="flex flex-col p-2 xl:p-5 items-center justify-between md:min-h-[60vh] min-h-[57vh]">
        <h2 className="  head_text text-center sm:pt-10">
          <span className='animate_gradient text '>
            Hello, Welcomè to my TechSpace
          </span>
          <span className='hover:animate-bounce transform transition-all duration-100 '>
           😇
          </span>
        </h2>

        <div className=' w-full h-full relative grid sm:grid-cols-2 gap-3 md:gap-5'>

          <div className='dark:bg-slate-900 bg-white shadow-xl rounded-lg text-white p-3 mt-10 sm:col-span-2'>
            <AestheticRog/>
            <div className=" desc tracking-wider mt-3 sm:font-about ">
              <p className='pb-2 text-base'>&quot; ...A weaver of dreams at the loom of the mind &quot;</p> <br/>
              I&apos;am, a developer passionate about crafting intuitive software. Let&apos;s Exlpore the world of Tech together!
            </div>
          </div>

          <div className=' w-ful p-3 dark:bg-slate-900 bg-white shadow-xl rounded-lg'>
            <div className='flex items-center'>
              <AestheticRog/>
              <p className=' text-lg logo_text text-center  w-full ' >Let&apos;s connect</p>
            </div>
            
            <div className='mt-3 font-mono border-1 dark:border-slate-800 rounded-lg py-3'>
              <a title='My github link... Yey. This is where I store my code... it is private I am not sure why I like it like that' 
                className='dark:hover:bg-main-dark-bg  p-1 rounded-2xl duration-500 transition-all flex flex-row items-center ml-1' 
                href= 'https://github.com/joe-jngigi' target='_blank'>
                <FaGithub size={17} />

                <span className='ml-5 text-emerald-500'>GitHub (joe-jngigi)</span>
              </a>

              <a title='Twitter handle. I know it is X but for me it is twitter' 
                className=' dark:hover:bg-main-dark-bg p-1 rounded-2xl duration-500 transition-all flex flex-row items-center ml-1' 
                href= 'https://twitter.com/joe_jngigi' target='_blank'>
                <FaXTwitter size={17} className = "text-red-500" />
                <span className='ml-5 text-emerald-500'>X (joe_jngigi)</span>
              </a>

              <a title='Well, this linkedin' 
                className=' dark:hover:bg-main-dark-bg p-1 rounded-2xl duration-500 transition-all flex flex-row items-center ml-1' 
                href= 'https://www.linkedin.com/in/joejngigi/' target='_blank'>
                <Linkedin size={17}/>
                <span className='ml-5 text-emerald-500'>LinkedIn (joejngigi)</span>
              </a>
            </div>
          </div>

          <div className='border-1 dark:border-slate-800 border-slate-300 shadow-lg rounded-lg p-3'>
            <div className='flex flex-row gap-2 mb-3'>
                <span className='p-1.5  bg-red-500 rounded-full cursor-pointer'></span>
                <span className='p-1.5  bg-orange-500 rounded-full cursor-pointer'></span>
                <span className='p-1.5  bg-green-500 rounded-full cursor-pointer'></span>
            </div>
            <div className='grid grid-cols-2 md:gap-5 gap-2 font-mono text-emerald-500 text-base tracking-wider text-center'>
              <Link className='variant_btn  flex flex-row items-center justify-center' href={'#'}>View CV <ExternalLink size={15} className='ml-3'/></Link>
              <Link className='variant_btn flex flex-row items-center justify-center' href={'#email'}><LinkIcon size={15} className='ml-3'/></Link>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="space-y-2 mt-3 p-3">
                <Skeleton className="h-4 w-[250px] dark:bg-slate-900 bg-slate-300" />
                <Skeleton className="h-4 w-[200px] dark:bg-slate-900 bg-slate-300" />
              </div>
            </div>

          </div>
          
        </div> 
      </div>

      <div className='hidden lg:block relative'>
        <Image
          className='absolute xl:left-0 top-10 rounded-xl hidden dark:block transition-all duration-300 transform hover:scale-[1.01]'
          alt='business'
          src={svg2}
          style={{ width: '460px', height: '' }}
        />

        <Image
          className='absolute xl:left-0 top-10  rounded-xl dark:hidden transition-all duration-300 transform hover:scale-[1.01]'
          alt='business'
          src={svg}
          style={{ width: '460px', height: '' }}
        />

        {
          tech_stack.map((tech: TImagesPropsExt) =>(
            <PhoneImages  key={tech.id} TECHSTACKS = {tech}/>
          ))
        }
      </div>
    </section>
  )
}

export default ProfileIntro
