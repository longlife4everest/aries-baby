"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Code2, Database, Layout, Server, 
  Terminal, Settings, Figma, GitBranch, 
  Cpu, Globe, FileJson, Layers
} from "lucide-react";

// Brand colors for icons
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: Code2, color: "text-blue-500" },
      { name: "SQL", icon: Database, color: "text-orange-500" },
      { name: "Java", icon: Server, color: "text-red-500" },
      { name: "HTML/CSS", icon: Layout, color: "text-orange-600" },
      { name: "PHP", icon: FileJson, color: "text-indigo-500" },
    ]
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "React", icon: Cpu, color: "text-cyan-400" },
      { name: "Next.js", icon: Globe, color: "text-neutral-900 dark:text-neutral-100" },
      { name: "Tailwind CSS", icon: Layout, color: "text-cyan-500" },
      { name: "Flutter", icon: Layers, color: "text-blue-400" },
      { name: "MySQL", icon: Database, color: "text-blue-600" },
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "System Analysis", icon: Settings, color: "text-green-500" },
      { name: "Agile / Scrum", icon: GitBranch, color: "text-purple-600" },
      { name: "Data Analytics", icon: Terminal, color: "text-amber-500" },
      { name: "UI/UX Design", icon: Figma, color: "text-pink-500" },
    ]
  }
];

export function SkillsGrid() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-center md:text-left text-muted-foreground">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.2) + (index * 0.1) }}
                  >
                    <GlassCard hoverEffect className="flex items-center gap-4 p-3 bg-white/40 dark:bg-black/20 border-white/40 group">
                      <div className={`p-2 rounded-lg bg-white/50 group-hover:bg-white/80 transition-colors ${skill.color}`}>
                        <skill.icon size={20} />
                      </div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
