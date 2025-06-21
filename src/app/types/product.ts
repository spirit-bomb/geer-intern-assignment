export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
  inStock?: boolean;
}

export interface CreateProductRequest {
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
}