import React, { useState } from 'react';
import { CartItem, OrderData } from '../types';
import { CreditCard, Truck, MapPin, Check } from 'lucide-react';

interface CheckoutProps {
  cartItems: CartItem[];
  onPlaceOrder: (orderData: OrderData) => void;
  onNavigate: (page: string) => void;
}

export default function Checkout({ cartItems, onPlaceOrder, onNavigate }: CheckoutProps) {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState<Partial<OrderData>>({
    items: cartItems,
    shipping: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      phone: ''
    },
    payment: {
      method: 'credit',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15.90;
  const total = subtotal + shipping;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const completeOrderData: OrderData = {
      ...orderData,
      total,
      items: cartItems
    } as OrderData;
    
    onPlaceOrder(completeOrderData);
    setStep(3);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pedido realizado com sucesso!</h2>
            <p className="text-gray-600 mb-6">
              Seu pedido foi processado e em breve você receberá um email de confirmação.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Número do pedido: #FT{Date.now().toString().slice(-6)}
            </p>
            <button
              onClick={() => onNavigate('home')}
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Finalizar Pedido</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-4 mb-8">
            <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                {step > 1 ? <Check className="w-5 h-5" /> : '1'}
              </div>
              <span className="font-medium">Entrega</span>
            </div>
            
            <div className="flex-1 h-px bg-gray-300"></div>
            
            <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                {step > 2 ? <Check className="w-5 h-5" /> : '2'}
              </div>
              <span className="font-medium">Pagamento</span>
            </div>
            
            <div className="flex-1 h-px bg-gray-300"></div>
            
            <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
                {step >= 3 ? <Check className="w-5 h-5" /> : '3'}
              </div>
              <span className="font-medium">Confirmação</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Truck className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-semibold">Informações de Entrega</h2>
                </div>

                <form onSubmit={handleShippingSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        required
                        value={orderData.shipping?.name || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          shipping: { ...orderData.shipping!, name: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Endereço
                      </label>
                      <input
                        type="text"
                        required
                        value={orderData.shipping?.address || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          shipping: { ...orderData.shipping!, address: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cidade
                      </label>
                      <input
                        type="text"
                        required
                        value={orderData.shipping?.city || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          shipping: { ...orderData.shipping!, city: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CEP
                      </label>
                      <input
                        type="text"
                        required
                        value={orderData.shipping?.zipCode || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          shipping: { ...orderData.shipping!, zipCode: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        required
                        value={orderData.shipping?.phone || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          shipping: { ...orderData.shipping!, phone: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                  >
                    Continuar para Pagamento
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                  <h2 className="text-xl font-semibold">Informações de Pagamento</h2>
                </div>

                <form onSubmit={handlePaymentSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Método de pagamento
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="credit"
                          checked={orderData.payment?.method === 'credit'}
                          onChange={(e) => setOrderData({
                            ...orderData,
                            payment: { ...orderData.payment!, method: e.target.value }
                          })}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2">Cartão de Crédito</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="debit"
                          checked={orderData.payment?.method === 'debit'}
                          onChange={(e) => setOrderData({
                            ...orderData,
                            payment: { ...orderData.payment!, method: e.target.value }
                          })}
                          className="text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2">Cartão de Débito</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nome no cartão
                      </label>
                      <input
                        type="text"
                        required
                        value={orderData.payment?.cardName || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          payment: { ...orderData.payment!, cardName: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Número do cartão
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={orderData.payment?.cardNumber || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          payment: { ...orderData.payment!, cardNumber: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Validade
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        value={orderData.payment?.expiryDate || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          payment: { ...orderData.payment!, expiryDate: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={orderData.payment?.cvv || ''}
                        onChange={(e) => setOrderData({
                          ...orderData,
                          payment: { ...orderData.payment!, cvv: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                    >
                      Finalizar Pedido
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4">Resumo do Pedido</h3>
              
              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Frete:</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total:</span>
                  <span className="text-purple-600">R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}