'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, X, Plus, Minus, CreditCard, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CartItem, Order } from '@/types';

interface OrderSectionProps {
  cart: CartItem[];
  onUpdateCart: (cart: CartItem[]) => void;
  onClearCart: () => void;
}

const OrderSection: React.FC<OrderSectionProps> = ({ cart, onUpdateCart, onClearCart }) => {
  const { t } = useLanguage();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    tableNumber: '',
    isTakeaway: false,
    notes: '',
    paymentMethod: 'cash' as 'cash' | 'sumup'
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (itemId: string, change: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0);
    
    onUpdateCart(updatedCart);
  };

  const updateNotes = (itemId: string, notes: string) => {
    const updatedCart = cart.map(item => 
      item.id === itemId ? { ...item, notes } : item
    );
    onUpdateCart(updatedCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
  };

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;

    const order: Order = {
      id: `order-${Date.now()}`,
      items: cart,
      total,
      tableNumber: orderDetails.tableNumber || undefined,
      isTakeaway: orderDetails.isTakeaway,
      notes: orderDetails.notes,
      status: 'pending',
      createdAt: new Date(),
      paymentMethod: orderDetails.paymentMethod
    };

    try {
      // Here you would typically send the order to your backend
      console.log('Placing order:', order);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear cart and close checkout
      onClearCart();
      setIsCheckoutOpen(false);
      setOrderDetails({
        tableNumber: '',
        isTakeaway: false,
        notes: '',
        paymentMethod: 'cash'
      });
      
      // Show success message (you could add a toast notification here)
      alert(t('order.success'));
    } catch (error) {
      console.error('Error placing order:', error);
      alert(t('order.error'));
    }
  };

  return (
    <section id="order" className="py-20 bg-black bg-opacity-90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
          >
            {t('order.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t('order.subtitle')}
          </motion.p>
        </motion.div>

        {/* Cart Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart size={24} />
            <span>{t('order.cart')}</span>
            {itemCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
              >
                {itemCount}
              </motion.div>
            )}
          </motion.button>
        </motion.div>

        {/* Cart Modal */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsCartOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-dark rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{t('order.cart')}</h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">{t('currentLanguage') === 'de' ? 'Ihr Warenkorb ist leer' : 'Your cart is empty'}</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                          <div className="flex-1">
                            <h4 className="text-white font-medium">{item.name}</h4>
                            <p className="text-gray-400 text-sm">
                              {item.price.toFixed(2)} CHF x {item.quantity}
                            </p>
                            <input
                              type="text"
                              placeholder={t('common.notes')}
                              value={item.notes || ''}
                              onChange={(e) => updateNotes(item.id, e.target.value)}
                              className="mt-2 w-full bg-gray-700 text-white text-sm rounded px-2 py-1"
                            />
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 bg-gray-600 hover:bg-gray-500 rounded flex items-center justify-center"
                            >
                              <Minus size={12} className="text-white" />
                            </button>
                            <span className="text-white font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 bg-yellow-500 hover:bg-yellow-600 rounded flex items-center justify-center"
                            >
                              <Plus size={12} className="text-black" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-700 pt-4 mb-6">
                      <div className="flex justify-between items-center text-xl font-bold text-white">
                        <span>{t('order.total')}:</span>
                        <span>{total.toFixed(2)} CHF</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCheckout}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors"
                    >
                      {t('order.checkout')}
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Checkout Modal */}
        <AnimatePresence>
          {isCheckoutOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsCheckoutOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-dark rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{t('order.checkout')}</h3>
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Order Type */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      {t('currentLanguage') === 'de' ? 'Bestellart' : 'Order Type'}
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={!orderDetails.isTakeaway}
                          onChange={() => setOrderDetails(prev => ({ ...prev, isTakeaway: false }))}
                          className="mr-2"
                        />
                        <span className="text-white">{t('order.dineIn')}</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={orderDetails.isTakeaway}
                          onChange={() => setOrderDetails(prev => ({ ...prev, isTakeaway: true }))}
                          className="mr-2"
                        />
                        <span className="text-white">{t('order.takeaway')}</span>
                      </label>
                    </div>
                  </div>

                  {/* Table Number */}
                  {!orderDetails.isTakeaway && (
                    <div>
                      <label className="block text-white font-medium mb-2">
                        {t('order.tableNumber')}
                      </label>
                      <input
                        type="text"
                        value={orderDetails.tableNumber}
                        onChange={(e) => setOrderDetails(prev => ({ ...prev, tableNumber: e.target.value }))}
                        className="w-full bg-gray-700 text-white rounded px-3 py-2"
                        placeholder={t('currentLanguage') === 'de' ? 'z.B. 5' : 'e.g. 5'}
                      />
                    </div>
                  )}

                  {/* Notes */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      {t('order.notes')}
                    </label>
                    <textarea
                      value={orderDetails.notes}
                      onChange={(e) => setOrderDetails(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full bg-gray-700 text-white rounded px-3 py-2 h-20 resize-none"
                      placeholder={t('order.notes')}
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      {t('order.paymentMethod')}
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={orderDetails.paymentMethod === 'cash'}
                          onChange={() => setOrderDetails(prev => ({ ...prev, paymentMethod: 'cash' }))}
                          className="mr-2"
                        />
                        <div className="flex items-center space-x-2">
                          <DollarSign size={20} className="text-green-400" />
                          <span className="text-white">{t('order.cash')}</span>
                        </div>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={orderDetails.paymentMethod === 'sumup'}
                          onChange={() => setOrderDetails(prev => ({ ...prev, paymentMethod: 'sumup' }))}
                          className="mr-2"
                        />
                        <div className="flex items-center space-x-2">
                          <CreditCard size={20} className="text-blue-400" />
                          <span className="text-white">{t('order.sumup')}</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="text-white font-medium mb-2">
                      {t('currentLanguage') === 'de' ? 'Bestellübersicht' : 'Order Summary'}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span>{item.name} x{item.quantity}</span>
                          <span>{(item.price * item.quantity).toFixed(2)} CHF</span>
                        </div>
                      ))}
                      <div className="border-t border-gray-600 pt-2 flex justify-between font-bold text-white">
                        <span>{t('order.total')}:</span>
                        <span>{total.toFixed(2)} CHF</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePlaceOrder}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors"
                  >
                    {t('order.confirm')}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OrderSection; 