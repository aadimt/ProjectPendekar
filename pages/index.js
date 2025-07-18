import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Login() {
  const [nik, setNik] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nik, pin })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/bg.jpg" alt="Desa" className={styles.bgImage} />
        <div className={styles.title}>PENDEKAR<br/>Pelayanan Desa Karyalaksana</div>
      </div>
      <div className={styles.right}>
        <h2>Selamat Datang di PENDEKAR</h2>
        <p>Silakan login menggunakan NIK dan PIN</p>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Masukkan NIK"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Masukkan PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
          <button type="submit">Masuk</button>
        </form>
        <p>Belum punya akun? <a href="#">Daftar disini</a></p>
        <button className={styles.adminLogin}>Login sebagai Admin</button>
      </div>
    </div>
  );
}