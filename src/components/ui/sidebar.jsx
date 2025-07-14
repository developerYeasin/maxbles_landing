import * as React from "react";
import { cn } from "@/lib/utils";

const Sidebar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full flex-col overflow-hidden rounded-lg border bg-sidebar text-sidebar-foreground",
      className
    )}
    {...props} />
));
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-4", className)}
    {...props} />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props} />
));
SidebarTitle.displayName = "SidebarTitle";

const SidebarDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-sidebar-foreground/70", className)}
    {...props} />
));
SidebarDescription.displayName = "SidebarDescription";

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1 p-4", className)} {...props} />
));
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between p-4 border-t border-sidebar-border", className)}
    {...props} />
));
SidebarFooter.displayName = "SidebarFooter";

const SidebarNav = React.forwardRef(({ className, ...props }, ref) => (
  <nav ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
));
SidebarNav.displayName = "SidebarNav";

const SidebarNavLink = React.forwardRef(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      active && "bg-sidebar-primary text-sidebar-primary-foreground",
      className
    )}
    {...props} />
));
SidebarNavLink.displayName = "SidebarNavLink";

const SidebarNavHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-3 py-2", className)} {...props} />
));
SidebarNavHeader.displayName = "SidebarNavHeader";

const SidebarNavHeaderTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-xs font-semibold uppercase text-sidebar-foreground/50", className)}
    {...props} />
));
SidebarNavHeaderTitle.displayName = "SidebarNavHeaderTitle";

export {
  Sidebar,
  SidebarHeader,
  SidebarTitle,
  SidebarDescription,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarNavLink,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
};