"use client";

import { useState, useEffect } from "react";

export function StaticActiveLineWithStars({ text }) {
  const [isActive, setIsActive] = useState(true); // Start with active state by default

  useEffect(() => {
    // Optionally we can still use this for any additional logic
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 w-full">
      <div 
        className={`flex-1 h-px transition-all duration-300 ${isActive ? 'bg-[#d4a84b] bg-opacity-100' : 'bg-gray-500 bg-opacity-70'}`}
      ></div>
      
      <span 
        className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-[#d4a84b]' : 'text-gray-500'}`}
      >
        ✦
      </span>
      
      <span 
        className={`uppercase tracking-wider text-sm transition-colors duration-300 ${isActive ? 'text-[#d4a84b]' : 'text-gray-500'}`}
      >
        {text || 'SUSTAINABLE PRACTICE • ORGANICALLY GROWN • CONTINUOUS INNOVATIONS • TRANSPARENCY'}
      </span>
      
      <span 
        className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-[#d4a84b]' : 'text-gray-500'}`}
      >
        ✦
      </span>
      
      <div 
        className={`flex-1 h-px transition-all duration-300 ${isActive ? 'bg-[#d4a84b] bg-opacity-100' : 'bg-gray-500 bg-opacity-70'}`}
      ></div>
    </div>
  );
}