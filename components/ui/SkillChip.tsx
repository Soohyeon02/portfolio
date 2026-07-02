interface SkillChipProps {
  label: string
}

export const SkillChip = ({ label }: SkillChipProps) => {
  return (
    <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border">
      {label}
    </span>
  )
}
