"use client";

import { useState } from "react";

export function HorizontalLineWithStars({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center justify-center gap-3 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex-1 h-px ${
          isHovered ? 'bg-[#d4a84b] bg-opacity-100' : 'bg-gray-500 bg-opacity-70'
        } transition-all duration-300`}
      ></div>
      
      <span 
        className={`text-lg font-bold ${
          isHovered ? 'text-[#d4a84b]' : 'text-gray-500'
        } transition-colors duration-300`}
      >
        ✦
      </span>
      
      <span 
        className={`uppercase tracking-wider text-sm ${
          isHovered ? 'text-[#d4a84b]' : 'text-gray-500'
        } transition-colors duration-300`}
      >
        {text || 'SUSTAINABLE PRACTICE • ORGANICALLY GROWN • CONTINUOUS INNOVATIONS • TRANSPARENCY'}
      </span>
      
      <span 
        className={`text-lg font-bold ${
          isHovered ? 'text-[#d4a84b]' : 'text-gray-500'
        } transition-colors duration-300`}
      >
        ✦
      </span>
      
      <div 
        className={`flex-1 h-px ${
          isHovered ? 'bg-[#d4a84b] bg-opacity-100' : 'bg-gray-500 bg-opacity-70'
        } transition-all duration-300`}
      ></div>
    </div>
  );
}