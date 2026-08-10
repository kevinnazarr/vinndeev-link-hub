import { profile } from '../../data/profile'

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <img
        src={profile.image.src}
        alt={profile.image.alt}
        width={96}
        height={96}
        className="size-24 rounded-full border border-border object-cover"
      />
      <h1 className="mt-5 font-heading text-[32px] font-extrabold leading-9 tracking-tight text-foreground">
        {profile.name}
      </h1>
      <p className="mt-2 text-[15px] font-medium leading-6 text-secondary">
        {profile.descriptor}
      </p>
      <p className="mt-3 max-w-md text-[15px] leading-6 text-muted">{profile.bio}</p>
    </header>
  )
}
