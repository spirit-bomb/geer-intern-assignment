'use client';

import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onProductDelete: (id: string) => void;
}

export default function ProductList({ products, onProductDelete }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No products found</div>
        <p className="text-gray-400">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onDelete={onProductDelete}
        />
      ))}
    </div>
  );
}