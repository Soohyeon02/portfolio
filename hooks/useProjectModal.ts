'use client'

import { useState } from 'react'
import type { ProjectItem } from '@/types'

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const openModal = (project: ProjectItem) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return { selectedProject, openModal, closeModal }
}
