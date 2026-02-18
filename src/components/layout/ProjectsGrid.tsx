
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
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
        <div className="relative p-6 bg-accent/10 rounded-2xl border border-accent/20 mb-6">
          <Code2 size={48} className="text-accent" />
        </div>
      </motion.div>

      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold mb-3"
      >
        Projects are in development
      </motion.h3>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground max-w-md mx-auto"
      >
        I'm currently crafting something special. Check back soon for updates!
      </motion.p>
    </div>
  );
}
