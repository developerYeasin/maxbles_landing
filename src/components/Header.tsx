import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/80 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2 animate-slide-in-left">
            <img src="https://maxblesdigital.com/wp-content/uploads/2025/07/maxbles-final-color-1-1536x354.png" alt="Maxbles Logo" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link to="/" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-100">Home</Link>
            <Link to="/about" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-200">About</Link>
            <Link to="/services" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-300">Services</Link>
            <Link to="/portfolio" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-400">Portfolio</Link>
            <Link to="/testimonials" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-500">Testimonials</Link>
            <Link to="/blog" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-600">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-700">Contact</Link>
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
                <Link to="/" className="hover:text-primary dark:hover:text-primary-foreground">Home</Link>
                <Link to="/about" className="hover:text-primary dark:hover:text-primary-foreground">About</Link>
                <Link to="/services" className="hover:text-primary dark:hover:text-primary-foreground">Services</Link>
                <Link to="/portfolio" className="hover:text-primary dark:hover:text-primary-foreground">Portfolio</Link>
                <Link to="/testimonials" className="hover:text-primary dark:hover:text-primary-foreground">Testimonials</Link>
                <Link to="/blog" className="hover:text-primary dark:hover:text-primary-foreground">Blog</Link>
                <Link to="/contact" className="hover:text-primary dark:hover:text-primary-foreground">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;