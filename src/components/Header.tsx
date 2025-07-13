import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/80 dark:supports-[backdrop-filter]:bg-gray-950/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2 animate-slide-in-left">
            <img src="https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/1-12.jpg" alt="Maxbles Logo" className="h-9 w-auto" /> {/* Slightly larger logo */}
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link to="/" className="relative group transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-100">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center relative group transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-200">
                Pages <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Our Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/testimonials" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Testimonials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center relative group transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-300">
                Portfolio <ChevronDown className="ml-1 h-4 w-4" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/portfolio" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">All Projects</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="relative group transition-colors hover:text-primary dark:hover:text-primary-foreground animate-fade-in-up delay-400">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
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