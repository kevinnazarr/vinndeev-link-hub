import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-160 px-5">
      <p className="border-t border-border py-8 text-center text-[13px] leading-5 text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  )
}
