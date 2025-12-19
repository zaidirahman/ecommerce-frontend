import { ShoppingBag, Search, User, Menu } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
  onMenuClick: () => void;
}

export default function Header({ cartCount, onCartClick, onLogoClick, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Hamburger Menu */}
        <div className="flex items-center">
            <button 
                onClick={onMenuClick}
                className="p-2 -ml-2 text-blue-900 hover:text-blue-600 transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer text-center" onClick={onLogoClick}>
            {/* Using text for flexibility or stick to logo.svg if preferred, but user asked to update "Name & Slogan" */}
            <h1 className="text-xl font-bold text-blue-900 tracking-tight">CLASSIC CHARMM</h1>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6 ml-auto">
            <button className="hidden md:block p-2 text-gray-500 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 text-gray-500 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
            </button>
            <button 
                className="relative p-2 text-blue-900 hover:text-blue-600 transition-transform active:scale-95"
                onClick={onCartClick}
            >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                    <span className="absolute top-1 right-0 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
            </button>
        </div>
      </div>
    </header>
  );
}
