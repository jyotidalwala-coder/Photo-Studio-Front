import { useEffect, useState } from 'react';
import { getCategories, getAlbumsByCategory } from '../services/wpApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlbumSlider from '../components/Slider';
import AlbumCard from '../components/AlbumCard';
import './Home.css';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [sliderAlbums, setSliderAlbums] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(Array.isArray(data) ? data : Object.values(data)));
    getAlbumsByCategory('all').then((albums) => {
      const featured = albums.filter((a) => a.show_in_slider);
      setSliderAlbums(featured);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="home-main">
        <AlbumSlider albums={sliderAlbums} />
        <h1 className="home-title">Photo Studio Albums</h1>
        <div className="category-grid">
          {categories.length > 0 ? categories.map((cat) => (
            <a key={cat.slug} href={`/category/${cat.slug}`} className="category-card">
              <img src={cat.image || 'https://via.placeholder.com/400x250?text=No+Image'} alt={cat.name} />
              <div className="category-card-content">
                <h2>{cat.name}</h2>
                {cat.description && <p>{cat.description}</p>}
              </div>
            </a>
          )) : <p className="no-categories">No categories found</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
