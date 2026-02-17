"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function NowPlaying() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-8 z-40 hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-xl"
    >
      <div className="bg-green-500/20 p-2 rounded-full relative">
        <Music size={18} className="text-green-500" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
      </div>
      <div className="flex flex-col text-xs pr-2">
        <span className="font-bold text-foreground">Firm Foundation</span>
        <span className="text-muted-foreground">Maverick City Music</span>
      </div>
    </motion.div>
  );
}
