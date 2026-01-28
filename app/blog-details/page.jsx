import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function BlogDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f0e3]">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-80 md:h-[32rem] w-full overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f0e3]/10 via-transparent to-[#5a3921]/5 z-10"></div>
              <img 
                src="/blog.jpg" 
                alt="Coffee Beans Types" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-6 right-8 z-20">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <span className="text-white font-inter font-medium text-sm">Types of Coffee Beans</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-[#6a6a6a] mb-6">
                <span className="bg-[#f5e6d3] px-3 py-1 rounded font-poppins font-medium text-[#5a3921]">
                  Coffee
                </span>
                <span className="font-inter font-normal">Dec 29, 2024</span>
                <span className="font-inter font-normal">Admin</span>
                <span className="font-inter font-normal">•</span>
                <span className="font-inter font-normal text-[#8a8a8a]">8 min read</span>
              </div>
              
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-poppins font-bold">
                TYPES OF COFFEE BEANS
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-[#6a6a6a] leading-relaxed font-inter">
                  <strong className="font-poppins">TYPES OF COFFEE BEANS</strong>
                  
                  <strong className="font-poppins">1. Arabica (Coffea Arabica)</strong> Global Share: 60–65 percent Altitude Range: 900–2,000 meters Caffeine Level: Low Bean Shape: Oval with a curved crease Characteristics Arabica is considered the highest-quality coffee species. It contains more natural sugars and aromatic compounds, resulting in a smooth, sweet, and complex flavor profile. Flavor Notes Fruity, floral, sweet, chocolatey, bright acidity. Where It's Grown Brazil, Colombia, Ethiopia, Guatemala, Costa Rica, Kenya, India. Best Uses Specialty coffee, single-origin beans, high-quality blends, light to medium roasts. 
                  
                  <strong className="font-poppins">2. Robusta (Coffea Canephora)</strong> Global Share: 35–40 percent Altitude Range: 0–800 meters Caffeine Level: High Bean Shape: Round with a straight crease Characteristics Robusta plants are hardy, disease-resistant, and high-yielding. The beans have a strong, bold flavor and high bitterness. Flavor Notes Earthy, nutty, strong, heavy-bodied, low acidity. Where It's Grown Vietnam, Brazil, Indonesia, Uganda, India. Best Uses Instant coffee, espresso blends (for thick crema), strong caffeinated products, dark roasts. 
                  
                  <strong className="font-poppins">3. Liberica (Coffea Liberica)</strong> Global Share: Less than 2 percent Altitude Range: 200–600 meters Caffeine Level: Medium to low Bean Shape: Large and irregular, almond-shaped Characteristics Liberica is a rare species with a bold, unconventional flavor. It has a strong regional presence in Southeast Asia. Flavor Notes Smoky, woody, floral, slightly fruity. Where It's Grown Philippines, Malaysia, Indonesia. Best Uses Regional specialties, unique blends, consumers who prefer bold and unconventional flavors. 
                  
                  <strong className="font-poppins">4. Excelsa (Coffea Excelsa)</strong> Global Share: Around 1 percent Altitude Range: 800–1,300 meters Caffeine Level: Moderate Bean Shape: Small and elongated Characteristics Excelsa is technically a variety of Liberica but has distinct flavor qualities. It is valued for adding brightness and depth to blends. Flavor Notes Tart, fruity, wine-like acidity, tropical fruit notes. Where It's Grown Vietnam, Philippines, Southeast Asia. Best Uses Specialty blends, enhancing complexity, medium roasts.
                </p>
              </div>
            </div>
            
            {/* Back to Blogs button */}
            <div className="px-8 pb-8">
              <Link 
                to="/blogs"
                className="inline-flex items-center gap-2 text-[#5a3921] hover:text-[#d4a84b] transition-colors font-medium"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}