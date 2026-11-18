# SBB — Sumur Bor Berkah

Company profile satu halaman yang dibangun ulang dengan Next.js App Router, React, TypeScript, dan CSS responsif. Arah visual mengikuti HTML Google Stitch yang diberikan: deep navy, aksen gold, tipografi Plus Jakarta Sans + Inter, hero dua kolom, dan navigasi sticky.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Build production

```bash
npm run build
npm run start
```

## Struktur utama

- `app/page.tsx` — susunan homepage.
- `app/layout.tsx` — metadata, bahasa Indonesia, font.
- `app/globals.css` — design system, layout, responsive styles.
- `components/header.tsx` — navigasi desktop dan drawer mobile.
- `components/sections.tsx` — hero, profil, layanan, keunggulan, portofolio, proses, area layanan, FAQ, kontak, footer.
- `components/icons.tsx` — ikon Lucide.
- `lib/site.ts` — konten layanan, FAQ, kontak, area, dan data portofolio.
- `public/sbb-logo.svg` — logo vektor konsep SBB.

## Yang perlu dikonfirmasi sebelum tayang

Edit `lib/site.ts`, bagian `site.contact`:
- `whatsapp`: nomor WhatsApp internasional tanpa tanda + atau spasi.
- `phone`: nomor telepon resmi.
- `email`: email resmi.
- `address`: alamat kantor/operasional yang benar.
- `officeHours`: jam operasional.
- `mapsUrl`: tautan Google Maps resmi.

Portofolio sengaja kosong sampai dokumentasi proyek asli diberikan. Tambahkan foto ke `public/projects/` lalu masukkan data yang sudah diverifikasi ke array `projects` di `lib/site.ts`.

## Catatan konten dan kredibilitas

- Tidak memakai nomor WhatsApp, alamat, email, nama badan hukum, sertifikasi, garansi, atau statistik rekaan.
- Tidak ada kalkulator kedalaman/pompa karena perkiraan teknis tidak bisa ditetapkan hanya dari kategori pengguna.
- Foto pada hero dan profil masih merujuk aset visual pada export Stitch; ganti dengan foto milik SBB atau aset berlisensi sebelum publikasi.
- Jangkauan wilayah Bogor dan sekitarnya mengikuti materi desain, perlu dikonfirmasi oleh pemilik usaha.


## Dokumentasi foto dan TikTok

Enam foto dokumentasi yang diberikan pemilik sudah ditempatkan di `public/projects/` dan ditampilkan pada bagian Portofolio. Lokasi serta tahun proyek sengaja tidak dicantumkan karena belum diberikan.

Tautan TikTok ditambahkan pada kolom Kontak di footer:
`https://www.tiktok.com/@jasa.sumur.bor.ba`

Jika akun TikTok tersebut bukan akun resmi SBB, ubah atau hapus nilainya pada `lib/site.ts` sebelum publikasi.


## Kontak dan lokasi

Nomor WhatsApp/telepon dan alamat TDP 4 sudah diisi berdasarkan informasi dari pemilik:
- WhatsApp: 0857-7498-0843 (tautan menggunakan format internasional `6285774980843`)
- Alamat: TDP 4, Jl. Maranati 9, Jl. Cihideung Ilir No. 8, Blok I 6, Cihideung Udik, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620
- Google Maps: tautan pencarian berdasarkan alamat di atas.

Email dan jam operasional tetap belum diisi karena belum diberikan.

## Peta area layanan

Bagian Area Pelayanan sekarang menampilkan Google Maps interaktif berpusat pada Kabupaten Bogor, Jawa Barat. Peta menggunakan iframe tanpa API key dan membutuhkan koneksi internet. Peta adalah referensi wilayah umum, bukan klaim cakupan layanan untuk setiap kecamatan.


## Kredit pembuat website

Kredit `Website by R Studio Web` ditambahkan pada bagian footer dan mengarah ke WhatsApp:
`https://wa.me/6281385916633?text=Halo%20R%20Studio%20Web%2C%20saya%20tertarik%20membuat%20website.`


## Foto bagian Tentang Kami

Foto ilustrasi lama sudah diganti dengan foto dokumentasi pekerjaan asli yang diberikan pemilik SBB (`public/about-sbb.jpg`). Tampilan foto diperbarui dengan bingkai putih, sudut membulat, bayangan, overlay halus, dan efek zoom ringan saat hover.
