import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { MenuIcon, ShoppingCart, Search } from 'lucide-react';
import Card from './Card'; 

export default function Header() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/images') 
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setImages(data);
      })
      .catch((error) => console.error('Error fetching images:', error));


    gsap.set(".header-container", { opacity: 0, y: -100 });
    gsap.set(".logo-text", { opacity: 0, y: 20 });

    gsap.to(".header-container", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(".logo-text", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.out"
    });
  }, []);

  return (
    <div>
      <header className='header-container bg-black text-white w-full fixed top-0 left-0 z-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            <div className='flex items-center space-x-8'>
              <MenuIcon className='h-6 w-6 cursor-pointer hover:text-gray-300 transition-colors' />
              <nav className='flex space-x-8'>
                <a href="#" className='hover:text-gray-300 transition-colors'>iPhone 16 Pro</a>
                <a href="#" className='hover:text-gray-300 transition-colors'>iPhone 16</a>
                <a href="#" className='hover:text-gray-300 transition-colors'>Compare</a>
              </nav>
            </div>

            <div className='flex-shrink-0 absolute left-1/2 transform -translate-x-1/2'>
              <h1 className='logo-text text-2xl font-bold tracking-wider'>iPhone</h1>
            </div>

            <div className='flex items-center space-x-6'>
              <Search className='h-6 w-6 cursor-pointer hover:text-gray-300 transition-colors' />
              <ShoppingCart className='h-6 w-6 cursor-pointer hover:text-gray-300 transition-colors' />
            </div>
          </div>
        </div>
      </header>


      <div className="max-w-7xl mx-auto px-4 py-20 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <Card 
            key={index}
            imageUrl={image}
            title={`iPhone ${index + 1}`}
            description="Latest iPhone model"
            price="$999"
          />
        ))}
      </div>

      <div className='h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20'></div>
    </div>
  );
}