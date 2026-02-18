"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Linkedin, Github, Mail } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [text, setText] = useState("");
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Gradient Background with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 bg-gradient-soft-rose opacity-20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob" />
      <motion.div style={{ y: y1 }} className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-accent-foreground uppercase bg-accent/10 rounded-full"
          >
            Personal Page
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="h-8">
            <p className="text-md text-gray-500 max-w-lg mx-auto font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 pt-4"
          >
            <a href="https://www.linkedin.com/in/isabellachristianirumbewas-661201312/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/50 hover:bg-white rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rumbewas.isabella@gmail.com" className="p-3 bg-white/50 hover:bg-white rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
