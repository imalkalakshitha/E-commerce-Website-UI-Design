import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            BeautyShop
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/admin" className="text-gray-600 hover:text-gray-900">
              <User size={20} />
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block text-gray-600 hover:text-gray-900 py-2">
              Home
            </Link>
            <Link to="/" className="block text-gray-600 hover:text-gray-900 py-2">
              Shop
            </Link>
            <Link to="/" className="block text-gray-600 hover:text-gray-900 py-2">
              About Us
            </Link>
            <Link to="/" className="block text-gray-600 hover:text-gray-900 py-2">
              Contact
            </Link>
          </nav>}
      </div>
    </header>;
};
export default Header;