import type { LucideIcon } from 'lucide-react'
import { Link } from 'lucide-react'
import GithubIcon from '../components/icons/GithubIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import LinkedinIcon from '../components/icons/LinkedinIcon'
import TikTokIcon from '../components/icons/TikTokIcon'
import { parseJsonArray } from '../lib/utils'

export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
  description?: string
}

interface SocialLinkData {
  name: string
  url: string
  description?: string
}

const defaultLinks: SocialLinkData[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/kevinnazarr',
    description: 'Kode, project & open source',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevinnazar',
    description: 'Profil profesional & pengalaman',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vinndeev',
    description: 'Foto & konten di balik layar',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@vinndeev',
    description: 'Video pendek & klip',
  },
]

const iconByPlatform: Record<string, LucideIcon> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
}

export const socialLinks: SocialLink[] = parseJsonArray(
  import.meta.env.VITE_SOCIAL_LINKS,
  defaultLinks,
).map((link) => ({ ...link, icon: iconByPlatform[link.name] ?? Link }))
