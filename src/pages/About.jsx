import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: t('about.values.love.title'),
      description: t('about.values.love.description')
    },
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: BookOpen,
      title: t('about.values.truth.title'),
      description: t('about.values.truth.description')
    },
    {
      icon: Globe,
      title: t('about.values.service.title'),
      description: t('about.values.service.description')
    }
  ];

  const leadership = [
    {
      name: t('about.leadership.pastor1.name'),
      role: t('about.leadership.pastor1.role'),
      description: t('about.leadership.pastor1.description'),
      image: "Friendly pastor in his 50s with warm smile and professional attire"
    },
    {
      name: t('about.leadership.pastor2.name'),
      role: t('about.leadership.pastor2.role'),
      description: t('about.leadership.pastor2.description'),
      image: "Young female pastor with bright smile and modern professional look"
    },
    {
      name: t('about.leadership.leader1.name'),
      role: t('about.leadership.leader1.role'),
      description: t('about.leadership.leader1.description'),
      image: "Male worship leader with guitar in contemporary church setting"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.helmet.title')}</title>
        <meta name="description" content={t('about.helmet.description')} />
      </Helmet>

      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.story.heading')}</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                alt="Church history and community gathering"
               src="https://images.unsplash.com/photo-1527262616722-3132d822445d" />
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.values.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.values.subheading')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.leadership.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.leadership.subheading')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 p-8 rounded-xl"
              >
                <img 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-6"
                  alt={`${leader.name} - ${leader.role}`}
                 src="https://images.unsplash.com/photo-1595956553066-fe24a8c33395" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t('about.mission.heading')}</h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "{t('about.mission.statement')}"
            </p>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission.visionHeading')}</h3>
              <p className="text-lg text-gray-700">
                {t('about.mission.visionStatement')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;