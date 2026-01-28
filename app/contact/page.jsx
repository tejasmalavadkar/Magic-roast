"use client"

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [expandedBlocks, setExpandedBlocks] = useState({
    contact: false,
    international: false,
    domestic: false,
    google: false
  });

  const toggleBlock = (blockName) => {
    setExpandedBlocks(prev => {
      // Close all blocks first
      const newBlocks = {
        contact: false,
        international: false,
        domestic: false,
        google: false
      };
      
      // If clicking the same block that's already open, keep it closed
      // Otherwise, open the clicked block
      if (!prev[blockName]) {
        newBlocks[blockName] = true;
      }
      
      return newBlocks;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f0e3]">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#5a3921] font-poppins font-extrabold mb-2">
              CONTACT US
            </h1>
            <div className="w-24 h-1 bg-[#D6C395] mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {/* Contact Details Block */}
            <div className="bg-white rounded-xl shadow-xl border border-[#f0e6d3] overflow-hidden cursor-pointer" onClick={() => toggleBlock('contact')}>
              <div className="bg-[#D6C395] text-[#A0522D] font-poppins font-bold uppercase text-sm tracking-wide px-6 py-4 flex items-center justify-between">
                <span>Contact Details</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${expandedBlocks.contact ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className={`${expandedBlocks.contact ? 'block' : 'hidden'} p-6 border-t border-[#f0e6d3] transition-all duration-500 ease-in-out ${expandedBlocks.contact ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    {/* Register and Corporate Offices */}
                    <div className="space-y-6">
                      <div className="bg-[#fdf8f0] rounded-xl p-6 border border-[#f5e6d3] hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#D6C395] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">🏢</span>
                          </div>
                          <div>
                            <h3 className="font-poppins font-bold text-[#5a3921] text-xl mb-3">REGISTER OFFICE</h3>
                            <div className="font-inter text-[#6a6a6a] space-y-1">
                              <p>🏠 250 B/4 E, FL NO FR-4,</p>
                              <p>Vasant Nivara, Opp Mahaveer College,</p>
                              <p>Kolhapur - 416 003, Maharashtra,</p>
                              <p className="font-bold text-[#5a3921]">INDIA.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#fdf8f0] rounded-xl p-6 border border-[#f5e6d3] hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#D6C395] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">💼</span>
                          </div>
                          <div>
                            <h3 className="font-poppins font-bold text-[#5a3921] text-xl mb-3">CORPORATE OFFICE</h3>
                            <div className="font-inter text-[#6a6a6a] space-y-1 mb-4">
                              <p>1st Floor, Flat # 4, 1206, B/7, Dattaprasad,</p>
                              <p>Off JM Road, K. P. Kulkarni Road, Apte Rd,</p>
                              <p>Shivajinagar, Pune, Maharashtra 411004</p>
                            </div>
                            <div className="space-y-2 pt-3 border-t border-[#f0e6d3]">
                              <p className="font-inter text-[#6a6a6a] font-semibold">📞 +91 20-29911111 / +91 9011211111</p>
                              <p className="font-inter text-[#6a6a6a] font-semibold hover:text-[#d4a84b] transition-colors">📧 connect@magicroastqoffee.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider Line */}
                    <div className="flex items-center my-6">
                      <div className="flex-1 h-px bg-[#D6C395]"></div>
                      <div className="mx-4 text-[#D6C395] font-poppins font-bold text-lg">• • •</div>
                      <div className="flex-1 h-px bg-[#D6C395]"></div>
                    </div>
                    
                    {/* Other Offices and Factory */}
                    <div className="space-y-6">
                      <div className="bg-[#fdf8f0] rounded-xl p-6 border border-[#f5e6d3] hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#D6C395] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">🏢</span>
                          </div>
                          <div>
                            <h3 className="font-poppins font-bold text-[#5a3921] text-xl mb-4">OTHER OFFICES</h3>
                            
                            <div className="mb-5 pb-4 border-b border-[#f0e6d3]">
                              <h4 className="font-poppins font-bold text-[#5a3921] text-lg mb-2">BANER OFFICE, PUNE</h4>
                              <div className="font-inter text-[#6a6a6a] space-y-1">
                                <p>3rd Floor, Velsignet Vista,</p>
                                <p>Pan Card Club Road, Baner,</p>
                                <p>Pune - 411045</p>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-poppins font-bold text-[#5a3921] text-lg mb-2">VASHI OFFICE, NAVI MUMBAI</h4>
                              <div className="font-inter text-[#6a6a6a] space-y-1">
                                <p>Office 2303, 23rd Floor,</p>
                                <p>Haware Infotech Park, Plot 39/3,</p>
                                <p>Sector 30A, Vashi, Navi Mumbai - 400706</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#fdf8f0] rounded-xl p-6 border border-[#f5e6d3] hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#D6C395] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xl">🏭</span>
                          </div>
                          <div>
                            <h3 className="font-poppins font-bold text-[#5a3921] text-xl mb-3">FACTORY ADDRESS</h3>
                            <div className="font-inter text-[#6a6a6a] space-y-1">
                              <p className="font-bold text-[#5a3921]">MAGICROAST QOFFEE PVT LTD</p>
                              <p>GAT No. 421, Pandav Nagar,</p>
                              <p>Baskuli Road, Wadki, Tal - Haveli,</p>
                              <p>District Pune - 412308</p>
                              <p className="font-bold text-[#5a3921]">Maharashtra, INDIA</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* International Presence Block */}
            <div className="bg-white rounded-xl shadow-xl border border-[#f0e6d3] overflow-hidden cursor-pointer" onClick={() => toggleBlock('international')}>
              <div className="bg-[#D6C395] text-[#A0522D] font-poppins font-bold uppercase text-sm tracking-wide px-6 py-4 flex items-center justify-between">
                <span>International Presence</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${expandedBlocks.international ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className={`${expandedBlocks.international ? 'block' : 'hidden'} p-6 border-t border-[#f0e6d3] transition-all duration-500 ease-in-out ${expandedBlocks.international ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="rounded-xl overflow-hidden border border-[#f0e6d3] bg-gray-100">
                  <img 
                    src="/map1.png" 
                    alt="International Offices Worldwide" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-96 bg-gray-200 flex items-center justify-center text-[#6a6a6a] font-inter">
                    <div className="text-center p-6">
                      <p className="text-lg font-semibold mb-2">Global Office Network</p>
                      <p className="text-sm">Strategic international locations serving key markets across continents.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Domestic Presence Block */}
            <div className="bg-white rounded-xl shadow-xl border border-[#f0e6d3] overflow-hidden cursor-pointer" onClick={() => toggleBlock('domestic')}>
              <div className="bg-[#D6C395] text-[#A0522D] font-poppins font-bold uppercase text-sm tracking-wide px-6 py-4 flex items-center justify-between">
                <span>Domestic Presence</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${expandedBlocks.domestic ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className={`${expandedBlocks.domestic ? 'block' : 'hidden'} p-6 border-t border-[#f0e6d3] transition-all duration-500 ease-in-out ${expandedBlocks.domestic ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="rounded-xl overflow-hidden border border-[#f0e6d3] bg-gray-100">
                  <img 
                    src="/map.png" 
                    alt="India Map with Domestic Offices" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-96 bg-gray-200 flex items-center justify-center text-[#6a6a6a] font-inter">
                    <div className="text-center p-6">
                      <p className="text-lg font-semibold mb-2">Domestic Office Network</p>
                      <p className="text-sm">Our offices across major Indian cities for nationwide service coverage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Find Us on Google Block */}
            <div className="bg-white rounded-xl shadow-xl border border-[#f0e6d3] overflow-hidden cursor-pointer" onClick={() => toggleBlock('google')}>
              <div className="bg-[#D6C395] text-[#A0522D] font-poppins font-bold uppercase text-sm tracking-wide px-6 py-4 flex items-center justify-between">
                <span>Find Us on Google</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${expandedBlocks.google ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className={`${expandedBlocks.google ? 'block' : 'hidden'} p-6 border-t border-[#f0e6d3] transition-all duration-500 ease-in-out ${expandedBlocks.google ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="max-w-6xl mx-auto space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#D6C395] flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-3xl">🗺️</span>
                    </div>
                    <h3 className="font-poppins font-bold text-[#5a3921] text-2xl mb-4">Our Location on Google Maps</h3>
                    <p className="font-inter text-[#6a6a6a] mb-8 max-w-2xl mx-auto text-lg">
                      View our corporate office location directly on the map below. Get directions, see nearby landmarks, and explore the area.
                    </p>
                  </div>
                  
                  {/* Embedded Google Map */}
                  <div className="rounded-xl overflow-hidden border-2 border-[#f0e6d3] shadow-lg bg-white">
                    <iframe 
                      src="https://www.google.com/maps?q=MagicRoast+Qoffee+Private+Limited&output=embed"
                      width="100%" 
                      height="450" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Magic Roast Qoffee Corporate Office Location"
                    ></iframe>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="bg-white rounded-xl p-6 border border-[#f0e6d3] shadow-md">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button 
                        className="bg-white border-2 border-[#D6C395] text-[#D6C395] hover:bg-[#D6C395] hover:text-white px-6 py-3 rounded-lg font-poppins font-bold text-base transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=MagicRoast+Qoffee+Private+Limited', '_blank')}
                      >
                        <span className="text-lg">🧭</span>
                        <span>Get Directions</span>
                      </button>
                      <button 
                        className="bg-white border-2 border-[#D6C395] text-[#D6C395] hover:bg-[#D6C395] hover:text-white px-6 py-3 rounded-lg font-poppins font-bold text-base transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          const url = 'https://www.google.com/maps/place/MagicRoast+Qoffee+Private+Limited/@18.520718,73.844738,133m/data=!3m1!1e3!4m6!3m5!1s0x3bc2c1c3b358c49b:0xf45d650069de5958!8m2!3d18.5210836!4d73.8446714!16s%2Fg%2F11yb31qpms?hl=en&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D';
                          console.log('Opening URL:', url);
                                            
                          // Try multiple approaches for cross-browser compatibility
                          try {
                            // Method 1: window.open
                            const newWindow = window.open(url, '_blank');
                            if (!newWindow) {
                              // Method 2: window.location if popup blocked
                              window.location.href = url;
                            }
                          } catch (error) {
                            console.error('Error opening URL:', error);
                            // Method 3: Fallback to direct navigation
                            window.location.href = url;
                          }
                        }}
                      >
                        <span className="text-lg">📍</span>
                        <span>View on Google Maps</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}