import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const ShoppingCartIcon = ({ itemCount, onClick }) => {
  return (
    <div className="relative">
      <ShoppingBagIcon width={30}/>
      {itemCount > 0 && (
        <span onClick={onClick} className="absolute top-0 cursor-pointer right-0 inline-block bg-red-500 text-white text-xs rounded-full px-1">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
