'use client'

import { useEffect, useState } from 'react'

export const useScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById('hero')
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return { visible, scrollToTop }
}
