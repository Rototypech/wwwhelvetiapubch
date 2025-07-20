'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuData } from '@/data/menu';
import { foodMenuData } from '@/data/food-menu';
import { CartItem } from '@/types';

interface MenuSectionProps {
  onAddToCart: (item: CartItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const { t, currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'drinks' | 'food'>('drinks');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allCategories = [
    { id: 'all', name: { de: 'Alle', en: 'All' }, icon: '🍽️' },
    ...menuData.map(cat => ({ id: cat.id, name: cat.name, icon: cat.icon })),
    ...foodMenuData.map(cat => ({ id: cat.id, name: cat.name, icon: cat.icon }))
  ];

  const currentMenuData = activeTab === 'drinks' ? menuData : foodMenuData;
  const filteredCategories = selectedCategory === 'all' 
    ? currentMenuData 
    : currentMenuData.filter(cat => cat.id === selectedCategory);

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const handleAddToCart = (item: { id: string; name: { [key: string]: string }; price: number }) => {
    const quantity = quantities[item.id] || 1;
    if (quantity > 0) {
      onAddToCart({
        id: item.id,
        name: item.name[currentLanguage],
        price: item.price,
        quantity,
        notes: ''
      });
      setQuantities(prev => ({ ...prev, [item.id]: 0 }));
    }
  };

  return (
    <section id="menu" className="py-20 bg-black bg-opacity-95 relative">
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
            {t('menu.title')}
          </motion.h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800 rounded-lg p-1 flex">
            {[
              { id: 'drinks', label: t('menu.drinks'), icon: '🍺' },
              { id: 'food', label: t('menu.food'), icon: '🍽️' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab(tab.id as 'drinks' | 'food');
                  setSelectedCategory('all');
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {allCategories
            .filter(cat => 
              activeTab === 'drinks' 
                ? menuData.some(m => m.id === cat.id)
                : foodMenuData.some(f => f.id === cat.id)
            )
            .map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name[currentLanguage]}</span>
              </motion.button>
            ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${selectedCategory}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCategories.map((category) =>
              category.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-dark rounded-lg p-6 hover-lift"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.name[currentLanguage]}
                      </h3>
                      {item.description && (
                        <p className="text-gray-400 text-sm mb-3">
                          {item.description[currentLanguage]}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-500">
                        {item.price === 0 ? 'Auf Anfrage' : `${item.price.toFixed(2)} CHF`}
                      </div>
                      <div className={`text-xs mt-1 px-2 py-1 rounded-full ${
                        item.available 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {item.available ? t('menu.available') : t('menu.notAvailable')}
                      </div>
                    </div>
                  </div>

                  {item.available && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <Minus size={16} />
                        </motion.button>
                        <span className="text-white font-semibold w-8 text-center">
                          {quantities[item.id] || 0}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center text-black transition-colors"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                                                 onClick={() => handleAddToCart(item)}
                        disabled={(quantities[item.id] || 0) === 0}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          (quantities[item.id] || 0) > 0
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={16} />
                        <span>{t('menu.addToCart')}</span>
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Food Availability Notice */}
        {activeTab === 'food' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded-lg px-6 py-4">
              <p className="text-yellow-400 font-medium">
                {t('location.foodHours')}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuSection; 