interface CompanyHeaderProps {
  name: string
}

export const CompanyHeader = ({ name }: CompanyHeaderProps) => (
  <div className="relative pl-8 mb-5">
    <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-background text-accent">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    </span>
    <p className="text-lg font-semibold text-foreground">{name}</p>
  </div>
)
