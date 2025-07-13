import React from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import GradientButton from '@/components/GradientButton'; // Import GradientButton

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="py-20 bg-white dark:bg-gray-800 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-up">
              Your Vision, Our Digital Expertise
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              Maxbles is dedicated to transforming your ideas into powerful digital experiences. From stunning web designs to robust development and strategic marketing, we are your partner in innovation.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up delay-300">
              <Link to="/services">
                <GradientButton size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg">
                  Explore Services
                </GradientButton>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full shadow-lg transform transition-transform hover:scale-105">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;