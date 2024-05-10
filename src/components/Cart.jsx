
import React from 'react';

const Cart = ({ cartItems }) => {

    console.log(cartItems)
  return (
    <div className='container mx-auto mt-10'>
      <h2 className='text-3xl font-bold mb-4'>Your Cart</h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Book
            </th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Price
            </th>
            
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {Object.keys(cartItems).map((bookId) => (
            <tr key={bookId}>
              <td className='px-6 py-4 whitespace-nowrap'>
                {/* Display book details */}
                {cartItems[bookId].name}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {/* Display book price or any other relevant information */}
                $XX.XX
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4'>
        <button className='bg-indigo-500 text-white px-4 py-2 rounded-md'>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
