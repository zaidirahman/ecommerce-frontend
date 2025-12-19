import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-50 pt-16 pb-8 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand */}
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-900">Classic Charmm</h3>
                <p className="text-gray-600 max-w-xs">
                    Anticipating expensive décor items. Stylish living for the modern home.
                </p>
            </div>

            {/* Links/Categories - optional, or just minimal */}
            <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Collections</h4>
                <ul className="space-y-2 text-gray-600">
                    <li>Single Item</li>
                    <li>Signature Item</li>
                    <li>Pocket Friendly</li>
                    <li>Seasonal Décor</li>
                </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
                <h4 className="font-semibold text-blue-900">Contact Us</h4>
                <ul className="space-y-4">
                    <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <Instagram className="w-5 h-5 mr-3" />
                        <a href="https://instagram.com/team_decoriva" target="_blank" rel="noopener noreferrer">
                            team_decoriva
                        </a>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <Phone className="w-5 h-5 mr-3" />
                        <a href="tel:+923250055057">+92 325 0055057</a>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <Mail className="w-5 h-5 mr-3" />
                        <a href="mailto:randhawa25750@gmail.com">randhawa25750@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-blue-100 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Classic Charmm. All rights reserved.
        </div>
    </footer>
  );
}
