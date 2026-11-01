// Seluruh konten statis landing page (JavaScript).
export const navLinks = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Wishlist & Kebutuhan', href: '#wishlist' },
  { label: 'Donasi Online', href: '#donasi', active: true },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
];

export const stats = [
  { value: '48', label: 'Anak Asuh Aktif Dalam Panti', tone: 'green' },
  { value: '12', label: 'Jenjang SMA & Perguruan Tinggi', tone: 'orange' },
  { value: '100%', label: 'Penyaluran Transparansi Terbuka', tone: 'green' },
];

export const pillars = [
  {
    icon: 'graduation',
    tone: 'green',
    title: '1. Pendidikan Komprehensif',
    desc: 'Menjamin seluruh anak asuh menempuh pendidikan formal 12 tahun tanpa putus sekolah, dengan fasilitas beasiswa lanjutan hingga bangku kuliah.',
    points: ['Bimbel Matematika & Bahasa Inggris rutin', 'Penyediaan laptop & pojok literasi buku'],
  },
  {
    icon: 'smile',
    tone: 'orange',
    title: '2. Budi Pekerti & Karakter',
    desc: 'Membangun jiwa religius, tata krama, integritas kejujuran, dan empati sosial melalui kebiasaan harian dan ibadah bersama para pengasuh.',
    points: ['Bimbingan akhlak & ibadah harian', 'Konseling psikologis & kesehatan mental'],
  },
  {
    icon: 'tools',
    tone: 'green',
    title: '3. Kecakapan Hidup (Life Skill)',
    desc: 'Membekali anak asuh usia remaja dengan keterampilan pertanian hortikultura, perbengkelan, tata boga, serta literasi digital produktif.',
    points: ['Kebun sayur hidroponik swadaya', 'Pelatihan dasar servis komputer & menjahit'],
  },
];

export const banks = [
  {
    code: 'MANDIRI',
    color: '#0a2d6e',
    name: 'Bank Mandiri',
    branch: 'Kantor Cabang Pembantu (KCP) Mutiara',
    badge: 'Rekening Utama Operasional',
    label: 'Nomor Rekening Mandiri',
    number: '161-00-0982341-2',
    owner: 'Yayasan Panti Asuhan Asuwain Timor',
  },
  {
    code: 'BRI',
    color: '#1c4fa3',
    name: 'Bank BRI',
    branch: 'Kantor Cabang Utama Kupang',
    badge: 'Rekening Dana Pendidikan Anak',
    label: 'Nomor Rekening BRI',
    number: '0122-01-002891-53-4',
    owner: 'Panti Asuhan Asuwain Timor',
  },
];

export const qrisSteps = [
  'Buka aplikasi mobile banking atau dompet digital Anda.',
  'Pilih menu Scan QR / QRIS.',
  'Arahkan kamera ke barcode di atas atau upload screenshot.',
  'Pastikan nama penerima tertulis Panti Asuhan Asuwain Timor.',
];

export const wishlist = [
  {
    status: 'Mendesak', statusTone: 'red', category: 'Kebutuhan Pokok',
    title: 'Beras Ramos 100 kg',
    desc: 'Konsumsi pokok harian untuk 48 anak asuh dan 8 pembina selama 1 bulan.',
    progressLabel: 'Terkumpul 55 kg', percent: 55, bar: 'dark', pctTone: 'green',
    footnote: 'Kurang 45 kg lagi',
  },
  {
    status: 'Mendesak', statusTone: 'red', category: 'Lauk & Nutrisi',
    title: 'Minyak Goreng & Telur',
    desc: 'Pasokan protein hewani dan minyak goreng sasih untuk dapur asuhan.',
    progressLabel: 'Terkumpul 40%', percent: 40, bar: 'orange', pctTone: 'orange',
    footnote: 'Dibutuhkan 80 rak telur',
  },
  {
    status: 'Semester Genap', statusTone: 'blue', category: 'Pendidikan',
    title: 'Buku Tulis & Alat Sekolah',
    desc: 'Perlengkapan sekolah (buku SKM, pulpen, tas, bagi 18 murid SD–SMP.',
    progressLabel: 'Terkumpul 85%', percent: 85, bar: 'dark', pctTone: 'green',
    footnote: 'Hampir terpenuhi',
  },
  {
    status: 'Rutin Bulanan', statusTone: 'orange', category: 'Utilitas Kolektif',
    title: 'Biaya Listrik & Air Bersih',
    desc: 'Token PLN dan distribusi tangki air bersih kebutuhan untuk seluruh area asuh.',
    progressLabel: 'Terkumpul Rp 1.750.000', percent: 50, bar: 'orange', pctTone: 'orange',
    footnote: 'Target bulanan: Rp 3.500.000',
  },
];

export const amounts = [50000, 100000, 250000, 500000];

export const payMethods = [
  { id: 'mandiri', title: 'Bank Mandiri', sub: 'Transfer Rekening' },
  { id: 'bri', title: 'Bank BRI', sub: 'Transfer Rekening' },
  { id: 'qris', title: 'QRIS Instan', sub: 'E-Wallet / Semua Bank' },
];

export const gallery = [
  { img: '/images/gal1.jpg', tag: 'Pendidikan', title: 'Belajar Bersama Sore Hari', desc: 'Pendampingan pekerjaan rumah (PR) dan literasi baca buku di serambi tengah asrama.' },
  { img: '/images/gal2.jpg', tag: 'Kerohanian & Ibadah', title: 'Sholat & Mengaji Berjamaah', desc: 'Pembinaan adab, tahfidz juz amma, dan doa harian dipandu oleh ustadz pembina panti.' },
  { img: '/images/gal3.jpg', tag: 'Kesehatan & Olahraga', title: 'Olahraga Sepak Bola Sore', desc: 'Menjaga kebugaran jasmani serta sportivitas antar regu di lapangan warga dekat panti.' },
  { img: '/images/gal4.jpg', tag: 'Kemandirian', title: 'Kerja Bakti Kebun Panti', desc: 'Merawat tanaman sayur sawi, tomat, dan cabai sebagai bekal keterampilan pertanian mandiri.' },
  { img: '/images/gal5.jpg', tag: 'Literasi Digital', title: 'Pelatihan Komputer & TI', desc: 'Kelas akhir pekan pengenalan software pengolah kata, desain grafis dasar, dan internet aman.' },
  { img: '/images/gal6.jpg', tag: 'Kebersamaan', title: 'Perayaan Ulang Tahun Bersama', desc: 'Tradisi bulanan merayakan hari lahir adik-adik panti dengan doa bersama dan syukuran.' },
];

export const documents = [
  { icon: 'file', title: 'Laporan Keuangan 2025.pdf', meta: 'Audit Tahunan (1.4 MB)' },
  { icon: 'shield', title: 'SK Kemenkumham & Izin.pdf', meta: 'Legalitas Lengkap (2.8 MB)' },
];

export const footerLinks = ['Kebijakan Privasi', 'Laporan Keuangan Publik', 'Legalitas Yayasan', 'Hubungi Pengurus'];
