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
    description: 'Selected projects & case studies',
    url: 'https://kevinnazar.my.id',
    icon: FolderGit2,
  },
  {
    title: 'VinnDeev Website',
    description: 'Official website & services',
    url: 'https://vinndeev.site',
    icon: Globe,
  },
]
