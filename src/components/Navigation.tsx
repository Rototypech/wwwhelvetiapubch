'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation: React.FC = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#menu', label: t('nav.menu') },
    { href: '#drinks', label: t('nav.drinks') },
    { href: '#order', label: t('nav.order') },
    { href: '#location', label: t('nav.location') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'de' ? 'en' : 'de');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-playfair font-bold text-white">
              Helvetia PUB
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-yellow-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors duration-200"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">
                {currentLanguage === 'de' ? '🇩🇪 DE' : '🇬🇧 EN'}
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-yellow-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                <Globe size={20} />
                <span>
                  {currentLanguage === 'de' ? '🇩🇪 Deutsch' : '🇬🇧 English'}
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 