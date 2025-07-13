import React from 'react';
import { Link } from 'react-router-dom';
import GradientBadge from './GradientBadge';
import GradientButton from './GradientButton';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-gray-800 dark:text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2022/11/001.jpg"
        alt="IT Services Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <div className="mb-4 animate-fade-in-up">
          <GradientBadge>Digital Consulting Agency</GradientBadge>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white animate-fade-in-up delay-100">
          Maxbles: Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in-up delay-200">
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