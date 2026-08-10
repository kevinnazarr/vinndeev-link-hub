import type { LucideIcon } from 'lucide-react'
import { FolderGit2, Globe } from 'lucide-react'

export interface FeaturedLink {
  title: string
  description: string
  url: string
  icon?: LucideIcon
}

export const featuredLinks: FeaturedLink[] = [
  {
    title: 'Portfolio',
    description: 'Proyek pilihan & studi kasus',
    url: 'https://kevinnazar.my.id',
    icon: FolderGit2,
  },
  {
    title: 'VinnDeev Website',
    description: 'Website resmi & layanan',
    url: 'https://vinndeev.site',
    icon: Globe,
  },
]
