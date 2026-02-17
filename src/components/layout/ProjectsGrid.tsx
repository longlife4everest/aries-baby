
"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProjectsGrid() {
  const t = useTranslations('Projects.items');
  const common = useTranslations('Common');
  
  const projects = ['ariesbaby', 'chatgpt'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <GlassCard hoverEffect className="h-full flex flex-col p-8 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Code2 size={24} />
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">

                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{t(`${project}.title`)}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              {t(`${project}.description`)}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100/20">
              {t(`${project}.tech`).split(',').map((tech) => (
                <span key={tech} className="text-xs font-mono bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
