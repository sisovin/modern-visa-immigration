import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
        className="text-gray-700 hover:text-gray-900"
      >
        {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>
      {isMenuOpen && (
        <nav
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white shadow-lg"
          role="menu"
          aria-label="Mobile menu"
        >
          <a href="/home" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Home</a>
          <a href="/services" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Services</a>
          <a href="/countries" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Countries</a>
          <a href="/about" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">About</a>
          <a href="/blog" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Blog</a>
          <a href="/contact" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Contact</a>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
