import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, Heart, Share2, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';
const ProductPage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const productId = parseInt(id || '1');
  const product = products.find(p => p.id === productId);
  // If product not found, show error
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Product not found
        </h1>
        <p className="text-gray-600 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>;
  }
  // Related products (same category)
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  // State for product page
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  return <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <ChevronLeft size={16} className="mx-2 text-gray-400" />
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <ChevronLeft size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-900">{product.name}</span>
        </div>
        {/* Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => <button key={index} onClick={() => setSelectedImage(index)} className={`aspect-square rounded-md overflow-hidden ${selectedImage === index ? 'ring-2 ring-pink-500' : 'ring-1 ring-gray-200'}`}>
                  <img src={image} alt={`${product.name} - View ${index + 1}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </div>
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            {/* Quantity Selector */}
            <div className="mb-6">
              <h2 className="text-sm font-medium text-gray-900 mb-2">
                Quantity
              </h2>
              <div className="flex items-center">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md">
                  -
                </button>
                <div className="w-12 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md">
                  +
                </button>
              </div>
            </div>
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="large" fullWidth disabled={!product.inStock}>
                <ShoppingCart size={20} className="mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button variant="outline" size="large">
                <Heart size={20} />
              </Button>
              <Button variant="outline" size="large">
                <Share2 size={20} />
              </Button>
            </div>
            {/* Shipping & Returns */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex">
                <Truck size={20} className="text-gray-400 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Free Shipping
                  </h3>
                  <p className="text-sm text-gray-500">
                    Free standard shipping on orders over $35
                  </p>
                </div>
              </div>
              <div className="flex">
                <ShieldCheck size={20} className="text-gray-400 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    30-Day Returns
                  </h3>
                  <p className="text-sm text-gray-500">
                    Not happy with your purchase? Return it within 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button onClick={() => setActiveTab('description')} className={`py-4 px-1 text-sm font-medium border-b-2 ${activeTab === 'description' ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Description
              </button>
              <button onClick={() => setActiveTab('reviews')} className={`py-4 px-1 text-sm font-medium border-b-2 ${activeTab === 'reviews' ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Reviews ({product.reviewCount})
              </button>
              <button onClick={() => setActiveTab('shipping')} className={`py-4 px-1 text-sm font-medium border-b-2 ${activeTab === 'shipping' ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Shipping & Returns
              </button>
            </nav>
          </div>
          <div className="py-6">
            {activeTab === 'description' && <div className="prose max-w-none">
                <p className="mb-4">{product.description}</p>
                <p>
                  Our products are formulated without parabens, sulfates, or
                  phthalates. We are committed to using clean ingredients that
                  are safe for you and the environment.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-2">How to Use</h3>
                <p>
                  Apply a small amount to clean, dry skin. Gently massage in
                  circular motions until fully absorbed. Use morning and evening
                  for best results.
                </p>
                <h3 className="text-lg font-medium mt-6 mb-2">Ingredients</h3>
                <p>
                  Water, Glycerin, Butylene Glycol, Niacinamide, Hydroxyethyl
                  Acrylate/Sodium Acryloyldimethyl Taurate Copolymer,
                  Phenoxyethanol, Sodium Hyaluronate, Tocopheryl Acetate,
                  Panthenol, Allantoin, Ethylhexylglycerin, Disodium EDTA.
                </p>
              </div>}
            {activeTab === 'reviews' && <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        Amazing product!
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      by Sarah J. on May 12, 2023
                    </p>
                    <p className="text-gray-800">
                      This product exceeded my expectations! My skin feels so
                      much more hydrated and looks brighter after just a week of
                      use. Will definitely purchase again.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        Great for sensitive skin
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      by Michael T. on April 28, 2023
                    </p>
                    <p className="text-gray-800">
                      I have very sensitive skin and have had reactions to many
                      products, but this one works great! No irritation and I
                      can see a visible difference in my skin texture.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        Worth every penny
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      by Jennifer L. on April 15, 2023
                    </p>
                    <p className="text-gray-800">
                      I was hesitant about the price at first, but this product
                      is worth every penny. A little goes a long way and the
                      results are amazing. My skin has never looked better!
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button variant="secondary">
                    Load More Reviews <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>}
            {activeTab === 'shipping' && <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Shipping Information
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We offer the following shipping options:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>
                      Standard Shipping (3-5 business days): Free on orders over
                      $35, otherwise $5.99
                    </li>
                    <li>Express Shipping (2-3 business days): $12.99</li>
                    <li>Overnight Shipping (1 business day): $19.99</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Orders are processed and shipped Monday through Friday,
                    excluding holidays.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Return Policy</h3>
                  <p className="text-gray-600 mb-4">
                    We want you to be completely satisfied with your purchase.
                    If you're not happy with your order, you can return it
                    within 30 days of delivery for a full refund or exchange.
                  </p>
                  <p className="text-gray-600">
                    To be eligible for a return, your item must be unused and in
                    the same condition that you received it. It must also be in
                    the original packaging.
                  </p>
                </div>
              </div>}
          </div>
        </div>
        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Related Products
            </h2>
            <Link to="/" className="text-pink-500 flex items-center hover:text-pink-600">
              View All <ChevronLeft size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    </div>;
};
export default ProductPage;