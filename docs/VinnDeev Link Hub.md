# VinnDeev Link Hub

> Personal social media and digital link hub for VinnDeev.

**Domain:** `vinndeev.com`  
**Project Name:** `VinnDeev Link Hub`  
**Repository:** `vinndeev-link-hub`  
**Project Type:** Personal Link Hub / Social Link Aggregator  
**Status:** Planning

---

## 1. Project Overview

VinnDeev Link Hub adalah website personal berbasis satu halaman yang berfungsi sebagai pusat seluruh link digital VinnDeev.

Website digunakan sebagai satu URL utama yang dapat ditempatkan di:

- Instagram Bio
- TikTok Bio
- GitHub Profile
- LinkedIn
- YouTube
- WhatsApp
- Discord
- Email Signature
- QR Code
- Platform lainnya

Website harus memberikan pengalaman yang cepat, sederhana, modern, dan personal.

### Core Concept

> **One link. Everything about VinnDeev.**

Website bukan sekadar clone Linktree, tetapi menjadi **digital front door** untuk identity, social media, project, portfolio, dan contact VinnDeev.

---

# 2. Primary Goals

Website harus memungkinkan pengunjung untuk:

1. Mengenal VinnDeev secara singkat.
2. Menemukan social media utama.
3. Mengakses website dan project penting.
4. Menemukan platform profesional dan developer profile.
5. Menghubungi VinnDeev dengan mudah.

### Secondary Goals

- Membangun `vinndeev.com` sebagai central identity URL.
- Memberikan pengalaman mobile-first.
- Memperkuat personal branding VinnDeev.
- Menyediakan fondasi yang mudah dikembangkan di masa depan.

---

# 3. Target Users

### Primary Users

Pengunjung yang datang dari:

- Instagram
- TikTok
- GitHub
- LinkedIn
- YouTube
- Search Engine
- QR Code
- Direct URL

### User Intent

Mayoritas pengunjung kemungkinan menggunakan perangkat mobile dan datang dengan tujuan menemukan link tertentu dengan cepat.

Karena itu:

> **Speed + Clarity > Complexity**

---

# 4. Technology Stack

## Frontend

### React

Digunakan sebagai UI framework utama.

### TypeScript

Wajib digunakan untuk:

- Component props
- Data models
- Social links
- Project links
- Configuration
- Utility functions

### Vite

Digunakan sebagai build tool.

Alasan:

- Fast development server
- Fast build
- Simple architecture
- Cocok untuk static website
- Tidak membutuhkan server-side rendering

### Tailwind CSS v4

Digunakan sebagai styling framework utama.

---

## Supporting Libraries

### Lucide React

Digunakan untuk icon.

Contoh:

- GitHub
- Instagram
- LinkedIn
- Mail
- Globe
- ExternalLink
- ArrowUpRight

Hindari penggunaan icon library yang terlalu besar apabila tidak diperlukan.

---

# 5. Architecture Principles

Project harus mengikuti prinsip:

- Simplicity First
- Component-Based Architecture
- Separation of Data and UI
- Single Source of Truth
- Reusability
- Maintainability
- Performance First
- Mobile First
- Minimal Dependencies

### Data Separation

Data link tidak boleh di-hardcode langsung di banyak component.

Contoh:

```text
src/data/
├── profile.ts
├── social-links.ts
└── featured-links.ts
```

UI membaca data tersebut dan melakukan rendering secara dinamis.

---

# 6. Recommended Project Structure

```text
vinndeev-link-hub/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ProfileHeader/
│   │   ├── SocialLinks/
│   │   ├── LinkCard/
│   │   ├── Section/
│   │   ├── FeaturedLinks/
│   │   ├── ContactCTA/
│   │   └── Footer/
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── social-links.ts
│   │   └── featured-links.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.tsx
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Struktur dapat disesuaikan apabila implementasi aktual membutuhkan perubahan, tetapi complexity harus tetap minimal.

---

# 7. Page Structure

Website menggunakan satu halaman utama.

```text
Profile Header
      ↓
Social Links
      ↓
Featured Projects
      ↓
Contact CTA
      ↓
