import { Banknote, Package, UploadCloud, ShieldCheck } from 'lucide-react';
import { amounts, payMethods } from '../data/content';

const rp = (n: number) => 'Rp ' + n.toLocaleString('id-ID');

export default function DonationForm() {
  return (
    <section className="formsec">
      <div className="container">
        <div className="head center">
          <span className="tag mint">Konfirmasi Jariyah</span>
          <h2 className="sec-title">Formulir Donasi & Tanda Terima Resmi</h2>
          <p className="sec-sub">
            Pilihlah bentuk donasi yang ingin Anda salurkan. Kami akan mengirimkan kuitansi donasi
            berstempel digital ke nomor WhatsApp Anda.
          </p>
        </div>

        <div className="fcard">
          <div className="tabs">
            <button type="button" className="on"><Banknote size={14} /> Donasi Uang (Tunai / Transfer)</button>
            <button type="button"><Package size={14} /> Donasi Barang / Logistik</button>
          </div>
          <form className="fbody" onSubmit={(e) => e.preventDefault()}>
            <div className="fld">
              <label>Nama Lengkap Donatur <i>*</i></label>
              <input className="inp" placeholder="Contoh: Bpk. Hendra Gunawan" readOnly />
              <div className="chk"><span /> Sembunyikan Nama di Laporan Publik (Hamba Allah)</div>
            </div>

            <div className="two">
              <div className="fld">
                <label>No. WhatsApp Aktif <i>*</i></label>
                <input className="inp" placeholder="0812-xxxx-xxxx" readOnly />
                <div className="hint">Untuk pengiriman kuitansi elektronik</div>
              </div>
              <div className="fld">
                <label>Alamat Email (Opsional)</label>
                <input className="inp" placeholder="nama@email.com" readOnly />
              </div>
            </div>

            <div className="fld" style={{ marginTop: 24 }}>
              <label>Pilih Nominal Donasi <i>*</i></label>
              <div className="amts">
                {amounts.map((a) => (
                  <button type="button" key={a} className={a === 250000 ? 'on' : ''}>{rp(a)}</button>
                ))}
              </div>
              <div className="rp"><span>Rp</span><input defaultValue="250000" readOnly /></div>
            </div>

            <div className="fld" style={{ marginTop: 24 }}>
              <label>Metode Pembayaran Dituju <i>*</i></label>
              <div className="methods">
                {payMethods.map((m, i) => (
                  <div className={`mth ${i === 0 ? 'on' : ''}`} key={m.id}>
                    <span className="rad" />
                    <div><b>{m.title}</b><small>{m.sub}</small></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fld" style={{ marginTop: 24 }}>
              <label>Pesan Doa / Harapan untuk Anak Asuh (Opsional)</label>
              <textarea className="inp" placeholder="Tuliskan doa kebaikan atau salam untuk adik-adik di panti..." readOnly />
            </div>

            <div className="fld" style={{ marginTop: 24 }}>
              <label>Unggah Bukti Transfer / Resi Struk (Opsional)</label>
              <div className="drop">
                <UploadCloud size={22} />
                <span>Geser & lepas foto bukti atau klik untuk memilih file</span>
                <small>PNG, JPG, PDF maksimal 2MB</small>
                <button type="button">Pilih Berkas Foto</button>
              </div>
            </div>

            <button type="submit" className="submit"><ShieldCheck size={18} /> Kirim Konfirmasi Donasi Uang</button>
          </form>
        </div>
      </div>
    </section>
  );
}
