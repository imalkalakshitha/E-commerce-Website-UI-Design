import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../data/products';
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  return <div className="group">
      <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-lg">
        <div className="relative h-[300px] overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          {!product.inStock && <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-70 rounded">
                Out of Stock
              </span>
            </div>}
          {product.featured && <div className="absolute top-2 right-2">
              <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                Featured
              </span>
            </div>}
        </div>
      </Link>
      <div className="mt-4">
        <h3 className="text-sm text-gray-500">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </h3>
        <Link to={`/product/${product.id}`} className="mt-1 text-lg font-medium text-gray-900 hover:text-pink-500">
          {product.name}
        </Link>
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
          </div>
          <span className="ml-1 text-sm text-gray-500">
            ({product.reviewCount})
          </span>
        </div>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>;
};
export default ProductCard;