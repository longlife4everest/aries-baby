
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { User, Briefcase, Award, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export function OverviewCards() {
  const t = useTranslations("Navigation");
  const common = useTranslations("Common");

  const cards = [
    { href: "/about", label: t("about"), icon: User, color: "text-blue-500", bg: "bg-blue-50" },
    { href: "/experience", label: t("experience"), icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50" },
    { href: "/certifications", label: t("certifications"), icon: Award, color: "text-amber-500", bg: "bg-amber-50" },
    { href: "/projects", label: t("projects"), icon: Layers, color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  return (
    <section className="py-20 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={card.href} className="h-full">
            <Link href={card.href} className="block h-full"> 
              <TiltCard>
                <GlassCard hoverEffect={false} className="h-full flex flex-col items-center text-center p-8 border border-white/50">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`p-4 rounded-full ${card.bg} ${card.color} mb-4`}
                  >
                    <card.icon size={32} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{card.label}</h3>
                  <span className="text-sm text-muted-foreground mt-auto flex items-center group">
                    {common("viewAll")} 
                  </span>
                </GlassCard>
              </TiltCard>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
