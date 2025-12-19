import Link from "next/link";
import { Plus } from "lucide-react";

export interface Product {
    id: number;
    name: string;
    price: number;
    category?: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col items-center p-4 bg-white rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-blue-50">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-gray-50 mb-6">
            <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Quick Add Button - Appears on Hover */}
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                }}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-blue-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white opacity-100 transform translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
            >
                <Plus className="w-5 h-5" />
            </button>
        </div>

        {/* Product Info */}
        <div className="text-center space-y-1">
            <h3 className="text-lg font-medium text-slate-700 group-hover:text-blue-900 transition-colors">
                {product.name}
            </h3>
            <p className="text-slate-400 font-normal">
                PKR {product.price.toLocaleString()}
            </p>
        </div>
    </div>
  );
}
