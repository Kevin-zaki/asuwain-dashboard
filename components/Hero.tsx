import { Heart, ScanLine, Sparkles, Users } from 'lucide-react';
import { stats } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" id="tentang">
      <div className="container">
        <div>
          <span className="pill"><Sparkles size={12} /> Penyaluran Amanah 100% Terjadwal dan Diaudit</span>
          <h1>
            Membina Harapan, Mengukir Masa Depan <em>Anak-Anak Timor</em>
          </h1>
          <p className="lead">
            Selamat datang di portal resmi Panti Asuhan Asuwain Timor. Kami mendedikasikan kasih
            sayang, ketahanan pangan, dan akses pendidikan terpadu bagi putra-putri yatim, piatu,
            dan dhuafa di tanah Nusa Tenggara Timur.
          </p>
          <div className="cta">
            <a href="#donasi" className="btn btn-lg dark"><Heart size={18} /> Salurkan Donasi Online</a>
            <a href="#donasi" className="btn btn-lg light"><ScanLine size={18} /> Scan QRIS & Rekening</a>
          </div>
          <hr />
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b className={s.tone}>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero.jpg" alt="Anak-anak panti asuhan belajar bersama" />
          <div className="float">
            <span className="ic"><Users size={18} /></span>
            <div>
              <b>Pekarangan Asrama Asuwain</b>
              <small>Kegiatan belajar kelompok sore hari</small>
            </div>
            <span className="loc">Kupang, NTT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
