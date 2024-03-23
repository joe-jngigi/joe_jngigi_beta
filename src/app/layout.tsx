import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import AuthSessionProvider from "@/components/auth-session-provider";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

export const metadata = {
  // Template is for the dynamic path names
  title: {
    template: "%s | joe_njgigi",
    default: "joe_njgigi",
  },
  description: "Check out this portfolio Web Application. You can view the features I have implemented, like an AI Assistant you can ask about the web app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthSessionProvider>
      <html className="dark:bg-dark-hero !scroll-smooth dar" lang="en">
        <body className="sm:max-w-[2000px] font-poppins mx-auto md:p-0 h-screen duration-300 transition-all dark:bg-black bg-white">
          {/* Navbar */}
          <SpeedInsights />
          <Toaster
            className="font-poppins"
            closeButton
            richColors
            position="top-right"
          />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthSessionProvider>
  );
}
