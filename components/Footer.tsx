import { Flower2, Globe, BookOpen, Newspaper, MapPin, Smartphone, Mail, Lock } from 'lucide-react';
import { footerLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="fgrid">
          <div>
            <a href="#" className="brand">
              <span className="logo"><Flower2 size={22} /></span>
              <b>Panti Asuhan Asuwain Timor</b>
            </a>
            <p className="about-t">
              Lembaga Kesejahteraan Sosial Anak (LKSA) non-pemerintah yang berfokus pada pemenuhan
              hak asuh, pendidikan, pembentukan karakter mulia, dan kecakapan hidup generasi penerus
              di Nusa Tenggara Timur.
            </p>
            <div className="soc">
              <span><Globe size={13} /></span><span><BookOpen size={13} /></span><span><Newspaper size={13} /></span>
            </div>
          </div>
          <div>
            <h6>Sekretariat & Asrama</h6>
            <div className="ct"><MapPin size={13} /><span>Jl. Timor Raya Km. 16, RT 04 / RW 03, Desa Oebelo, Kec. Kupang Timur, Kab. Kupang, NTT 85361</span></div>
            <div className="ct"><Smartphone size={13} /><span>Hotline / WhatsApp: +62 852-3456-7890</span></div>
            <div className="ct"><Mail size={13} /><span>asuwaintimor.panti@gmail.com</span></div>
          </div>
          <div className="fl">
            <h6>Informasi Publik</h6>
            {footerLinks.map((l) => <a key={l} href="#">{l}</a>)}
            <a href="#" className="adm"><Lock size={12} /> Portal Masuk Pengurus (Admin)</a>
          </div>
        </div>
        <div className="copy-r">
          <span>© 2026 Panti Asuhan Asuwain Timor. Akuntabilitas & Transparansi Kas Anak Asuh.</span>
          <span>Dikelola dengan penuh amanah • Kupang, Nusa Tenggara Timur</span>
        </div>
      </div>
    </footer>
  );
}
