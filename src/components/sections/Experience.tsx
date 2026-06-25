"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Card className="bg-card/40 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-card/60 overflow-hidden relative">
                {/* Accent line on the left */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/80"></div>
                
                <CardHeader className="pb-3 pt-6 px-6 md:px-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl hidden sm:flex">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground mb-1">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg md:text-xl text-primary/80 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto">
                      {exp.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="px-6 md:px-8 pb-8 sm:pl-[5.5rem]">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
