import { Flower2, LogIn, HandHeart } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#" className="brand">
          <span className="logo"><Flower2 size={22} /></span>
          <span>
            <b>Panti Asuhan Asuwain Timor</b>
            <small>Akuntabilitas & Transparansi Kas Anak Asuh</small>
          </span>
        </a>
        <nav className="nav">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? 'active' : ''}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="#" className="btn btn-outline"><LogIn size={14} /> Masuk Admin</a>
          <a href="#donasi" className="btn btn-primary"><HandHeart size={15} /> Donasi Sekarang</a>
        </div>
      </div>
    </header>
  );
}
