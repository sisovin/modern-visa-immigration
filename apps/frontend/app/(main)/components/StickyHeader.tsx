import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const StickyHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCountriesDropdownOpen, setIsCountriesDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleCountriesDropdown = () => {
    setIsCountriesDropdownOpen(!isCountriesDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 bg-white shadow-md z-50 ${isSticky ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <div className="relative">
            <button onClick={toggleServicesDropdown} className="hover:text-gray-700" aria-haspopup="true" aria-expanded={isServicesDropdownOpen}>
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded" role="menu">
                <a href="/services/consultation" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Consultation</a>
                <a href="/services/assistance" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Assistance</a>
                <a href="/services/legal" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Legal Support</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleCountriesDropdown} className="hover:text-gray-700" aria-haspopup="true" aria-expanded={isCountriesDropdownOpen}>
              Countries
            </button>
            {isCountriesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded" role="menu">
                <a href="/countries/usa" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">USA</a>
                <a href="/countries/canada" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Canada</a>
                <a href="/countries/uk" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">UK</a>
              </div>
            )}
          </div>
        </nav>
        <button onClick={toggleMobileMenu} className="md:hidden" aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md" role="menu">
          <a href="/services/consultation" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Consultation</a>
          <a href="/services/assistance" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Assistance</a>
          <a href="/services/legal" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Legal Support</a>
          <a href="/countries/usa" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">USA</a>
          <a href="/countries/canada" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Canada</a>
          <a href="/countries/uk" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">UK</a>
        </nav>
      )}
    </header>
  );
};

export default StickyHeader;
