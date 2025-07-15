import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';
import { cn } from "@/lib/utils.js";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-opacity duration-300 z-50",
        "bg-gradient-to-r from-primary to-accent text-primary-foreground",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      size="icon"
    >
      <ArrowUp className="h-6 w-6" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  );
};

export default ScrollToTopButton;