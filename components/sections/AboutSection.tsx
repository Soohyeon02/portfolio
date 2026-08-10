'use client'

import { motion } from 'framer-motion'
import type { AboutContent } from '@/lib/schemas'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

interface AboutSectionProps {
  about: AboutContent
}

export const AboutSection = ({ about }: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl w-full">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-accent text-sm font-mono mb-4 tracking-widest uppercase"
        >
          About
        </motion.p>

        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12 whitespace-pre-line"
        >
          {about.heading}
        </motion.h2>

        <div className="flex flex-col gap-6">
          {about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              custom={0.2 + i * 0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="text-base md:text-lg leading-8 text-muted-foreground"
            >
              {renderBold(paragraph)}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
