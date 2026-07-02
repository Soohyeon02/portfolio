'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS_DATA } from '@/lib/data'
import { useAccordion } from '@/hooks/useAccordion'
import { useProjectModal } from '@/hooks/useProjectModal'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ProjectModal } from '@/components/ui/ProjectModal'

type Tab = 'work' | 'side'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('work')
  const { openId, toggle } = useAccordion()
  const { selectedProject, openModal, closeModal } = useProjectModal()

  const filtered = PROJECTS_DATA.filter((p) => p.category === activeTab)

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
          경험으로 쌓은 결과물
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
                  openId={openId}
                  onToggle={toggle}
                  onDetail={openModal}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  )
}
