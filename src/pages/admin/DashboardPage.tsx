import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, LayoutDashboard, Settings, BookOpen } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white animate-fade-in-up">Admin Dashboard</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up delay-100">Welcome to your content management system. Use the sidebar to navigate.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="animate-zoom-in delay-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-primary/20 dark:border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="animate-zoom-in delay-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-primary/20 dark:border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Pages</CardTitle>
            <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Manage your website sections</p>
          </CardContent>
        </Card>
        <Card className="animate-zoom-in delay-400 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-primary/20 dark:border-primary/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 new posts this week</p>
          </CardContent>
        </Card>
      </div>

      <Card className="animate-fade-in-up delay-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-primary/20 dark:border-primary/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto py-4 text-lg border-primary text-primary hover:bg-primary/10 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/10">
            <Settings className="mr-2 h-5 w-5" /> Manage Hero Section
          </Button>
          <Button variant="outline" className="h-auto py-4 text-lg border-primary text-primary hover:bg-primary/10 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/10">
            <Users className="mr-2 h-5 w-5" /> Edit Testimonials
          </Button>
          <Button variant="outline" className="h-auto py-4 text-lg border-primary text-primary hover:bg-primary/10 dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground/10">
            <BookOpen className="mr-2 h-5 w-5" /> Add New Blog Post
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;