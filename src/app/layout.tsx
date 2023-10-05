import { ContextProvider } from '@/contexts';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Fun with Eclipse',
  description: 'By Eclipse Aurora',
};
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body className='bg-slate-300'>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
