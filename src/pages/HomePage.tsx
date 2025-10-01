import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Search } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { products, categories } from '../data/products';
const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProducts = products.filter(product => product.featured);
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    // Filter by price
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    // Filter by rating
    if (product.rating < minRating) {
      return false;
    }
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[500px] md:h-[600px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Beauty products showcase" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Discover Your Perfect Beauty Routine
              </h1>
              <p className="text-xl text-white mb-8">
                Premium products for your skincare, makeup, and self-care needs
              </p>
              <div className="flex space-x-4">
                <Button size="large">Shop Now</Button>
                <Button variant="outline" size="large" className="bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link to="/" className="text-pink-500 flex items-center hover:text-pink-600">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
      {/* Product Catalog with Filters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Products
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24 bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Filters
                </h3>
                {/* Search */}
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                    Search
                  </label>
                  <div className="relative">
                    <input type="text" id="search" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-pink-500 focus:border-pink-500" />
                    <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`block w-full text-left px-2 py-1.5 rounded text-sm ${activeCategory === category.id ? 'bg-pink-50 text-pink-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                        {category.name}
                      </button>)}
                  </div>
                </div>
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Price Range
                  </h4>
                  <div className="flex items-center space-x-4">
                    <div className="w-full">
                      <input type="range" min="0" max="100" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-gray-500">
                          ${priceRange[0]}
                        </span>
                        <span className="text-sm text-gray-500">
                          ${priceRange[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Rating */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Rating
                  </h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => <button key={rating} onClick={() => setMinRating(rating)} className={`flex items-center w-full px-2 py-1.5 rounded text-sm ${minRating === rating ? 'bg-pink-50' : 'hover:bg-gray-50'}`}>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
                        </div>
                        <span className="ml-2 text-gray-600">& Up</span>
                      </button>)}
                  </div>
                </div>
                <Button variant="secondary" fullWidth onClick={() => {
                setActiveCategory('all');
                setPriceRange([0, 100]);
                setMinRating(0);
                setSearchQuery('');
              }}>
                  Clear Filters
                </Button>
              </div>
            </div>
            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              {filteredProducts.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
                </div> : <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Beauty Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            products, exclusive offers, and beauty tips.
          </p>
          <div className="max-w-md mx-auto flex">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <Button size="large" className="rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;