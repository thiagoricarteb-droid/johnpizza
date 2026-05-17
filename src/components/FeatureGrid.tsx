import React from 'react';
import { ChefHat, Flame, Leaf, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <ChefHat className="w-10 h-10" />,
      title: "Artesanal",
      desc: "Massas preparadas diariamente com fermentação lenta de 24h para maior leveza."
    },
    {
      icon: <Flame className="w-10 h-10" />,
      title: "Forno de Pedra",
      desc: "Temperatura ideal para garantir aquela borda crocante e o queijo perfeitamente gratinado."
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Frescor",
      desc: "Ingredientes selecionados dos melhores produtores locais para garantir o máximo de sabor."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Entrega Rápida",
      desc: "De terça a domingo, levamos a experiência John Pizza até a porta da sua casa."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-warm-cream rounded-3xl flex items-center justify-center mx-auto mb-8 text-pizza-red group-hover:bg-pizza-red group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                {f.icon}
              </div>
              <h4 className="text-xl font-black text-dark-grey mb-4 uppercase tracking-tighter">{f.title}</h4>
              <p className="text-gray-500 font-lato leading-relaxed px-4">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
