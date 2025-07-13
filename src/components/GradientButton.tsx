import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const GradientButton = ({ children, className, ...props }: GradientButtonProps) => {
  return (
    <Button
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[3px] font-medium shadow-lg transition-all duration-300 ease-out hover:scale-105", // p-[3px] for border thickness
        "bg-gradient-to-r from-primary to-accent", // Outer gradient background
        className
      )}
      {...props}
    >
      <span className="relative rounded-full px-8 py-3 transition-all duration-300 ease-out bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
        {children}
      </span>
    </Button>
  );
};

export default GradientButton;