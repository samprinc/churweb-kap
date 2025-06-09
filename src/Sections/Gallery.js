import React, { useEffect, useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://chweb-back.onrender.com/api/gallery-links/")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch gallery photos');
        return res.json();
      })
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p>Error loading gallery: {error}</p>;

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">Click on a card to view full photo albums.</p>
      <div className="gallery-grid">
        {photos.length === 0 ? (
          <p>No photos available.</p>
        ) : (
          photos.map((photo, index) => (
            <a
              href={photo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card"
              key={index}
            >
              <img src={photo.image} alt={photo.title} className="gallery-image" />
              <div className="gallery-card-title">{photo.title}</div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
