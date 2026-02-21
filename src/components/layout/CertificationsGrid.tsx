"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, CheckCircle, X, ExternalLink } from "lucide-react";

export function CertificationsGrid() {
  const t = useTranslations('Certifications.items');
  const [selectedCert, setSelectedCert] = useState<{ key: string, image?: string } | null>(null);

  const certs = [
    { key: 'agile', image: '/images/certifications/hp-life-agile.png' },
    { key: 'data', image: '/images/certifications/revou-data-analytics.png' },
    { key: 'google', image: '/images/certifications/google-analytics.png' },
    { key: 'mis', image: '/images/certifications/klinikgo-internship.png' },
    { key: 'python', image: '/images/certifications/pcap-python.png' },
    { key: 'specialSkill', image: '/images/certifications/special-skill.jpeg' }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            layoutId={`cert-${cert.key}`}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer"
          >
            <GlassCard hoverEffect className="h-full flex flex-col p-0 overflow-hidden border-white/40 group">
              {cert.image ? (
                <div className="w-full h-48 bg-white/50 relative overflow-hidden">
                  <motion.img
                    layoutId={`image-${cert.key}`}
                    src={cert.image}
                    alt={t(cert.key)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="text-white w-6 h-6" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-48 bg-accent/5 flex items-center justify-center relative overflow-hidden">
                  <div className="p-4 rounded-full bg-accent/10 text-accent mb-2 scale-150 opacity-50">
                    <Award size={32} />
                  </div>
                  <div className="absolute top-4 right-4 animate-fade-in">
                    <CheckCircle className="text-green-500 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )}

              <div className="p-6 flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-semibold leading-relaxed text-center group-hover:text-accent transition-colors">
                  {t(cert.key)}
                </h3>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              layoutId={`cert-${selectedCert.key}`}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-1 gap-0">
                {selectedCert.image ? (
                  <div className="bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                    <motion.img
                      layoutId={`image-${selectedCert.key}`}
                      src={selectedCert.image}
                      alt={t(selectedCert.key)}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center bg-accent/10 text-accent">
                    <Award size={64} className="mb-4" />
                    <p className="text-lg font-medium">No preview available</p>
                  </div>
                )}

                <div className="p-6 bg-white dark:bg-zinc-900">
                  <h3 className="text-2xl font-bold mb-2">{t(selectedCert.key)}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
