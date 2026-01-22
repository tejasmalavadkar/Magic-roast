"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatedTextReveal } from "./animated-text-reveal";
import Link from "next/link";

export function AboutCompanyAnimated() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      {/* Animated company title */}
      <div className="text-center mb-12">
        <AnimatedTextReveal 
          text="MagicRoast Qoffee Pvt.Ltd" 
          delay={80}
          className="text-3xl md:text-4xl font-bold text-[#5a3921] font-poppins font-extrabold"
        />
      </div>

      {/* Animated description paragraph */}
      <div className="mb-12">
        <AnimatedTextReveal 
          text="MagicRoast Qoffee Pvt. Ltd. & Bharat Araku Coffee are engaged in the cultivation of coffee beans and the manufacturing of instant coffee powder. We are also involved in repacking and relabeling." 
          delay={50}
          className="text-lg text-[#6a6a6a] text-center max-w-3xl mx-auto font-inter leading-relaxed"
        />
      </div>

      {/* Animated secondary paragraph */}
      <div className="mb-12">
        <AnimatedTextReveal 
          text="Our coffee beans are cultivated and grown in the Araku Valley, which is known for its organic soil and unique flavor notes. The cultivation is carried out by a group of tribal women. Once we receive the parchment coffee from them, it is hulled and then roasted as per market requirements." 
          delay={50}
          className="text-lg text-[#6a6a6a] text-center max-w-3xl mx-auto font-inter leading-relaxed"
        />
      </div>

      {/* Animated third paragraph */}
      <div className="mb-12">
        <AnimatedTextReveal 
          text="The roasted beans are then ground and converted into instant coffee powder. We also have direct vendors supplying instant coffee powders from different parts of the country." 
          delay={50}
          className="text-lg text-[#6a6a6a] text-center max-w-3xl mx-auto font-inter leading-relaxed"
        />
      </div>

      {/* Stats section with animated reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="inline-block mb-4">
            <AnimatedTextReveal 
              text="50+" 
              delay={100}
              className="text-4xl font-bold text-[#d4a84b] font-poppins"
            />
          </div>
          <AnimatedTextReveal 
            text="Item of Coffee" 
            delay={120}
            className="text-lg text-[#5a3921]"
          />
        </div>
        
        <div className="text-center">
          <div className="inline-block mb-4">
            <AnimatedTextReveal 
              text="20+" 
              delay={100}
              className="text-4xl font-bold text-[#d4a84b] font-poppins"
            />
          </div>
          <AnimatedTextReveal 
            text="Order Running" 
            delay={120}
            className="text-lg text-[#5a3921]"
          />
        </div>
        
        <div className="text-center">
          <div className="inline-block mb-4">
            <AnimatedTextReveal 
              text="2k+" 
              delay={100}
              className="text-4xl font-bold text-[#d4a84b] font-poppins"
            />
          </div>
          <AnimatedTextReveal 
            text="Happy Customer" 
            delay={120}
            className="text-lg text-[#5a3921]"
          />
        </div>
      </div>

      {/* Explore More button without animation */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
             
              <Link
                href="/shop"
                className="inline-block bg-[#d4a84b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#c49a3f] transition-colors text-center"
              >
                Explore Our Coffee
              </Link>
            </div>
    </div>
  );
}