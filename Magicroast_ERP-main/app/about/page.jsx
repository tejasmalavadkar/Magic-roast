import React from "react";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* About Us Banner Image */}
      <div className="w-full">
        <img 
          src="/About-Us-Final.png"
          alt="About Magic Roast Qoffee" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <main className="flex-grow bg-[#f8f0e3] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#5a3921] mb-6 font-montserrat font-extrabold">VISION, MISSION & VALUES</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#5a3921] mb-3 font-montserrat font-bold">MISSION</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#5a3921] font-montserrat font-normal">
                  <li className="mb-1">Achieving Best-in-Class Quality & Productivity only through naturally grown beans.</li>
                  <li className="mb-1">Building our Brand most famous and valuable.</li>
                  <li className="mb-1">Constantly reinventing the business through technology & innovations.</li>
                  <li>Living our ideals on a daily basis reinforces "The New way of Qoffee Brand."</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#5a3921] mb-3 font-montserrat font-bold">VISION</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#5a3921] font-montserrat font-normal">
                  <li className="mb-1">To be the World's most celebrated Qoffee brand, setting the standard of exceptional test and quality.</li>
                  <li>To Transform the "Coffee era" to "Qoffee era."</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#5a3921] mb-3 font-montserrat font-bold">VALUES</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-[#f5e6d3] text-[#5a3921] px-3 py-2 rounded border border-[#d4a84b] font-montserrat font-medium">Sustainable Practice</span>
                  <span className="inline-block bg-[#f5e6d3] text-[#5a3921] px-3 py-2 rounded border border-[#d4a84b] font-montserrat font-medium">Organically Grown</span>
                  <span className="inline-block bg-[#f5e6d3] text-[#5a3921] px-3 py-2 rounded border border-[#d4a84b] font-montserrat font-medium">Continuous Innovations</span>
                  <span className="inline-block bg-[#f5e6d3] text-[#5a3921] px-3 py-2 rounded border border-[#d4a84b] font-montserrat font-medium">Transparency</span>
                </div>
              </div>
              

            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center bg-[#f5e6d3] p-6 rounded-lg">
              <img 
                src="/about-us-image.png"
                alt="About Magic Roast Qoffee" 
                className="max-w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
          
          <div className="mt-12 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/about-us-small-image.jpg" 
                alt="Why MagicRoast Qoffee" 
                className="max-w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#5a3921] mb-6 font-montserrat font-extrabold">WHY MAGICROAST QOFFEE</h2>
              <p className="text-lg text-[#5a3921] mb-4 font-montserrat font-normal leading-relaxed">
                MagicRoast Qoffee is more than a beverage; it's enhancing experience.
              </p>
              <p className="text-lg text-[#5a3921] mb-4 font-montserrat font-normal leading-relaxed">
                Each cup is an journey, beginning with the capativating aroma that fills the air, inviting you to enjoy the movement.
              </p>
              <p className="text-lg text-[#5a3921] font-montserrat font-normal leading-relaxed">
                Sourced organically and sustainably from Naturally grown beans, MagicRoast Qoffee is expertly roasted to perfection. Whether you prefer a bold and robust cup or a smooth and delicate brew, there's is a magicroast for everyone.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#5a3921] mb-6 font-montserrat font-extrabold text-center">ABOUT MAGICROAST QOFFEE</h2>
            <p className="text-lg text-[#5a3921] mb-4 font-montserrat font-normal leading-relaxed text-center max-w-3xl mx-auto">
              MagicRoast Qoffee is a premium coffee brand dedicated to delivering exceptional taste experiences. Our journey began with a simple mission: to create the perfect cup of coffee that delights the senses and nurtures the soul.
            </p>
            <p className="text-lg text-[#5a3921] mb-4 font-montserrat font-normal leading-relaxed text-center max-w-3xl mx-auto">
              We source our beans from sustainable farms, ensuring each cup reflects our commitment to quality and environmental responsibility. Our expert roasters carefully craft each blend to bring out the unique flavors and aromas that make MagicRoast Qoffee truly special.
            </p>
          </div>
          

        </div>
      </main>
      
      <div className="w-full relative">
        <img 
          src="/quality-policyy.jpg" 
          alt="Quality Policy" 
          className="w-full h-auto object-cover"
        />
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Link to="/quality-policy" className="bg-[#5a3921] text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-[#7a5937] transition-colors duration-300 inline-block">
            View Quality Policy
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
