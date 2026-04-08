import React from 'react';

export default function CornerOrnament({ className = "", position = "top-left" }) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <div className={`absolute w-24 h-24 pointer-events-none opacity-[0.15] text-[#8B6E66] ${rotation} ${className}`}>
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Elegant classical corner border */}
        <path d="M 5 5 L 100 5 L 100 8 C 50 8 8 50 8 100 L 5 100 Z" fill="currentColor" />
        <path d="M 12 12 L 80 12 C 40 12 12 40 12 80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        
        {/* Floral / diamond motif */}
        <path d="M 25 25 C 35 15 45 25 50 40 C 35 45 25 35 25 25 Z" fill="currentColor" />
        <path d="M 25 25 C 15 35 25 45 40 50 C 45 35 35 25 25 25 Z" fill="currentColor" />
        
        {/* Accent dots */}
        <circle cx="20" cy="20" r="2.5" />
        <circle cx="60" cy="15" r="1.5" />
        <circle cx="15" cy="60" r="1.5" />
      </svg>
    </div>
  );
}
