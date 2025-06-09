// pages/AdminDashboard.js
import React, { useState } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [welcomeText, setWelcomeText] = useState(localStorage.getItem('welcomeText') || '');
  const [eventList, setEventList] = useState(JSON.parse(localStorage.getItem('events')) || []);
  const [eventInput, setEventInput] = useState('');
  const [eventDate, setEventDate] = useState('');

  const [galleryLink, setGalleryLink] = useState('');
  const [galleryList, setGalleryList] = useState(JSON.parse(localStorage.getItem('gallery')) || []);

  const [sermonTitle, setSermonTitle] = useState('');
  const [sermons, setSermons] = useState(JSON.parse(localStorage.getItem('sermons')) || []);

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem('books')) || []);

  const [shopPrice, setShopPrice] = useState('');
  const [shopItems, setShopItems] = useState(JSON.parse(localStorage.getItem('shopItems')) || []);

  const handleWelcomeSubmit = () => {
    localStorage.setItem('welcomeText', welcomeText);
    alert('Welcome message saved');
  };

 const handleAddEvent = () => {
  if (eventInput && eventDate) {
    const newEvent = { name: eventInput, date: eventDate };
    const updatedEvents = [...eventList, newEvent];
    setEventList(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventInput('');
    setEventDate('');
  }
  };


  const handleAddGalleryLink = () => {
    if (galleryLink) {
      const updatedGallery = [...galleryList, galleryLink];
      setGalleryList(updatedGallery);
      localStorage.setItem('gallery', JSON.stringify(updatedGallery));
      setGalleryLink('');
    }
  };

  const handleAddSermon = () => {
    if (sermonTitle) {
      const updatedSermons = [...sermons, sermonTitle];
      setSermons(updatedSermons);
      localStorage.setItem('sermons', JSON.stringify(updatedSermons));
      setSermonTitle('');
    }
  };

 const handleAddBook = () => {
  if (!bookTitle || !bookAuthor || !pdfFile) {
    alert('Please enter title, author and select a PDF.');
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      pdfData: reader.result,
      downloadable: true,
    };
    const updatedBooks = [...bookList, newBook];
    setBookList(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    // Clear inputs
    setBookTitle('');
    setBookAuthor('');
    setPdfFile(null);
    alert('Book uploaded successfully.');
  };
  reader.readAsDataURL(pdfFile);
  };

  const handleAddShopItem = () => {
  if (shopItems && shopPrice) {
    const newItem = { name: shopItems, price: parseFloat(shopPrice) };
    const updatedItems = [...shopItems, newItem];
    setShopItems(updatedItems);
    localStorage.setItem('shopItems', JSON.stringify(updatedItems));
    setShopItems('');
    setShopPrice('');
  } else {
    alert('Please enter both item name and price.');
  }
};


  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <section>
        <h3>Set Welcome Message</h3>
        <textarea
          value={welcomeText}
          onChange={(e) => setWelcomeText(e.target.value)}
          rows={4}
          cols={50}
        />
        <br />
        <button onClick={handleWelcomeSubmit}>Save Welcome Message</button>
      </section>

      <section>
  <h3>Add Event</h3>
  <input
    type="text"
    value={eventInput}
    onChange={(e) => setEventInput(e.target.value)}
    placeholder="Event name"
  />
  <input
    type="date"
    value={eventDate}
    onChange={(e) => setEventDate(e.target.value)}
    style={{ marginLeft: '10px' }}
  />
        <button onClick={handleAddEvent}>Add Event</button>
        <ul>
        {eventList.map((event, index) => (
           <li key={index}>
        {event.name} - {event.date}
           </li>
          ))}
        </ul>
      </section>


      <section>
        <h3>Add Gallery Link (Google Photos)</h3>
        <input
          type="text"
          value={galleryLink}
          onChange={(e) => setGalleryLink(e.target.value)}
          placeholder="Google Photos Link"
        />
        <button onClick={handleAddGalleryLink}>Add Link</button>
        <ul>{galleryList.map((link, index) => <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">Gallery {index + 1}</a></li>)}</ul>
      </section>

      <section>
        <h3>Add Sermon Title</h3>
        <input
          type="text"
          value={sermonTitle}
          onChange={(e) => setSermonTitle(e.target.value)}
          placeholder="Sermon Title"
        />
        <button onClick={handleAddSermon}>Add Sermon</button>
        <ul>{sermons.map((title, index) => <li key={index}>{title}</li>)}</ul>
      </section>

      <section>
  <h3>Upload Book (PDF)</h3>
  <input
    type="text"
    value={bookTitle}
    onChange={(e) => setBookTitle(e.target.value)}
    placeholder="Book Title"
  />
  <input
    type="text"
    value={bookAuthor}
    onChange={(e) => setBookAuthor(e.target.value)}
    placeholder="Author"
  />
  <input
    type="file"
    accept=".pdf"
    onChange={(e) => setPdfFile(e.target.files[0])}
  />
  <button onClick={handleAddBook}>Upload Book</button>
  <ul>
    {bookList.map((book, index) => (
      <li key={index}>
        {book.title} by {book.author}{' '}
        {book.pdfData && (
          <a
            href={book.pdfData}
            download={`${book.title}.pdf`}
            style={{ marginLeft: '10px', color: 'green' }}
          >
            Download
          </a>
        )}
      </li>
    ))}
  </ul>
</section>


      <section>
  <h3>Add Shop Item</h3>
  <input
    type="text"
    value={shopItems}
    onChange={(e) => setShopItems(e.target.value)}
    placeholder="Item Name"
  />
  <input
    type="number"
    value={shopPrice}
    onChange={(e) => setShopPrice(e.target.value)}
    placeholder="Price"
    style={{ marginLeft: '10px' }}
  />
  <button onClick={handleAddShopItem}>Add Item</button>
  <ul>
    {shopItems.map((item, index) => (
      <li key={index}>
        {item.name} - ${item.price?.toFixed(2)}
      </li>
    ))}
  </ul>
</section>

    </div>
  );
};

export default AdminDashboard;
// AdminDashboard.js
