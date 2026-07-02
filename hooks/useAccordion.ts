'use client'

import { useState } from 'react'

export const useAccordion = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const isOpen = (id: string) => openIds.has(id)

  return { isOpen, toggle }
}
