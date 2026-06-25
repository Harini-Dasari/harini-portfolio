"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-accent/10 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full flex">
              <Card className="flex flex-col h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_-15px_rgba(124,58,237,0.3)] transition-all duration-500 overflow-hidden group min-h-[350px] relative">
                
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <CardHeader className="space-y-3 pb-4 pt-8 px-6 md:px-8 z-10">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-primary/90 font-medium mt-2 text-sm md:text-base">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col space-y-6 px-6 md:px-8 z-10">
                  <p className="text-muted-foreground/90 leading-relaxed text-base mt-2 mb-auto">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="pt-6 pb-8 px-6 md:px-8 border-t border-border/10 gap-4 mt-auto z-10">
                  {project.github === "private" ? (
                    <ProjectCodeButton />
                  ) : project.github !== "#" && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "flex-1 gap-2 bg-background/50 border-border/50 hover:bg-background transition-all duration-300 py-6 text-base")}>
                      <Github className="w-5 h-5" />
                      Code
                    </Link>
                  )}
                  {project.live !== "#" && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-primary/25 transition-all duration-300 py-6 text-base")}>
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCodeButton() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (clicked) {
      timer = setTimeout(() => {
        setClicked(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [clicked]);

  return (
    <button
      onClick={() => setClicked(true)}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex-1 gap-2 bg-background/50 border-border/50 transition-all duration-300 py-6 text-base",
        clicked ? "opacity-70 cursor-not-allowed hover:bg-background/50" : "hover:bg-background cursor-pointer"
      )}
      disabled={clicked}
    >
      {clicked ? <Lock className="w-5 h-5" /> : <Github className="w-5 h-5" />}
      {clicked ? "Private Repo" : "Code"}
    </button>
  );
}

