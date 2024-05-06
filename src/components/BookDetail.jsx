import React from 'react';
import { useParams } from 'react-router-dom';
import { initalBook } from '../constants';
import PageNotFound from './PageNotFound';

const BookDetail = () => {
  const { bookId } = useParams();
  const book = initalBook.find((book) => book.id === parseInt(bookId));

  if (!book) {
    return <div className=' -mt-[7rem]'>
      <PageNotFound/>
      </div>;
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
