import React from 'react';
import { Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-grey text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-3xl font-playfair font-black tracking-tighter mb-8">
              JOHN<span className="text-pizza-gold">PIZZA</span>
            </div>
            <p className="text-gray-500 font-lato leading-relaxed mb-8">
              A verdadeira pizza artesanal em Natal-RN. Tradição, sabor e qualidade em cada fatia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pizza-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pizza-red transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase text-pizza-gold mb-10">CONTATO</h4>
            <ul className="space-y-6 text-gray-400 font-lato">
              <li className="flex gap-4">
                <Phone className="text-pizza-red flex-shrink-0" size={20} />
                <span>(84) 98115-3640</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="text-pizza-red flex-shrink-0" size={20} />
                <span>Natal, RN</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase text-pizza-gold mb-10">HORÁRIOS</h4>
            <ul className="space-y-6 text-gray-400 font-lato">
              <li className="flex gap-4">
                <Clock className="text-pizza-red flex-shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold">Terça a Domingo</p>
                  <p>18:00 — 23:30</p>
                </div>
              </li>
              <li className="flex items-center gap-4 opacity-50">
                <Clock className="text-gray-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold">Segunda-feira</p>
                  <p>Fechado</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase text-pizza-gold mb-10">LINK RÁPIDOS</h4>
            <ul className="space-y-4 text-gray-400 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#pizzas" className="hover:text-pizza-red transition-colors">Pizzas Salgadas</a></li>
              <li><a href="#pizzas" className="hover:text-pizza-red transition-colors">Pizzas Doces</a></li>
              <li><a href="#pasteis" className="hover:text-pizza-red transition-colors">Nossos Pastéis</a></li>
              <li><a href="#bebidas" className="hover:text-pizza-red transition-colors">Bebidas Geladas</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 font-lato">
          <p>© 2024 JOHN PIZZA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Políticas</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
