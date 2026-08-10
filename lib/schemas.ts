import { z } from 'zod'

const ContactLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.enum(['email', 'github', 'velog']),
})

const ProjectItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  period: z.string(),
  role: z.string(),
  skills: z.array(z.string()),
  summary: z.string(),
  tasks: z.array(z.string()),
  detail: z.string(),
  category: z.enum(['work', 'side']),
  company: z.string().optional(),
})

const HeroSchema = z.object({
  eyebrow: z.string(),
  name: z.string(),
  intro: z.string(),
  githubUrl: z.string(),
})

const AboutSchema = z.object({
  heading: z.string(),
  paragraphs: z.array(z.string()),
})

const ProjectsSchema = z.object({
  heading: z.string(),
  items: z.array(ProjectItemSchema),
})

const ContactSchema = z.object({
  heading: z.string(),
  subheading: z.string(),
  links: z.array(ContactLinkSchema),
})

export const PortfolioSchema = z.object({
  version: z.number().int().positive(),
  updatedAt: z.string().datetime(),
  hero: HeroSchema,
  about: AboutSchema,
  projects: ProjectsSchema,
  contact: ContactSchema,
})

export type PortfolioContent = z.infer<typeof PortfolioSchema>
export type HeroContent = z.infer<typeof HeroSchema>
export type AboutContent = z.infer<typeof AboutSchema>
export type ProjectsContent = z.infer<typeof ProjectsSchema>
export type ContactContent = z.infer<typeof ContactSchema>
export type ProjectItem = z.infer<typeof ProjectItemSchema>
export type ContactLink = z.infer<typeof ContactLinkSchema>
