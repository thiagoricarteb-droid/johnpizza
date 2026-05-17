import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, Send } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatMessage = () => {
    let message = "*NOVO PEDIDO - JOHN PIZZA*\n\n";
    items.forEach((item) => {
      const sizeStr = item.size ? ` (${item.size})` : '';
      message += `• ${item.quantity}x ${item.name}${sizeStr} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    message += "--------------------------\n";
    message += "_Por favor, informe seu endereço de entrega e forma de pagamento._";
    return encodeURIComponent(message);
  };

  const handleCheckout = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${formatMessage()}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pizza-red/10 text-pizza-red rounded-2xl">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-dark-grey">Seu Pedido</h2>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{items.length} itens no carrinho</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40 grayscale space-y-4">
                  <ShoppingBag size={80} strokeWidth={1} />
                  <p className="font-bold text-lg">Seu carrinho está vazio</p>
                  <button onClick={onClose} className="text-pizza-red font-black text-sm uppercase tracking-widest underline">Explorar cardápio</button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.cartId} className="flex gap-4 group">
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-dark-grey">
                          {item.name} {item.size && <span className="text-pizza-red text-xs ml-1">({item.size})</span>}
                        </h4>
                        <button 
                          onClick={() => onRemoveItem(item.cartId)}
                          className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="p-1 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-black text-xs w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="p-1 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-black text-dark-grey">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-gray-100 space-y-6 bg-warm-cream/30">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">Resumo do pedido</span>
                  <button onClick={onClearCart} className="text-xs text-gray-400 hover:text-red-500 uppercase font-black tracking-widest">Esvaziar</button>
                </div>
                
                <div className="flex justify-between items-center text-3xl font-black text-dark-grey">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-5 bg-pizza-gold text-dark-grey rounded-2xl font-black text-lg uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-pizza-gold/20"
                >
                  <Send size={24} />
                  Enviar p/ WhatsApp
                </button>
                
                <p className="text-[10px] text-gray-400 text-center uppercase font-bold tracking-[0.2em]">
                  Você será redirecionado para finalizar o pedido
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
