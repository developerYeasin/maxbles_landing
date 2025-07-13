import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Input } from "@/components/ui/input"; // Added this import
import { Button } from "@/components/ui/button"; // Ensure Button is also imported

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="animate-fade-in-up">
          <Link to="/">
            <img src="https://maxblesdigital.com/wp-content/uploads/2025/07/maxbles-final-color-1-1536x354.png" alt="Maxbles Logo" className="h-10 w-auto mx-auto md:mx-0 mb-4" />
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Crafting digital experiences that inspire and convert.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>

        <div className="animate-fade-in-up delay-100">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><Link to="/about" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-primary dark:hover:text-primary-foreground transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div className="animate-fade-in-up delay-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="h-4 w-4 mr-2 text-primary" /> info@maxbles.com
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="h-4 w-4 mr-2 text-primary" /> +1 (123) 456-7890
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <MapPin className="h-4 w-4 mr-2 text-primary mt-1" /> 123 Creative Lane, Digital City, World
            </li>
          </ul>
        </div>

        <div className="animate-fade-in-up delay-300">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Stay updated with our latest news and offers.</p>
          <form className="flex flex-col gap-2">
            <Input type="email" placeholder="Your email" className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white" />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-sm text-gray-500 animate-fade-in-up delay-400">
          &copy; {new Date().getFullYear()} Maxbles. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;