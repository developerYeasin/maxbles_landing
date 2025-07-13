import React from 'react';
import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBadge = ({ children, className }: GradientBadgeProps) => {
  return (
    <span className={cn(
      "inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider",
      "bg-gradient-to-r from-primary to-accent text-primary-foreground",
      className
    )}>
      {children}
    </span>
  );
};

export default GradientBadge;