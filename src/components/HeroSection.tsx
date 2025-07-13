import React from 'react';
import { Link } from 'react-router-dom';
import GradientBadge from './GradientBadge';
import GradientButton from './GradientButton';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white overflow-hidden">
      {/* Illustrative Images for IT Services */}
      <img
        src="https://via.placeholder.com/300x300/6A5ACD/FFFFFF?text=Web+Dev" // Placeholder for Web Development
        alt="Web Development"
        className="absolute top-1/4 left-10 w-32 h-32 md:w-48 md:h-48 object-cover rounded-full opacity-20 animate-fade-in-up delay-500 hidden md:block"
      />
      <img
        src="https://via.placeholder.com/300x300/FF6347/FFFFFF?text=Digital+Marketing" // Placeholder for Digital Marketing
        alt="Digital Marketing"
        className="absolute bottom-1/4 right-10 w-32 h-32 md:w-48 md:h-48 object-cover rounded-full opacity-20 animate-fade-in-up delay-600 hidden md:block"
      />
      <img
        src="https://via.placeholder.com/300x300/3CB371/FFFFFF?text=E-commerce" // Placeholder for E-commerce
        alt="E-commerce"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 object-cover rounded-full opacity-10 animate-zoom-in delay-700"
      />

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