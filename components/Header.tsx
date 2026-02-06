import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <span className="text-green-600">jeki</span>
          <span>Data-Driven Lab</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-green-600 transition-colors">Blog</Link>
          <a href="#" className="hover:text-green-600 transition-colors">About</a>
          <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
