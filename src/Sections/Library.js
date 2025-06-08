import React, { useEffect, useState } from 'react';

const Library = ({ searchQuery }) => {
  const defaultResources = [
    { title: 'Jesus is the greatest', author: '1', downloadable: true },
    { title: 'The message that works', author: 'TL Osbon', downloadable: true },
    // ... other static books
  ];

  const [uploadedBooks, setUploadedBooks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('books')) || [];
    setUploadedBooks(saved);
  }, []);

  const allBooks = [...defaultResources, ...uploadedBooks];

  const filteredBooks = allBooks.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>All Resources</h2>
      <div className="resource-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div className="resource-card" key={index}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              {book.downloadable && book.pdfData ? (
                <a
                  href={book.pdfData}
                  download={`${book.title}.pdf`}
                  className="download-btn"
                >
                  Download PDF
                </a>
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
