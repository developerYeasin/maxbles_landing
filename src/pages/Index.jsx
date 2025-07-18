import React from 'react';
import Header from "@/components/Header.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Footer from "@/components/Footer.jsx";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AboutSection from '@/components/AboutSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import PortfolioSection from '@/components/PortfolioSection.jsx';
import TestimonialsSection from '@/components/TestimonialsSection.jsx';
import BlogSection from '@/components/BlogSection.jsx';
import GradientButton from '@/components/GradientButton.jsx';
import MarqueeSection from '@/components/MarqueeSection.jsx';
import BackgroundVideo from '@/components/BackgroundVideo.jsx'; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundVideo /> {/* Add the background video here */}
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-12 md:py-20 bg-white/80 dark:bg-gray-800/80 text-center relative z-10"> {/* Adjusted vertical padding */}
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up">
              Your Vision, Our Digital Expertise
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Maxbles is dedicated to transforming your ideas into powerful digital experiences. From stunning web designs to robust development and strategic marketing, we are your partner in innovation.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 animate-fade-in-up delay-300">
              <Link to="/services" className="w-full md:w-auto">
                <GradientButton size="lg" className="w-full md:w-auto text-lg px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg">
                  Explore Services
                </GradientButton>
              </Link>
              <Link to="/contact" className="w-full md:w-auto">
                <Button size="lg" variant="outline" className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/10 text-lg px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <MarqueeSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;