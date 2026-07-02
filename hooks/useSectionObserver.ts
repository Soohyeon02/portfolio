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
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
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
