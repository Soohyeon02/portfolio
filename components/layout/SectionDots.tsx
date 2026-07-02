'use client'

import { SECTIONS } from '@/lib/constants'
import { useSectionObserver } from '@/hooks/useSectionObserver'

export const SectionDots = () => {
  const { activeSection } = useSectionObserver()

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="섹션 이동"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          aria-label={label}
          title={label}
          className="group relative flex items-center justify-end gap-2"
        >
          <span className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground bg-card border border-border px-2 py-1 rounded whitespace-nowrap pointer-events-none">
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'w-3 h-3 bg-accent'
                : 'w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
