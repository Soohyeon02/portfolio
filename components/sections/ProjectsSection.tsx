'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useAccordion } from '@/hooks/useAccordion'
import { useProjectModal } from '@/hooks/useProjectModal'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ProjectModal } from '@/components/ui/ProjectModal'
import { CompanyHeader } from '@/components/ui/CompanyHeader'
import type { ProjectsContent, ProjectItem } from '@/lib/schemas'

type Tab = 'work' | 'side'
type CompanyGroup = { company: string; projects: ProjectItem[] }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

interface ProjectsSectionProps {
  projects: ProjectsContent
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('work')
  const { isOpen, toggle } = useAccordion()
  const { selectedProject, openModal, closeModal } = useProjectModal()

  const filtered = projects.items.filter((p) => p.category === activeTab)

  const grouped = useMemo<CompanyGroup[] | null>(() => {
    if (activeTab === 'side') return null
    return filtered.reduce<CompanyGroup[]>((acc, p) => {
      const last = acc[acc.length - 1]
      if (last && last.company === (p.company ?? '')) {
        last.projects.push(p)
      } else {
        acc.push({ company: p.company ?? '', projects: [p] })
      }
      return acc
    }, [])
  }, [filtered, activeTab])

  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-accent text-sm font-mono mb-4 tracking-widest uppercase"
        >
          Projects
        </motion.p>

        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8"
        >
          {projects.heading}
        </motion.h2>

        {/* Tab */}
        <motion.div
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-8 flex gap-1 rounded-lg border border-border bg-muted p-1 w-fit"
        >
          {(['work', 'side'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab === 'work' ? '경력' : '사이드 프로젝트'}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          {grouped ? (
            <div className="flex flex-col">
              {grouped.map((group, gi) => (
                <div key={group.company} className={gi > 0 ? 'mt-10' : ''}>
                  <motion.div
                    custom={0.1 + gi * 0.12}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                  >
                    <CompanyHeader name={group.company} />
                  </motion.div>
                  <div className="flex flex-col gap-6">
                    {group.projects.map((project, i) => (
                      <motion.div
                        key={project.id}
                        custom={0.15 + gi * 0.12 + i * 0.08}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeUp}
                      >
                        <ProjectCard
                          project={project}
                          isOpen={isOpen(project.id)}
                          onToggle={toggle}
                          onDetail={openModal}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  custom={0.1 + i * 0.08}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeUp}
                >
                  <ProjectCard
                    project={project}
                    isOpen={isOpen(project.id)}
                    onToggle={toggle}
                    onDetail={openModal}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  )
}
