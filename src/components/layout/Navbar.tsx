"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="#home" onClick={(e) => handleScroll(e, "#home")} className="text-xl font-bold tracking-tighter text-foreground">
          {portfolioData.personal.name.split(" ")[0]}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className={cn(buttonVariants({ size: "sm" }), "ml-4 bg-primary text-primary-foreground hover:bg-primary/90")}>
            Let's Connect
          </Link>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-foreground")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0F172A]/95 backdrop-blur-xl border-l border-white/10 w-[85vw] sm:max-w-sm flex flex-col p-8">
              <SheetTitle className="text-left text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mb-8 mt-2">
                Navigation
              </SheetTitle>
              <nav className="flex flex-col gap-3 flex-1 mt-2 overflow-y-auto pb-4 pr-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex items-center justify-center w-full py-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-lg font-semibold text-slate-300 hover:bg-white/[0.08] hover:text-white hover:border-white/10 transition-all active:scale-[0.98]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-8 flex flex-col gap-5">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <p className="text-sm text-slate-400 font-light">Ready to build something impactful?</p>
                <Link 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, "#contact")} 
                  className={cn(buttonVariants({ size: "lg" }), "w-full bg-gradient-to-r from-[#7C5CFF] to-[#38BDF8] text-white font-semibold border-none hover:opacity-90 rounded-full shadow-[0_0_20px_rgba(124,92,255,0.3)]")}
                >
                  Let's Connect
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
