"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
              <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <CardHeader className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium mt-1">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                      {project.features.length > 4 && <li>And more...</li>}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Impact:</h4>
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/50 pl-3">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-accent/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t border-border/50 gap-4">
                  {project.github !== "#" && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex-1 gap-2")}>
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  )}
                  {project.live !== "#" && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "sm" }), "flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90")}>
                      <ExternalLink className="w-4 h-4" />
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
