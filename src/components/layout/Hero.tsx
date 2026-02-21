"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Mail, User } from "lucide-react";

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
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
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-8 py-6 text-lg font-medium transition-all shadow-md">
                  {t("ctaResume")}
                </Button>
              </a>
              <div className="flex items-center gap-4 ml-0 sm:ml-4">
                <a href="https://www.linkedin.com/in/isabellachristianirumbewas-661201312/" target="_blank" rel="noopener noreferrer" className="p-3 bg-background hover:bg-accent/10 border border-border rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rumbewas.isabella@gmail.com" className="p-3 bg-background hover:bg-accent/10 border border-border rounded-full transition-colors text-foreground hover:text-accent shadow-sm">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="h-8 mt-6 hidden md:block">
              <p className="text-sm text-muted-foreground font-mono">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end w-full"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Soft glow behind the image */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>

              {/* Circular image container */}
              <div className="relative w-full h-full rounded-full border-8 border-background/50 shadow-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-accent/40 to-accent/80 backdrop-blur-sm">

                {/* Fallback avatar icon */}
                <User size={120} className="text-accent-foreground/50" />

                {/* 
                  When ready, the user can replace the User icon with an Image tag like below:
                  <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                */}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
