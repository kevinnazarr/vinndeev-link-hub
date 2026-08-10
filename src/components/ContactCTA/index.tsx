import { Mail, MessageCircle } from 'lucide-react'
import { profile } from '../../data/profile'
import LinkCard from '../LinkCard'

export default function ContactCTA() {
  // Indonesian mobile numbers start with 0; wa.me uses the international format (62…).
  const waNumber = profile.whatsappNumber.replace(/^0/, '62')

  return (
    <section aria-labelledby="contact-heading" className="mt-10 text-center">
      <h2
        id="contact-heading"
        className="font-heading text-lg font-extrabold tracking-tight text-foreground"
      >
        Punya proyek atau ide?
      </h2>
      <p className="mt-2 text-[15px] leading-6 text-muted">
        Mari wujudkan bersama — dari konsep, desain, hingga peluncuran.
      </p>
      <div className="mt-6 flex flex-col gap-3 text-left">
        <LinkCard
          href={`mailto:${profile.contactEmail}`}
          label="Email"
          description={profile.contactEmail}
          icon={Mail}
        />
        <LinkCard
          href={`https://wa.me/${waNumber}`}
          label="WhatsApp"
          description={profile.whatsappNumber}
          icon={MessageCircle}
        />
      </div>
    </section>
  )
}
