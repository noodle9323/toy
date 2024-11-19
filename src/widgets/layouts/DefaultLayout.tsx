import { BaseLayout } from '@/src/shared/ui/layouts/base';
import { Header } from '@/src/widgets/header';
import { Footer } from '@/src/widgets/footer';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout header={<Header />} footer={<Footer />}>
      <div className="pt-16">{children}</div>
    </BaseLayout>
  );
}
