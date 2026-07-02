export interface Section {
  id: string
  label: string
}

export interface ProjectItem {
  id: string
  name: string
  period: string
  role: string
  skills: string[]
  summary: string
  tasks: string[]
  detail: string
  category: 'work' | 'side'
}

export interface ContactLink {
  label: string
  href: string
  icon: 'email' | 'github' | 'velog'
}
