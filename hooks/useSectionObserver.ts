'use client'

import { useEffect, useState } from 'react'
import { SECTION_IDS } from '@/lib/constants'

export const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.5 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return { activeSection }
}
