import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductBasket } from "@/components/product-basket"
import { AboutCompany } from "@/components/about-company"
import { VideosSection } from "@/components/videos-section"
import { BlogsSection } from "@/components/blogs-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

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
