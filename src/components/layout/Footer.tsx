import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BeautyShop</h3>
            <p className="text-gray-600 mb-4">
              Your destination for premium beauty products that enhance your
              natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Skincare
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Makeup
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Fragrances
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-500">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} BeautyShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;