import React from 'react';
import { CartItem } from '../types';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onNavigate: (page: string) => void;
}

export default function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }: CartProps) {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15.90;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-8">Que tal adicionar alguns produtos incríveis?</p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho de Compras</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-lg font-bold text-purple-600 mt-2">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="px-3 py-1 bg-gray-50 rounded-md font-medium min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                      disabled={item.quantity >= item.stock}
                      className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-700 transition-colors mt-2 flex items-center space-x-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Remover</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete:</span>
                <span className={shipping === 0 ? 'text-green-600' : ''}>
                  {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-gray-600">
                  Frete grátis em compras acima de R$ 100,00
                </p>
              )}
              <div className="border-t pt-2 flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-purple-600">R$ {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => onNavigate('products')}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
              >
                Continuar Comprando
              </button>
              <button
                onClick={() => onNavigate('checkout')}
                className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}