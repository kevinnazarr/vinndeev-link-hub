import type { LucideIcon } from 'lucide-react'
import { FolderGit2, Globe } from 'lucide-react'
import { parseJsonArray } from '../lib/utils'

export interface FeaturedLink {
  title: string
  description: string
  url: string
  icon?: LucideIcon
}

interface FeaturedLinkData {
  title: string
  description: string
  url: string
  icon?: string
}

const defaultLinks: FeaturedLinkData[] = [
  {
    title: 'Portfolio',
    description: 'Proyek pilihan & studi kasus',
    url: 'https://kevinnazar.my.id',
    icon: 'folder',
  },
  {
    title: 'VinnDeev Website',
    description: 'Website resmi & layanan',
    url: 'https://vinndeev.site',
    icon: 'globe',
  },
]

const iconByKey: Record<string, LucideIcon> = {
  folder: FolderGit2,
  globe: Globe,
}

export const featuredLinks: FeaturedLink[] = parseJsonArray(
  import.meta.env.VITE_FEATURED_LINKS,
  defaultLinks,
).map((link) => ({ ...link, icon: link.icon ? iconByKey[link.icon] : undefined }))
