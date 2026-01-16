import Navbar from '@/components/Navbar'
import ParallexHero from '@/components/ParallaxHero'
import AboutSection from '@/components/AboutSection'
import TechnicalSkills from '@/components/TechnicalSkills'
import ImageCarousel from '@/components/ImageCarousel'
import GallerySection from '@/components/GallerySection'
import ProjectsSection from '@/components/ProjectsSection'
import MottoSection from '@/components/MottoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <ParallexHero />
      <AboutSection />
      <TechnicalSkills />
      <ImageCarousel />
      <GallerySection />
      <ProjectsSection />
      <MottoSection />
      <Footer />
    </main>
  )
}
