'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export const ScrollToTop = () => {
  const [mounted, setMounted] = useState(false)
  const { visible, scrollToTop } = useScrollToTop()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border text-foreground/70 hover:text-foreground shadow-md transition-colors cursor-pointer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
