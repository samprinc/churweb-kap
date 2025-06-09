import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://chweb-back.onrender.com/api/shop-items/")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch shop items');
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading shop items...</p>;
  if (error) return <p>Error loading shop: {error}</p>;

  return (
    <div>
      <h2>Shop</h2>
      <p>Explore and purchase items related to our ministry.</p>

      {items.length === 0 ? (
        <p>No items available currently.</p>
      ) : (
        <div className="shop-grid">
          {items.map(({ id, name, description, price, image }, idx) => (
            <div className="shop-item" key={id || idx}>
              {image && <img src={image} alt={name} className="shop-item-image" />}
              <p>{description || "No description"}</p>
              <p><strong>Price:</strong> Ksh.{price ? Number(price).toFixed(2) : "0.00"}</p>
              {image && <img src={image} alt={name} />}

              {/* Optional: Add Add to Cart / Payment link here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
