import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { SpecStrip } from "@/components/sections/SpecStrip";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { Lab } from "@/components/sections/Lab";
import { Stack } from "@/components/sections/Stack";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SpecStrip />
      <Work />
      <Services />
      <Experience />
      <Lab />
      <Stack />
      <Reviews />
      <Faq />
      <Contact />
    </>
  );
}
