import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionProps {
  id?: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className }: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined

  return (
    <section id={id} aria-labelledby={headingId} className={cn(className)}>
      <h2
        id={headingId}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}
