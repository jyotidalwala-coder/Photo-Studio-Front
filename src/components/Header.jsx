import { useEffect, useState } from 'react';
import { getStudioInfo } from '../services/wpApi';

export default function Header() {
  const [studio, setStudio] = useState(null);

  useEffect(() => {
    getStudioInfo().then(setStudio);
  }, []);

  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      {studio && <img src={studio.logo} alt={studio.name} style={{ maxHeight: '80px' }} />}
    </header>
  );
}
