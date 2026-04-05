import React from 'react';

export default function OrnamentDivider({ className = "" }) {
  return (
    <div className={`w-full flex justify-center items-center py-16 relative z-20 ${className}`}>
      {/* 
        The divider image expects a file named 'divider.png' in the public folder. 
        It scales beautifully and blends into the background.
      */}
      <img 
        src="/divider.png" 
        alt="Decorative Divider" 
        className="max-w-[300px] w-[80%] opacity-80 mix-blend-multiply transition-transform duration-1000 hover:scale-105" 
        onError={(e) => {
          // Fallback elegant CSS line if the image is missing
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      
      {/* Premium Editorial CSS Fallback */}
      <div className="hidden w-full max-w-lg items-center justify-center gap-6">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#8B6E66]/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#8B6E66]/80 flex-shrink-0"></div>
        <div className="w-2.5 h-2.5 rotate-45 border border-[#8B6E66] flex-shrink-0"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#8B6E66]/80 flex-shrink-0"></div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#8B6E66]/60 to-transparent"></div>
      </div>
    </div>
  );
}
