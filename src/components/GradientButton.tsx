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
        "bg-gradient-to-r from-primary to-accent text-primary-foreground", // Direct gradient background and white text
        "rounded-full font-medium shadow-lg transition-all duration-300 ease-out hover:scale-105", // Existing styles
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButton;