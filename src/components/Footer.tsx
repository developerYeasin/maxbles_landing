import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 animate-fade-in-up">
          <img src="https://maxblesdigital.com/wp-content/uploads/2025/07/maxbles-final-color-1-1536x354.png" alt="Maxbles Logo" className="h-10 w-auto mx-auto mb-4" />
          <p className="text-gray-400">Crafting digital experiences that inspire and convert.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4 text-gray-300 animate-fade-in-up delay-100">
          <a href="#hero" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <p className="text-sm text-gray-500 animate-fade-in-up delay-200">
          &copy; {new Date().getFullYear()} Maxbles. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;