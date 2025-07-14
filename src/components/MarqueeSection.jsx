import React from 'react';
import { cn } from "@/lib/utils.js";

const logos = [
  "https://maxblesdigital.com/wp-content/uploads/2025/07/client-logo-1.png",
  "https://maxblesdigital.com/wp-content/uploads/2025/07/client-logo-2.png",
  "https://maxblesdigital.com/wp-content/uploads/2025/07/client-logo-3.png",
  "https://maxblesdigital.com/wp-content/uploads/2025/07/client-logo-4.png",
  "https://maxblesdigital.com/wp-content/uploads/2025/07/client-logo-5.png",
  "https://maxblesdigital.com/wp-content/uploads/2025/07/client-logo-6.png",
];

const MarqueeSection = ({ className }) => {
  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={cn("py-12 bg-gray-100 dark:bg-gray-900 overflow-hidden", className)}>
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
          Trusted by Leading Brands
        </h2>
      </div>
      <div className="relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert" 
              />
            </div>
          ))}
        </div>
        {/* This second div is for seamless looping */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;