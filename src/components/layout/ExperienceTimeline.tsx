
"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  const t = useTranslations('Experience.jobs');
  
  const jobs = [
    { key: 'klinikgo', year: "2023" },
    { key: 'jiu', year: "2022" },
    { key: 'dinas', year: "2021" }
  ];

  return (
    <div className="relative max-w-3xl mx-auto space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {jobs.map((job, index) => (
        <motion.div 
          key={job.key}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Briefcase className="w-5 h-5 text-accent" />
          </div>
          
          <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 ml-4 md:ml-0">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">{t(`${job.key}.title`)}</div>
              <time className="font-mono text-xs font-medium text-slate-500">{job.year}</time>
            </div>
            <div className="text-accent font-medium mb-2">{t(`${job.key}.company`)}</div>
            <div className="text-slate-500">
              {t(`${job.key}.description`)}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
