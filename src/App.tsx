import { useEffect, useState } from 'react'
import ContactCTA from './components/ContactCTA'
import FeaturedLinks from './components/FeaturedLinks'
import PageSkeleton from './components/PageSkeleton'
import ProfileHeader from './components/ProfileHeader'
import SocialLinks from './components/SocialLinks'
import MainLayout from './layouts/MainLayout'

/** Minimal skeleton display time so the loading state stays perceptible. */
const SKELETON_MS = 400

function useMinDisplay(ms: number): boolean {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), ms)
    return () => clearTimeout(timer)
  }, [ms])
  return ready
}

function App() {
  const ready = useMinDisplay(SKELETON_MS)

  return (
    <MainLayout>
      {ready ? (
        <div className="vd-fade-in">
          <ProfileHeader />
          <SocialLinks />
          <FeaturedLinks />
          <ContactCTA />
        </div>
      ) : (
        <PageSkeleton />
      )}
    </MainLayout>
  )
}

export default App
