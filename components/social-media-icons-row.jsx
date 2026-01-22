"use client";

import { useState } from "react";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

export function SocialMediaIconsRow() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
    }
  ];

  return (
    <div className="flex items-center justify-center gap-6 py-8">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        const isHovered = hoveredIndex === index;
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative w-14 h-14 rounded-full flex items-center justify-center
              bg-gradient-to-br from-[#8B4513] to-[#5D2E0C] 
              shadow-lg transition-all duration-300 ease-out
              ${isHovered ? 'transform -translate-y-1 shadow-xl' : ''}
              hover:shadow-xl
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={social.name}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-30"></div>
            
            {/* Icon */}
            <IconComponent 
              size={24} 
              className="text-white relative z-10 drop-shadow-sm"
            />
            
            {/* Outer glow on hover */}
            {isHovered && (
              <div className="absolute inset-0 rounded-full bg-white/10 blur-sm"></div>
            )}
          </a>
        );
      })}
    </div>
  );
}