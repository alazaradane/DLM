import React from "react";
import { initalBook } from "../constants";
import BookCard from "./BookCard";

const BookList = ({cartItems, handleAddToCart, books, onBookClick})=> {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Popular Now</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
           Read and Grow
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl items-center justify-center grid-cols-1  gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {books.map((book)=>(
            <BookCard 
              book={book} 
              cartItems={cartItems} 
              key={book.id} 
              image={book.image}  
              name={book.name} 
              category={book.category} 
              author={book.author} 
              detail={book.description}  
              handleAddToCart={handleAddToCart}
              onBookClick={()=>onBookClick(book.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookList;