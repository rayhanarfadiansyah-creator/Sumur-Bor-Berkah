import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  title: 'SBB – Sumur Bor Berkah | Jasa Pengeboran Sumur Bogor',
  description: 'Sumur Bor Berkah (SBB) melayani pengeboran sumur dalam, sumur dangkal, instalasi pompa air, dan survey lokasi di Bogor dan sekitarnya.',
  openGraph: {
    title: 'SBB – Sumur Bor Berkah',
    description: 'Solusi air bersih, pengeboran berkualitas. Layanan pengeboran sumur dan pekerjaan pendukung di Bogor dan sekitarnya.',
    type: 'website', locale: 'id_ID', siteName: 'Sumur Bor Berkah',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${inter.variable} ${jakarta.variable}`}>{children}</body></html>;
}
