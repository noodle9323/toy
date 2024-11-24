import { User } from '@supabase/supabase-js';

interface AuthButtonProps {
  user: User | null;
  onLogin: () => Promise<void>;
  onLogout: () => Promise<void>;
}

export const AuthButton = ({ user, onLogin, onLogout }: AuthButtonProps) => {
  if (user) {
    return (
      <div
        onClick={onLogout}
        className="px-4 py-2 rounded-md bg-[#4d92f7] text-black cursor-pointer"
      >
        로그아웃
      </div>
    );
  }

  return (
    <button
      onClick={onLogin}
      className="px-4 py-2 rounded-md bg-primary text-white cursor-pointer"
    >
      로그인
    </button>
  );
};
