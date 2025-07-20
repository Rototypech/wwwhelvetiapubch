'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Utensils, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url(/images/helvetia-pub-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-playfair font-bold leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#menu')}
              className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Utensils size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>{t('hero.cta')}</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#order')}
              className="group bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform duration-300" />
              <span>{t('hero.order')}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-yellow-500 rounded-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-white rounded-full"
        />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 right-20 text-yellow-400 text-4xl opacity-60"
      >
        🍺
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/4 left-20 text-white text-4xl opacity-60"
      >
        🍕
      </motion.div>
    </section>
  );
};

export default HeroSection; 