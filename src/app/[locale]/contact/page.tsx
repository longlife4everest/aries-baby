
import { useTranslations } from 'next-intl';
import { ContactForm } from "@/components/layout/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-gradient">{t('title')}</h1>
        <p className="text-muted-foreground text-lg">{t('description')}</p>
      </div>
      
      <GlassCard className="p-8 md:p-12">
        <ContactForm />
      </GlassCard>
    </div>
  );
}
