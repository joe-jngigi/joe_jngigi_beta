import React from 'react'
import { LegendSeparator } from '.'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const EmailMe = () => {
  return (
    <section id='email' className="font-about caret-emerald-500 p-2 mt-10 md:mt-10 max-w-[1300px] mx-auto transition-all duration-300 ">
      <LegendSeparator title="Email me" />
      <div className=" p-3 rounded-lg mt-3 flex-col flex dark:bg-slate-900 bg-white">
        <p className='justify-start'>Reach out for collaborations, Currently looking for a new opportunity💰</p>

        <div className='mt-10'> 
          <form className='grid  lg:grid-cols-[400px_1fr] md:grid-cols-[250px_1fr] gap-3' action="submit">
            <div className='flex flex-col gap-3'>
              <Input className='border-1 border-slate-800 dark:focus:border-slate-300' required type='text' placeholder='Name: '/>
              <Input className='border-1 border-slate-800 dark:focus:border-slate-300' required type='email' placeholder='E-mail Address: '/>
            </div>

            <div className='flex flex-col gap-3'>
              <Textarea required className='h-52 resize-none border-1 dark:focus:border-slate-300 border-slate-800' placeholder='Send me a message ❤️'/>
              <div className=' flex justify-center sm:justify-end'>
                <button className='variant_btn items-end  text-sm font-display' type='submit'>Send me an Email</button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}

export default EmailMe