Footer
```

### Visual Structure

```text
┌──────────────────────────┐
│                          │
│       Profile Image      │
│                          │
│        VinnDeev          │
│   Fullstack Web Developer│
│                          │
│    Short Introduction    │
│                          │
│     Social Icons         │
│                          │
│  ┌────────────────────┐  │
│  │ GitHub          ↗  │  │
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │ Instagram       ↗  │  │
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │ LinkedIn        ↗  │  │
│  └────────────────────┘  │
│                          │
│         Featured         │
│                          │
│  ┌────────────────────┐  │
│  │ VinnDeev Website ↗ │  │
│  └────────────────────┘  │
│                          │
│  ┌────────────────────┐  │
│  │ Portfolio        ↗ │  │
│  └────────────────────┘  │
│                          │
│      Get in Touch        │
│                          │
│         Footer           │
│                          │
└──────────────────────────┘
```

---

# 8. Profile Header

Bagian paling atas harus langsung memberikan identitas.

### Components

#### Profile Image

Ukuran:

```text
80px - 96px
```

Bentuk:

```text
circle
```

#### Name

```text
VinnDeev
```

atau:

```text
Kevin — VinnDeev
```

#### Professional Descriptor

Contoh:

```text
Fullstack Web Developer
```

#### Bio

Contoh:

```text
Building modern websites, digital products, and experiments on the web.
```

Bio maksimal 1–2 kalimat.

---

# 9. Social Links

Social links merupakan salah satu bagian utama website.

Platform yang dapat digunakan:

- GitHub
- Instagram
- LinkedIn
- YouTube
- TikTok
- X
- Discord
- WhatsApp

Tidak semua platform harus ditampilkan.

Prioritaskan:

> Link yang benar-benar aktif dan relevan.

Lebih baik memiliki 4 link berkualitas daripada 10 link yang sebagian tidak digunakan.

---

# 10. Link Card

Komponen utama website adalah reusable `LinkCard`.

### Structure

```text
┌──────────────────────────────────────┐
│ [ICON]    GitHub              ↗     │
└──────────────────────────────────────┘
```

### Characteristics

- Full width
- Large clickable area
- Rounded corners
- Icon di kiri
- Label di tengah
- External link indicator di kanan
- Clear hover state
- Clear focus state

Seluruh card harus clickable.

---

# 11. Featured Links

Tambahkan section:

## Featured

Digunakan untuk menampilkan website, portfolio, atau project utama.

Contoh:

```text
Featured

┌────────────────────────────────────┐
│ VinnDeev Website                   │
│ Official website & services    ↗  │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ Portfolio                          │
│ Selected projects              ↗  │
└────────────────────────────────────┘
```

Rekomendasi:

> 2–4 featured links maksimum.

---

# 12. Contact CTA

Sediakan satu CTA utama.

Contoh:

```text
Have a project in mind?
```

Button:

```text
Get in Touch →
```

CTA dapat mengarah ke:

- Email
- WhatsApp
- Contact page
- Contact form

CTA harus menjadi action paling jelas di bagian bawah halaman.

---

# 13. Design Direction

### Design Personality

```text
Minimal
Modern
Technical
Personal
Premium
```

Website harus terasa seperti:

> **VinnDeev's digital front door**

Bukan seperti:

> Generic Linktree clone.

---

# 14. Design System

## Color System

Gunakan dark-first design.

### Background

```text
#0A0A0A
```

### Surface

```text
#111111
```

### Surface Hover

```text
#181818
```

### Border

```text
#262626
```

### Primary Text

```text
#FAFAFA
```

### Secondary Text

```text
#A1A1AA
```

### Muted Text

```text
#71717A
```

### Accent

Gunakan satu accent color yang konsisten dengan branding VinnDeev.

Alternatif paling aman:

```text
#FFFFFF
```

Gunakan monochrome sebagai foundation dan satu accent sebagai visual highlight apabila diperlukan.

---

# 15. Typography

Gunakan satu font family.

Recommended:

### Option 1

```text
Inter
```

### Option 2

```text
Geist
```

Untuk visual yang lebih modern dan developer-oriented, Geist dapat menjadi pilihan utama.

### Typography Scale

#### Profile Name

```text
32px / 36px
font-weight: 700
```

#### Bio

```text
15px / 24px
font-weight: 400
```

#### Link Title

```text
15px - 16px
font-weight: 500
```

#### Link Description

```text
13px / 20px
```

---

# 16. Spacing System

Gunakan spacing berbasis kelipatan 4.

```text
4
8
12
16
20
24
32
40
48
64
```

Recommended spacing:

```text
Profile → Social
32px

