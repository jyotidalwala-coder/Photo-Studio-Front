
const API_BASE = 'http://localhost/jmkphotostudio/wp-json/photostudio/v1';

export const getCategories = async () => {
  const res = await fetch(`${API_BASE}/categories`);
  return res.json();
};

export const getAlbumsByCategory = async (slug) => {
  const res = await fetch(`${API_BASE}/albums?category=${slug}`);
  return res.json();
};

export const getAlbum = async (id) => {
  const res = await fetch(`${API_BASE}/album/${id}`);
  return res.json();
};

export const getStudioInfo = async () => {
  const res = await fetch(`${API_BASE}/studio-info`);
  return res.json(); // returns { name, email, phone, logo }
};
