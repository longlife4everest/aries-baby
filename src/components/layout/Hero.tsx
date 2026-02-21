"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, Github, Instagram } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [text, setText] = useState("");
  // Fallback if tagline is not found (though we added it)
  const fullText = t("tagline");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Animated Gradient Background with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-gradient-soft-rose opacity-20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob" />
      <motion.div style={{ y: y1 }} className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />

      <div className="container relative z-10 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-accent tracking-wide uppercase">
              {t("role")}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto md:mx-0">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/isabellachristianirumbewas-661201312/" target="_blank" rel="noopener noreferrer" className="p-3 bg-background hover:bg-accent/10 border border-border rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rumbewas.isabella@gmail.com" className="p-3 bg-background hover:bg-accent/10 border border-border rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/rumbewasisabella" target="_blank" rel="noopener noreferrer" className="p-3 bg-background hover:bg-accent/10 border border-border rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
                  <Github size={24} />
                </a>
                <a href="https://www.instagram.com/isabellarumbewas/" target="_blank" rel="noopener noreferrer" className="p-3 bg-background hover:bg-accent/10 border border-border rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-lg flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
              {/* Soft glow behind the image */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>

              {/* Circular image container */}
              <div className="relative w-full h-full rounded-full border-8 border-background/50 shadow-2xl overflow-hidden flex items-center justify-center bg-accent/20 backdrop-blur-sm">

                <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
