import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, LayoutDashboard, Settings, LogOut, Info, Code, Image, MessageSquare, Users, BookOpen, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: 'Logout Failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Logged Out',
        description: 'You have been successfully logged out.',
      });
      navigate('/admin/login');
    }
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Hero Section', path: '/admin/cms/hero', icon: Image },
    { name: 'About Section', path: '/admin/cms/about', icon: Info },
    { name: 'Services', path: '/admin/cms/services', icon: Code },
    { name: 'Portfolio', path: '/admin/cms/portfolio', icon: LayoutDashboard },
    { name: 'Testimonials', path: '/admin/cms/testimonials', icon: Users },
    { name: 'Blog Posts', path: '/admin/cms/blog', icon: BookOpen },
    { name: 'Contact Info', path: '/admin/cms/contact', icon: Mail },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 shadow-md">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <img src="https://maxblesdigital.com/wp-content/uploads/2025/07/maxbles-final-color-1-1536x354.png" alt="Maxbles Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Admin</span>
          </Link>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary-foreground transition-colors"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-500/10 hover:text-red-600 dark:hover:bg-red-500/20 dark:hover:text-red-400">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-grow">
        {/* Top bar for mobile */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <img src="https://maxblesdigital.com/wp-content/uploads/2025/07/maxbles-final-color-1-1536x354.png" alt="Maxbles Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Admin</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-gray-950">
              <nav className="flex flex-col space-y-4 pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center p-3 rounded-lg text-lg text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary-foreground transition-colors"
                  >
                    <item.icon className="h-6 w-6 mr-3" />
                    {item.name}
                  </Link>
                ))}
                <Separator className="my-4" />
                <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-lg text-red-500 hover:bg-red-500/10 hover:text-red-600 dark:hover:bg-red-500/20 dark:hover:text-red-400">
                  <LogOut className="h-6 w-6 mr-3" />
                  Logout
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-grow p-6 overflow-auto">
          <Outlet /> {/* This is where nested routes will render */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;