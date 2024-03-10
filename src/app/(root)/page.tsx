// import Image from 'next/image'
import { ProfileIntro, TechStack } from "@/components";

export default function Home() {
  return (
    <main className="font-poppins mb-10 pb-10 md:mb-5 min-h-[96vh] px-1">
      <>
        <ProfileIntro />
      </>
      <>
        <TechStack />
      </>
    </main>
  );
}
