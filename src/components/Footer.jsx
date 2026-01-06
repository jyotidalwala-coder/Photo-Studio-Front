import { useEffect, useState } from 'react';
import { getStudioInfo } from '../services/wpApi';

export default function Footer() {
  const [studio, setStudio] = useState({ email: '', phone: '' });

  useEffect(() => {
    getStudioInfo().then(setStudio);
  }, []);

  return (
    <footer style={{ backgroundColor: '#111', color: '#ccc', padding: '20px', textAlign: 'center' }}>
      <p>Email: {studio.email}</p>
      <p>Phone: {studio.phone}</p>
      <p>&copy; {new Date().getFullYear()} {studio.name || 'Photo Studio'}</p>
    </footer>
  );
}
