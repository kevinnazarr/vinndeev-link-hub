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
              className="flex size-14 items-center justify-center rounded-full border border-border bg-surface text-secondary transition duration-200 hover:-translate-y-px hover:border-zinc-300 hover:bg-surface-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:translate-y-0 active:scale-[0.995]"
            >
              <link.icon
                aria-hidden="true"
                strokeWidth={1.75}
                className="size-6 shrink-0"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
