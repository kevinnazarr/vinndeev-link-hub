import { useEffect } from 'react'
import ContactCTA from './components/ContactCTA'
import FeaturedLinks from './components/FeaturedLinks'
import ProfileHeader from './components/ProfileHeader'
import SocialLinks from './components/SocialLinks'
import MainLayout from './layouts/MainLayout'

/** How long the static skeleton overlay stays visible after mount. */
const SKELETON_MS = 200

/**
 * The skeleton is static HTML in index.html (outside #root) so it paints at
 * first contentful paint. Once React has mounted, remove it to reveal the app.
 */
function useRemoveSkeleton(ms: number): void {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('vd-skeleton')?.remove()
    }, ms)
    return () => clearTimeout(timer)
  }, [ms])
}

function App() {
  useRemoveSkeleton(SKELETON_MS)

  return (
    <MainLayout>
      <ProfileHeader />
      <SocialLinks />
      <FeaturedLinks />
      <ContactCTA />
    </MainLayout>
  )
}

export default App
