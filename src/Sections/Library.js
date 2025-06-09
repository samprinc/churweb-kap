import React, { useEffect, useState } from 'react';

const Library = ({ searchQuery }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://chweb-back.onrender.com/api/books/")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch books');
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Resources</h2>
      <div className="resource-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div className="resource-card" key={index}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              {book.downloadable && book.pdfUrl ? (
                <a href={book.pdfUrl} download className="download-btn">Download PDF</a>
              ) : (
                <span className="physical-only">Physical Copy Only</span>
              )}
            </div>
          ))
        ) : (
          <p>No books match your search.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
