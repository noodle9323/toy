'use client';
import { GNB } from '@/src/widgets/gnb';
import { User } from '@supabase/supabase-js';
import { AuthHeader } from '../../auth-header';

export const Header = ({ user }: { user: User | null }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 w-[200px]">
          <h1 className="text-xl font-bold">로고</h1>
        </div>
        <GNB />
        <AuthHeader user={user} />
      </div>
    </header>
  );
};
