import "@/styles/globals.css";
import AuthSessionProvider from "@/components/auth/auth-session-provider";
import { ThemeProvider } from "@/components/_components/themeprovider";
import { Footer, Navbar, SideMenu } from "@/components";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

export const metadata = {
  // Template is for the dynamic path names
  title: {
    template: "%s | joe_njgigi",
    default: "joe_njgigi",
  },
  description:
    "Check out this portfolio Web Application. You can view the features I have implemented, like an AI Assistant you can ask about the web app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className="!scroll-smooth duration-700 transition-all"
      lang="en"
    >
      <AuthSessionProvider>
        <body className="sm:max-w-[2000px] font-poppins mx-auto md:p-0 h-screen duration-300 transition-all dark:bg-black bg-white">
          <ThemeProvider attribute="class">
            {/* Navbar */}
            <SpeedInsights />
            <Toaster
              className="font-poppins"
              closeButton
              richColors
              position="top-right"
            />
            <main className="md:grid grid-cols-[320px_1fr]">
              <SideMenu />
              <section>
                <Navbar />
                <div className="h-[94dvh] overflow-auto">{children}</div>
              </section>
              {/* <Footer /> */}
            </main>
          </ThemeProvider>
        </body>
      </AuthSessionProvider>
    </html>
  );
}
