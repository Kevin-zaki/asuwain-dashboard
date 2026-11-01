import { BadgeCheck, Copy, Info, Download, Smartphone, HandMetal } from 'lucide-react';
import { banks, qrisSteps } from '../data/content';

function FakeQr() {
  // Tampilan QR statis (placeholder visual, bukan kode QR sungguhan)
  const cells = [
    [1,0],[2,0],[4,0],[6,0],[7,0],[9,0],[3,1],[5,1],[8,1],[0,3],[2,3],[4,3],[7,3],[9,3],
    [1,4],[3,4],[5,4],[6,4],[8,4],[0,5],[2,5],[5,5],[9,5],[1,6],[4,6],[7,6],[8,6],
  ];
  const finder = (x: number, y: number) => (
    <g key={`${x}${y}`} transform={`translate(${x},${y})`}>
      <rect width="28" height="28" fill="#111" />
      <rect x="4" y="4" width="20" height="20" fill="#fff" />
      <rect x="8" y="8" width="12" height="12" fill="#0b6b5f" />
    </g>
  );
  return (
    <svg width="168" height="168" viewBox="0 0 120 120">
      {finder(0, 0)}{finder(92, 0)}{finder(0, 92)}
      {cells.map(([cx, cy], i) => (
        <rect key={i} x={34 + cx * 6.2} y={4 + cy * 6.2 + (i % 3) * 2} width="5" height="5" fill="#111" />
      ))}
      {cells.map(([cx, cy], i) => (
        <rect key={`b${i}`} x={34 + cx * 6.2} y={50 + cy * 6.2} width={i % 2 ? 5 : 8} height="5" fill="#111" />
      ))}
      <rect x="34" y="92" width="26" height="5" fill="#111" /><rect x="66" y="92" width="20" height="5" fill="#111" />
      <rect x="40" y="104" width="30" height="5" fill="#111" /><rect x="92" y="104" width="22" height="5" fill="#111" />
      <circle cx="60" cy="58" r="8" fill="#0b6b5f" /><circle cx="60" cy="58" r="3" fill="#fff" />
    </svg>
  );
}

export default function Channels() {
  return (
    <section className="channels" id="donasi">
      <div className="container">
        <div className="ch-head">
          <div>
            <span className="tag peach">Kanal Donasi Resmi</span>
            <h2 className="sec-title">Rekening Yayasan & QRIS Nasional</h2>
            <p className="sec-sub">
              Seluruh transaksi donasi wajib ditujukan langsung ke atas nama resmi yayasan guna
              menjamin transparansi pencatatan ledger keuangan.
            </p>
          </div>
          <span className="verify"><BadgeCheck size={13} /> Rekening Disetujui oleh Asuhan Publik</span>
        </div>

        <div>
          {banks.map((b) => (
            <div className="bank" key={b.code}>
              <div className="top">
                <div className="id">
                  <span className="logo" style={{ background: b.color }}>{b.code}</span>
                  <div><b>{b.name}</b><small>{b.branch}</small></div>
                </div>
                <span className="badge">{b.badge}</span>
              </div>
              <div className="lab">{b.label}</div>
              <div className="num">
                <b>{b.number}</b>
                <span className="copy"><Copy size={11} /> Salin No. Rek</span>
              </div>
              <div className="own"><span>Atas Nama Penerima</span><b>{b.owner}</b></div>
            </div>
          ))}
          <div className="notice">
            <Info size={16} />
            <span>
              Setelah melakukan transfer, mohon konfirmasikan melalui <b>Formulir Konfirmasi</b> di
              bawah ini atau kirimkan struk melalui WhatsApp Hotline agar dapat langsung diterbitkan
              bukti tanda terima resmi yayasan.
            </span>
          </div>
        </div>

        <aside className="qris">
          <span className="tag-q"><Smartphone size={10} /> QRIS Standar Bank Indonesia</span>
          <h3>Scan & Donasi Cepat</h3>
          <p>
            Mendukung semua m-Banking (BCA, Mandiri, BRI, BNI, BSI) & Dompet Digital
            (ShopeePay, OVO, DANA, GoPay, LinkAja)
          </p>
          <div className="qr-frame">
            <div className="qr-card">
              <div className="brandrow"><span>▮▬</span><span>QRIS</span></div>
              <FakeQr />
              <small>A.N. PANTI ASUHAN ASUWAIN TIMOR</small>
            </div>
          </div>
          <div className="guide">
            <b><HandMetal size={12} /> Panduan Praktis:</b>
            <ol>{qrisSteps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
          <div className="dl"><Download size={13} /> Unduh Gambar QRIS</div>
        </aside>
      </div>
    </section>
  );
}
