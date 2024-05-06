import React from 'react';
import { useParams } from 'react-router-dom';
import { initalBook } from '../constants';

const BookDetail = () => {
  // Get the bookId from the URL params
  const { bookId } = useParams();

  // Find the book with the matching ID
  const book = initalBook.find((book) => book.id === parseInt(bookId));

  if (!book) {
    // If the book is not found, display a message
    return <div>Book not found!</div>;
  }

  return (
    <div>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Description: {book.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default BookDetail;
