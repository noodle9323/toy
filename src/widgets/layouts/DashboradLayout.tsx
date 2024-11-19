import { BaseLayout } from '@/src/shared/ui/layouts/base';
import { Lnb } from '@/src/widgets/lnb';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout sidebar={<Lnb />}>
      <div className="container mx-auto p-6">{children}</div>
    </BaseLayout>
  );
}
