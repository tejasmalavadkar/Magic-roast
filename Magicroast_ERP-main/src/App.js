import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import AboutSection from './components/about-section';
import ProductBasket from './components/product-basket';
import AboutCompany from './components/about-company';
import VideosSection from './components/videos-section';
import BlogsSection from './components/blogs-section';
import { Footer } from './components/footer';
import WhatsAppButton from './components/whatsapp-button';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import QualityPolicyPage from './pages/QualityPolicyPage'; // Import the Quality Policy page

// HomePage component to render the main page content
function HomePage() {
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
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quality-policy" element={<QualityPolicyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
