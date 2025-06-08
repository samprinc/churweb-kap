import React, { useEffect, useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storedGallery = JSON.parse(localStorage.getItem('gallery')) || [];
    const dynamicPhotos = storedGallery.map((link, index) => ({
      title: `Gallery ${index + 1}`,
      image: 'https://via.placeholder.com/300', // You can enhance this by allowing image URLs later
      link,
    }));
    setPhotos(dynamicPhotos);
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-description">
        Click on a card to view full photo albums on Google Photos.
      </p>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <a
            href={photo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-card"
            key={index}
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="gallery-image"
            />
            <div className="gallery-card-title">{photo.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
