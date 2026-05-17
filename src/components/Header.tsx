import React, { useState, useEffect } from 'react';
import { ShoppingCart, MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PIZZAS', id: 'pizzas' },
    { name: 'PASTÉIS', id: 'pasteis' },
    { name: 'BEBIDAS', id: 'bebidas' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="text-2xl md:text-3xl font-playfair font-extrabold flex items-baseline tracking-tighter">
            <span className={`transition-colors duration-500 ${isScrolled ? 'text-pizza-red' : 'text-white'}`}>
              JOHN
            </span>
            <span className="text-pizza-gold ml-1">PIZZA</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-10 font-bold text-xs uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`transition-colors relative group hover:text-pizza-gold ${
                isScrolled ? 'text-dark-grey' : 'text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pizza-gold transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            id="cart-trigger"
            className={`relative p-3 rounded-full transition-all active:scale-95 ${
              isScrolled 
                ? 'text-pizza-red bg-pizza-red/10' 
                : 'text-white bg-white/10'
            }`}
          >
            <ShoppingCart size={24} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-pizza-gold text-dark-grey text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href="https://wa.me/5584981153640"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pizza-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all flex items-center gap-2 shadow-xl shadow-pizza-red/30 active:scale-95"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Pedir Agora</span>
          </a>

          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-dark-grey' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 text-center font-bold uppercase tracking-widest text-sm text-dark-grey">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="py-2 hover:text-pizza-red transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
