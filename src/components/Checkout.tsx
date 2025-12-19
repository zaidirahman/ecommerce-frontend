import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import { Product } from "./ProductCard";

interface CheckoutProps {
    cart: Product[];
    total: number;
    onBack: () => void;
    onPlaceOrder: (e: React.FormEvent) => void;
}

export default function Checkout({ cart, total, onBack, onPlaceOrder }: CheckoutProps) {
  return (
    <div className="fixed inset-0 bg-sky-50 z-50 overflow-y-auto animate-slide-in-right">
        <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left: Form */}
            <div className="flex-1 space-y-12">
                <button 
                    onClick={onBack}
                    className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Continue Shopping
                </button>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-semibold mb-2 text-blue-950">Checkout</h2>
                        <p className="text-gray-500">Complete your purchase securely.</p>
                    </div>

                    <form id="checkout-form" onSubmit={onPlaceOrder} className="space-y-8">
                        {/* Section: Contact */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-blue-900">Contact</h3>
                            <input required type="email" placeholder="Email Address" className="w-full bg-white border border-blue-100 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-colors text-blue-900 placeholder:text-gray-400" />
                        </div>

                        {/* Section: Shipping */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-blue-900">Shipping Address</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input required type="text" placeholder="First Name" className="w-full bg-white border border-blue-100 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-colors text-blue-900 placeholder:text-gray-400" />
                                <input required type="text" placeholder="Last Name" className="w-full bg-white border border-blue-100 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-colors text-blue-900 placeholder:text-gray-400" />
                            </div>
                            <input required type="text" placeholder="Address" className="w-full bg-white border border-blue-100 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-colors text-blue-900 placeholder:text-gray-400" />
                            <div className="grid grid-cols-2 gap-4">
                                <input required type="text" placeholder="City" className="w-full bg-white border border-blue-100 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-colors text-blue-900 placeholder:text-gray-400" />
                                <input required type="text" placeholder="Postal Code" className="w-full bg-white border border-blue-100 rounded-xl p-4 focus:outline-none focus:border-blue-600 transition-colors text-blue-900 placeholder:text-gray-400" />
                            </div>
                        </div>

                        {/* Section: Payment (Mock) */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-blue-900">Payment</h3>
                            <div className="bg-white border border-blue-100 rounded-xl p-4 flex items-center space-x-3 opacity-60 cursor-not-allowed">
                                <CreditCard className="w-5 h-5 text-gray-400" />
                                <span className="text-gray-500">Credit Card (Encrypted)</span>
                                <Lock className="w-4 h-4 text-gray-400 ml-auto" />
                            </div>
                            <p className="text-xs text-gray-400 flex items-center">
                                <Lock className="w-3 h-3 mr-1" /> Payments are secure and encrypted.
                            </p>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-blue-600 text-white py-5 rounded-full text-lg font-medium shadow-xl hover:bg-blue-700 hover:scale-[1.01] transition-all duration-300 shadow-blue-200"
                        >
                            Pay PKR {(total + 300).toLocaleString()}
                        </button>
                    </form>
                </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:w-[400px] bg-white h-fit p-8 rounded-3xl shadow-sm border border-blue-100">
                <h3 className="text-xl font-medium mb-6 text-blue-900">Order Summary</h3>
                <div className="space-y-6">
                    {cart.map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-500">PKR {item.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                    {cart.length === 0 && (
                        <p className="text-gray-400 italic">Your cart is empty.</p>
                    )}
                </div>

                <div className="border-t border-gray-100 my-6 pt-6 space-y-2">
                    <div className="flex justify-between text-gray-500">
                        <span>Subtotal</span>
                        <span>PKR {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                        <span>Shipping</span>
                        <span>PKR 300</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold text-blue-900 pt-2">
                        <span>Total</span>
                        <span>PKR {(total + 300).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
