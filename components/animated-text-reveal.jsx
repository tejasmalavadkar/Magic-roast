"use client";

import { useState, useEffect, useRef } from "react";

export function AnimatedTextReveal({ text, delay = 100, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [words, setWords] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Split text into words
    const textWords = text.split(/\s+/).filter(word => word.length > 0);
    setWords(textWords);
  }, [text]);

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
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-2 mb-1 opacity-0 translate-y-4"
            style={{
              animation: isVisible
                ? `fadeInUpWord 0.6s ease-out forwards`
                : "none",
              animationDelay: `${index * delay}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUpWord {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}