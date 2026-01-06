import { Link } from 'react-router-dom';
const DUMMY_IMAGE = 'https://via.placeholder.com/400x250?text=No+Image';

export default function AlbumCard({ album }) {
  return (
    <Link
      to={`/album/${album.id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#111',
        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      className="album-card"
    >
      <img
        src={album.cover_image || DUMMY_IMAGE}
        alt={album.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '15px', flex: 1 }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fff' }}>{album.name}</h2>
        {album.event_date && <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Event: {new Date(album.event_date).toLocaleDateString()}</p>}
      </div>
    </Link>
  );
}
