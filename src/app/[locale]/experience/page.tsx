
import { useTranslations } from 'next-intl';
import { GlassCard } from "@/components/ui/GlassCard";
import { ExperienceTimeline } from "@/components/layout/ExperienceTimeline";

export default function Experience() {
  const t = useTranslations('Experience');

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-gradient">{t('title')}</h1>
      <ExperienceTimeline />
    </div>
  );
}
