
"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, CheckCircle } from "lucide-react";

export function CertificationsGrid() {
  const t = useTranslations('Certifications.items');
  
  const certs = [
    'agile', 'data', 'google', 'mis', 'python'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certs.map((cert, index) => (
        <motion.div
          key={cert}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <GlassCard hoverEffect className="h-full flex flex-col p-6 border-white/40">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <Award size={24} />
              </div>
              <CheckCircle className="text-green-500 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold leading-relaxed">
              {t(cert)}
            </h3>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
