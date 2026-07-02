'use client'

import { useTheme } from 'next-themes'
import { SKILL_ICON_MAP } from '@/lib/skill-icons'

interface SkillChipProps {
  label: string
}

export const SkillChip = ({ label }: SkillChipProps) => {
  const { resolvedTheme } = useTheme()
  const meta = SKILL_ICON_MAP[label]

  if (meta) {
    const tooltip = (
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-popover text-popover-foreground text-xs rounded px-2 py-1 whitespace-nowrap shadow-md z-10 pointer-events-none border border-border">
        {label}
      </span>
    )

    if (meta.svgUrl) {
      return (
        <span className="group relative inline-flex items-center justify-center rounded-md p-1.5 bg-muted border border-border hover:bg-accent transition-colors cursor-default">
          <img src={meta.svgUrl} width={18} height={18} alt={label} className="object-contain" />
          {tooltip}
        </span>
      )
    }

    if (meta.icon) {
      const Icon = meta.icon
      const iconColor = meta.darkColor && resolvedTheme === 'dark' ? meta.darkColor : meta.color

      return (
        <span className="group relative inline-flex items-center justify-center rounded-md p-1.5 bg-muted border border-border hover:bg-accent transition-colors cursor-default">
          <Icon size={18} style={{ color: iconColor }} />
          {tooltip}
        </span>
      )
    }
  }

  return (
    <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border">
      {label}
    </span>
  )
}
