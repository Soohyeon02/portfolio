import { getPortfolioContent } from '@/lib/content'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const revalidate = 3600

export default async function Home() {
  const content = await getPortfolioContent()

  return (
    <>
      <HeroSection hero={content.hero} />
      <AboutSection about={content.about} />
      <ProjectsSection projects={content.projects} />
      <ContactSection contact={content.contact} />
    </>
  )
}
