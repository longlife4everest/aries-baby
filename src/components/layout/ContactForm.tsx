"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full min-h-[400px]">
      <motion.a
        href="mailto:rumbewas.isabella@gmail.com"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center justify-center gap-4 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all w-full max-w-[320px] aspect-square group cursor-pointer"
      >
        <div className="p-6 bg-gradient-to-br from-red-50 to-red-100/50 text-red-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <Mail size={48} />
        </div>
        <div className="text-center space-y-1">
          <h3 className="font-bold text-xl text-foreground">Gmail</h3>
          <p className="text-sm text-muted-foreground/80 font-medium">Send me an email</p>
        </div>
        <motion.div
          className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-red-500 transition-colors"
        >
          Contact Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/isabellachristianirumbewas-661201312/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center justify-center gap-4 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg hover:shadow-xl hover:bg-white/10 transition-all w-full max-w-[320px] aspect-square group cursor-pointer"
      >
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <Linkedin size={48} />
        </div>
        <div className="text-center space-y-1">
          <h3 className="font-bold text-xl text-foreground">LinkedIn</h3>
          <p className="text-sm text-muted-foreground/80 font-medium">Connect professionally</p>
        </div>
        <motion.div
          className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-blue-600 transition-colors"
        >
          View Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </motion.a>
    </div>
  );
}
