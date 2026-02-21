"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, ExternalLink, Code2, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Define project structure
type Project = {
  id: string;
  image: string;
  github: string;
  demo: string;
};

export function ProjectsGrid() {
  const t = useTranslations('Projects.items');
  const common = useTranslations('Common');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Here you can easily add more projects simply by adding the id and configuring the translations in en.json and id.json
  const projects: Project[] = [
    {
      id: 'kirimcepat',
      image: '/images/projects/kirimcepat.png',
      github: 'https://github.com/rumbewasisabella/kirimcepat-performance-dashboard.git',
      demo: '#'
    },
    {
      id: 'chatgpt',
      image: '',
      github: 'https://github.com/rumbewasisabella',
      demo: '#'
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            layoutId={`project-container-${project.id}`}
            className="h-full flex"
          >
            <GlassCard className="h-full w-full flex flex-col p-6 sm:p-8 overflow-hidden group border-white/40 hover:border-accent/40 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Image / Placeholder Container */}
              <motion.div layoutId={`project-image-${project.id}`} className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/10 cursor-pointer" onClick={() => setSelectedProject(project)}>
                {project.image ? (
                  <img src={project.image} alt={t(`${project.id}.title`)} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
                    <Code2 size={64} className="text-accent/30 group-hover:text-accent/70 transition-colors duration-500 z-10 scale-90 group-hover:scale-110" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="rounded-full gap-2 pointer-events-none">
                    {common('seeMore')} <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow">
                <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {t(`${project.id}.title`)}
                </motion.h3>

                <p className="text-muted-foreground text-sm sm:text-base mb-8 flex-grow leading-relaxed line-clamp-3">
                  {t(`${project.id}.description`)}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {t(`${project.id}.tech`).split(', ').map(tech => (
                    <span key={tech} className="px-4 py-1.5 text-xs sm:text-sm font-semibold bg-background border border-accent/20 text-accent rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-border/50">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="outline"
                    className="flex-1 rounded-xl h-12 hover:bg-accent/10 hover:text-accent border-border transition-colors gap-2"
                  >
                    <span>{common('seeMore')}</span>
                    <ArrowRight size={18} />
                  </Button>

                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-[0.5] sm:flex-none">
                      <Button size="icon" className="w-12 h-12 rounded-xl bg-accent hover:bg-accent/90 text-primary-foreground shadow-md transition-all" title="Live Demo">
                        <ExternalLink size={20} />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="bg-background/95 dark:bg-zinc-900/95 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative flex flex-col md:flex-row overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-20 transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <motion.div layoutId={`project-image-${selectedProject.id}`} className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative bg-accent/5 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={t(`${selectedProject.id}.title`)} className="object-cover w-full h-full" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-accent/50">
                    <Code2 size={100} className="mb-6 opacity-50" />
                    <p className="font-mono text-sm tracking-widest uppercase opacity-80">Placeholder Image</p>
                  </div>
                )}
              </motion.div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col overflow-y-auto">
                <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                  {t(`${selectedProject.id}.title`)}
                </motion.h3>

                <div className="flex flex-wrap gap-2 mb-8 border-b border-border/50 pb-6">
                  {t(`${selectedProject.id}.tech`).split(', ').map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose dark:prose-invert prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline mb-8 flex-grow">
                  {selectedProject.id === 'kirimcepat' ? (
                    <p>{t(`${selectedProject.id}.details`)}</p>
                  ) : (
                    <>
                      <p>{t(`${selectedProject.id}.description`)}</p>
                      <p className="mt-4">
                        Wait for an upcoming detailed update regarding the features, architecture, and journey of creating this project. When it's ready, those details will appear right here!
                      </p>
                    </>
                  )}
                </div>

                {/* Modal Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 rounded-xl h-14 hover:bg-accent/10 hover:text-accent border-border transition-colors">
                      <Github size={20} />
                      <span className="font-semibold">GitHub Repository</span>
                    </Button>
                  </a>
                  {selectedProject.demo !== '#' && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-accent hover:bg-accent/90 text-primary-foreground shadow-md transition-all">
                        <ExternalLink size={20} />
                        <span className="font-semibold">Live Demo</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
