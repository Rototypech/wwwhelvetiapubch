'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pubInfo, openingHours, dayNames, foodAvailability } from '@/data/pub-info';

const LocationSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentDay, setCurrentDay] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[new Date().getDay()];
    setCurrentDay(today);

    const todayHours = openingHours.find(hours => hours.day === today);
    if (todayHours) {
      const now = new Date();
      const currentTime = now.getHours() * 100 + now.getMinutes();
      const openTime = parseInt(todayHours.open.replace(':', ''));
      const closeTime = parseInt(todayHours.close.replace(':', ''));
      
      setIsOpen(currentTime >= openTime && currentTime <= closeTime);
    }
  }, []);

  const getDirections = () => {
    const address = `${pubInfo.address.street}, ${pubInfo.address.postalCode} ${pubInfo.address.city}, ${pubInfo.address.country}`;
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-black bg-opacity-90 relative">
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
            {t('location.title')}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="glass-dark rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('location.address')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {pubInfo.address.street}<br />
                    {pubInfo.address.postalCode} {pubInfo.address.city}<br />
                    {pubInfo.address.country}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={getDirections}
                    className="mt-4 flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>{t('location.getDirections')}</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="glass-dark rounded-lg p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {t('location.phone')}
                    </h3>
                    <a 
                      href={`tel:${pubInfo.phone}`}
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      {pubInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {t('location.email')}
                    </h3>
                    <a 
                      href={`mailto:${pubInfo.email}`}
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      {pubInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="glass-dark rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Clock size={24} className="text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {t('location.openingHours')}
                  </h3>
                  
                  {/* Current Status */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
                      isOpen 
                        ? 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500' 
                        : 'bg-red-500 bg-opacity-20 text-red-400 border border-red-500'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`} />
                      <span>{isOpen ? t('location.openNow') : t('location.closed')}</span>
                    </div>
                  </div>

                  {/* Hours List */}
                  <div className="space-y-2">
                    {openingHours.map((hours) => (
                      <div 
                        key={hours.day}
                        className={`flex justify-between items-center py-2 px-3 rounded ${
                          hours.day === currentDay ? 'bg-yellow-500 bg-opacity-20 border border-yellow-500' : ''
                        }`}
                      >
                        <span className={`font-medium ${
                          hours.day === currentDay ? 'text-yellow-400' : 'text-white'
                        }`}>
                          {dayNames[currentLanguage][hours.day as keyof typeof dayNames.de]}
                        </span>
                        <span className={`${
                          hours.day === currentDay ? 'text-yellow-400' : 'text-gray-300'
                        }`}>
                          {hours.open} - {hours.close}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Food Availability */}
                  <div className="mt-4 p-3 bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded">
                    <p className="text-yellow-400 text-sm font-medium">
                      {foodAvailability[currentLanguage]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Google Maps Embed */}
            <div className="glass-dark rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
                  `${pubInfo.address.street}, ${pubInfo.address.postalCode} ${pubInfo.address.city}, ${pubInfo.address.country}`
                )}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Helvetia PUB Location"
              />
            </div>

            {/* Additional Information */}
            <div className="glass-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('currentLanguage') === 'de' ? 'Anfahrt' : 'Getting Here'}
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">
                    {t('currentLanguage') === 'de' ? 'Mit dem Auto:' : 'By Car:'}
                  </strong><br />
                  {t('currentLanguage') === 'de' 
                    ? 'Kostenlose Parkplätze in der Nähe verfügbar'
                    : 'Free parking available nearby'
                  }
                </p>
                <p>
                  <strong className="text-white">
                    {t('currentLanguage') === 'de' ? 'Mit öffentlichen Verkehrsmitteln:' : 'By Public Transport:'}
                  </strong><br />
                  {t('currentLanguage') === 'de'
                    ? '5 Minuten zu Fuß vom Bahnhof Brienz'
                    : '5 minutes walk from Brienz train station'
                  }
                </p>
                <p>
                  <strong className="text-white">
                    {t('currentLanguage') === 'de' ? 'Zu Fuß:' : 'On Foot:'}
                  </strong><br />
                  {t('currentLanguage') === 'de'
                    ? 'Zentral gelegen im Herzen von Brienz'
                    : 'Centrally located in the heart of Brienz'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border border-yellow-500 rounded-full"
          />
        </div>
        
        <div className="absolute bottom-20 left-20 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border border-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 