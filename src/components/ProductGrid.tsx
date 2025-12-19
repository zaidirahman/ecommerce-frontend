import ProductCard, { Product } from "./ProductCard";

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <section id="products" className="py-24 bg-white relative">
        {/* Subtle background shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-50 to-transparent opacity-50 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-blue-950">
                    The Collection.
                </h2>
                <p className="text-blue-900/60 text-lg">
                    Décor that transforms your house into a home.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={onAddToCart} 
                    />
                ))}
            </div>
        </div>
    </section>
  );
}
