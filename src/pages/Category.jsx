import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAlbumsByCategory } from '../services/wpApi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DUMMY_IMAGE = 'https://via.placeholder.com/400x250?text=No+Image';

export default function Category() {
  const { slug } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbumsByCategory(slug)
      .then((data) => {
        if (Array.isArray(data)) setAlbums(data);
        else if (typeof data === 'object' && data !== null) setAlbums(Object.values(data));
        else setAlbums([]);
      })
      .catch(() => setAlbums([]));
  }, [slug]);

  return (
    <>
      <Header />
      <main style={{ width: '100%', padding: '40px 20px', boxSizing: 'border-box' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
          {slug.charAt(0).toUpperCase() + slug.slice(1)} Albums
        </h1>

        {albums.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              maxWidth: '1400px',
              margin: '0 auto',
            }}
          >
            {albums.map((album) => (
              <Link
                key={album.id}
                to={`/album/${album.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#111',
                  transition: 'transform 0.2s',
                }}
                className="album-card"
              >
                <img
                  src={album.cover_image || DUMMY_IMAGE}
                  alt={album.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <h2 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fff' }}>{album.name}</h2>
                  {album.event_date && (
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>
                      Event Date: {new Date(album.event_date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginTop: '40px' }}>No albums found in this category.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
