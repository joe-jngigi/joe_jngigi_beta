// import Image from 'next/image'
import { ProfileIntro, TechStack, AboutSection, EmailMe, TechUsed } from "@/components"

export default function Home() {

  return (
    <main className="font-display bg-re-600 mb-10 pb-10 md:mb-5 min-h-[95vh] md:min-h-[96vh] px-1">
      <> <ProfileIntro /> </>
      <> <TechStack/> </>

      <><AboutSection/></>
      <><EmailMe/></>

      <TechUsed/>
      
    </main>
  )
}
