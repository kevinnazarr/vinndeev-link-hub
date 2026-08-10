export interface ProfileImage {
  src: string
  alt: string
}

export interface Profile {
  name: string
  descriptor: string
  bio: string
  image: ProfileImage
  contactEmail: string
  /** WhatsApp number as the user writes it (0-prefixed); the wa.me URL is derived from it. */
  whatsappNumber: string
}

export const profile: Profile = {
  name: 'VinnDeev',
  descriptor: 'Fullstack Web Developer',
  bio: 'Membangun website modern, produk digital, dan eksperimen web.',
  image: {
    src: '/avatar.png',
    alt: 'Logo VinnDeev',
  },
  contactEmail: 'vinndeev@gmail.com',
  whatsappNumber: '0895351125725',
}
