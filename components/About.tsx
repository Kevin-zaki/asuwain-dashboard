import { GraduationCap, Smile, Hammer, MapPin, CheckCircle2 } from 'lucide-react';
import { pillars } from '../data/content';

const icons = { graduation: GraduationCap, smile: Smile, tools: Hammer } as const;

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="head center">
          <span className="tag mint">Fondasi Nilai & Pengasuhan</span>
          <h2 className="sec-title">Visi & Tiga Pilar Pengasuhan Kami</h2>
          <p className="sec-sub">
            Panti Asuhan Asuwain Timor didirikan sebagai rumah naungan yang menumbuhkan martabat,
            kemandirian spiritual, serta kompetensi nyata anak bangsa.
          </p>
        </div>

        <div className="vision">
          <div className="k"><MapPin size={14} /> Visi Besar Yayasan</div>
          <q>
            &ldquo;Mewujudkan generasi anak yatim dan dhuafa di wilayah Timor yang berakhlak
            karimah, mandiri secara ekonomi, dan berpendidikan tangguh untuk kemajuan bangsa.&rdquo;
          </q>
        </div>

        <div className="pillars">
          {pillars.map((p) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <article className="pillar" key={p.title}>
                <span className={`ic ${p.tone}`}><Icon size={20} /></span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt} className={p.tone}><CheckCircle2 size={12} /> {pt}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
