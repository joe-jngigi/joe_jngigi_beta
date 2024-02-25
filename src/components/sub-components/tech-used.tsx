import React from 'react'
import { LegendSeparator } from '..'

const TechUsed = () => {
  return (

    <div className="p-2 mt-1 max-w-[1300px] mx-auto transition-all duration-300">
        <LegendSeparator title='Implementation Tech Stack'/>
        <div className="p-3 rounded-lg mt-3 flex-col flex dark:bg-slate-900 bg-white">
            <p className=" flex flex-row gap-1 justify-center text-xs">
              <span className='text-emerald-500'><a href="https://nextjs.org/" target='_blank'>Next.JS</a></span>||
                <span className='text-emerald-500'><a href="https://vercel.com/dashboard" target='_blank'>Vercel Servers</a></span>||
                <span className='text-emerald-500'><a href="https://www.mongodb.com/" target='_blank'>Mongo DB</a></span>||
                <span className='text-emerald-500'><a href="https://next-auth.js.org/" target='_blank'>Next-Auth</a></span>||
                <span className='text-emerald-500'><a href="https://ui.shadcn.com/" target='_blank'>ShadCN</a></span>||
                <span className='text-emerald-500'><a href="https://tailwindcss.com/" target='_blank'>Tailwind</a></span>
            </p>
        </div>
      </div>

  )
}

export default TechUsed
