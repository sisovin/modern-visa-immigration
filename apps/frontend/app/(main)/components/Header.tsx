import React from 'react';
import StickyHeader from './StickyHeader';
import DropdownMenu from './DropdownMenu';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <StickyHeader>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="/home" className="hover:text-gray-700">Home</a>
          <DropdownMenu title="Services" items={[
            { label: 'Consultation', href: '/services/consultation' },
            { label: 'Assistance', href: '/services/assistance' },
            { label: 'Legal Support', href: '/services/legal' },
          ]} />
          <DropdownMenu title="Countries" items={[
            { label: 'USA', href: '/countries/usa' },
            { label: 'Canada', href: '/countries/canada' },
            { label: 'UK', href: '/countries/uk' },
          ]} />
          <a href="/about" className="hover:text-gray-700">About</a>
          <a href="/blog" className="hover:text-gray-700">Blog</a>
          <a href="/contact" className="hover:text-gray-700">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <SearchModal />
          <a href="/login" className="hover:text-gray-700">Login</a>
          <a href="/signup" className="hover:text-gray-700">Sign Up</a>
        </div>
        <MobileMenu />
      </div>
    </StickyHeader>
  );
};

export default Header;
