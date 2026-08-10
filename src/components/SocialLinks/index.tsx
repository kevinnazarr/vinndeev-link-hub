import { socialLinks } from '../../data/social-links'
import LinkCard from '../LinkCard'
import Section from '../Section'

export default function SocialLinks() {
  return (
    <Section id="social" title="Social" className="mt-8">
      <ul className="flex flex-col gap-3">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <LinkCard
              href={link.url}
              label={link.name}
              description={link.description}
              icon={link.icon}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
