import React from 'react';

export default function Card({ imageUrl, title, description, price }) {
  return (
    <div className="max-w-xs w-full bg-white border rounded-lg shadow-lg overflow-hidden h-96">
      <img src={imageUrl} alt="Product" className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
        </div>
      </div>
    </div>
  );
}