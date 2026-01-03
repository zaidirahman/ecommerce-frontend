"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Checkout from "@/components/Checkout";
import Success from "@/components/Success";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";

// Updated Mock Data for Classic Charmm
const PRODUCTS: Product[] = [
  { id: 1, name: "Floral Vials", price: 600, image: "/floral-vials.jpg", category: "Signature Item" },
  { id: 2, name: "Robot Lamp", price: 2500, image: "/robot-lamp.jpg", category: "Single Item" },
  { id: 3, name: "Handcrafted Ceramic Vases", price: 1300, image: "/handcrafted-ceramic-vases.jpg", category: "Single Item" },
  { id: 4, name: "Panda Gift Basket", price: 500, image: "/panda-gift-basket.jpg", category: "Signature Item" },
  { id: 5, name: "Teddy Bear Gift Basket", price: 500, image: "/teddy-bear-gift-basket.jpg", category: "Pocket Friendly" },
  { id: 6, name: "Gift Basket", price: 500, image: "/gift-basket.jpg", category: "Seasonal Décor" },
  { id: 7, name: "Premium Decor Piece", price: 1300, image: "/premium-decor-piece.jpg", category: "New Arrival" },
  { id: 8, name: "Table Accent", price: 450, image: "/table-accent.jpg", category: "Pocket Friendly" },
  { id: 9, name: "Minimalist Decor", price: 450, image: "/minimalist-decor.jpg", category: "Pocket Friendly" },
  { id: 10, name: "Modern Artefact", price: 450, image: "/modern-artefact.jpg", category: "Pocket Friendly" },
  { id: 11, name: "Stylish Ornament", price: 450, image: "/stylish-ornament.jpg", category: "Pocket Friendly" },
  { id: 12, name: "Cozy Corner Item", price: 500, image: "/cozy-corner-item.jpg", category: "Pocket Friendly" },
  { id: 13, name: "Elegant Ceramic", price: 600, image: "/elegant-ceramic.jpg", category: "New Arrival" },
  { id: 14, name: "Statement Piece", price: 700, image: "/statement-piece.jpg", category: "New Arrival" },
  { id: 15, name: "Wall Hanging Plates", price: 700, image: "/wall-hanging-plates.jpg", category: "Signature Item" },
  { id: 16, name: "The Signature Trio", price: 700, image: "/the-signature-trio.jpg", category: "Signature Item", span: "md:col-span-2 lg:col-span-3", aspect: "aspect-[16/9]" },
];

type ViewState = 'SHOP' | 'CHECKOUT' | 'SUCCESS';

export default function Home() {
  const [view, setView] = useState<ViewState>('SHOP');
  const [cart, setCart] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleShopNow = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCheckout = () => {
    if (cart.length === 0 && view === 'SHOP') {
      alert("Your cart is empty!");
      return;
    }
    setView(view === 'SHOP' ? 'CHECKOUT' : 'SHOP');
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setView('SUCCESS');
    setCart([]); // Clear cart
  };

  const handleReset = () => {
    setView('SHOP');
  };

  const handleCategorySelect = (category: string) => {
    // For now, just scroll to products or filter if we implemented filtering.
    // User just asked for the Sidebar to exist and list categories.
    // We'll simplisticly just scroll to products for now as "Shop Now" does.
    setIsSidebarOpen(false);
    handleShopNow();
    console.log("Selected category:", category);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-sky-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">

      {/* Sidebar Overlay */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectCategory={handleCategorySelect}
      />

      {/* Header */}
      {view !== 'SUCCESS' && (
        <Header
          cartCount={cart.length}
          onCartClick={toggleCheckout}
          onLogoClick={() => setView('SHOP')}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Main Shop View */}
      <div className={`transition-opacity duration-500 ${view === 'SHOP' ? 'opacity-100 flex flex-col min-h-screen' : 'opacity-0 pointer-events-none fixed inset-0'}`}>
        {view === 'SHOP' && (
          <>
            <Hero onShopNow={handleShopNow} />
            <ProductGrid products={PRODUCTS} onAddToCart={handleAddToCart} />
            <Footer />
          </>
        )}
      </div>

      {/* Checkout Overlay */}
      {view === 'CHECKOUT' && (
        <Checkout
          cart={cart}
          total={cartTotal}
          onBack={() => setView('SHOP')}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      {/* Success View */}
      {view === 'SUCCESS' && (
        <Success onReset={handleReset} />
      )}
    </main>
  );
}
