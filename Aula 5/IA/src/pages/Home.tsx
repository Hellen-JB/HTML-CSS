import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Sparkles, TrendingUp, Tag, ArrowRight } from 'lucide-react';

interface HomeProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onNavigate: (page: string) => void;
}

export default function Home({ onAddToCart, onViewDetails, onNavigate }: HomeProps) {
  const newProducts = products.filter(p => p.isNew).slice(0, 4);
  const promotionProducts = products.filter(p => p.isPromotion).slice(0, 4);
  const popularProducts = products.filter(p => p.isPopular).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Desperte Sua
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Criatividade
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubra os melhores materiais artísticos para dar vida às suas ideias. 
              Qualidade profissional com preços acessíveis.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
            >
              <span>Explorar Produtos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Últimos Lançamentos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Últimos Lançamentos</h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promoções */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Tag className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">Produtos em Promoção</h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promotionProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mais Populares */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-gray-900">Mais Populares</h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1"
            >
              <span>Ver todos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar sua jornada artística?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Cadastre-se e receba ofertas exclusivas e novidades em primeira mão
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Criar Conta Gratuita
          </button>
        </div>
      </section>
    </div>
  );
}