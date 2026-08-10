import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import LinkCard from '../LinkCard'

export default function ContactCTA() {
  return (
    <section aria-labelledby="contact-heading" className="mt-10 text-center">
      <h2
        id="contact-heading"
        className="text-lg font-semibold tracking-tight text-foreground"
      >
        Have a project in mind?
      </h2>
      <p className="mt-2 text-[15px] leading-6 text-muted">
        Let&apos;s build something great together.
      </p>
      <div className="mt-6 text-left">
        <LinkCard
          href={`mailto:${profile.contactEmail}`}
          label="Get in Touch"
          description={profile.contactEmail}
          icon={Mail}
        />
      </div>
    </section>
  )
}
