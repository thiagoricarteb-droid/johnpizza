import React, { useState } from 'react';
import { PIZZA_MENU } from '../constants';
import { PizzaItem, CartItem } from '../types';
import { motion } from 'motion/react';
import { Plus, Flame, Info } from 'lucide-react';

interface PizzaListProps {
  onAddToCart: (item: CartItem) => void;
}

export const PizzaList: React.FC<PizzaListProps> = ({ onAddToCart }) => {
  return (
    <section id="pizzas" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-black tracking-[0.3em] text-pizza-red mb-4">MOMENTO DELIZIOSO</h2>
            <h3 className="text-5xl md:text-7xl font-playfair font-black text-dark-grey leading-none">
              Nossas <span className="italic text-gray-400">Pizzas</span>
            </h3>
          </div>
          <p className="max-w-md text-gray-500 font-lato text-lg">
            Todas as nossas pizzas são feitas com queijo de alta qualidade e ingredientes frescos locais. Escolha seu tamanho favorito: P (4 fatias), M (6 fatias) ou G (8 fatias).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PIZZA_MENU.map((pizza, index) => (
            <PizzaCard key={pizza.id} pizza={pizza} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PizzaCard: React.FC<{ pizza: PizzaItem; index: number; onAddToCart: (item: CartItem) => void }> = ({ pizza, index, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<'P' | 'M' | 'G'>('G');
  
  const handleAdd = () => {
    onAddToCart({
      cartId: `${pizza.id}-${selectedSize}`,
      id: pizza.id,
      name: pizza.name,
      price: pizza.prices[selectedSize],
      quantity: 1,
      size: selectedSize
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index % 6 * 0.1 }}
      className="group bg-warm-cream/30 border border-gray-100 p-6 rounded-3xl hover:shadow-2xl hover:shadow-pizza-red/5 transition-all duration-500 relative flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-xl ${pizza.sweet ? 'bg-pink-100 text-pink-600' : pizza.highlight ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
            {pizza.sweet ? <Info size={20} /> : <Flame size={20} />}
          </div>
          {pizza.highlight && (
            <span className="bg-pizza-gold/20 text-pizza-gold text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest border border-pizza-gold/30">
              Mais Pedida
            </span>
          )}
        </div>
        
        <h4 className="text-2xl font-black mb-2 text-dark-grey group-hover:text-pizza-red transition-colors">{pizza.name}</h4>
        <p className="text-gray-500 text-sm font-lato leading-relaxed mb-8 min-h-[40px]">
          {pizza.desc}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {(['P', 'M', 'G'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
                selectedSize === size
                  ? 'bg-dark-grey text-white scale-105 shadow-md'
                  : 'bg-white text-gray-400 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {size} - R$ {pizza.prices[size]}
            </button>
          ))}
        </div>

        <button
          onClick={handleAdd}
          className="w-full flex items-center justify-center gap-2 py-4 bg-white border-2 border-dark-grey text-dark-grey rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-dark-grey hover:text-white transition-all transform active:scale-95"
        >
          <Plus size={18} /> Adicionar
        </button>
      </div>
    </motion.div>
  );
};
