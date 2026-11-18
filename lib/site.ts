// Lengkapi hanya dengan informasi resmi SBB sebelum website dipublikasikan.
export const site = {
  name: 'Sumur Bor Berkah',
  shortName: 'SBB',
  tagline: 'Solusi Air Bersih, Pengeboran Berkualitas.',
  serviceArea: 'Bogor dan sekitarnya',
  social: {
    tiktok: 'https://www.tiktok.com/@jasa.sumur.bor.ba',
  },
  contact: {
    whatsapp: '6285774980843',
    phone: '085774980843',
    email: '',
    address: 'TDP 4, Jl. Maranati 9, Jl. Cihideung Ilir No. 8, Blok I 6, Cihideung Udik, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620',
    officeHours: '',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=TDP%204%2C%20Jl.%20Maranati%209%2C%20Jl.%20Cihideung%20Ilir%20No.%208%2C%20Blok%20I%206%2C%20Cihideung%20Udik%2C%20Kec.%20Ciampea%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016620',
  },
};

export const services = [
  { number: '01', title: 'Pengeboran Sumur Dalam', description: 'Pekerjaan pengeboran untuk kebutuhan sumber air dengan rencana kedalaman yang dibahas berdasarkan kebutuhan dan kondisi lokasi.', icon: 'drill' },
  { number: '02', title: 'Pengeboran Sumur Dangkal', description: 'Solusi pengeboran untuk kebutuhan rumah tangga maupun penggunaan lainnya sesuai kondisi lahan.', icon: 'droplet' },
  { number: '03', title: 'Instalasi Pompa Air', description: 'Pemasangan sistem pompa dan perlengkapan pendukung untuk membantu pengambilan serta distribusi air.', icon: 'pump' },
  { number: '04', title: 'Survey Lokasi', description: 'Peninjauan awal lokasi untuk memahami kebutuhan pekerjaan, akses, dan kondisi lapangan.', icon: 'survey' },
] as const;

export const faqs = [
  { q: 'Berapa biaya pengeboran sumur?', a: 'Biaya bergantung pada kebutuhan pekerjaan, kondisi lokasi, metode pelaksanaan, material, dan spesifikasi yang disepakati. Hubungi SBB untuk mendiskusikan kebutuhan dan memperoleh penawaran berdasarkan informasi proyek.' },
  { q: 'Apakah kedalaman sumur bisa ditentukan sebelum pengeboran?', a: 'Kedalaman awal dapat dibahas berdasarkan informasi lokasi dan data pendukung yang tersedia. Kondisi bawah permukaan tetap perlu dievaluasi selama pekerjaan berlangsung; hasil akhir tidak dapat dijamin hanya dari perkiraan awal.' },
  { q: 'Berapa lama proses pengerjaan pengeboran sumur?', a: 'Durasi pekerjaan bergantung pada kedalaman dan kondisi geologi, akses lokasi, metode kerja, serta kebutuhan instalasi. Jadwal yang lebih akurat dibahas setelah kebutuhan dan lokasi ditinjau.' },
  { q: 'Apakah SBB melayani survey lokasi terlebih dahulu?', a: 'Silakan hubungi tim SBB untuk mendiskusikan peninjauan lokasi, cakupan pemeriksaan, jadwal, dan kemungkinan biaya survey.' },
  { q: 'Apakah SBB melayani wilayah di luar Bogor?', a: 'Fokus layanan yang dicantumkan saat ini adalah Bogor dan sekitarnya. Untuk lokasi lain, silakan konsultasikan alamat proyek agar jangkauan dan kebutuhan mobilisasi dapat diperiksa.' },
];

export const projectFilters = [
  { value: 'all', label: 'Semua' },
  { value: 'deep', label: 'Sumur Dalam' },
  { value: 'shallow', label: 'Sumur Dangkal' },
  { value: 'pump', label: 'Instalasi Pompa' },
] as const;

// Dokumentasi foto pekerjaan yang diberikan oleh pemilik SBB.
// Lokasi dan tahun tidak ditampilkan karena belum diberikan.
export const projects: Array<{
  id: string;
  category: 'deep' | 'shallow' | 'pump';
  title: string;
  location?: string;
  year?: string;
  image: string;
}> = [
  { id: 'bor-01', category: 'deep', title: 'Proses pengeboran sumur', image: '/projects/proses-pengeboran-01.jpg' },
  { id: 'bor-02', category: 'deep', title: 'Peralatan pengeboran di lokasi', image: '/projects/proses-pengeboran-02.jpg' },
  { id: 'bor-03', category: 'deep', title: 'Pekerjaan pengeboran lapangan', image: '/projects/proses-pengeboran-03.jpg' },
  { id: 'pipa-01', category: 'deep', title: 'Proses pemasangan pipa sumur', image: '/projects/proses-pemasangan-pipa-01.jpg' },
  { id: 'pipa-02', category: 'deep', title: 'Penempatan casing/pipa', image: '/projects/proses-pemasangan-pipa-02.jpg' },
  { id: 'pipa-03', category: 'deep', title: 'Dokumentasi pekerjaan sumur bor', image: '/projects/proses-pemasangan-pipa-03.jpg' },
];
