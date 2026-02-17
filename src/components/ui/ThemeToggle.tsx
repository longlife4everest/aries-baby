"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
        <Button variant="ghost" size="icon" className="rounded-full">
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full transition-all duration-300 hover:bg-accent/20"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400 rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </Button>
  )
}
