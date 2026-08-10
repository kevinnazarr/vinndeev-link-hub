import ContactCTA from './components/ContactCTA'
import FeaturedLinks from './components/FeaturedLinks'
import ProfileHeader from './components/ProfileHeader'
import SocialLinks from './components/SocialLinks'
import MainLayout from './layouts/MainLayout'

function App() {
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
