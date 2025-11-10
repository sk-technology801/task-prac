import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Full stack application with authentication',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={outfit.variable}>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${outfit.variable}`}
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1 flex flex-col">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
