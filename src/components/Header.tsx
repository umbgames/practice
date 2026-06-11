import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img 
          src="./logo.jpg" 
          alt="Circuit Board" 

        />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-sm font-medium text-slate-700 hover:text-amal-orange transition-colors">Home</a>
            <a href="#solutions" className="text-sm font-medium text-slate-700 hover:text-amal-orange transition-colors">Industries</a>
            <a href="#products" className="text-sm font-medium text-slate-700 hover:text-amal-orange transition-colors">Products</a>
            <a href="#services" className="text-sm font-medium text-slate-700 hover:text-amal-orange transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-amal-orange transition-colors">About Us</a>
          </nav>

          <div className="hidden md:flex items-center">
            <button className="bg-amal-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-medium transition-colors flex items-center space-x-2">
              <span>Get Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-amal-orange transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amal-orange hover:bg-slate-50">Home</a>
            <a href="#solutions" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amal-orange hover:bg-slate-50">Solutions</a>
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amal-orange hover:bg-slate-50">Products</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amal-orange hover:bg-slate-50">Services</a>
            <button className="w-full text-left mt-4 bg-amal-orange text-white px-3 py-2 rounded-md font-medium">
              Get Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
