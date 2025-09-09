import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import { Product, CartItem, User, OrderData } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('flordetinta-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    const savedUser = localStorage.getItem('flordetinta-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('flordetinta-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('flordetinta-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('flordetinta-user');
    }
  }, [user]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCartItems(cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        alert('Produto em estoque insuficiente');
      }
    } else {
      if (product.stock > 0) {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      } else {
        alert('Produto fora de estoque');
      }
    }
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== productId));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    // You could navigate to a product detail page here
    // For now, we'll just add to cart
    handleAddToCart(product);
  };

  const handlePlaceOrder = (orderData: OrderData) => {
    // Here you would typically send the order to your backend
    console.log('Order placed:', orderData);
    
    // Clear cart after successful order
    setCartItems([]);
    
    // You could also store the order in localStorage or send to an API
    // For demo purposes, we'll just log it
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
            onNavigate={handleNavigate}
          />
        );
      case 'products':
        return (
          <Products 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        );
      case 'cart':
        return (
          <Cart 
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        );
      case 'login':
        return (
          <Login 
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        );
      case 'register':
        return (
          <Register 
            onLogin={handleLogin}
            onNavigate={handleNavigate}
          />
        );
      case 'checkout':
        if (cartItems.length === 0) {
          return (
            <Cart 
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onNavigate={handleNavigate}
            />
          );
        }
        return (
          <Checkout 
            cartItems={cartItems}
            onPlaceOrder={handlePlaceOrder}
            onNavigate={handleNavigate}
          />
        );
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home 
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartItems={cartItems}
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;