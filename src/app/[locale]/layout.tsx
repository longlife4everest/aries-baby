
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isabella Christiani Rumbewas",
  description: "Personal Branding Portfolio",
};

import { Preloader } from "@/components/ui/Preloader";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!['en', 'id'].includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <div className="flex flex-col min-h-screen items-center justify-center">
            <main className="flex-grow flex flex-col items-center justify-center px-4 text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                We&apos;ll be back soon!
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
                Sorry for the inconvenience but we&apos;re performing some maintenance at the moment. We&apos;ll be back online shortly!
              </p>
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
