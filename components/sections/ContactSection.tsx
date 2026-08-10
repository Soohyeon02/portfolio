'use client'

import { motion } from 'framer-motion'
import { SocialLink } from '@/components/ui/SocialLink'
import type { ContactContent } from '@/lib/schemas'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

interface ContactSectionProps {
  contact: ContactContent
}

export const ContactSection = ({ contact }: ContactSectionProps) => {
  return (
    <section
      id="contact"
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
          Contact
        </motion.p>

        <motion.h2
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 whitespace-pre-line"
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-base text-muted-foreground mb-10 leading-7"
        >
          {contact.subheading}
        </motion.p>

        <div className="flex flex-col gap-3">
          {contact.links.map((link, i) => (
            <motion.div
              key={link.icon}
              custom={0.3 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <SocialLink link={link} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
