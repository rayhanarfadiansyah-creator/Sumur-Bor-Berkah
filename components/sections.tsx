'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { faqs, projectFilters, projects, services, site } from '@/lib/site';
import { Icon } from './icons';

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className={`section-heading${light ? ' light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function whatsappUrl(message: string) {
  return site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}` : null;
}

export function Hero() {
  return <section id="beranda" className="hero">
    <div className="hero-photo" role="img" aria-label="Ilustrasi kegiatan pengeboran sumur" /><div className="hero-shade" />
    <div className="container hero-content">
      <div className="hero-copy">
        <span className="eyebrow eyebrow-pill">SUMUR BOR BERKAH · BOGOR</span>
        <h1>Solusi Pengeboran Sumur Profesional dan <em>Terpercaya.</em></h1>
        <p>Melayani kebutuhan pengeboran sumur dalam, sumur dangkal, instalasi pompa air, dan survey lokasi untuk rumah tangga, bisnis, maupun industri.</p>
        <div className="hero-actions"><Link href="#kontak" className="button button-gold"><Icon name="whatsapp" size={18} /> Konsultasi Sekarang</Link><Link href="#layanan" className="button button-outline">Lihat Layanan <Icon name="arrow" size={17} /></Link></div>
        <div className="hero-trust"><span><Icon name="map-pin" /> Melayani {site.serviceArea}</span><span><Icon name="shield" /> Pendekatan kerja profesional</span><span><Icon name="settings" /> Solusi sesuai kebutuhan</span></div>
      </div>
      <aside className="hero-side" aria-label="Ringkasan layanan SBB"><span className="hero-side-kicker">LAYANAN SBB</span><h2>Solusi sumber air untuk berbagai kebutuhan.</h2>
        <div className="hero-service-list">{services.map((service) => <Link href="#layanan" key={service.number}><span>{service.number}</span><b>{service.title}</b><Icon name="arrow" size={16} /></Link>)}</div>
        <p>Konsultasikan kebutuhan dan kondisi lokasi untuk membahas langkah yang sesuai.</p>
      </aside>
    </div><div className="hero-bottom-line" />
  </section>;
}

export function About() {
  return <section id="tentang" className="section about-section"><div className="container about-grid">
    <div className="about-visual"><div className="about-image"><Image src="/tentang.jpg" alt="Dokumentasi alat dan proses pekerjaan pengeboran Sumur Bor Berkah" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="about-stamp"><Icon name="droplet" size={27} /><span><b>SUMBER AIR BERSIH</b><small>Solusi sesuai kondisi lokasi</small></span></div></div>
    <div className="about-copy"><SectionHeading eyebrow="TENTANG KAMI" title="Mengenal Sumur Bor Berkah" description="SBB membantu kebutuhan sumber air melalui layanan pengeboran sumur dan pekerjaan pendukungnya." />
      <p>Sumur Bor Berkah (SBB) merupakan penyedia jasa pengeboran sumur yang hadir untuk membantu memenuhi kebutuhan sumber air bagi rumah tangga, bisnis, maupun industri.</p>
      <p>Kami memahami bahwa setiap lokasi memiliki kebutuhan dan kondisi lapangan yang berbeda. Karena itu, pembahasan pekerjaan dimulai dari kebutuhan pelanggan, peninjauan lokasi, dan kesepakatan ruang lingkup pekerjaan.</p>
      <div className="about-points"><div><Icon name="check" /><span><b>Komunikasi jelas</b><small>Ruang lingkup dibahas sebelum pekerjaan.</small></span></div><div><Icon name="check" /><span><b>Perencanaan sesuai lokasi</b><small>Pertimbangan kebutuhan dan kondisi lapangan.</small></span></div><div><Icon name="check" /><span><b>Fokus pada kebutuhan</b><small>Solusi dibahas sesuai tujuan penggunaan air.</small></span></div></div>
    </div>
  </div></section>;
}

export function Services() {
  return <section id="layanan" className="section services-section"><div className="container"><SectionHeading eyebrow="LAYANAN KAMI" title="Layanan Profesional Kami" description="Berbagai solusi pengeboran dan penyediaan sumber air untuk kebutuhan Anda." />
    <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.number}><div className={`service-art art-${index + 1}`}><span className="service-art-icon"><Icon name={service.icon} size={36} /></span><span className="service-number">{service.number}</span></div><div className="service-body"><h3>{service.title}</h3><p>{service.description}</p><Link href="#kontak" className="text-link">Konsultasi <Icon name="arrow" size={15} /></Link></div></article>)}</div>
  </div></section>;
}

