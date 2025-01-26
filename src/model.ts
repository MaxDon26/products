export interface Product {
  id: string;
  title: string;
  company: string;
  image: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}
