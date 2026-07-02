import {
  SiVuedotjs,
  SiReact,
  SiTypescript,
  SiPython,
  SiNestjs,
  SiPrisma,
  SiPhp,
  SiSocketdotio,
  SiReactquery,
  SiZod,
  SiTailwindcss,
  SiSass,
  SiStorybook,
  SiExpo,
  SiXcode,
  SiJquery,
  SiAxios,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

interface SkillIconMeta {
  icon: IconType
  color: string
  darkColor?: string
}

export const SKILL_ICON_MAP: Record<string, SkillIconMeta> = {
  'Vue': { icon: SiVuedotjs, color: '#4FC08D' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'React Native': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'NestJS': { icon: SiNestjs, color: '#E0234E' },
  'Prisma': { icon: SiPrisma, color: '#5A67D8' },
  'PHP': { icon: SiPhp, color: '#777BB4' },
  'Socket.IO': { icon: SiSocketdotio, color: '#010101', darkColor: '#FFFFFF' },
  'TanStack Query': { icon: SiReactquery, color: '#FF4154' },
  'Zod': { icon: SiZod, color: '#3E67B1' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'SCSS': { icon: SiSass, color: '#CC6699' },
  'Storybook': { icon: SiStorybook, color: '#FF4785' },
  'Expo': { icon: SiExpo, color: '#000020', darkColor: '#FFFFFF' },
  'Xcode': { icon: SiXcode, color: '#147EFB' },
  'jQuery': { icon: SiJquery, color: '#0769AD' },
  'Axios': { icon: SiAxios, color: '#5A29E4' },
}
