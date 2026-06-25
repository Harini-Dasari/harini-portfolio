"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export function About() {
  const [activeTab, setActiveTab] = useState("journey");

  const tabs = [
    { id: "journey", label: "My Journey" },
    { id: "focus", label: "Current Focus" },
    { id: "philosophy", label: "Philosophy" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#050816] relative overflow-hidden flex justify-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#7C5CFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#38BDF8]">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base font-medium tracking-wide text-slate-400 uppercase"
          >
            Computer Science Student • Full-Stack Developer • AI Engineer
          </motion.p>
        </div>

        {/* Interactive Canvas Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0F172A]/60 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col"
        >
          {/* Animated Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[#7C5CFF]/50 to-transparent opacity-50"></div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 relative z-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#7C5CFF]/30 to-[#38BDF8]/30 border border-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="relative flex-1 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              
              {/* MY JOURNEY TAB */}
              {activeTab === "journey" && (
                <motion.div
                  key="journey"
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center text-center gap-8"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    Engineering intelligent digital solutions <br className="hidden md:block" /> for real-world impact.
                  </h3>

                  <div className="flex flex-col gap-4 mt-4 text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-3xl text-center">
                    <p>
                      I am a Computer Science student at RGUKT RK Valley, passionate about turning ideas into products that help people. I specialize in building web applications and AI-driven systems, with a strong focus on healthcare and social impact.
                    </p>
                    <p>
                      From smart monitoring tools to scalable software, my goal is to create technology that makes a real difference.
                    </p>
                  </div>
                  
                  {/* 4 Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
                    {[
                      { title: "Full-Stack Development", desc: "Building modern web and mobile applications." },
                      { title: "AI Engineering", desc: "Applying Machine Learning and Deep Learning to solve real-world problems." },
                      { title: "Healthcare Innovation", desc: "Developing AI-powered healthcare solutions for impact-driven applications." },
                      { title: "Research & Learning", desc: "Exploring Computer Vision, NLP, and emerging technologies." }
                    ].map((card, i) => (
                      <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 gap-3">
                        <h4 className="text-white text-sm font-bold tracking-wide">{card.title}</h4>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* FOCUS TAB */}
              {activeTab === "focus" && (
                <motion.div
                  key="focus"
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center text-center gap-10"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">What I'm Building</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
                    {[
                      { title: "LifeBand Maa", desc: "AI Maternal Health Monitoring" },
                      { title: "Praja FIR", desc: "Voice-Based FIR System" },
                      { title: "AI Rural Health", desc: "Risk Prediction Platform" },
                      { title: "Safe Yathra", desc: "Route Safety Analysis" }
                    ].map((project, i) => (
                      <div key={i} className="flex flex-col items-start text-left p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 shadow-lg">
                        <h4 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-2">{project.title}</h4>
                        <p className="text-sm md:text-base text-slate-400 font-light">{project.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* PHILOSOPHY TAB */}
              {activeTab === "philosophy" && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex flex-col items-center justify-center text-center h-full gap-8"
                >
                  <div className="relative p-8 md:p-14 max-w-4xl bg-white/[0.02] border border-white/5 rounded-[32px] shadow-2xl">
                    <Quote className="absolute top-6 left-6 w-8 h-8 md:w-12 md:h-12 text-[#7C5CFF]/20" />
                    <Quote className="absolute bottom-6 right-6 w-8 h-8 md:w-12 md:h-12 text-[#38BDF8]/20 rotate-180" />
                    <h3 className="text-2xl md:text-4xl font-light italic text-white/90 leading-relaxed z-10 relative">
                      "Technology should <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#38BDF8]">simplify lives</span>, solve meaningful problems, and create impact at scale."
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
                    I believe great products emerge when strong engineering, thoughtful design, and real-world needs come together.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
