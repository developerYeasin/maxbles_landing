import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import GradientButton from '@/components/GradientButton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        title: 'Login Failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Login Successful',
        description: 'Redirecting to dashboard...',
      });
      navigate('/admin/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 p-4">
      <Card className="w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-primary/20 dark:border-primary/50 animate-fade-in-up">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gradient-primary">Admin Login</CardTitle>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to manage your content</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:border-primary focus:ring-primary"
              />
            </div>
            <GradientButton type="submit" className="w-full" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </GradientButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;