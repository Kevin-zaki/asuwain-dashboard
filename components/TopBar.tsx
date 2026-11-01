import { Phone, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="l">
          <span className="chip"><i className="dot" /> Resmi Terdaftar</span>
          <span>Izin Dinsos No: 468/1542/Dinsos/2021 • Akta Notaris No. 12/2018</span>
        </div>
        <div className="r">
          <span><Phone size={12} /> Hotline/Pengurus: +62 852-3456-7890</span>
          <i className="sep" />
          <span><MapPin size={12} /> Kupang • Asuwain, NTT</span>
        </div>
      </div>
    </div>
  );
}
