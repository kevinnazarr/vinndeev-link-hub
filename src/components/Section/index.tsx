import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionProps {
  id?: string
  /** Optional section heading. Omit to render a title-less section. */
  title?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className }: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn(className)}
    >
      {title ? (
        <h2
          id={headingId}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-muted"
        >
          {title}
        </h2>
      ) : null}
      <div className={title ? 'mt-4' : undefined}>{children}</div>
    </section>
  )
}
