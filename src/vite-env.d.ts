/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_TITLE?: string
  readonly VITE_SITE_DESCRIPTION?: string
  readonly VITE_SITE_URL?: string
  readonly VITE_OG_IMAGE?: string
  readonly VITE_PROFILE_NAME?: string
  readonly VITE_PROFILE_DESCRIPTOR?: string
  readonly VITE_PROFILE_BIO?: string
  readonly VITE_PROFILE_IMAGE?: string
  readonly VITE_PROFILE_IMAGE_ALT?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_WHATSAPP_NUMBER?: string
  readonly VITE_SOCIAL_LINKS?: string
  readonly VITE_FEATURED_LINKS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
