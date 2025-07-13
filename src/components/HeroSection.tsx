import React from 'react';
import { Link } from 'react-router-dom';
import GradientBadge from './GradientBadge';
import GradientButton from './GradientButton'; // Import the new GradientButton

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white overflow-hidden">
      {/* Subtle background pattern to mimic particle effect without a library */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}></div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <div className="mb-4 animate-fade-in-up">
          <GradientBadge>Digital Consulting Agency</GradientBadge>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gradient-primary animate-fade-in-up delay-100">
          Maxbles: Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
          Your vision, our expertise. We bring innovative ideas to life with stunning design and robust development. We are a team of passionate creators dedicated to turning complex challenges into beautiful, user-friendly solutions. From concept to launch, we ensure every detail is perfect.
        </p>
        <Link to="/portfolio">
          <GradientButton size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg animate-fade-in-up delay-400">
            Discover Our Work
          </GradientButton>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;