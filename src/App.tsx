/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PizzaList } from './components/PizzaList';
import { PastelList } from './components/PastelList';
import { BeverageList } from './components/BeverageList';
import { FeatureGrid } from './components/FeatureGrid';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('john-pizza-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('john-pizza-cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (newItem: CartItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.cartId === newItem.cartId);
      if (existing) {
        return prev.map(item => 
          item.cartId === newItem.cartId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, newItem];
    });
    // Optional: auto open cart on first add
    // if (cart.length === 0) setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveItem = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-warm-cream selection:bg-pizza-gold selection:text-dark-grey">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onScrollTo={scrollToId}
      />
      
      <main>
        <Hero onScrollToMenu={() => scrollToId('pizzas')} />
        <FeatureGrid />
        <PizzaList onAddToCart={handleAddToCart} />
        <PastelList onAddToCart={handleAddToCart} />
        <BeverageList onAddToCart={handleAddToCart} />
        
        {/* Testimonial or Call to Action */}
        <section className="py-24 bg-pizza-red relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 gap-4 rotate-12 -translate-y-20">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="text-white text-9xl font-black">PIZZA</div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-playfair font-black text-white mb-10 leading-tight">
              BATEU AQUELA <br />
              <span className="text-pizza-gold italic">FOME?</span>
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 font-lato">
              Não perca tempo. Peça agora a melhor pizza da região e receba no conforto da sua casa.
            </p>
            <a
              href={`https://wa.me/5584981153640`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-white text-pizza-red rounded-full font-black text-xl uppercase tracking-widest hover:bg-pizza-gold hover:text-dark-grey transition-all hover:scale-110 shadow-2xl"
            >
              Fazer Pedido via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
