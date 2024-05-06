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
    <section id='bookdetail' className=' py-5 px-[7rem] '>
      <div className=' my-[3rem]'>
        <h1 className=' text-[2rem] font-bold'>Book Detail</h1>
      </div>
      <div className=' flex '>
        <div>
          <img src={book.image} alt={book.name} className=' w-[22rem] h-[30rem]' />
        </div>
        <div className=' mx-[10rem] mt-6 w-[30rem]'>
          <h1 className=' my-5 text-4xl font-bold'>{book.name}</h1>
          <p className=' font-semibold'>Authors <span className='text-base italic ml-3'>{book.author}</span></p>
          <span className=' inline-flex items-center rounded-md my-4 bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>{book.category}</span> 
          <p>Description: {book.description}</p>
          <button className=' bg-indigo-800 py-1 px-5 text-white rounded-[0.3rem] mt-[1rem]'>Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
