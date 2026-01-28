import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f0e3]">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#5a3921] font-poppins font-extrabold mb-2">
              BLOGS & ARTICLES
            </h1>
            <div className="w-24 h-1 bg-[#d4a84b] mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-lg mx-auto border border-[#f0e6d3] hover:shadow-2xl transition-all duration-300">
            <div className="h-40 overflow-hidden rounded-t-xl bg-gray-200">
              <img 
                src="/blog.jpg" 
                alt="Coffee Beans Types" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-[#8a8a8a] mb-3">
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#d4a84b]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-inter font-medium">Dec 29, 2024</span>
                </div>
                <span className="text-[#d4a84b]">•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#d4a84b]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-inter font-medium">Admin</span>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 font-poppins font-extrabold leading-tight">
                TYPES OF COFFEE BEANS
              </h2>
              
              <div className="space-y-3">
                <div className="bg-[#fdf8f0] rounded-lg p-3 border border-[#f5e6d3]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-8 h-8 rounded-full bg-[#d4a84b] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1a1a1a] mb-2 font-montserrat font-bold text-base">Arabica</h3>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#8b5a2b]"></div>
                          <span className="text-[#6a6a6a] font-medium">60–65% Share</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#6f4e37]"></div>
                          <span className="text-[#6a6a6a] font-medium">900–2,000m Altitude</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#d4a84b]"></div>
                          <span className="text-[#6a6a6a] font-medium">Low Caffeine</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#5a3921]"></div>
                          <span className="text-[#6a6a6a] font-medium">Premium Quality</span>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-[#f0e6d3]">
                        <p className="text-[#6a6a6a] text-sm">
                          <span className="font-semibold text-[#5a3921]">Flavor Profile:</span> Fruity, floral, sweet with bright acidity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#f0e6d3] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#d4a84b]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                    </svg>
                    <span className="text-[#6a6a6a] text-xs font-inter font-medium">Coffee Guide</span>
                  </div>
                  <span className="text-[#d4a84b] text-xs">•</span>
                  <span className="text-[#8a8a8a] text-xs font-inter">5 min read</span>
                </div>
                <a 
                  href="/blog-details" 
                  className="bg-gradient-to-r from-[#d4a84b] to-[#c49a3f] text-white px-5 py-2 rounded-lg font-poppins font-bold text-sm hover:from-[#c49a3f] hover:to-[#b48a2f] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Read Full Article</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}