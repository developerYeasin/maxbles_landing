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
        "relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-primary-foreground shadow-lg transition-all duration-300 ease-out hover:scale-105",
        "group", // Add group class for hover effects on inner span
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full" />
      <span className="relative rounded-full px-8 py-3 transition-all duration-300 ease-out bg-background group-hover:bg-opacity-0 dark:bg-gray-900 dark:group-hover:bg-opacity-0">
        {children}
      </span>
    </Button>
  );
};

export default GradientButton;