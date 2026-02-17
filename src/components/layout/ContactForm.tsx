
"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { submitContact } from '@/lib/actions';
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function ContactForm() {
  const t = useTranslations('Contact.form');
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    await submitContact(formData);
    setPending(false);
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <Send size={32} />
        </div>
        <h3 className="text-2xl font-bold">{t('success')}</h3>
        <Button onClick={() => setSuccess(false)} variant="outline">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {t('name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {t('email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Sending..." : t('submit')}
      </Button>
    </form>
  );
}
