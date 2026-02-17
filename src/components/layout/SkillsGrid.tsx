
"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const skills = [
  "SQL", "Python", "Java", "SDLC", 
  "Data Analytics", "Agile", "Scrum", 
  "Kanban", "Communication", "System Analysis"
];

export function SkillsGrid() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">Skills & Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard hoverEffect className="text-center py-4 px-2 bg-white/40">
              <span className="font-medium">{skill}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
