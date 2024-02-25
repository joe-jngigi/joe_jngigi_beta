import { Toaster } from 'react-hot-toast';

import { Footer, Navbar } from '@/components'
import '@/styles/globals.css'
import AuthSessionProvider from '@/components/auth-session-provider';

import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Next Routing',
  description: 'Learning about NextJS layout',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <AuthSessionProvider>
      <html className='dark:bg-dark-hero !scroll-smooth' lang="en">
        <body className= 'sm:max-w-[1800px] mx-auto md:p-0 h-screen'>
            
            {/* Navbar */}
            <SpeedInsights />

            <Toaster />
            <Navbar />
            {children}
            <Footer/>
        </body>
      </html>
    </AuthSessionProvider>

  )
}
