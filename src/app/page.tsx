import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const About = dynamic(() => import("@/components/sections/About").then((mod) => mod.About));
const Education = dynamic(() => import("@/components/sections/Education").then((mod) => mod.Education));
const Experience = dynamic(() => import("@/components/sections/Experience").then((mod) => mod.Experience));
const Skills = dynamic(() => import("@/components/sections/Skills").then((mod) => mod.Skills));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects").then((mod) => mod.FeaturedProjects));
const Achievements = dynamic(() => import("@/components/sections/Achievements").then((mod) => mod.Achievements));
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <>
      <Navbar />
      
      <ScrollProgress />

      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <FeaturedProjects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
