'use client'

import { motion } from 'framer-motion'
import { CONTACT_LINKS } from '@/lib/data'
import { SocialLink } from '@/components/ui/SocialLink'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

export const ContactSection = () => {
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
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
        >
          좋은 코드는 끝이 아니라,
          <br />
          좋은 서비스의 시작이라고 생각합니다.
        </motion.h2>

        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-base text-muted-foreground mb-10 leading-7"
        >
          함께 더 나은 서비스를 만들어갈 기회를 기대합니다.
        </motion.p>

        <div className="flex flex-col gap-3">
          {CONTACT_LINKS.map((link, i) => (
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
