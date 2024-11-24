'use client';

import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

import { createSupabaseBrowserClient } from '@/src/entities/post/api/client/supabase';

import { AuthButton } from './AuthButton';

interface AuthHeaderProps {
  user?: User | null;
}

export const AuthHeader = ({ user }: AuthHeaderProps) => {
  const isLoggedIn = !!user?.email;
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  const goToMyPage = () => {
    router.push('/my-page');
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="flex flex-row items-center justify-end gap-2 min-w-[200px]">
      <div onClick={goToMyPage} className="cursor-pointer">
        {user?.email && `${user.email.split('@')[0]}`}
      </div>
      <AuthButton
        user={user ?? null}
        onLogin={handleGoogleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
};
