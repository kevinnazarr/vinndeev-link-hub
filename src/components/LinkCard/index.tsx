import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Link } from 'lucide-react'
import { cn, isExternalUrl } from '../../lib/utils'

interface LinkCardProps {
  href: string
  label: string
  description?: string
  icon?: LucideIcon
  className?: string
}

export default function LinkCard({
  href,
  label,
  description,
  icon: Icon = Link,
  className,
}: LinkCardProps) {
  const external = isExternalUrl(href)

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      title={label}
      className={cn(
        'group flex w-full items-center gap-4 rounded-card border border-card-border bg-surface px-4 py-4 transition duration-300 sm:px-5',
        'hover:-translate-y-px hover:border-primary/50 hover:bg-surface-hover',
        'active:translate-y-0 active:scale-[0.995]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground',
        className,
      )}
    >
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-5 shrink-0 text-on-surface-secondary transition-colors duration-300 group-hover:text-primary"
      />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-heading text-[15px] font-extrabold leading-6 text-on-surface">
          {label}
        </span>
        {description ? (
          <span
            title={description}
            className="mt-0.5 block truncate font-sans text-[13px] leading-5 text-on-surface-secondary"
          >
            {description}
          </span>
        ) : null}
      </span>
      <span
        aria-hidden="true"
        className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-accent dark:text-on-surface"
      >
        <ArrowUpRight aria-hidden="true" strokeWidth={2} className="size-4" />
      </span>
    </a>
  )
}
