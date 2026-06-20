"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
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
      icon: Phone,
      label: "Call Me",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`,
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
    <section id="contact" className="py-20 md:py-32 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:bg-accent/30 transition-all duration-300 group cursor-pointer text-center">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <link.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{link.label}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                        {link.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
