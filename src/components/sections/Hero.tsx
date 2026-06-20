"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              {portfolioData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              {portfolioData.personal.role}
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {portfolioData.personal.headline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full")}>
              View Projects
            </Link>
            <Link href="/resume.pdf" target="_blank" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto rounded-full border-border hover:bg-accent hover:text-accent-foreground")}>
              Download Resume
            </Link>
            <Link href="#contact" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "w-full sm:w-auto rounded-full")}>
              Let's Connect
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 pt-8">
            {[
              { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
              { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
              { icon: Phone, href: `tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`, label: "Phone" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
