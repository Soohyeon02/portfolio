'use client'

import { SECTIONS } from '@/lib/constants'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 border-b border-border bg-background/80 backdrop-blur-sm">
      <button
        onClick={() => scrollToSection('hero')}
        className="font-bold text-lg tracking-tight hover:text-accent transition-colors"
      >
        SH.
      </button>

      <nav className="hidden md:flex items-center gap-6">
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {label}
          </button>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  )
}
