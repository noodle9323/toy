import './globals.css';
import { DefaultLayout } from '@/src/widgets/layouts/DefaultLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
