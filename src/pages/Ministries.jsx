import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Heart, Baby, Music, BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Ministries = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const navigate = useNavigate();

  const ministriesData = [
    { id: "adults", icon: Users, ...t('ministries.adults', { returnObjects: true }) },
    { id: "youth", icon: Heart, ...t('ministries.youth', { returnObjects: true }) },
    { id: "children", icon: Baby, ...t('ministries.children', { returnObjects: true }) },
    { id: "worship", icon: Music, ...t('ministries.worship', { returnObjects: true }) },
    { id: "discipleship", icon: BookOpen, ...t('ministries.discipleship', { returnObjects: true }) },
    { id: "outreach", icon: Globe, ...t('ministries.outreach', { returnObjects: true }) }
  ];

  const handleGetInvolved = (ministryTitle) => {
    toast({
      title: "🚧 Ministry Signup",
      description: `Feature to join "${ministryTitle}" is coming soon! For now, you can reach out via our Contact page.`,
    });
    navigate('/contact');
  };
  
  const handleContactForServing = () => {
    navigate('/contact');
  }

  return (
    <>
      <Helmet>
        <title>{t('ministries.helmet.title')}</title>
        <meta name="description" content={t('ministries.helmet.description')} />
      </Helmet>

      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t('ministries.hero.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('ministries.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ministriesData.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <motion.div
                  id={ministry.id}
                  key={ministry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="ministry-card bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        className="w-full h-48 object-cover rounded-lg"
                        alt={`${ministry.title} ministry`}
                       src={`https://images.unsplash.com/photo-1564921074016-dc83ab4ac783?q=80&w=800&h=600&fit=crop&crop=entropy&auto=format&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&s=${ministry.id}`} />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{ministry.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{ministry.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{t('ministries.whatWeOffer')}</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {ministry.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        onClick={() => handleGetInvolved(ministry.title)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                      >
                        {t('ministries.getInvolved')}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('ministries.cta.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('ministries.cta.subtitle')}
            </p>
            <Button 
              onClick={handleContactForServing}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              {t('ministries.cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ministries.leadership.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('ministries.leadership.subheading')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pastor Sarah Johnson",
                role: "Youth & Young Adults",
                image: "Young female pastor leading youth ministry"
              },
              {
                name: "Mark Thompson",
                role: "Children's Ministry Director",
                image: "Male children's ministry leader with kids"
              },
              {
                name: "Lisa Chen",
                role: "Outreach Coordinator",
                image: "Female outreach coordinator at community event"
              }
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-sm"
              >
                <img 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  alt={`${leader.name} - ${leader.role}`}
                 src="https://images.unsplash.com/photo-1595956553066-fe24a8c33395" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ministries;