Social item → Social item
12px

Section → Section
40px

Page horizontal padding
20px
```

---

# 17. Layout System

### Container

```text
width: 100%;
max-width: 640px;
margin: 0 auto;
```

### Mobile

```text
padding-inline: 20px;
```

### Desktop

Content tetap dibatasi sekitar:

```text
560px - 640px
```

Jangan membuat content terlalu lebar.

Website harus tetap terasa seperti personal profile page.

---

# 18. Responsive Design

Prioritas:

```text
Mobile
↓
Tablet
↓
Desktop
```

### Mobile

```text
≤ 640px
```

Gunakan full-width layout dengan horizontal padding.

### Desktop

Gunakan centered container dengan maximum width.

Tidak perlu membuat banyak breakpoint.

---

# 19. Interaction Design

Gunakan micro-interaction ringan.

### Hover

Contoh:

```text
translateY(-1px)
```

atau:

```text
scale(1.01)
```

### Transition

```text
150ms - 200ms
```

### Focus

Keyboard focus harus terlihat jelas.

### Avoid

- Excessive animation
- Particle effects
- Cursor animation
- Heavy background animation
- Unnecessary loading animations
- Animation library besar

---

# 20. Background

Gunakan dark background dengan visual enhancement yang sangat subtle.

Konsep:

```text
Dark background
+
Subtle radial gradient
+
Optional subtle noise/grid
```

Background tidak boleh mengalahkan content.

---

# 21. Theme

### Version 1

Gunakan:

> Dark Mode Only

Tidak perlu menambahkan light/dark toggle pada MVP.

Namun design tokens harus dibuat sedemikian rupa sehingga light mode dapat ditambahkan di masa depan jika diperlukan.

---

# 22. Accessibility

Target:

> WCAG 2.2 AA

Wajib:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus state
- Proper `aria-label`
- Accessible color contrast
- Proper image `alt`
- Accessible links
- Clear interactive states

Icon tidak boleh menjadi satu-satunya informasi untuk sebuah action.

---

# 23. SEO

Walaupun website hanya link hub, SEO tetap harus diperhatikan.

### Title

```text
VinnDeev — Web Developer
```

### Meta Description

```text
Explore VinnDeev's social media, projects, portfolio, and other links.
```

### Canonical

```text
https://vinndeev.com
```

### Open Graph

Wajib:

```text
og:title
og:description
og:image
og:url
og:type
```

### Twitter/X Card

```text
twitter:card
twitter:title
twitter:description
twitter:image
```

---

# 24. Favicon

Gunakan favicon sederhana.

Recommended:

```text
V
```

atau logo VinnDeev.

Format:

- SVG
- PNG fallback

---

# 25. Performance

Target:

> Lighthouse Performance ≥ 95

Optimizations:

- Minimal JavaScript
- Optimized images
- Minimal dependencies
- No unnecessary API requests
- No heavy animation libraries
- Avoid unnecessary client-side state
- Avoid unnecessary network requests

Karena konten bersifat static:

> Tidak membutuhkan backend.

---

# 26. Content Architecture

Data harus dipisahkan dari UI.

Contoh:

```text
src/data/

profile.ts
social-links.ts
featured-links.ts
```

### Example Data Model

```ts
interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
  description?: string
  featured?: boolean
}
```

### Featured Link

```ts
interface FeaturedLink {
  title: string
  description: string
  url: string
  icon?: LucideIcon
}
```

Dengan struktur tersebut, perubahan URL atau content tidak membutuhkan perubahan component.

---

# 27. Security

Karena website bersifat static:

- Tidak membutuhkan database.
- Tidak membutuhkan authentication.
- Tidak membutuhkan API secret.
- Tidak membutuhkan server-side credentials.

Hindari penggunaan:

```tsx
dangerouslySetInnerHTML
```

kecuali memang benar-benar diperlukan.

External URLs harus didefinisikan secara eksplisit.

---

# 28. Analytics

Analytics **tidak perlu diimplementasikan pada MVP**.

Fokus awal:

```text
Design
+
UX
+
Performance
+
SEO
```

Analytics dapat ditambahkan setelah website stabil.

Potential options:

- Vercel Analytics
- Google Analytics
- Plausible
- Umami

---

# 29. Deployment

Recommended platform:

> **Vercel**

Deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
Build
   ↓
vinndeev.com
```

Gunakan automatic deployment dari production branch.

