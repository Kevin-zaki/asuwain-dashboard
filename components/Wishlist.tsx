import { ArrowRight } from 'lucide-react';
import { wishlist } from '../data/content';

export default function Wishlist() {
  return (
    <section className="wish" id="wishlist">
      <div className="container">
        <div className="wish-head">
          <div>
            <span className="tag mint">Kebutuhan Kritis Bulan Ini</span>
            <h2 className="sec-title">Wishlist Kebutuhan Logistik Panti</h2>
            <p className="sec-sub">
              Data pemenuhan logistik harian diperbarui secara real-time oleh staf pengelola
              asrama anak asuh.
            </p>
          </div>
          <a href="#donasi">Sumbang Barang Tertentu <ArrowRight size={14} /></a>
        </div>

        <div className="wgrid">
          {wishlist.map((w) => (
            <article className="wcard" key={w.title}>
              <div className="r1">
                <span className={`st ${w.statusTone}`}>{w.status}</span>
                <span>{w.category}</span>
              </div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
              <div className="pr">
                <span>{w.progressLabel}</span>
                <b className={w.pctTone}>{w.percent}%</b>
              </div>
              <div className="bar"><i className={w.bar} style={{ width: `${w.percent}%` }} /></div>
              <div className="fn">{w.footnote}</div>
              <div className="go">Bantu Kebutuhan Ini</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
