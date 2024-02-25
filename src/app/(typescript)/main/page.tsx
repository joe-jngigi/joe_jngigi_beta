import React from 'react'

import { FormEvent, EventsParent, HeaderCard } from '@/app/(typescript)/index'

import AppHeader from '@/components/appHeader'

const ReactEvents = () => {
  // console.log(data);
  
  return (
    <main className='t-app overflow-x-hidden '>

      <>
        <AppHeader title = 'Dashboard' />
      </>

      <section className='pb-2 pl-2 flex gap-3 overflow-x-auto scroll-container ease-out transition-all duration-1000'>
        <HeaderCard/>
        
      </section>

      <section className='rounded-2xl mt-3  dark:bg-black  md:min-h-[70vh] overflow-hidden'>
        <EventsParent >
          <FormEvent />
        </EventsParent>
      </section>
    </main>
  )
}

export default ReactEvents