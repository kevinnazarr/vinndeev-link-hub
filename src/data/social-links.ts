import type { LucideIcon } from 'lucide-react'
import GithubIcon from '../components/icons/GithubIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import LinkedinIcon from '../components/icons/LinkedinIcon'
import TikTokIcon from '../components/icons/TikTokIcon'

export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
  description?: string
}


export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/kevinnazarr',
    icon: GithubIcon,
    description: 'Kode, project & open source',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevinnazar',
    icon: LinkedinIcon,
    description: 'Profil profesional & pengalaman',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vinndeev',
    icon: InstagramIcon,
    description: 'Foto & konten di balik layar',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@vinndeev',
    icon: TikTokIcon,
    description: 'Video pendek & klip',
  },
]
