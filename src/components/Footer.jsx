import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">{t('footer.churchName')}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">{t('footer.quickLinks')}</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">{t('nav.about')}</Link>
              <Link to="/ministries" className="block text-gray-300 hover:text-white transition-colors text-sm">{t('nav.ministries')}</Link>
              <Link to="/events" className="block text-gray-300 hover:text-white transition-colors text-sm">{t('nav.events')}</Link>
              <Link to="/sermons" className="block text-gray-300 hover:text-white transition-colors text-sm">{t('nav.sermons')}</Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">{t('footer.serviceTimes')}</span>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">{t('footer.sundayWorship')}</span>
                <span className="text-white">9:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">{t('footer.sundaySchool')}</span>
                <span className="text-white">10:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">{t('footer.wednesdayPrayer')}</span>
                <span className="text-white">7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">{t('footer.fridayYouth')}</span>
                <span className="text-white">6:30 PM</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">{t('footer.contactUs')}</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Faith Street, Hope City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@jsc.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;