'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { Icon } from './icons';

const nav = [
  ['Beranda', '#beranda'], ['Tentang Kami', '#tentang'], ['Layanan', '#layanan'],
  ['Proyek', '#proyek'], ['FAQ', '#faq'], ['Kontak', '#kontak'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const contactHref = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}` : '#kontak';

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#beranda" className="brand" aria-label="SBB — Sumur Bor Berkah">
          <Image src="/sbb-logo.svg" alt="SBB — Sumur Bor Berkah" width={240} height={76} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-gold header-cta" href={contactHref}>
          <Icon name="whatsapp" size={17} /> Konsultasi WhatsApp
        </Link>
        <button className="mobile-menu" type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigasi mobile">
        {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href={contactHref} onClick={() => setOpen(false)} className="mobile-nav-cta">Konsultasi WhatsApp</Link>
      </nav>}
    </header>
  );
}
