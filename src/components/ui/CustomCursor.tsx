"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>(0);
  
  // Cinderella dusty pink colors
  const colors = ["#F8C8DC", "#FFD1DC", "#FFFFFF", "#E6E6FA"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new particle on move
      if (Math.random() > 0.5) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 1, // Small size 1-5px
          color: colors[Math.floor(Math.random() * colors.length)]
        };
        
        setParticles(prev => [...prev.slice(-20), newParticle]); // Limit particles
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cleanup particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(1));
    }, 100);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <>
      {/* Main small sparkle cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent/50 rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_15px_#F8C8DC]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Sparkle Trail */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0, y: particle.y + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              top: 0,
              left: 0,
              x: particle.x,
              y: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              filter: "blur(0.5px)"
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
