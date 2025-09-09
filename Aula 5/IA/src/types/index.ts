export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  isPromotion?: boolean;
  isPopular?: boolean;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface OrderData {
  items: CartItem[];
  total: number;
  shipping: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
  };
  payment: {
    method: string;
    cardNumber?: string;
    cardName?: string;
    expiryDate?: string;
    cvv?: string;
  };
}