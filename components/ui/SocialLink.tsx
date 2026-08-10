import type { ContactLink } from '@/lib/schemas'

const icons = {
  email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  velog: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3zm6.883 6.25c.428 0 .77.175.993.486l3.398 7.393 2.893-7.393c.175-.428.516-.486.798-.486.486 0 .875.389.875.875 0 .117-.03.233-.059.311L15.43 17.25c-.175.428-.516.633-.916.633-.34 0-.682-.175-.857-.544l-3.398-7.45-1.4 3.692c-.11.274-.33.497-.648.497-.34 0-.66-.204-.77-.544l-1.4-3.546-.527 1.38c-.117.282-.34.497-.67.497-.37 0-.663-.282-.663-.663 0-.107.03-.214.059-.292l1.25-3.226c.175-.428.516-.633.916-.633.34 0 .682.175.857.544l1.4 3.546.856-2.244c.175-.428.516-.633.916-.633.34 0 .682.175.857.544l3.398 7.45 3.25-7.884c.175-.428.516-.633.916-.633z" />
    </svg>
  ),
}

interface SocialLinkProps {
  link: ContactLink
}

export const SocialLink = ({ link }: SocialLinkProps) => {
  const isExternal = !link.href.startsWith('mailto:')

  return (
    <a
      href={link.href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:bg-muted"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-accent/10 group-hover:text-accent">
        {icons[link.icon]}
      </span>
      <span className="text-sm font-medium text-foreground">{link.label}</span>
      <svg
        className="ml-auto shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
