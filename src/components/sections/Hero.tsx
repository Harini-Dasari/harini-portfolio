"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, Cpu } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import BlurText from "@/components/ui/BlurText";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  // Icons array with angles for positioning
  const orbitIcons = [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub", angle: 270, color: "#ffffff" },
    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn", angle: 30, color: "#38BDF8" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email", angle: 150, color: "#F43F5E" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] text-white"
      onMouseMove={handleMouseMove}
    >
      {/* CSS Animations for Orbit */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Mouse Follow Glow */}
        {isMounted && (
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-primary/10 transition-transform duration-700 ease-out"
            animate={{
              x: mousePosition.x - 300,
              y: mousePosition.y - 300,
            }}
          />
        )}

        {/* Purple Glow Orb (Top Left) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#7C5CFF]/20 blur-[120px]"
        />

        {/* Blue Glow Orb (Bottom Right) */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#38BDF8]/20 blur-[120px]"
        />
        
        {/* Subtle Stars/Particles */}
        {isMounted && (
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.8, 0.1],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24 pb-10 gap-12 lg:gap-8">
        
        {/* LEFT SECTION - Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm shadow-black/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
            </span>
            <span className="text-[13px] font-semibold tracking-wider text-slate-300 uppercase">AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="relative mb-6 w-full flex justify-center lg:justify-start">
            <div className="text-5xl sm:text-[5rem] lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-[-0.04em] text-white">
              <BlurText
                text="Harini Dasari"
                delay={50}
                animateBy="letters"
                direction="bottom"
                className="text-white"
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 tracking-tight flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Full-Stack Developer</span>
            <span className="text-[#7C5CFF]/60 font-light">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">AI Engineer</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-[600px] mb-10 lg:pr-10">
            Building intelligent applications that combine modern web technologies with AI-powered solutions for healthcare, public safety, and social impact.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-16">
            <Link href="#projects" className="group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-[#050816] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95">
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#7C5CFF] to-[#38BDF8] opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              <span className="relative flex items-center gap-2">
                View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            <Link href="/HariniDasari_Resume.pdf" target="_blank" className="group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-8 font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:scale-105 active:scale-95">
              <span className="relative flex items-center gap-2">
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" /> Download Resume
              </span>
            </Link>

            <Link href="#contact" className="inline-flex h-12 sm:h-14 items-center justify-center px-6 font-semibold text-slate-400 transition-all hover:text-white relative after:absolute after:bottom-3 after:left-6 after:right-6 after:h-[1px] after:bg-white/30 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
              Let's Connect
            </Link>
          </motion.div>

          {/* Social Text */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 opacity-60">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/50"></div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white">
              Open To Collaboration Worldwide
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION - Orbit System */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            
            {/* Outer Rotating Ring */}
            <div 
              className="absolute inset-0 rounded-full border-[2px] border-transparent"
              style={{
                background: "linear-gradient(#050816, #050816) padding-box, linear-gradient(to right, #7C5CFF, #38BDF8) border-box",
                animation: "orbit 25s linear infinite",
              }}
            >
              {/* Orbit Icons and Connecting Lines */}
              {orbitIcons.map((item) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const radius = 50; // 50% from center
                const left = 50 + radius * Math.cos(angleRad);
                const top = 50 + radius * Math.sin(angleRad);

                return (
                  <div key={item.label}>
                    {/* Connecting Line */}
                    <div 
                      className="absolute top-1/2 left-1/2 h-[1px] origin-left"
                      style={{
                        width: "50%",
                        background: `linear-gradient(to right, transparent, ${item.color}40)`,
                        transform: `translateY(-50%) rotate(${item.angle}deg)`,
                      }}
                    />
                    
                    {/* Icon Node */}
                    <div
                      className="absolute w-12 h-12 sm:w-16 sm:h-16 -ml-6 -mt-6 sm:-ml-8 sm:-mt-8"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      {/* Counter-rotate the icons so they stay upright */}
                      <div
                        className="w-full h-full"
                        style={{ animation: "orbit-reverse 25s linear infinite" }}
                      >
                        <Link 
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group relative flex w-full h-full items-center justify-center rounded-full bg-[#0F172A] border border-white/10 transition-all hover:scale-110 overflow-hidden"
                          style={{ boxShadow: `0 0 20px ${item.color}20` }}
                        >
                          {/* Hover Glow */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: `radial-gradient(circle at center, ${item.color}40, transparent)` }}
                          ></div>
                          <item.icon 
                            className="h-5 w-5 sm:h-7 sm:w-7 relative z-10 transition-colors" 
                            style={{ color: item.color }}
                          />
                          <span className="sr-only">{item.label}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inner Static Ring */}
            <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[280px] lg:h-[280px] rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_40px_rgba(124,92,255,0.05)]"></div>

            {/* Center Core */}
            <motion.div 
              className="absolute z-10 w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] lg:w-[140px] lg:h-[140px] rounded-full bg-[#0F172A]/80 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(124,92,255,0.3)]"
              animate={{ 
                boxShadow: ["0 0 30px rgba(124,92,255,0.2)", "0 0 60px rgba(56,189,248,0.4)", "0 0 30px rgba(124,92,255,0.2)"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C5CFF]/20 to-[#38BDF8]/20"></div>
              <Cpu className="h-10 w-10 sm:h-14 sm:w-14 text-white relative z-10" />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
