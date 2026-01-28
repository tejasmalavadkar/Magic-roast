import { Header } from "./src/components/header"
import { HeroSection } from "./src/components/hero-section"
import { AboutSection } from "./src/components/about-section"
import { ProductBasket } from "./src/components/product-basket"
import { AboutCompany } from "./src/components/about-company"
import { VideosSection } from "./src/components/videos-section"
import { BlogsSection } from "./src/components/blogs-section"
import { Footer } from "./src/components/footer"
import { WhatsAppButton } from "./src/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductBasket />
      <AboutCompany />
      <VideosSection />
      <BlogsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
