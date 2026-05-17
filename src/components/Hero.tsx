import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Star, Clock, Truck } from 'lucide-react';

interface HeroProps {
  onScrollToMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-dark-grey">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
          alt="Delicious Pizza Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey via-transparent to-black/60" />
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-pizza-red/20 backdrop-blur-sm border border-pizza-red/30 text-pizza-red px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            <Star size={14} className="fill-current" />
            <span>A melhor pizza de Natal-RN</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-black text-white leading-[0.9] mb-8 tracking-tighter">
            PROVE O <br />
            <span className="text-pizza-gold">SABOR</span> <br />
            LEGÍTIMO.
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl max-w-lg mx-auto mb-10 font-lato leading-relaxed">
            Massa artesanal fermentada lentamente, ingredientes selecionados e o tempero secreto da John Pizza.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onScrollToMenu}
              className="px-10 py-5 bg-pizza-gold text-dark-grey rounded-full font-black text-lg uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-pizza-gold/20"
            >
              Ver Cardápio
            </button>
            <div className="flex items-center gap-6 text-white/60 pl-4 border-l border-white/10 hidden sm:flex">
              <div className="flex flex-col text-left">
                <span className="text-white font-bold flex items-center gap-1"><Clock size={14}/> 45 min</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Tempo Médio</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold flex items-center gap-1"><Truck size={14}/> R$ 5,00</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Taxa de Entrega</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={onScrollToMenu}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.button>
    </section>
  );
};
