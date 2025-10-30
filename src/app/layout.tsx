import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Lineage 2 Ancient Adena (AA) Calculator | Seal Stones',
  description: 'The best Lineage 2 calculator for Ancient Adena (AA). Calculate your earnings from Red, Green, and Blue Seal Stones instantly. Optimize your AA farming with our easy-to-use tool.',
  keywords: ['Lineage 2', 'L2', 'Ancient Adena', 'AA', 'Seal Stones', 'Calculator', 'AA Calculator', 'Lineage 2 Calculator', 'Catacombs', 'Necropolis'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
