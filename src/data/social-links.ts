import type { LucideIcon } from 'lucide-react'
import { Briefcase, Camera, GitBranch, Music2 } from 'lucide-react'

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
    icon: GitBranch,
    description: 'Kode, project & open source',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vinndeev',
    icon: Camera,
    description: 'Foto & konten di balik layar',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevinnazar',
    icon: Briefcase,
    description: 'Profil profesional & pengalaman',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@vinndeev',
    icon: Music2,
    description: 'Video pendek & klip',
  },
]
