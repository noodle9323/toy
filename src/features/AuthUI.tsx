'use client';

import React, { useCallback, useEffect, useState } from 'react';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { createSupabaseBrowserClient } from '@/src/shared/api/client/supabase';
import { useHydrate } from '@shared/hooks/useHydrate';

const AuthUI = () => {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  const getUserInfo = useCallback(async () => {
    const result = await supabase.auth.getUser();
    if (result?.data?.user) setUser(result?.data?.user);
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  // const handleSignInWithGoogle = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
  //     },
  //   });
  // };

  // const handleSignInWithGithub = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: 'github',
  //     options: {
  //       redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
  //     },
  //   });
  // };

  useEffect(() => {
    getUserInfo();
  }, []);

  /**  SSR 시 css가 늦게 내려와서 UI가 깨지는 것을 안 보이게 방지  */
  if (!isMount) return null;

  return (
    <section className="w-full h-full">
      <div>{user ? `로그인 됨:: user: ${user?.email}` : '로그아웃 됨'}</div>
      {user && (
        <div>
          <button className="border-2 border-black" onClick={handleSignOut}>
            로그아웃
          </button>
        </div>
      )}
      <div className="mx-auto h-full flex justify-center items-center max-w-[500px]">
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders
          providers={['google', 'github']}
        />
      </div>
    </section>
  );
};

export default AuthUI;
