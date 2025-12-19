import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

const CATEGORIES = [
    "All Products",
    "Single Item",
    "Signature Item",
    "Pocket Friendly",
    "Seasonal Décor"
];

export default function Sidebar({ isOpen, onClose, onSelectCategory }: SidebarProps) {
  return (
    <>
        {/* Backdrop */}
        <div 
            className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        />
        
        {/* Sidebar Panel */}
        <div 
            className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <h2 className="text-xl font-semibold text-blue-900">Menu</h2>
                <button onClick={onClose} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>

            <nav className="p-6 space-y-4">
                {CATEGORIES.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => {
                            onSelectCategory(cat);
                            onClose();
                        }}
                        className="block w-full text-left py-2 text-lg text-gray-600 hover:text-blue-600 hover:pl-2 transition-all duration-200 font-medium"
                    >
                        {cat}
                    </button>
                ))}
            </nav>
            
            <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs text-center text-gray-400">
                    &copy; 2025 Classic Charmm
                </p>
            </div>
        </div>
    </>
  );
}
