"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hand } from "lucide-react";

export function Skills() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [blinkId, setBlinkId] = useState<number | null>(null);

  const skills = [
    {
      title: "Web Dev",
      fullTitle: "Web Development",
      desc: "Building modern, scalable web applications.",
      techs: ["React.js", "Node.js", "Express.js", "Supabase"],
      color: "from-[#38BDF8]/40 to-[#38BDF8]/5", 
      border: "border-[#38BDF8]/30",
    },
    {
      title: "AI & ML",
      fullTitle: "Machine Learning",
      desc: "Developing intelligent systems and predictive models.",
      techs: ["Python", "TensorFlow", "Scikit-learn", "CNNs"],
      color: "from-[#7C5CFF]/40 to-[#7C5CFF]/5",
      border: "border-[#7C5CFF]/30",
    },
    {
      title: "Data Sci",
      fullTitle: "Data Science",
      desc: "Analyzing data and building robust pipelines.",
      techs: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "from-indigo-400/40 to-indigo-400/5",
      border: "border-indigo-400/30",
    },
    {
      title: "Dev Tools",
      fullTitle: "Tools & Platforms",
      desc: "Ensuring efficient development workflows.",
      techs: ["Git & GitHub", "Jupyter", "Vercel", "Render"],
      color: "from-blue-400/40 to-blue-400/5",
      border: "border-blue-400/30",
    }
  ];

  const handleClick = (index: number) => {
    // Trigger blink flash effect
    setBlinkId(index);
    setTimeout(() => setBlinkId(null), 150);

    // Expand slide
    if (activeSlide !== index) {
      setActiveSlide(index);
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C5CFF]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-sm w-fit"
            >
              <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.2em] text-slate-300 uppercase">
                Capabilities
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
            >
              Technical Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl font-light"
            >
              Technologies I use to build scalable applications and AI-powered products.
            </motion.p>
          </div>

          <div className="flex items-center gap-2 text-slate-200 bg-[#7C5CFF]/20 border border-[#7C5CFF]/30 px-5 py-2.5 rounded-full backdrop-blur-md shadow-lg">
            <Hand className="w-5 h-5 animate-pulse text-[#38BDF8]" />
            <span className="text-sm font-semibold tracking-wide">Click cards to expand</span>
          </div>
        </div>

        {/* Expanding Accordion Carousel Slides */}
        <div className="flex flex-col md:flex-row h-[600px] md:h-[450px] gap-3 md:gap-4 w-full">
          {skills.map((skill, index) => {
            const isActive = activeSlide === index;
            const isBlinking = blinkId === index;

            return (
              <motion.div
                key={index}
                onClick={() => handleClick(index)}
                animate={{
                  flex: isActive ? 5 : 1,
                  scale: isBlinking ? 0.97 : 1,
                  filter: isBlinking ? "brightness(1.5)" : "brightness(1)",
                }}
                transition={{
                  flex: { type: "spring", stiffness: 200, damping: 25 },
                  scale: { duration: 0.1 },
                  filter: { duration: 0.1 }
                }}
                className={`relative flex flex-col justify-end rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all border ${skill.border} bg-gradient-to-br ${skill.color}`}
              >
                {/* Glassmorphic Base */}
                <div className={`absolute inset-0 bg-[#0F172A]/60 backdrop-blur-xl transition-opacity duration-500 ${isActive ? 'opacity-80' : 'hover:opacity-60 opacity-90'}`}></div>

                {/* Content */}
                <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="flex flex-col gap-3"
                    >
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        {skill.fullTitle}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base lg:text-lg font-medium max-w-md leading-relaxed mt-1">
                        {skill.desc}
                      </p>
                      
                      {/* Tech Stack Pills for active slide */}
                      <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
                        {skill.techs.map(tech => (
                          <span key={tech} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs md:text-sm font-semibold backdrop-blur-md shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center h-full w-full">
                      <h3 className="text-white font-bold text-lg md:text-xl tracking-widest uppercase md:-rotate-90 origin-center whitespace-nowrap opacity-70 md:w-[400px] text-center">
                        {skill.title}
                      </h3>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
