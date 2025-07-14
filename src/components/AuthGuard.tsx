import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

const AuthGuard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AuthGuard;