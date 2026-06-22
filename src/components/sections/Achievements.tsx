"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useRef, useEffect, useState } from "react";

export function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
            Achievements & Recognition
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[600px]">
            Key milestones from my academic, technical, and innovation journey.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Scrollable Area */}
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`w-full overflow-x-auto pb-16 pt-8 px-4 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex flex-row items-stretch gap-10 md:gap-16 min-w-max pt-16 pb-8 px-8"
            >
              {/* Animated Glowing Timeline Line at the top */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 right-0 top-6 h-1 bg-gradient-to-r from-primary/10 via-primary/70 to-primary/10 origin-left shadow-[0_0_15px_rgba(var(--primary),0.3)] z-0 rounded-full"
              />

              {portfolioData.achievements.map((achievement: any, index: number) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="relative group w-[280px] sm:w-[320px] flex-shrink-0 z-10 snap-center transition-all duration-300 mt-2 flex flex-col"
                >
                  {/* Timeline Node (dot on the line) */}
                  <div className="absolute -top-[42px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] z-0 group-hover:scale-150 group-hover:bg-primary transition-all duration-300"></div>
                  
                  {/* Vertical Connection Stem */}
                  <div className="absolute -top-[34px] left-1/2 -translate-x-1/2 w-[2px] h-[34px] bg-gradient-to-b from-primary to-transparent opacity-40 group-hover:opacity-100 group-hover:h-[40px] transition-all duration-300 -z-10"></div>

                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 -z-10"></div>
                  
                  {/* Card Body */}
                  <div className="relative flex-1 p-6 sm:p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 group-hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center gap-4 shadow-xl">
                     
                     <div className="space-y-1.5 w-full mt-2">
                       <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-primary/10 text-primary uppercase border border-primary/20 mb-2">
                         {achievement.year}
                       </span>
                       <h3 className="text-lg font-bold text-foreground leading-tight">
                         {achievement.title}
                       </h3>
                     </div>
                     
                     <p className="text-sm text-muted-foreground/90 leading-relaxed mt-2">
                       {achievement.description}
                     </p>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
