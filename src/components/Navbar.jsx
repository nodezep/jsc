import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.ministries'), path: '/ministries' },
    { name: t('nav.jscZones'), path: '/jsc-zones' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.sermons'), path: '/sermons' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const handleDonation = () => {
    toast({
      title: "🚧 Donation Feature",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">{t('nav.churchName')}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={handleDonation}
              className="donation-gradient text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              {t('nav.donate')}
            </Button>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-600" />
              <button onClick={() => changeLanguage('en')} className={`text-sm font-medium ${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>EN</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => changeLanguage('sw')} className={`text-sm font-medium ${i18n.language === 'sw' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>SW</button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={handleDonation}
                  className="w-full donation-gradient text-white py-2 rounded-full font-medium"
                >
                  {t('nav.donate')}
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-4 pt-4 border-t mt-4">
                 <Globe className="w-5 h-5 text-gray-600" />
                 <button onClick={() => {changeLanguage('en'); setIsOpen(false);}} className={`text-sm font-medium ${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>English</button>
                 <span className="text-gray-300">|</span>
                 <button onClick={() => {changeLanguage('sw'); setIsOpen(false);}} className={`text-sm font-medium ${i18n.language === 'sw' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Swahili</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;