import './globals.css';

import { AuthHeader } from '@/src/widgets/auth-header';
import { DefaultLayout } from '@/src/widgets/layouts/DefaultLayout';
import { getUser } from '@/src/shared/api/user.auth';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <DefaultLayout user={user}>{children}</DefaultLayout>
      </body>
    </html>
  );
}
