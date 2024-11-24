import { BaseLayout } from '@/src/shared/ui/layouts/base';
import { Header } from '@/src/widgets/header';
import { Footer } from '@/src/widgets/footer';
import { User } from '@supabase/supabase-js';

export function DefaultLayout({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  return (
    <BaseLayout header={<Header user={user} />} footer={<Footer />}>
      <div className="pt-16">{children}</div>
    </BaseLayout>
  );
}
