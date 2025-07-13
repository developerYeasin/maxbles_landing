import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/80 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2 animate-slide-in-left">
            <img src="/src/assets/maxbles-logo.png" alt="Maxbles Logo" className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#hero" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-100">Home</a>
            <a href="#about" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-200">About</a>
            <a href="#services" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-300">Services</a>
            <a href="#portfolio" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-400">Portfolio</a>
            <a href="#testimonials" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-500">Testimonials</a>
            <a href="#blog" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-600">Blog</a>
            <a href="#contact" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400 animate-fade-in-up delay-700">Contact</a>
          </nav>
        </div>
        <div className="md:hidden animate-slide-in-right">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-gray-950">
              <nav className="flex flex-col space-y-4 pt-6 text-lg font-medium text-gray-700 dark:text-gray-300">
                <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a>
                <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400">Portfolio</a>
                <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400">Testimonials</a>
                <a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;