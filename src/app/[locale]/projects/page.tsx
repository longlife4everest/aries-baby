
import { useTranslations } from 'next-intl';
import { ProjectsGrid } from "@/components/layout/ProjectsGrid";

export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-gradient">{t('title')}</h1>
      <ProjectsGrid />
    </div>
  );
}
