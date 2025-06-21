import Link from 'next/link';
import { Product } from '../types/product'

interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
}

export default function ProductCard({ product, onDelete }: ProductCardProps) {
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking delete
    e.stopPropagation();
    
    if (window.confirm('Are you sure you want to delete this product?')) {
      if (onDelete) {
        onDelete(product.id);
      }
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400';
            }}
          />
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Out of Stock
            </div>
          )}
          {product.category && (
            <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
              {product.category}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>
            
            {onDelete && (
              <button
                onClick={handleDelete}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}