"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-accent/20 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Education</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {portfolioData.education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2 z-10 border-4 border-background">
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="bg-card hover:border-primary/50 transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start flex-col sm:flex-row gap-2 sm:gap-0">
                          <CardTitle className="text-xl font-bold text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                            {edu.duration}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        <p className="text-sm mt-4 inline-flex items-center gap-2 bg-accent px-3 py-1.5 rounded-md text-foreground">
                          <span className="font-semibold text-muted-foreground">CGPA:</span> {edu.gpa}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
