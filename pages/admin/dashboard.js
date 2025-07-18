import styles from '../styles/Dashboard.module.css';

export default function AdminDashboard() {
  const data = {
    penduduk: 36,
    surat: 3,
    permohonan: 6,
    pending: 2,
    terbaru: [
      { jenis: "Surat Izin Keramaian", pemohon: "Lina Agustina", tanggal: "16 Juli 2024" },
      { jenis: "Surat Keterangan Beda Nama", pemohon: "Hendra Saputra", tanggal: "16 Juli 2024" }
    ],
    disetujui: [
      { jenis: "Surat Keterangan Tidak Mampu", nomor: "114/ABCDE/2024" },
      { jenis: "Surat Keterangan Usaha", nomor: "113/ABCDE/2024" },
      { jenis: "Surat Keterangan Tidak Mampu", nomor: "1/ABCD/2024" }
    ]
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Pendekar</h2>
        <ul>
          <li>Dashboard</li>
          <li>Penduduk</li>
          <li>Aparat Desa</li>
          <li>Daftar Surat</li>
          <li>Permohonan</li>
          <li>Daftar Permohonan</li>
          <li>Riwayat</li>
          <li>Akun</li>
          <li>Pengguna</li>
          <li>Administrator</li>
        </ul>
      </aside>
      <main className={styles.main}>
        <h1>Dashboard Admin</h1>
        <div className={styles.stats}>
          <div className={styles.card}><p>Penduduk</p><h2>{data.penduduk}</h2></div>
          <div className={styles.card}><p>Surat</p><h2>{data.surat}</h2></div>
          <div className={styles.card}><p>Permohonan</p><h2>{data.permohonan}</h2></div>
          <div className={styles.card}><p>Permohonan Pending</p><h2>{data.pending}</h2></div>
        </div>
        <div className={styles.lists}>
          <div className={styles.list}>
            <h3>Permohonan Surat Terbaru</h3>
            <table>
              <thead><tr><th>Jenis Surat</th><th>Pemohon</th><th>Tanggal</th></tr></thead>
              <tbody>
                {data.terbaru.map((item, i) => (
                  <tr key={i}><td>{item.jenis}</td><td>{item.pemohon}</td><td>{item.tanggal}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.list}>
            <h3>Surat Disetujui</h3>
            <table>
              <thead><tr><th>Jenis Surat</th><th>No. Surat</th></tr></thead>
              <tbody>
                {data.disetujui.map((item, i) => (
                  <tr key={i}><td>{item.jenis}</td><td>{item.nomor}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}