
import { useTranslations } from 'next-intl';
import { CertificationsGrid } from "@/components/layout/CertificationsGrid";

export default function Certifications() {
  const t = useTranslations('Certifications');

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-gradient">{t('title')}</h1>
      <CertificationsGrid />
    </div>
  );
}
