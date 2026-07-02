'use client'

import { useState } from 'react'

export const useAccordion = () => {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return { openId, toggle }
}
