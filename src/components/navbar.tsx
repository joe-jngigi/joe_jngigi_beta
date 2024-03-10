import { getServerSession } from 'next-auth/next';

import ResponsiveNav from './sub-components/responsive-nav'
import PagesLinks from './sub-components/pages-links';
import { options} from '@/app/api/(auth)/auth/[...nextauth]/options'

const Navbar = async () => {

  const Session = await getServerSession(options)

  return (
    <nav className='z-50 font-poppins px-3 py-0.5 fixed lg:top-5 top-0 mx-auto left-1/2 transform -translate-x-1/2 w-full xl:w-[1200px]  shadow-lg lg:rounded-full border-1 dark:border-slate-300 backdrop-filter backdrop-blur-lg bg-opacity-50 dark:bg-main-dark-bg/50 bg-blend-color-dodge'>
      <div className='flex-between'>
        {/* logo */}
        <div>
          <h1 title='This is just text, I don&apos;t want to make a logo' className='logo_text text-2xl font-bold select-none'>Zephyr<span className='text-emerald-500'>ONE</span></h1>
        </div>

        <>
          <PagesLinks/>
        </>

        {/* Menu */}
        <>
          <ResponsiveNav Session={Session}/>
        </>
      </div>
    </nav>
  )
}

export default Navbar