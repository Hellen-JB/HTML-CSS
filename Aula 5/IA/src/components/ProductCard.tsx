import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onViewDetails(product)}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Novo
            </span>
          )}
          {product.isPromotion && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              -{discountPercentage}%
            </span>
          )}
          {product.isPopular && (
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </span>
          )}
        </div>

        {/* Stock indicator */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-2 right-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Últimas {product.stock} unidades
            </span>
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium">
              Esgotado
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 
          className="font-semibold text-gray-800 mb-2 cursor-pointer hover:text-purple-600 transition-colors"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-purple-600">
                R$ {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">
              Em estoque: {product.stock}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
}