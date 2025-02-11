import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <nav className="container mx-auto flex justify-center items-center space-x-8">
        <a href="#about" className="hover:text-gray-200">About</a>
        <a href="#projects" className="hover:text-gray-200">Projects</a>
        <a href="#contact" className="hover:text-gray-200">Contact</a>
      </nav>
    </header>
  );
};

export default Header;