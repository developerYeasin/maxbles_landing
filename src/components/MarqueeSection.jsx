import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils.js";
import { fetchLogos } from '@/lib/api.js'; // Import the new API function

const MarqueeSection = ({ className }) => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLogos = async () => {
      try {
        const data = await fetchLogos();
        setLogos(data);
      } catch (err) {
        setError("Failed to load logos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getLogos();
  }, []);

  if (loading) {
    return (
      <section className={cn("py-12 bg-gray-100/80 dark:bg-gray-900/80 overflow-hidden", className)}>
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
            Trusted by Leading Brands
          </h2>
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300">Loading trusted brands...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={cn("py-12 bg-gray-100/80 dark:bg-gray-900/80 overflow-hidden", className)}>
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
            Trusted by Leading Brands
          </h2>
        </div>
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  if (logos.length === 0) {
    return (
      <section className={cn("py-12 bg-gray-100/80 dark:bg-gray-900/80 overflow-hidden", className)}>
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
            Trusted by Leading Brands
          </h2>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">No logos found.</p>
      </section>
    );
  }

  return (
    <section className={cn("py-12 bg-gray-100/80 dark:bg-gray-900/80 overflow-hidden", className)}>
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
          Trusted by Leading Brands
        </h2>
      </div>
      <div className="relative w-full overflow-hidden py-4">
        {/* The outer flex container for the marquee effect */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First segment of logos */}
          <div className="flex gap-x-16 flex-shrink-0">
            {logos.map((logo, index) => (
              <div key={`first-${logo.id || index}`} className="inline-flex items-center justify-center">
                <img 
                  src={logo.image_url} 
                  alt={logo.name} 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert" 
                />
              </div>
            ))}
          </div>
          {/* Second segment of logos (duplicate for seamless marquee) */}
          <div className="flex gap-x-16 flex-shrink-0">
            {logos.map((logo, index) => (
              <div key={`second-${logo.id || index}`} className="inline-flex items-center justify-center">
                <img 
                  src={logo.image_url} 
                  alt={logo.name} 
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 dark:invert" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;