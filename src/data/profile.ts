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
  whatsappNumber: string
}

const env = import.meta.env

export const profile: Profile = {
  name: env.VITE_PROFILE_NAME ?? 'VinnDeev',
  descriptor: env.VITE_PROFILE_DESCRIPTOR ?? 'Fullstack Web Developer',
  bio: env.VITE_PROFILE_BIO ?? 'Membangun website modern, produk digital, dan eksperimen web.',
  image: {
    src: env.VITE_PROFILE_IMAGE ?? '/avatar.png',
    alt: env.VITE_PROFILE_IMAGE_ALT ?? 'Logo VinnDeev',
  },
  contactEmail: env.VITE_CONTACT_EMAIL ?? 'vinndeev@gmail.com',
  whatsappNumber: env.VITE_WHATSAPP_NUMBER ?? '0895351125725',
}
