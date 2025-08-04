import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppFloat = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual church phone number
    const message = t('whatsapp.message');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="whatsapp-float cursor-pointer flex items-center justify-center"
      onClick={handleWhatsAppClick}
      title={t('whatsapp.title')}
    >
      <MessageCircle className="w-7 h-7" />
    </div>
  );
};

export default WhatsAppFloat;