export function WhyUs() {
  const items = [
    ['hardhat', 'Tenaga Berpengalaman', 'Pekerjaan ditangani oleh personel yang memahami kebutuhan pekerjaan pengeboran.'],
    ['settings', 'Peralatan Profesional', 'Penggunaan peralatan disesuaikan dengan kebutuhan dan kondisi pekerjaan.'],
    ['plan', 'Pekerjaan Terencana', 'Ruang lingkup dan tahapan kerja dibahas sebelum pelaksanaan.'],
    ['handshake', 'Pelayanan Terpercaya', 'Mengutamakan komunikasi yang baik dan pemahaman kebutuhan pelanggan.'],
  ] as const;
  return <section className="why-section"><div className="container"><div className="why-heading"><SectionHeading eyebrow="MENGAPA MEMILIH SBB?" title="Keunggulan Kami" light /><p>Kami berkomitmen memberikan pelayanan pengeboran yang memperhatikan kebutuhan pelanggan dan kondisi lokasi.</p></div>
    <div className="why-grid">{items.map(([icon, title, description]) => <article className="why-card" key={title}><Icon name={icon} size={29} /><h3>{title}</h3><p>{description}</p></article>)}</div>
  </div></section>;
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]['value']>('all');
  const filtered = useMemo(() => projects.filter((project) => filter === 'all' || project.category === filter), [filter]);
  return <section id="proyek" className="section projects-section"><div className="container"><div className="projects-head"><SectionHeading eyebrow="PORTOFOLIO" title="Dokumentasi Proyek Kami" description="Dokumentasi pekerjaan SBB akan ditampilkan di sini." />
    {projects.length > 0 && <div className="filter-tabs" role="group" aria-label="Filter proyek">{projectFilters.map((item) => <button key={item.value} type="button" className={filter === item.value ? 'active' : ''} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>)}</div>}
  </div>
  {filtered.length > 0 ? <div className="project-grid">{filtered.map((project) => <article className="project-card" key={project.id}><div className="project-image"><Image src={project.image} alt={`Dokumentasi ${project.title}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="project-info"><h3>{project.title}</h3> {project.location && <p><Icon name="map-pin" size={15} /> {project.location}</p>}{project.year && <span className="project-year">{project.year}</span>}</div></article>)}</div> : <div className="portfolio-empty"><div className="portfolio-empty-icon"><Icon name="images" size={30} /></div><div><h3>Dokumentasi proyek SBB</h3><p>Galeri siap diisi dengan foto pekerjaan asli. Tambahkan foto, lokasi, dan tahun proyek yang sudah dikonfirmasi pada <code>lib/site.ts</code>.</p></div></div>}
  </div></section>;
}

export function Process() {
  const steps = [
    ['whatsapp', 'Konsultasi', 'Pelanggan menyampaikan kebutuhan dan gambaran lokasi.'],
    ['map-pin', 'Survey Lokasi', 'Peninjauan kondisi lokasi dan akses pekerjaan.'],
    ['clipboard', 'Perencanaan', 'Pembahasan metode, ruang lingkup, dan penawaran.'],
    ['drill', 'Pelaksanaan', 'Pekerjaan dilakukan sesuai kesepakatan.'],
    ['check', 'Penyelesaian', 'Pemeriksaan hasil pekerjaan dan serah terima.'],
  ] as const;
  return <section className="section process-section"><div className="container"><SectionHeading eyebrow="PROSES KERJA KAMI" title="Bagaimana Kami Bekerja?" description="Alur komunikasi dan pelaksanaan pekerjaan dari awal hingga selesai." />
    <div className="process-grid">{steps.map(([icon, title, description], index) => <article className="process-step" key={title}><span className="step-index">0{index + 1}</span><div className="step-icon"><Icon name={icon} size={25} /></div><h3>{title}</h3><p>{description}</p>{index !== steps.length - 1 && <span className="step-arrow" aria-hidden="true">→</span>}</article>)}</div>
  </div></section>;
}

export function ServiceArea() {
  const bogorMap = 'https://maps.google.com/maps?q=Kabupaten%20Bogor%2C%20Jawa%20Barat%2C%20Indonesia&z=10&output=embed';
  const bogorMapLink = 'https://www.google.com/maps/search/?api=1&query=Kabupaten%20Bogor%2C%20Jawa%20Barat%2C%20Indonesia';
  return <section id="area-layanan" className="area-section"><div className="container area-grid">
    <div className="area-visual"><div className="area-map area-map-embed">
      <iframe title="Peta Kabupaten Bogor, Jawa Barat" src={bogorMap} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
    </div><p className="area-map-note">Peta wilayah Kabupaten Bogor · dapat digeser dan diperbesar</p></div>
    <div className="area-copy"><SectionHeading eyebrow="AREA PELAYANAN" title="Area Layanan Kabupaten Bogor" description="SBB menerima konsultasi pekerjaan pengeboran sumur untuk lokasi di Kabupaten Bogor, Jawa Barat." />
      <p className="area-note">Jangkauan pengerjaan bergantung pada lokasi, akses, dan kebutuhan proyek. Kirim alamat atau titik lokasi Anda melalui WhatsApp untuk konfirmasi.</p>
      <div className="area-map-actions"><Link href={bogorMapLink} target="_blank" rel="noreferrer" className="text-link">Buka peta Kabupaten Bogor <Icon name="arrow" size={16} /></Link><Link href="#kontak" className="text-link">Tanyakan jangkauan layanan <Icon name="arrow" size={16} /></Link></div>
    </div>
  </div></section>;
}

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return <section id="faq" className="section faq-section"><div className="container faq-layout"><div><SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" description="Informasi awal seputar layanan pengeboran sumur dan pekerjaan pendukungnya." /><p className="faq-side-note">Belum menemukan jawaban yang dibutuhkan? Tim SBB dapat membantu membahas kebutuhan proyek Anda.</p><Link href="#kontak" className="button button-outline-dark">Hubungi SBB <Icon name="arrow" size={16} /></Link></div>
    <div className="faq-list">{faqs.map((faq, index) => <article className={`faq-item${active === index ? ' open' : ''}`} key={faq.q}><button type="button" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}><span>{faq.q}</span><Icon name="chevron" size={19} /></button>{active === index && <div className="faq-answer"><p>{faq.a}</p></div>}</article>)}</div>
  </div></section>;
}

export function Contact() {
  const contact = site.contact;
  const wa = whatsappUrl('Halo SBB, saya ingin konsultasi mengenai layanan pengeboran sumur.');
  return <section id="kontak" className="contact-section"><div className="container"><div className="contact-panel"><div className="contact-watermark"><Icon name="droplet" size={190} /></div><span className="eyebrow eyebrow-pill">MULAI KONSULTASI</span><h2>Mari Wujudkan Kebutuhan Air Bersih Anda Bersama SBB.</h2><p>Konsultasikan kebutuhan pengeboran sumur Anda. Sampaikan gambaran lokasi dan kebutuhan penggunaan air untuk memulai pembahasan.</p><div className="contact-actions">
    {wa ? <Link href={wa} target="_blank" rel="noreferrer" className="button button-gold"><Icon name="whatsapp" /> WhatsApp Sekarang</Link> : <span className="button button-gold button-disabled" aria-disabled="true"><Icon name="whatsapp" /> WhatsApp belum dikonfigurasi</span>}
    {contact.phone ? <Link href={`tel:${contact.phone}`} className="button button-outline"><Icon name="phone" /> Telepon SBB</Link> : <span className="button button-outline button-disabled" aria-disabled="true"><Icon name="phone" /> Nomor telepon belum diisi</span>}
  </div>{!contact.whatsapp && !contact.phone && !contact.email && !contact.address && <p className="config-hint">Informasi kontak resmi SBB perlu dilengkapi sebelum website dipublikasikan.</p>}</div>
  <div className="contact-details"><div><Icon name="map-pin" /><span><b>Alamat</b><small>{contact.address || 'Alamat belum dikonfirmasi'}</small></span></div><div><Icon name="phone" /><span><b>Telepon</b><small>{contact.phone || 'Nomor telepon belum dikonfigurasi'}</small></span></div><div><Icon name="mail" /><span><b>Email</b><small>{contact.email || 'Email belum dikonfigurasi'}</small></span></div><div><Icon name="clock" /><span><b>Jam operasional</b><small>{contact.officeHours || 'Silakan konfirmasi kepada SBB'}</small></span></div></div>
  {contact.mapsUrl && <div className="contact-map-link"><Link href={contact.mapsUrl} target="_blank" rel="noreferrer">Lihat lokasi di Google Maps <Icon name="arrow" size={15} /></Link></div>}
  </div></section>;
}

export function Footer() {
  const contact = site.contact;
  return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Link href="#beranda" className="footer-logo" aria-label="SBB — Sumur Bor Berkah"><Image src="/sbb-logo.svg" alt="SBB — Sumur Bor Berkah" width={220} height={70} /></Link><p>Layanan pengeboran sumur dan pekerjaan pendukung untuk kebutuhan sumber air.</p></div>
    <div><h3>Navigasi</h3><Link href="#tentang">Tentang Kami</Link><Link href="#layanan">Layanan</Link><Link href="#proyek">Proyek</Link><Link href="#faq">FAQ</Link></div>
    <div><h3>Layanan</h3>{services.map((service) => <Link href="#layanan" key={service.number}>{service.title}</Link>)}</div>
    <div><h3>Kontak</h3><p>{contact.address || `Area layanan: ${site.serviceArea}`}</p><p>{contact.phone || 'Nomor telepon belum dikonfigurasi'}</p><p>{contact.email || 'Email belum dikonfigurasi'}</p>{site.social.tiktok && <a href={site.social.tiktok} target="_blank" rel="noreferrer">TikTok SBB ↗</a>}</div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} SBB – Sumur Bor Berkah.</span><span>{site.tagline}</span><span>Website by <a href="https://wa.me/6281385916633?text=Halo%20R%20Studio%20Web%2C%20saya%20tertarik%20membuat%20website." target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 transition hover:text-blue-900 hover:underline">R Studio Web ↗</a></span></div></footer>;
}

export function FloatingContact() {
  const wa = whatsappUrl('Halo SBB, saya ingin konsultasi mengenai layanan pengeboran sumur.');
  if (!wa) return null;
  return <Link className="floating-contact" href={wa} target="_blank" rel="noreferrer" aria-label="Hubungi SBB melalui WhatsApp"><Icon name="whatsapp" size={25} /></Link>;
}
