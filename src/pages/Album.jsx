import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAlbum } from '../services/wpApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlbumSlider from '../components/Slider';

export default function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    getAlbum(id).then(setAlbum);
  }, [id]);

  if (!album) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>{album.name}</h1>
        <p>Event Date: {new Date(album.event_date).toLocaleDateString()}</p>
        <AlbumSlider albums={album.slider_images} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          {album.gallery_images.map(img => <img key={img} src={img} alt="" style={{ width: '200px', borderRadius: '8px' }} />)}
        </div>
        {album.video && (
          <video controls style={{ width: '100%', marginTop: '20px' }}>
            <source src={album.video} type="video/mp4" />
          </video>
        )}
      </main>
      <Footer />
    </>
  );
}
