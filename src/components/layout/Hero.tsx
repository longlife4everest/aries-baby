
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-soft-rose opacity-20 blur-3xl animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />
      
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
            Personal Portfolio
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          
          <p className="text-md text-gray-500 max-w-lg mx-auto">
            {t("tagline")}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8">
                {t("ctaProject")} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                {t("ctaBlog")} <BookOpen className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
