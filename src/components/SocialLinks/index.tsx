import { socialLinks } from '../../data/social-links'
import Section from '../Section'

export default function SocialLinks() {
  return (
    <Section id="social" className="mt-8">
      <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.name}
              className="group flex size-14 items-center justify-center rounded-full border border-card-border bg-surface text-on-surface-secondary transition duration-200 hover:-translate-y-px hover:border-primary/40 hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:translate-y-0 active:scale-[0.995]"
            >
              <link.icon
                aria-hidden="true"
                strokeWidth={1.75}
                className="size-6 shrink-0 transition-transform duration-200 group-hover:scale-110"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
