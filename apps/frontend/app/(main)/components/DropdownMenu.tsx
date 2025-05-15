import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        {isOpen ? <FaChevronUp className="w-5 h-5 ml-2" /> : <FaChevronDown className="w-5 h-5 ml-2" />}
      </button>
      {isOpen && (
        <div
          className="absolute left-0 z-10 w-full mt-2 origin-top-left bg-white border border-gray-300 rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
