import { featuredLinks } from '../../data/featured-links'
import LinkCard from '../LinkCard'
import Section from '../Section'

export default function FeaturedLinks() {
  return (
    <Section id="featured" title="Unggulan" className="mt-10">
      <ul className="flex flex-col gap-3">
        {featuredLinks.map((link) => (
          <li key={link.title}>
            <LinkCard
              href={link.url}
              label={link.title}
              description={link.description}
              icon={link.icon}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
