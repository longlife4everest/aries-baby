
"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/experience", label: t("experience") },
    { href: "/certifications", label: t("certifications") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "id" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
          <span className="text-gradient">My Profile</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-1 text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent-foreground" : "text-muted-foreground"
              )}
            >
              {pathname === link.href && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={switchLocale}
            className="ml-4 gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>{locale === "en" ? "EN" : "ID"}</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-6 md:hidden flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 transition-colors hover:text-accent",
                  pathname === link.href ? "text-accent" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-muted-foreground">Language</span>
              <Button variant="ghost" size="sm" onClick={switchLocale}>
                {locale === "en" ? "English" : "Bahasa Indonesia"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
