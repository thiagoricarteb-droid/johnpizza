import { PizzaItem, PastelItem, BeverageItem } from './types';

export const WHATSAPP_NUMBER = "5584981153640";

export const PIZZA_MENU: PizzaItem[] = [
  { id: '01', name: 'Mussarela', desc: 'Mussarela com tomate', prices: { P: 26, M: 34, G: 38 } },
  { id: '02', name: 'Calabresa', desc: 'Mussarela, calabresa, cebola, tomate e azeitona', prices: { P: 26, M: 34, G: 39 } },
  { id: '03', name: 'Portuguesa', desc: 'Presunto, milho, ervilha, cebola, ovos e azeitona', prices: { P: 29, M: 35, G: 40 } },
  { id: '04', name: 'Atum', desc: 'Atum, mussarela, cebola e azeitona', prices: { P: 29, M: 34, G: 40 } },
  { id: '05', name: 'Quatro Queijos', desc: 'Mussarela, presunto, provolone e catupiry', prices: { P: 28, M: 34, G: 40 } },
  { id: '06', name: 'Lombinho', desc: 'Lombo canadense, cebola e tomate', prices: { P: 28, M: 34, G: 40 } },
  { id: '07', name: 'Frango com Catupiry', desc: 'Mussarela, frango e catupiry', prices: { P: 28, M: 34, G: 40 } },
  { id: '08', name: 'Frango', desc: 'Mussarela e frango', prices: { P: 28, M: 34, G: 40 } },
  { id: '09', name: 'Americana', desc: 'Mussarela, presunto e bacon', prices: { P: 28, M: 34, G: 40 } },
  { id: '10', name: 'Nordestina', desc: 'Carne de sol, cebola, tomate e azeitona', prices: { P: 28, M: 34, G: 40 } },
  { id: '11', name: 'Tomate Seco', desc: 'Mussarela e tomate seco', prices: { P: 28, M: 34, G: 40 } },
  { id: '12', name: 'À Moda da Casa', desc: 'Frango, milho, ervilha, bacon, ovos, cebola e tomate', prices: { P: 28, M: 34, G: 40 } },
  { id: '13', name: 'Mista', desc: 'Presunto, calabresa, cebola e tomate', prices: { P: 28, M: 34, G: 40 } },
  { id: '14', name: 'Camarão com Catupiry', desc: 'Camarão e catupiry original', prices: { P: 34, M: 40, G: 47 }, highlight: true },
  { id: '15', name: 'Bacon', desc: 'Mussarela e bacon crocante', prices: { P: 28, M: 34, G: 40 } },
  { id: '16', name: 'Calzone', desc: 'Calabresa, frango ou presunto', prices: { P: 28, M: 34, G: 40 } },
  { id: '17', name: 'Marguerita', desc: 'Tomate e manjericão fresco', prices: { P: 28, M: 34, G: 39 } },
  { id: '18', name: 'Napolitana', desc: 'Tomate, alho, azeite e manjericão', prices: { P: 27, M: 34, G: 30 } },
  { id: '19', name: 'Chocolate com Banana', desc: 'Creme de leite, chocolate e banana', prices: { P: 26, M: 34, G: 40 }, sweet: true },
  { id: '20', name: 'Frango com Bacon', desc: 'Mussarela, bacon e frango', prices: { P: 26, M: 34, G: 39 } },
  { id: '21', name: 'Siciliana', desc: 'Mussarela, bacon e champignon', prices: { P: 26, M: 34, G: 40 } },
];

export const PASTEL_MENU: PastelItem[] = [
  { id: '01', name: 'Frango com Catupiry', price: 10.00 },
  { id: '02', name: 'Camarão com Catupiry', price: 12.00, highlight: true },
  { id: '03', name: 'Nordestino', price: 10.00 },
  { id: '04', name: 'Moda da Casa', price: 10.00 },
  { id: '05', name: 'Calabresa', price: 10.00 },
  { id: '06', name: 'Queijo e Presunto', price: 10.00 },
  { id: '07', name: 'Chocolate com Banana', price: 10.00 },
];

export const BEVERAGES: BeverageItem[] = [
  { name: 'Água s/ gás', price: 3.50 },
  { name: 'Água c/ gás', price: 4.00 },
  { name: 'Refrigerante (lata)', price: 7.00 },
  { name: 'Refrigerante 1L', price: 10.00, highlight: true },
];
