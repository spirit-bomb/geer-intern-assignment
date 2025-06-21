
import { Product } from '../types/product';

let products: Product[] = [
  {
    id: '1',
    name: 'iPhone 14 Pro',
    price: 999,
    imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
    description: 'Latest iPhone with advanced camera system and A16 Bionic chip.',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 1199,
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
    description: 'Powerful laptop with M2 chip and all-day battery life.',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '3',
    name: 'Classic White T-Shirt',
    price: 29,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    description: 'Comfortable cotton t-shirt perfect for everyday wear.',
    category: 'Fashion',
    inStock: true,
  },
  {
    id: '4',
    name: 'Denim Jeans',
    price: 79,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    description: 'Premium quality denim jeans with modern fit.',
    category: 'Fashion',
    inStock: true,
  },
  {
    id: '5',
    name: 'Wireless Headphones',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '6',
    name: 'Coffee Maker',
    price: 149,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    description: 'Programmable coffee maker for the perfect brew every morning.',
    category: 'Home & Garden',
    inStock: false,
  },
];

// Functions to manage products
export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const deleteProduct = (id: string): Product | null => {
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return null;
  }

  const deletedProduct = products.splice(productIndex, 1)[0];
  return deletedProduct;
};

export const filterProducts = (search?: string, category?: string): Product[] => {
  let filteredProducts = products;

  // Filter by search term
  if (search) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description?.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product =>
      product.category?.toLowerCase() === category.toLowerCase()
    );
  }

  return filteredProducts;
};