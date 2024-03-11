import { Footer, Navbar } from '@/components'
import '@/styles/globals.css'
import AuthSessionProvider from '@/components/auth-session-provider';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from 'sonner';

export const metadata = {
  title: 'joe_njgigi',
  description: 'Portfolio, I implement code and showcase it here.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <AuthSessionProvider>
      <html className='dark:bg-dark-hero !scroll-smooth' lang="en">
        <body className= 'sm:max-w-[1800px] mx-auto md:p-0 h-screen '>
            
            {/* Navbar */}
            <SpeedInsights />
          <Toaster   className='font-poppins' closeButton richColors position='top-right'/>
            <Navbar />
            {children}
            <Footer/>
        </body>
      </html>
    </AuthSessionProvider>

  )
}
