import React from 'react';
import { BEVERAGES } from '../constants';
import { CartItem, BeverageItem } from '../types';
import { motion } from 'motion/react';
import { Plus, Coffee } from 'lucide-react';

interface BeverageListProps {
  onAddToCart: (item: CartItem) => void;
}

export const BeverageList: React.FC<BeverageListProps> = ({ onAddToCart }) => {
  return (
    <section id="bebidas" className="py-24 bg-warm-cream">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-8 mb-16">
          <div className="h-0.5 flex-1 bg-gray-200 hidden md:block"></div>
          <div className="text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-playfair font-black text-dark-grey leading-none inline-flex items-center gap-4">
              <span className="text-pizza-red"><Coffee size={40} /></span> Bebidas
            </h3>
          </div>
          <div className="h-0.5 flex-1 bg-gray-200 hidden md:block"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {BEVERAGES.map((bev, index) => (
            <BeverageCard key={bev.name} bev={bev} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BeverageCard: React.FC<{ bev: BeverageItem; index: number; onAddToCart: (item: CartItem) => void }> = ({ bev, index, onAddToCart }) => {
  const handleAdd = () => {
    onAddToCart({
      cartId: `bev-${bev.name}`,
      id: bev.name,
      name: bev.name,
      price: bev.price,
      quantity: 1
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-3xl flex items-center justify-between border-2 transition-all ${
        bev.highlight 
          ? 'bg-white border-pizza-gold shadow-xl shadow-pizza-gold/5' 
          : 'bg-transparent border-gray-100 hover:border-gray-200'
      }`}
    >
      <div>
        <h4 className="font-bold text-dark-grey text-lg">{bev.name}</h4>
        <span className="text-pizza-red font-black text-xl">R$ {bev.price.toFixed(2)}</span>
      </div>
      <button
        onClick={handleAdd}
        className={`p-3 rounded-2xl transition-all active:scale-95 ${
          bev.highlight 
            ? 'bg-pizza-gold text-dark-grey' 
            : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
        }`}
      >
        <Plus size={20} />
      </button>
    </motion.div>
  );
};
