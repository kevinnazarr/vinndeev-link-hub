import type { LucideIcon } from 'lucide-react'
import { Briefcase, Camera, GitBranch, Mail, MessageCircle, Music2 } from 'lucide-react'

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
    description: 'Code, projects & open source',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vinndeev',
    icon: Camera,
    description: 'Photos & behind the scenes',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kevinnazar',
    icon: Briefcase,
    description: 'Professional profile & experience',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@vinndeev',
    icon: Music2,
    description: 'Short videos & clips',
  },
  {
    name: 'Email',
    url: 'mailto:vinndeev@gmail.com',
    icon: Mail,
    description: 'Send me an email',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/62895351125725',
    icon: MessageCircle,
    description: 'Chat on WhatsApp',
  },
]
