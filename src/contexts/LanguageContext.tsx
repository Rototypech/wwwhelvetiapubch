'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  currentLanguage: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.menu': 'Speisekarte',
    'nav.drinks': 'Getränke',
    'nav.order': 'Online Bestellen',
    'nav.location': 'Standort',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Willkommen im Helvetia PUB',
    'hero.subtitle': 'Tradition trifft auf moderne Gastronomie im Herzen von Brienz',
    'hero.cta': 'Speisekarte ansehen',
    'hero.order': 'Online bestellen',
    
    // About Section
    'about.title': 'Über uns',
    'about.story': 'Das Helvetia PUB ist seit über 30 Jahren ein fester Bestandteil der Brienz-Gemeinschaft. Hier verbinden sich schweizerische Tradition mit internationaler Küche und einem gemütlichen Ambiente.',
    'about.atmosphere': 'Unser Pub bietet eine warme, einladende Atmosphäre, perfekt für einen entspannten Abend mit Freunden oder Familie.',
    
    // Menu Section
    'menu.title': 'Unsere Speisekarte',
    'menu.drinks': 'Getränke',
    'menu.food': 'Speisen',
    'menu.viewAll': 'Alle anzeigen',
    'menu.price': 'Preis',
    'menu.description': 'Beschreibung',
    'menu.addToCart': 'Zum Warenkorb hinzufügen',
    'menu.available': 'Verfügbar',
    'menu.notAvailable': 'Nicht verfügbar',
    
    // Order Section
    'order.title': 'Online Bestellen',
    'order.subtitle': 'Bestellen Sie bequem online und holen Sie Ihre Bestellung ab oder lassen Sie sie an Ihren Tisch bringen',
    'order.tableNumber': 'Tischnummer (optional)',
    'order.takeaway': 'Zum Mitnehmen',
    'order.dineIn': 'Vor Ort essen',
    'order.notes': 'Anmerkungen (z.B. "extra Käse", "keine Zwiebeln")',
    'order.cart': 'Warenkorb',
    'order.total': 'Gesamt',
    'order.checkout': 'Zur Kasse',
    'order.paymentMethod': 'Zahlungsmethode',
    'order.cash': 'Bar bezahlen',
    'order.sumup': 'SumUp bezahlen',
    'order.confirm': 'Bestellung bestätigen',
    'order.success': 'Bestellung erfolgreich aufgegeben!',
    'order.error': 'Fehler bei der Bestellung. Bitte versuchen Sie es erneut.',
    
    // Location Section
    'location.title': 'Wo Sie uns finden',
    'location.address': 'Adresse',
    'location.phone': 'Telefon',
    'location.email': 'E-Mail',
    'location.openingHours': 'Öffnungszeiten',
    'location.foodHours': 'Essen verfügbar: 17:00 - 21:30',
    'location.getDirections': 'Route berechnen',
    'location.openNow': 'Jetzt geöffnet',
    'location.closed': 'Geschlossen',
    
    // Footer
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookie-Einstellungen',
    'footer.copyright': '© 2024 Helvetia PUB. Alle Rechte vorbehalten.',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Fehler',
    'common.success': 'Erfolg',
    'common.cancel': 'Abbrechen',
    'common.save': 'Speichern',
    'common.edit': 'Bearbeiten',
    'common.delete': 'Löschen',
    'common.close': 'Schließen',
    'common.back': 'Zurück',
    'common.next': 'Weiter',
    'common.yes': 'Ja',
    'common.no': 'Nein',
    'common.chf': 'CHF',
    'common.quantity': 'Menge',
    'common.notes': 'Anmerkungen',
    
    // Days
    'day.monday': 'Montag',
    'day.tuesday': 'Dienstag',
    'day.wednesday': 'Mittwoch',
    'day.thursday': 'Donnerstag',
    'day.friday': 'Freitag',
    'day.saturday': 'Samstag',
    'day.sunday': 'Sonntag'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.drinks': 'Drinks',
    'nav.order': 'Order Online',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Welcome to Helvetia PUB',
    'hero.subtitle': 'Where tradition meets modern gastronomy in the heart of Brienz',
    'hero.cta': 'View Menu',
    'hero.order': 'Order Online',
    
    // About Section
    'about.title': 'About Us',
    'about.story': 'Helvetia PUB has been a cornerstone of the Brienz community for over 30 years. Here, Swiss tradition meets international cuisine in a cozy atmosphere.',
    'about.atmosphere': 'Our pub offers a warm, inviting atmosphere, perfect for a relaxed evening with friends or family.',
    
    // Menu Section
    'menu.title': 'Our Menu',
    'menu.drinks': 'Drinks',
    'menu.food': 'Food',
    'menu.viewAll': 'View All',
    'menu.price': 'Price',
    'menu.description': 'Description',
    'menu.addToCart': 'Add to Cart',
    'menu.available': 'Available',
    'menu.notAvailable': 'Not Available',
    
    // Order Section
    'order.title': 'Order Online',
    'order.subtitle': 'Order conveniently online and pick up your order or have it delivered to your table',
    'order.tableNumber': 'Table Number (optional)',
    'order.takeaway': 'Takeaway',
    'order.dineIn': 'Dine In',
    'order.notes': 'Notes (e.g., "extra cheese", "no onions")',
    'order.cart': 'Cart',
    'order.total': 'Total',
    'order.checkout': 'Checkout',
    'order.paymentMethod': 'Payment Method',
    'order.cash': 'Pay at Bar',
    'order.sumup': 'Pay with SumUp',
    'order.confirm': 'Confirm Order',
    'order.success': 'Order placed successfully!',
    'order.error': 'Error placing order. Please try again.',
    
    // Location Section
    'location.title': 'Find Us',
    'location.address': 'Address',
    'location.phone': 'Phone',
    'location.email': 'Email',
    'location.openingHours': 'Opening Hours',
    'location.foodHours': 'Food available: 17:00 - 21:30',
    'location.getDirections': 'Get Directions',
    'location.openNow': 'Open Now',
    'location.closed': 'Closed',
    
    // Footer
    'footer.impressum': 'Impressum',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.cookies': 'Cookie Settings',
    'footer.copyright': '© 2024 Helvetia PUB. All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.close': 'Close',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.chf': 'CHF',
    'common.quantity': 'Quantity',
    'common.notes': 'Notes',
    
    // Days
    'day.monday': 'Monday',
    'day.tuesday': 'Tuesday',
    'day.wednesday': 'Wednesday',
    'day.thursday': 'Thursday',
    'day.friday': 'Friday',
    'day.saturday': 'Saturday',
    'day.sunday': 'Sunday'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') as 'de' | 'en';
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Default to German for Switzerland
      setCurrentLanguage('de');
    }
  }, []);

  const setLanguage = (lang: 'de' | 'en') => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 