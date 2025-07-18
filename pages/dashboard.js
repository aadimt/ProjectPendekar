import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (!data) {
      router.push('/');
    } else {
      setUser(data);
    }
  }, []);

  return user ? (
    <div style={{ padding: '2rem' }}>
      <h1>Halo, {user.name}</h1>
      <p>Selamat datang di layanan desa Karyalaksana.</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}