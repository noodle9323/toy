import { BaseLayoutProps } from '@/src/shared/ui/layouts/base/model/types';

export function BaseLayout({
  children,
  header,
  footer,
  sidebar,
}: BaseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {header && <header className="w-full">{header}</header>}
      <div className="flex flex-1">
        {sidebar && <aside className="w-64">{sidebar}</aside>}
        <main className="flex-1">{children}</main>
      </div>
      {footer && <footer className="w-full">{footer}</footer>}
    </div>
  );
}
