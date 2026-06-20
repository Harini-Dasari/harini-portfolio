"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Star, GitFork, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function GithubSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="github" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Open Source & GitHub</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Main GitHub Profile Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card/80 backdrop-blur-sm border-border overflow-hidden">
              <CardContent className="p-0 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-0">
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center flex-shrink-0 border-4 border-background">
                    <Github className="w-12 h-12 text-foreground" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {portfolioData.personal.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">@Harini-Dasari</p>
                    <div className="flex items-center justify-center sm:justify-start gap-4 text-sm font-medium">
                      <span className="flex items-center gap-1 text-muted-foreground"><Star className="w-4 h-4 text-primary" /> Building</span>
                      <span className="flex items-center gap-1 text-muted-foreground"><GitFork className="w-4 h-4 text-secondary" /> Contributing</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full sm:w-auto p-6 sm:p-0 border-t sm:border-t-0 border-border/50">
                  <Link href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90")}>
                    View Profile <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Stats Image (Using a placeholder for the animated feel or we can just leave the CTA) */}
          <motion.div variants={itemVariants} className="text-center">
             <p className="text-muted-foreground">
               I actively contribute to open-source projects and share my personal work on GitHub.
               Check out my repositories to see my coding style and recent experiments.
             </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
