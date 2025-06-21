'use client';

import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import ProductList from '../components/ProductList';
import SearchFilter from '../components/SearchFilter';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.append('search', searchQuery);
      if (selectedCategory && selectedCategory !== 'all') {
        params.append('category', selectedCategory);
      }

      const response = await fetch(`/api/products?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, selectedCategory]);

  const handleProductDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600">
          Discover our amazing collection of products. Search, filter, and find exactly what you need.
        </p>
      </div>


      {/* Search and Filters */}
      <SearchFilter 
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />

      {/* Products Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {products.length} product{products.length !== 1 ? 's' : ''} found
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory && selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Product List */}
      <ProductList 
        products={products} 
        onProductDelete={handleProductDelete}
      />
    </div>
  );
}