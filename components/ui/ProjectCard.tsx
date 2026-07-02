'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectItem } from '@/types'
import { SkillChip } from './SkillChip'

interface ProjectCardProps {
  project: ProjectItem
  isOpen: boolean
  onToggle: (id: string) => void
  onDetail: (project: ProjectItem) => void
}

export const ProjectCard = ({ project, isOpen, onToggle, onDetail }: ProjectCardProps) => {

  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <span className="absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center">
        <span className="absolute h-3 w-3 rounded-full border-2 border-accent bg-background" />
      </span>

      <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40">
        {/* Header */}
        <p className="mb-1 text-xs font-mono text-muted-foreground">{project.period}</p>
        <h3 className="text-base font-semibold text-foreground leading-snug">{project.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{project.role}</p>

        {/* Skill chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </div>

        {/* Summary + accordion toggle */}
        <button
          onClick={() => onToggle(project.id)}
          className="group mt-4 flex w-full items-center justify-between gap-2 text-left text-sm text-muted-foreground rounded-lg px-3 py-2.5 -mx-3 hover:bg-accent/10 hover:text-accent transition-colors"
        >
          <span>{project.summary}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </button>

        {/* Accordion content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' as const }}
              className="overflow-hidden"
            >
              <ul className="mt-3 space-y-1.5 border-t border-border pt-3">
                {project.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {task}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onDetail(project)}
                className="mt-4 text-sm font-medium text-accent hover:underline underline-offset-4 transition-all"
              >
                자세히 보기 →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
