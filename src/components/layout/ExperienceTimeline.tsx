
"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  const t = useTranslations('Experience.jobs');

  const jobs = [
    { key: 'klinikgo', year: "2025", image: "/images/experience/klinikgo-new.jpg" },
    { key: 'jiu', year: "2024", image: "/images/experience/jiu-new.png" },
    { key: 'dinas', year: "2022", image: "/images/experience/dinas-new.jpg" }
  ];

  return (
    <div className="relative max-w-4xl mx-auto space-y-12">
      {jobs.map((job, index) => (
        <motion.div
          key={job.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <GlassCard hoverEffect className="p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                {job.image ? (
                  <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2 shadow-sm flex items-center justify-center overflow-hidden">
                    <Image
                      src={job.image}
                      alt={t(`${job.key}.company`)}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <Briefcase size={24} />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-foreground">{t(`${job.key}.title`)}</h3>
                  <div className="text-accent font-medium mt-1">{t(`${job.key}.company`)}</div>
                </div>
              </div>

              <span className="text-sm font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full w-fit whitespace-nowrap">
                {job.year}
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6 ml-0 md:ml-20">
              {t(`${job.key}.description`)}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