---

# 30. Project Constraints

## DO

- Keep architecture simple.
- Use React + TypeScript.
- Use Vite.
- Use Tailwind CSS v4.
- Keep data separate from UI.
- Use reusable components.
- Use semantic HTML.
- Optimize mobile first.
- Prioritize performance.
- Keep dependencies minimal.
- Maintain consistent design tokens.
- Keep the page visually focused.
- Make important links easy to discover.

## DON'T

- Don't use Next.js unless a clear requirement appears.
- Don't add a backend.
- Don't add a database.
- Don't add authentication.
- Don't add a CMS.
- Don't add unnecessary dependencies.
- Don't use heavy animation libraries.
- Don't copy Linktree's UI directly.
- Don't create unnecessary pages.
- Don't overload the page with links.
- Don't sacrifice usability for visual effects.

---

# 31. MVP Scope

MVP hanya membutuhkan:

```text
Profile
│
├── Profile Image
├── Name
├── Professional Descriptor
└── Short Bio
│
├── Social Links
│   ├── GitHub
│   ├── Instagram
│   ├── LinkedIn
│   └── Other active platforms
│
├── Featured
│   ├── VinnDeev Website
│   └── Portfolio / Project
│
├── Contact CTA
│
└── Footer
```

---

# 32. Future Expansion

Fitur berikut **tidak masuk MVP**, tetapi architecture harus memungkinkan pengembangan:

- Light mode
- Analytics
- Link click tracking
- Custom link ordering
- QR code
- Multiple link categories
- Project showcase
- Blog links
- Dynamic link configuration
- Social media statistics
- Custom themes
- Link scheduling

Jangan implementasikan fitur tersebut sebelum benar-benar dibutuhkan.

---

# 33. Success Criteria

## Functionality

- [ ] Semua social links bekerja.
- [ ] Semua external links valid.
- [ ] CTA bekerja.
- [ ] Tidak ada broken link.
- [ ] Responsive di mobile.
- [ ] Responsive di desktop.
- [ ] Keyboard navigation bekerja.

## Design

- [ ] Visual hierarchy jelas.
- [ ] Mobile layout rapi.
- [ ] Desktop layout tidak terlalu kosong.
- [ ] Typography konsisten.
- [ ] Spacing konsisten.
- [ ] Hover state tersedia.
- [ ] Focus state tersedia.
- [ ] Visual identity terasa personal.
- [ ] Tidak terasa seperti clone Linktree.

## Technical

- [ ] React.
- [ ] TypeScript.
- [ ] Vite.
- [ ] Tailwind CSS v4.
- [ ] Component architecture bersih.
- [ ] Data terpisah dari UI.
- [ ] Minimal dependencies.
- [ ] Tidak ada console errors.
- [ ] Tidak ada unnecessary network requests.

## SEO

- [ ] Title.
- [ ] Meta description.
- [ ] Canonical URL.
- [ ] Open Graph.
- [ ] Twitter/X Card.
- [ ] Favicon.
- [ ] robots.txt.
- [ ] sitemap.xml.

## Performance

- [ ] Lighthouse Performance ≥ 95.
- [ ] Optimized assets.
- [ ] Minimal JavaScript.
- [ ] Fast initial load.
- [ ] No unnecessary client-side logic.

---

# 34. Final Product Vision

VinnDeev Link Hub harus menjadi:

> **The single digital entry point for VinnDeev.**

Satu URL yang dapat digunakan di seluruh platform untuk menghubungkan:

```text
VinnDeev
   │
   ├── Social Media
   │
   ├── Projects
   │
   ├── Portfolio
   │
   ├── Websites
   │
   └── Contact
```

Tujuan akhirnya bukan membuat "Linktree versi VinnDeev", tetapi membangun **personal digital hub yang memiliki identitas VinnDeev sendiri**.

---

# 35. Project Identity

| Property | Value |
|---|---|
| Project Name | VinnDeev Link Hub |
| Repository | `vinndeev-link-hub` |
| Domain | `vinndeev.com` |
| Type | Personal Link Hub |
| Framework | React |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Deployment | Vercel |
| Backend | None |
| Database | None |
| Authentication | None |
| Theme | Dark-first |
| Layout | Single Page |
| Design Style | Minimal / Modern / Technical |
| Primary Target | Mobile |
| SEO | Yes |
| Analytics | Future |
| Status | Planning |