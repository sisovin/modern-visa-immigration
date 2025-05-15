import React, { useState } from 'react';

const StickyHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCountriesDropdownOpen, setIsCountriesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleCountriesDropdown = () => {
    setIsCountriesDropdownOpen(!isCountriesDropdownOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <div className="relative">
            <button onClick={toggleServicesDropdown} className="hover:text-gray-700">
              Services
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded">
                <a href="/services/consultation" className="block px-4 py-2 hover:bg-gray-100">Consultation</a>
                <a href="/services/assistance" className="block px-4 py-2 hover:bg-gray-100">Assistance</a>
                <a href="/services/legal" className="block px-4 py-2 hover:bg-gray-100">Legal Support</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={toggleCountriesDropdown} className="hover:text-gray-700">
              Countries
            </button>
            {isCountriesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded">
                <a href="/countries/usa" className="block px-4 py-2 hover:bg-gray-100">USA</a>
                <a href="/countries/canada" className="block px-4 py-2 hover:bg-gray-100">Canada</a>
                <a href="/countries/uk" className="block px-4 py-2 hover:bg-gray-100">UK</a>
              </div>
            )}
          </div>
        </nav>
        <button onClick={toggleMobileMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="/services/consultation" className="block px-4 py-2 hover:bg-gray-100">Consultation</a>
          <a href="/services/assistance" className="block px-4 py-2 hover:bg-gray-100">Assistance</a>
          <a href="/services/legal" className="block px-4 py-2 hover:bg-gray-100">Legal Support</a>
          <a href="/countries/usa" className="block px-4 py-2 hover:bg-gray-100">USA</a>
          <a href="/countries/canada" className="block px-4 py-2 hover:bg-gray-100">Canada</a>
          <a href="/countries/uk" className="block px-4 py-2 hover:bg-gray-100">UK</a>
        </nav>
      )}
    </header>
  );
};

export default StickyHeader;
