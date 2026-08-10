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
}

export const profile: Profile = {
  name: 'VinnDeev',
  descriptor: 'Fullstack Web Developer',
  bio: 'Building modern websites, digital products, and experiments on the web.',
  image: {
    src: '/avatar.svg',
    alt: 'VinnDeev profile picture',
  },
  contactEmail: 'vinndeev@gmail.com',
}
