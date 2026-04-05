import React from 'react';

export default function GeometricCorner({ position = "bottom-right", className = "" }) {
  const rotations = {
    "top-left": "rotate-180",
    "top-right": "-rotate-90",
    "bottom-right": "rotate-0",
    "bottom-left": "rotate-90"
  };

  return (
    <svg 
      className={`w-16 h-16 text-current ${rotations[position] || ""} ${className} transition-transform duration-700`} 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elegant Editorial Bracket */}
      {/* Outer framing line */}
      <path d="M 0 100 L 100 100 L 100 0" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-40" />
      {/* Inner solid framing line */}
      <path d="M 15 85 L 85 85 L 85 15" strokeWidth="2" strokeLinejoin="miter" />
      {/* Refined diamond accent at corner */}
      <polygon points="85,81 89,85 85,89 81,85" fill="currentColor" stroke="none" />
      {/* Accent dot */}
      <circle cx="85" cy="85" r="1.5" className="text-white" fill="white" />
    </svg>
  );
}
