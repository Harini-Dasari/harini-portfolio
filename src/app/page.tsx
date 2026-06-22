"use client";

import { motion, useScroll } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Achievements } from "@/components/sections/Achievements";
import { GithubSection } from "@/components/sections/GithubSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="flex-1 flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <FeaturedProjects />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
