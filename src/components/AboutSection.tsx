'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Clock, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Heart,
      title: { de: 'Tradition', en: 'Tradition' },
      description: { de: 'Über 30 Jahre Erfahrung', en: 'Over 30 years of experience' }
    },
    {
      icon: Users,
      title: { de: 'Gemeinschaft', en: 'Community' },
      description: { de: 'Herz der Brienz-Gemeinschaft', en: 'Heart of the Brienz community' }
    },
    {
      icon: Clock,
      title: { de: 'Qualität', en: 'Quality' },
      description: { de: 'Frische Zutaten täglich', en: 'Fresh ingredients daily' }
    },
    {
      icon: Star,
      title: { de: 'Service', en: 'Service' },
      description: { de: 'Persönlicher & freundlicher Service', en: 'Personal & friendly service' }
    }
  ];

  return (
    <section id="about" className="py-20 bg-black bg-opacity-90 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t('about.title')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {t('about.story')}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t('about.atmosphere')}
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300">
                <feature.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title[t('currentLanguage') as 'de' | 'en']}
              </h3>
              <p className="text-gray-400">
                {feature.description[t('currentLanguage') as 'de' | 'en']}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2"
            >
              30+
            </motion.div>
            <p className="text-gray-400 text-lg">
              {t('currentLanguage') === 'de' ? 'Jahre Erfahrung' : 'Years of Experience'}
            </p>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2"
            >
              1000+
            </motion.div>
            <p className="text-gray-400 text-lg">
              {t('currentLanguage') === 'de' ? 'Zufriedene Gäste' : 'Happy Customers'}
            </p>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2"
            >
              50+
            </motion.div>
            <p className="text-gray-400 text-lg">
              {t('currentLanguage') === 'de' ? 'Gerichte & Getränke' : 'Dishes & Drinks'}
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border border-yellow-500 rounded-full"
          />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border border-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 