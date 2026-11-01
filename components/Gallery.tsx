import { gallery } from '../data/content';

export default function Gallery() {
  return (
    <section className="gallery" id="galeri">
      <div className="container">
        <div className="head center">
          <span className="tag mint">Dokumentasi Kegiatan</span>
          <h2 className="sec-title">Galeri Aktivitas Anak Asuh</h2>
          <p className="sec-sub">
            Menyaksikan senyum, ketekunan belajar, dan kebahagiaan persaudaraan putra-putri
            Asuwain Timor.
          </p>
        </div>
        <div className="ggrid">
          {gallery.map((g) => (
            <article className="gcard" key={g.title}>
              <div className="im">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.img} alt={g.title} />
                <span>{g.tag}</span>
              </div>
              <div className="tx">
                <h5>{g.title}</h5>
                <p>{g.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
