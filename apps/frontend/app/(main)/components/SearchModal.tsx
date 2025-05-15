import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        aria-label="Open search modal"
        className="text-gray-700 hover:text-gray-900"
      >
        <FaSearch className="w-6 h-6" />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button
              onClick={toggleModal}
              aria-label="Close search modal"
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Search</h2>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Type your search query..."
                aria-label="Search query"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
