import { GNB } from '@/src/widgets/gnb';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">로고</h1>
        </div>
        <GNB />
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-md bg-primary text-white">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
};
