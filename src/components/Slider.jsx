import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AlbumCard from './AlbumCard';

export default function AlbumSlider({ albums }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(albums.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ marginBottom: '50px' }}>
      <Slider {...settings}>
        {albums.map((album) => (
          <div key={album.id} style={{ padding: '0 10px' }}>
            <AlbumCard album={album} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
