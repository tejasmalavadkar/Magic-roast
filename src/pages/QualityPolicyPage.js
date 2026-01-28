import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function QualityPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f0e3] via-[#fefaf7] to-[#f5e6d3] flex flex-col">
      <Header />
      
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <img 
          src="/slider-33.jpg" 
          alt="Quality Commitment Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Our Quality Commitment
          </h1>
        </div>
      </div>
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-[#d4a84b] mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3921] mb-6">
              Quality is in Every Cup
            </h2>
            <p className="text-lg text-[#6a6a6a] leading-relaxed max-w-3xl mx-auto">
              At MagicRoast Qoffee, our quality policy is rooted in excellence, sustainability, and a passion for perfection. Every bean, every roast, every cup — is crafted with a purpose: to deliver a moment of joy.
            </p>
            <div className="w-24 h-1 bg-[#d4a84b] mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="bg-[#f5e6d3]/50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#5a3921] mb-6 text-center">
              Roasting Quality
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🌱</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Using only organically grown, hand-picked beans.</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🔥</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Expert roasting to preserve aroma & flavor integrity.</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🧪</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Rigorous quality checks at every processing stage.</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">💧</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Maintaining hygiene, freshness, and consistency.</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🌍</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Sustainable and ethical sourcing practices.</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🧑‍🔬</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Continuous training for our roasting experts and baristas.</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-8 h-8 bg-[#d4a84b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">📦</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#5a3921] mb-2">Eco-friendly packaging.</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-[#5a3921] to-[#3d2817] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
            <p className="text-lg leading-relaxed">
              Every sip of MagicRoast Qoffee is a reflection of our promise — a blend of tradition, technology, and love. We do not compromise on quality, because we know you don't compromise on taste.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about"
              className="inline-block bg-gradient-to-r from-[#d4a84b] to-[#c49a3f] text-[#3d2817] px-8 py-3 rounded-full font-semibold hover:from-[#c49a3f] hover:to-[#b48a2f] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to About Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}