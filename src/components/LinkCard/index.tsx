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
        'group flex w-full items-center gap-4 rounded-xl border border-border bg-surface px-4 py-4 sm:px-5',
        'transition duration-200',
        'hover:-translate-y-px hover:border-zinc-300 hover:bg-surface-hover',
        'active:translate-y-0 active:scale-[0.995]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground',
        className,
      )}
    >
      <Icon
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-5 shrink-0 text-secondary transition-colors duration-200 group-hover:text-foreground"
      />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-medium leading-6 text-foreground">
          {label}
        </span>
        {description ? (
          <span
            title={description}
            className="mt-0.5 block truncate text-[13px] leading-5 text-muted"
          >
            {description}
          </span>
        ) : null}
      </span>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-4 shrink-0 text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary"
      />
    </a>
  )
}
