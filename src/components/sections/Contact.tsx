"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email Me",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },

    {
      icon: Github,
      label: "GitHub",
      value: "Harini-Dasari",
      href: portfolioData.personal.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dasariharini",
      href: portfolioData.personal.linkedin,
    },
  ];

  return (
    <section id="contact" className="pt-10 md:pt-16 pb-20 md:pb-32 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          <p className="max-w-[600px] text-muted-foreground md:text-lg pt-4">
            {portfolioData.contact.cta}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  target={link.href.startsWith("http") ? "_blank" : undefined} 
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all duration-300 group shadow-sm"
                >
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                  <span className="font-semibold tracking-wide">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
