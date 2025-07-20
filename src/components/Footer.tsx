'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pubInfo } from '@/data/pub-info';

const Footer: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const legalContent = {
    impressum: {
      de: `
        <h2>Impressum</h2>
        <p><strong>Helvetia PUB</strong><br />
        ${pubInfo.address.street}<br />
        ${pubInfo.address.postalCode} ${pubInfo.address.city}<br />
        ${pubInfo.address.country}</p>
        
        <p><strong>Kontakt:</strong><br />
        Telefon: ${pubInfo.phone}<br />
        E-Mail: ${pubInfo.email}</p>
        
        <p><strong>Vertreten durch:</strong><br />
        [Name des Inhabers]<br />
        [Weitere rechtliche Informationen]</p>
      `,
      en: `
        <h2>Legal Notice</h2>
        <p><strong>Helvetia PUB</strong><br />
        ${pubInfo.address.street}<br />
        ${pubInfo.address.postalCode} ${pubInfo.address.city}<br />
        ${pubInfo.address.country}</p>
        
        <p><strong>Contact:</strong><br />
        Phone: ${pubInfo.phone}<br />
        Email: ${pubInfo.email}</p>
        
        <p><strong>Represented by:</strong><br />
        [Owner Name]<br />
        [Additional legal information]</p>
      `
    },
    privacy: {
      de: `
        <h2>Datenschutzerklärung</h2>
        <p>Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website.</p>
        
        <h3>Verantwortlicher</h3>
        <p>Helvetia PUB<br />
        ${pubInfo.address.street}<br />
        ${pubInfo.address.postalCode} ${pubInfo.address.city}</p>
        
        <h3>Erhebung und Verarbeitung personenbezogener Daten</h3>
        <p>Wir erheben und verarbeiten personenbezogene Daten nur im notwendigen Umfang und ausschließlich für die angegebenen Zwecke.</p>
        
        <h3>Ihre Rechte</h3>
        <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>
      `,
      en: `
        <h2>Privacy Policy</h2>
        <p>This privacy policy informs you about the nature, scope and purpose of the processing of personal data on this website.</p>
        
        <h3>Responsible Party</h3>
        <p>Helvetia PUB<br />
        ${pubInfo.address.street}<br />
        ${pubInfo.address.postalCode} ${pubInfo.address.city}</p>
        
        <h3>Collection and Processing of Personal Data</h3>
        <p>We collect and process personal data only to the extent necessary and exclusively for the stated purposes.</p>
        
        <h3>Your Rights</h3>
        <p>You have the right to information, correction, deletion and restriction of the processing of your personal data.</p>
      `
    },
    terms: {
      de: `
        <h2>Allgemeine Geschäftsbedingungen</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen und Dienstleistungen des Helvetia PUB.</p>
        
        <h3>Bestellungen</h3>
        <p>Online-Bestellungen können während der Öffnungszeiten aufgegeben werden. Die Verfügbarkeit der Gerichte kann variieren.</p>
        
        <h3>Zahlung</h3>
        <p>Wir akzeptieren Barzahlung und SumUp-Zahlungen. Alle Preise verstehen sich inklusive MwSt.</p>
        
        <h3>Stornierung</h3>
        <p>Bestellungen können bis zu 30 Minuten vor der gewünschten Abholzeit storniert werden.</p>
      `,
      en: `
        <h2>Terms & Conditions</h2>
        <p>These General Terms and Conditions apply to all orders and services of Helvetia PUB.</p>
        
        <h3>Orders</h3>
        <p>Online orders can be placed during opening hours. Availability of dishes may vary.</p>
        
        <h3>Payment</h3>
        <p>We accept cash payments and SumUp payments. All prices include VAT.</p>
        
        <h3>Cancellation</h3>
        <p>Orders can be cancelled up to 30 minutes before the desired pickup time.</p>
      `
    },
    cookies: {
      de: `
        <h2>Cookie-Einstellungen</h2>
        <p>Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.</p>
        
        <h3>Notwendige Cookies</h3>
        <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.</p>
        
        <h3>Analyse-Cookies</h3>
        <p>Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern.</p>
        
        <h3>Cookie-Verwaltung</h3>
        <p>Sie können Ihre Cookie-Einstellungen jederzeit in Ihrem Browser ändern.</p>
      `,
      en: `
        <h2>Cookie Settings</h2>
        <p>This website uses cookies to improve your experience.</p>
        
        <h3>Necessary Cookies</h3>
        <p>These cookies are required for the basic functions of the website and cannot be disabled.</p>
        
        <h3>Analytics Cookies</h3>
        <p>These cookies help us understand and improve website usage.</p>
        
        <h3>Cookie Management</h3>
        <p>You can change your cookie settings at any time in your browser.</p>
      `
    }
  };

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pub Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-yellow-500">
              Helvetia PUB
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('currentLanguage') === 'de' 
                ? 'Tradition trifft auf moderne Gastronomie im Herzen von Brienz'
                : 'Where tradition meets modern gastronomy in the heart of Brienz'
              }
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('currentLanguage') === 'de' ? 'Schnellzugriff' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#menu', label: t('nav.menu') },
                { href: '#drinks', label: t('nav.drinks') },
                { href: '#order', label: t('nav.order') },
                { href: '#location', label: t('nav.location') }
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('nav.contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-yellow-500" />
                <span className="text-gray-300 text-sm">
                  {pubInfo.address.street}, {pubInfo.address.city}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-yellow-500" />
                <a 
                  href={`tel:${pubInfo.phone}`}
                  className="text-gray-300 hover:text-yellow-500 transition-colors text-sm"
                >
                  {pubInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-yellow-500" />
                <a 
                  href={`mailto:${pubInfo.email}`}
                  className="text-gray-300 hover:text-yellow-500 transition-colors text-sm"
                >
                  {pubInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t('currentLanguage') === 'de' ? 'Rechtliches' : 'Legal'}
            </h4>
            <ul className="space-y-2">
              {[
                { type: 'impressum', label: t('footer.impressum') },
                { type: 'privacy', label: t('footer.privacy') },
                { type: 'terms', label: t('footer.terms') },
                { type: 'cookies', label: t('footer.cookies') }
              ].map((link) => (
                <li key={link.type}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => openModal(link.type)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">
                {t('currentLanguage') === 'de' ? 'Entwickelt mit ❤️ in der Schweiz' : 'Made with ❤️ in Switzerland'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-dark rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {activeModal === 'impressum' && t('footer.impressum')}
                  {activeModal === 'privacy' && t('footer.privacy')}
                  {activeModal === 'terms' && t('footer.terms')}
                  {activeModal === 'cookies' && t('footer.cookies')}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: legalContent[activeModal as keyof typeof legalContent][currentLanguage] 
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border border-yellow-500 rounded-full"
        />
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border border-white rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer; 