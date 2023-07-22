import React from 'react';
import Book from './Book';

const FeaturedBooks = () => {
  const books = [
    { title: 'Book Title 1', author: 'Author Name 1', image: 'book1.jpg' },
    { title: 'Book Title 2', author: 'Author Name 2', image: 'book2.jpg' },
    // Add more book objects as needed
  ];

  const handleClickMoreInfo = (bookTitle) => {
    alert(`More info about ${bookTitle}`);
  };

  return (
    <section className="featured-books">
      <h2>Featured Books</h2>
      <div className="book-container">
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            onMoreInfo={() => handleClickMoreInfo(book.title)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;

