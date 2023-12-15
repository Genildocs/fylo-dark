import type { Metadata } from 'next';
import { openSans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fylo landing page',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} bg-dark-blue pt-6`}>
        {children}
      </body>
    </html>
  );
}
