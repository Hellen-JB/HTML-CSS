import React from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { CartItem, User as UserType } from '../types';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItems: CartItem[];
  user: UserType | null;
  onLogout: () => void;
}

export default function Header({ currentPage, onNavigate, cartItems, user, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'products', label: 'Produtos' },
    { id: 'about', label: 'Sobre Nós' },
    { id: 'contact', label: 'Contatos' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-lg">🌸</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Flor de Tinta
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">Olá, {user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('register')}
                  className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  Cadastre-se
                </button>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-sm border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                >
                  Faça Login
                </button>
              </div>
            )}

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                {user ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-700">Olá, {user.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        onLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        onNavigate('register');
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex-1 px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                      Cadastre-se
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex-1 px-4 py-2 text-sm border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                    >
                      Login
                    </button>
                  </div>
                )}
                
                <button
                  onClick={() => {
                    onNavigate('cart');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="flex items-center space-x-2">
                    <ShoppingCart className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Carrinho</span>
                  </span>
                  {cartItemCount > 0 && (
                    <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}