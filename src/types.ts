export interface PizzaItem {
  id: string;
  name: string;
  desc: string;
  prices: {
    P: number;
    M: number;
    G: number;
  };
  highlight?: boolean;
  sweet?: boolean;
}

export interface PastelItem {
  id: string;
  name: string;
  price: number;
  highlight?: boolean;
}

export interface BeverageItem {
  name: string;
  price: number;
  highlight?: boolean;
}

export interface CartItem {
  cartId: string; // unique for item + size
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: 'P' | 'M' | 'G';
}
