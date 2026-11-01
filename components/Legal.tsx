import { ShieldCheck, FileText, ShieldAlert, Download } from 'lucide-react';
import { documents } from '../data/content';

export default function Legal() {
  return (
    <section className="legal" id="kontak">
      <div className="container">
        <div className="lcard">
          <div>
            <h3><ShieldCheck size={18} /> Legalitas Yayasan & Standar Akuntabilitas</h3>
            <p>
              Panti Asuhan Asuwain Timor beroperasi di bawah payung hukum Republik Indonesia dan
              mematuhi standar operasional pengasuhan anak Kementerian Sosial RI. Seluruh laporan
              penerimaan donasi dan pengeluaran kas panti terbuka bagi audit publik para donatur.
            </p>
            <div className="ids">
              <div><small>Surat Izin Operasional Dinsos</small><b>468/1542/Dinsos/2021</b></div>
              <div><small>Akta Pendirian Notaris</small><b>Akta Notaris No. 12 Tahun 2018</b></div>
            </div>
          </div>
          <div className="docs">
            <small>Dokumen Akuntabilitas Publik:</small>
            {documents.map((d) => (
              <div className={`doc ${d.icon === 'shield' ? 'o' : ''}`} key={d.title}>
                {d.icon === 'file' ? <FileText size={18} /> : <ShieldAlert size={18} />}
                <div><b>{d.title}</b><small>{d.meta}</small></div>
                <Download size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
