import React from 'react';
import { PASTEL_MENU } from '../constants';
import { CartItem, PastelItem } from '../types';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface PastelListProps {
  onAddToCart: (item: CartItem) => void;
}

export const PastelList: React.FC<PastelListProps> = ({ onAddToCart }) => {
  return (
    <section id="pasteis" className="py-24 bg-dark-grey relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pizza-red/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.4em] text-pizza-gold mb-6 uppercase">Sabor Crocante</h2>
          <h3 className="text-5xl md:text-8xl font-playfair font-black text-white leading-none">
            Grandes <span className="text-pizza-red italic">Pastéis</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PASTEL_MENU.map((pastel, index) => (
            <PastelCard key={pastel.id} pastel={pastel} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PastelCard: React.FC<{ pastel: PastelItem; index: number; onAddToCart: (item: CartItem) => void }> = ({ pastel, index, onAddToCart }) => {
  const handleAdd = () => {
    onAddToCart({
      cartId: `pastel-${pastel.id}`,
      id: pastel.id,
      name: `Pastel ${pastel.name}`,
      price: pastel.price,
      quantity: 1
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group"
    >
      <div className="flex flex-col h-full justify-between gap-8">
        <div>
          <span className="text-pizza-gold text-4xl font-playfair font-black block mb-2 opacity-20">0{index+1}</span>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight">{pastel.name}</h4>
          {pastel.highlight && (
            <span className="text-[10px] text-pizza-red font-black uppercase tracking-widest bg-pizza-red/10 px-2 py-0.5 rounded">Recomendado</span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-white">R$ {pastel.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className="p-3 bg-pizza-red text-white rounded-full hover:bg-red-500 transition-all active:scale-90"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
