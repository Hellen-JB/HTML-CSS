import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Search, Filter, X } from 'lucide-react';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function Products({ onAddToCart, onViewDetails }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    inStock: false,
    onSale: false,
    newOnly: false
  });

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply additional filters
    if (filterOptions.inStock) {
      filtered = filtered.filter(product => product.stock > 0);
    }
    if (filterOptions.onSale) {
      filtered = filtered.filter(product => product.isPromotion);
    }
    if (filterOptions.newOnly) {
      filtered = filtered.filter(product => product.isNew);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, priceRange, filterOptions]);

  const clearFilters = () => {
    setSelectedCategory('todos');
    setSearchTerm('');
    setSortBy('name');
    setPriceRange([0, 500]);
    setFilterOptions({
      inStock: false,
      onSale: false,
      newOnly: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Nossos Produtos</h1>
          <p className="text-gray-600">
            Encontre os melhores materiais artísticos para suas criações
          </p>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="name">Ordenar por Nome</option>
            <option value="price-low">Menor Preço</option>
            <option value="price-high">Maior Preço</option>
            <option value="newest">Mais Recentes</option>
          </select>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
                <button
                  onClick={clearFilters}
                  className="text-purple-600 hover:text-purple-700 text-sm"
                >
                  Limpar
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Categorias</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-100 text-purple-800'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Faixa de Preço</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Additional Filters */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Outros Filtros</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterOptions.inStock}
                      onChange={(e) => setFilterOptions({...filterOptions, inStock: e.target.checked})}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Apenas em estoque</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterOptions.onSale}
                      onChange={(e) => setFilterOptions({...filterOptions, onSale: e.target.checked})}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Em promoção</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterOptions.newOnly}
                      onChange={(e) => setFilterOptions({...filterOptions, newOnly: e.target.checked})}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Apenas novidades</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">Nenhum produto encontrado</p>
                <button
                  onClick={clearFilters}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-600">
                    {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={onAddToCart}
                      onViewDetails={onViewDetails}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}