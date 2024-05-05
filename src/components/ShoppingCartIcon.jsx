import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const ShoppingCartIcon = ({ itemCount }) => {
  return (
    <div className="relative">
      {/* <svg
        className="w-8 h-8 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4l16 4-3 8-5.25-1.5M4 4l16 4-3 8-5.25-1.5M4 4l16 4-3 8-5.25-1.5"
        />
        <circle cx="9" cy="21" r="1" fill="red" />
        <circle cx="17" cy="21" r="1" fill="red" />
      </svg> */}
      <ShoppingBagIcon width={30}/>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-block bg-red-500 text-white text-xs rounded-full px-1">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
