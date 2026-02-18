import { cn } from "@/lib/utils";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-glass-border bg-glass/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Isabella Christiani Rumbewas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
