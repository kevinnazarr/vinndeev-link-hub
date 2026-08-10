# 🔗 VinnDeev Link Hub

VinnDeev Link Hub adalah website personal satu halaman yang menjadi pusat berbagai tautan sosial media, project, portfolio, dan kontak VinnDeev.

Didesain mobile-first dengan fokus pada kecepatan, kesederhanaan, dan personal branding.

🌐 **Domain:** https://vinndeev.com

---

## 📸 Preview

![Preview VinnDeev Link Hub](public/privew.png)

---

## ✨ Fitur

- **Semua data via `.env`** — profil, kontak, tautan sosial, dan tautan unggulan dikelola dari satu file, tanpa perlu menyentuh kode.
- **Ikon sosial berwarna brand solid** — GitHub, LinkedIn, Instagram, TikTok (SVG custom di `src/components/icons/`).
- **Dark mode otomatis** — mengikuti preferensi sistem (`prefers-color-scheme`).
- **Skeleton loading** — tampilan placeholder saat halaman pertama dimuat.
- **Background grid animasi** — grid garis + titik accent yang bergeser halus, plus efek hover kartu dengan panah berputar 45°.

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
| --------- | -------- |
| [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev) | UI framework. |
| [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Type-safe JavaScript untuk kode yang lebih aman. |
| [![Vite](https://img.shields.io/badge/Vite-9135FF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev) | Build tool & development server. |
| [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com) | Utility-first CSS framework (v4, design system via `@theme`). |
| [![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev) | Icon library (ikon kartu unggulan). |
| [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org) | Code linting untuk menjaga kualitas kode. |

### 🎨 Desain & Tema

- **Background utama** — warna brand `primary` (violet `#5b3eff`) dengan teks putih.
- **Kartu** — putih solid dengan teks gelap, hover lavender lembut.
- **Font** — Bricolage Grotesque (judul, extra bold), Hanken Grotesk (body), JetBrains Mono (mono).
- **Token & dark mode** — didefinisikan di `src/index.css` (`@theme` + override via `prefers-color-scheme`).

---

## 📦 Instalasi

Clone repository lalu install dependency:

```bash
git clone https://github.com/kevinnazarr/vinndeev-link-hub.git
cd vinndeev-link-hub
npm install
```

Setelah itu, buat file `.env` — lihat bagian **Konfigurasi Data** di bawah.

---

## ⚙️ Konfigurasi Data (.env)

Seluruh data website (meta SEO, profil, kontak, tautan sosial, dan tautan unggulan) dikelola melalui file `.env` di root project. File ini **tidak ikut ter-commit** ke git, jadi setelah clone kamu perlu membuatnya sendiri (`.env.example` tidak disediakan).

Buat file `.env` lalu isi dengan data kamu (sesuaikan semua nilai):

```env
# Meta situs
VITE_SITE_TITLE=Nama Kamu — Web Developer
VITE_SITE_DESCRIPTION=Deskripsi singkat situsmu.
VITE_SITE_URL=https://domainmu.com
VITE_OG_IMAGE=https://domainmu.com/og-image.png

# Profil
VITE_PROFILE_NAME=Nama Kamu
VITE_PROFILE_DESCRIPTOR=Fullstack Web Developer
VITE_PROFILE_BIO=Bio singkat tentang kamu.
VITE_PROFILE_IMAGE=/avatar.png
VITE_PROFILE_IMAGE_ALT=Logo Nama Kamu

# Kontak
VITE_CONTACT_EMAIL=emailkamu@gmail.com
VITE_WHATSAPP_NUMBER=08xxxxxxxxxx

# Tautan sosial (JSON array; name harus cocok dengan ikon yang tersedia: GitHub, LinkedIn, Instagram, TikTok)
VITE_SOCIAL_LINKS=[{"name":"GitHub","url":"https://github.com/username"},{"name":"Instagram","url":"https://www.instagram.com/username"}]

# Tautan unggulan (JSON array; icon: folder | globe)
VITE_FEATURED_LINKS=[{"title":"Portfolio","description":"Proyek pilihan & studi kasus","url":"https://domainmu.com","icon":"folder"}]
```

> 💡 **Tanpa file `.env`**, website tetap berjalan menggunakan data bawaan (default) yang ada di dalam kode — tinggal jalankan `npm run dev`.
>
> 💡 Ikon sosial yang tersedia: `GitHub`, `LinkedIn`, `Instagram`, `TikTok`. Platform lain tetap bisa ditambahkan — otomatis memakai ikon link default.
>
> 💡 **Foto profil & favicon** — letakkan gambar di `public/avatar.png` (ikon sosial & favicon memakai path ini).

---

## 🚀 Menjalankan Project

Jalankan development server:

```bash
npm run dev
```

Project dapat dibuka melalui URL localhost yang ditampilkan oleh Vite.

Script lain yang tersedia:

```bash
npm run build    # Build produksi (tsc + vite build)
npm run lint     # Menjalankan ESLint
npm run preview  # Preview hasil build
```

---

## 📁 Struktur Project

```text
vinndeev-link-hub/
├── docs/
├── public/
│   ├── avatar.png              ← foto profil + favicon
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── icons/              ← SVG brand (GithubIcon, LinkedinIcon, InstagramIcon, TikTokIcon)
│   │   ├── LinkCard/           ← kartu tautan unggulan & kontak
│   │   ├── SocialLinks/        ← ikon sosial lingkaran
│   │   ├── FeaturedLinks/      ← daftar tautan unggulan
│   │   ├── ContactCTA/         ← CTA Email & WhatsApp
│   │   ├── ProfileHeader/      ← avatar + nama + bio
│   │   ├── PageSkeleton/       ← skeleton loading
│   │   ├── Section/            ← wrapper section
│   │   └── Footer/
│   ├── data/                   ← baca data dari .env (profil, sosial, unggulan)
│   ├── layouts/
│   │   └── MainLayout.tsx      ← layout + background grid animasi
│   ├── lib/
│   │   └── utils.ts            ← helper (parseJsonArray, dst.)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               ← design system (@theme, token, dark mode)
├── index.html
├── .env                        ← konfigurasi data (buat sendiri, lihat Konfigurasi Data)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Penjelasan folder penting:

```text
📁 src/components  → Seluruh komponen UI
📁 src/components/icons → Ikon brand berwarna solid (SVG custom)
📁 src/data        → Pemetaan data dari .env
📁 src/layouts     → Layout halaman & dekorasi background
📁 src/lib         → Helper/fungsi utilitas
📁 public          → File statis publik (avatar, robots.txt, sitemap.xml)
📁 docs            → Dokumentasi project
```

---

## 📄 License

License belum ditentukan.
