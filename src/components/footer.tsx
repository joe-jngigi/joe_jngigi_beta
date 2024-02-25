import { GithubIcon } from 'lucide-react'
import React from 'react'
import { FaGithubAlt } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='glassmorphism sm:max-w-[1800px] fixed_position z-40 bottom-0 rounded-sm text-emerald-500 mt-1 mx-auto py-1'>
      <span className=''>
        <a className='flex flex-row justify-end items-center gap-1 pr-2' href="https://github.com/joe-jngigi/next_learn_dev" target='_blank'>
          Source Code
          <FaGithubAlt size={20}/>
        </a>
      </span>
    </div>
  )
}

export default Footer
