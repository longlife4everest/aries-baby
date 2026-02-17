
import { useTranslations } from 'next-intl';
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillsGrid } from "@/components/layout/SkillsGrid";

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="container mx-auto px-6 py-12 space-y-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
        <GlassCard className="p-8 md:p-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t('description')}
          </p>
        </GlassCard>
      </section>

      <SkillsGrid />
    </div>
  );
}
