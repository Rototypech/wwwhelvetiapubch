'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, Settings, Menu, Clock, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AdminPanel: React.FC = () => {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate against your backend
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert(t('currentLanguage') === 'de' ? 'Ungültige Anmeldedaten' : 'Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black bg-opacity-95 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark rounded-lg p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <Lock size={48} className="text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              {t('currentLanguage') === 'de' ? 'Admin Login' : 'Admin Login'}
            </h2>
            <p className="text-gray-400">
              {t('currentLanguage') === 'de' 
                ? 'Melden Sie sich an, um das Admin-Panel zu verwalten'
                : 'Sign in to manage the admin panel'
              }
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                {t('currentLanguage') === 'de' ? 'Benutzername' : 'Username'}
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                {t('currentLanguage') === 'de' ? 'Passwort' : 'Password'}
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors"
            >
              {t('currentLanguage') === 'de' ? 'Anmelden' : 'Sign In'}
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            <p>Demo: admin / password</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black bg-opacity-95">
      {/* Header */}
      <div className="glass-dark border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-playfair font-bold text-white">
              Helvetia PUB Admin
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t('currentLanguage') === 'de' ? 'Abmelden' : 'Sign Out'}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-800 rounded-lg p-1 mb-8">
          {[
            { id: 'menu', label: t('currentLanguage') === 'de' ? 'Speisekarte' : 'Menu', icon: Menu },
            { id: 'hours', label: t('currentLanguage') === 'de' ? 'Öffnungszeiten' : 'Hours', icon: Clock },
            { id: 'orders', label: t('currentLanguage') === 'de' ? 'Bestellungen' : 'Orders', icon: Users },
            { id: 'settings', label: t('currentLanguage') === 'de' ? 'Einstellungen' : 'Settings', icon: Settings },
            { id: 'legal', label: t('currentLanguage') === 'de' ? 'Rechtliches' : 'Legal', icon: FileText }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="glass-dark rounded-lg p-6">
          {activeTab === 'menu' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">
                {t('currentLanguage') === 'de' ? 'Speisekarte verwalten' : 'Manage Menu'}
              </h2>
              <p className="text-gray-400">
                {t('currentLanguage') === 'de' 
                  ? 'Hier können Sie Menüpunkte hinzufügen, bearbeiten oder entfernen.'
                  : 'Here you can add, edit, or remove menu items.'
                }
              </p>
              {/* Menu management interface would go here */}
            </div>
          )}

          {activeTab === 'hours' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">
                {t('currentLanguage') === 'de' ? 'Öffnungszeiten verwalten' : 'Manage Opening Hours'}
              </h2>
              <p className="text-gray-400">
                {t('currentLanguage') === 'de' 
                  ? 'Aktualisieren Sie die Öffnungszeiten für jeden Wochentag.'
                  : 'Update opening hours for each day of the week.'
                }
              </p>
              {/* Opening hours management interface would go here */}
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">
                {t('currentLanguage') === 'de' ? 'Bestellungen verwalten' : 'Manage Orders'}
              </h2>
              <p className="text-gray-400">
                {t('currentLanguage') === 'de' 
                  ? 'Sehen Sie alle eingehenden Bestellungen und verwalten Sie deren Status.'
                  : 'View all incoming orders and manage their status.'
                }
              </p>
              {/* Order management interface would go here */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">
                {t('currentLanguage') === 'de' ? 'Einstellungen' : 'Settings'}
              </h2>
              <p className="text-gray-400">
                {t('currentLanguage') === 'de' 
                  ? 'Konfigurieren Sie allgemeine Einstellungen für die Website.'
                  : 'Configure general settings for the website.'
                }
              </p>
              {/* Settings interface would go here */}
            </div>
          )}

          {activeTab === 'legal' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">
                {t('currentLanguage') === 'de' ? 'Rechtliche Inhalte' : 'Legal Content'}
              </h2>
              <p className="text-gray-400">
                {t('currentLanguage') === 'de' 
                  ? 'Bearbeiten Sie Impressum, Datenschutz und andere rechtliche Inhalte.'
                  : 'Edit legal notice, privacy policy, and other legal content.'
                }
              </p>
              {/* Legal content management interface would go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 