import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white overflow-hidden">
      {/* Subtle background pattern to mimic particle effect without a library */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}></div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Maxbles: Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
          Your vision, our expertise. We bring innovative ideas to life with stunning design and robust development.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105 animate-fade-in-up delay-400">
          Discover Our Work
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;