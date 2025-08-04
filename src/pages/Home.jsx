import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Heart, BookOpen, Play, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const heroSlides = [
    {
      image: "Modern church sanctuary with warm lighting and wooden pews",
      title: t('home.hero.slide1.title'),
      subtitle: t('home.hero.slide1.subtitle'),
      cta: t('home.hero.slide1.cta'),
      link: '/contact'
    },
    {
      image: "Diverse congregation worshipping together with raised hands",
      title: t('home.hero.slide2.title'),
      subtitle: t('home.hero.slide2.subtitle'),
      cta: t('home.hero.slide2.cta'),
      link: '/ministries'
    },
    {
      image: "Church community serving meals to families in need",
      title: t('home.hero.slide3.title'),
      subtitle: t('home.hero.slide3.subtitle'),
      cta: t('home.hero.slide3.cta'),
      link: '/ministries#outreach'
    }
  ];

  const services = [
    {
      title: t('home.services.service1.title'),
      time: "9:00 AM",
      description: t('home.services.service1.description'),
      icon: Heart
    },
    {
      title: t('home.services.service2.title'),
      time: "10:30 AM",
      description: t('home.services.service2.description'),
      icon: BookOpen
    },
    {
      title: t('home.services.service3.title'),
      time: "7:00 PM",
      description: t('home.services.service3.description'),
      icon: Users
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Outreach",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "Downtown Community Center"
    },
    {
      title: "Youth Conference",
      date: "March 22, 2024",
      time: "6:00 PM",
      location: "JSC Main Hall"
    },
    {
      title: "Easter Celebration",
      date: "March 31, 2024",
      time: "9:00 AM",
      location: "JSC Sanctuary"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSermonFeatureClick = () => {
    navigate('/sermons');
  };

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter Signup",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('home.helmet.title')}</title>
        <meta name="description" content={t('home.helmet.description')} />
      </Helmet>

      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img   
            className="w-full h-full object-cover transition-opacity duration-1000"
            alt={`Hero slide ${currentSlide + 1}`}
           src="https://tyiakcsqxikzoefltkic.supabase.co/storage/v1/object/public/test-bucket//1000187454.jpg" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to={heroSlides[currentSlide].link}>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
                >
                  {heroSlides[currentSlide].cta}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.services.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="service-card bg-white p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="flex items-center justify-center text-blue-600 font-semibold mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    {service.time}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

       {/* Children's Ministry Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Baby className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('home.children.heading')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('home.children.description')}
              </p>
              <Link to="/ministries#children">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
                  {t('home.children.cta')}
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                alt="Happy children in Sunday school class"
               src="https://tyiakcsqxikzoefltkic.supabase.co/storage/v1/object/public/test-bucket//PXL_20240310_120739878.PORTRAIT.jpg" />
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t('home.mission.heading')}</h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              {t('home.mission.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-600">
              <div className="flex items-center">
                <Heart className="w-6 h-6 text-blue-600 mr-2" />
                <span>{t('home.mission.value1')}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <span>{t('home.mission.value2')}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                <span>{t('home.mission.value3')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.events.heading')}</h2>
            <p className="text-xl text-gray-600">{t('home.events.subheading')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('home.sermon.heading')}</h2>
            <p className="text-xl text-gray-300">{t('home.sermon.subheading')}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <button 
                  onClick={handleSermonFeatureClick}
                  className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-10 h-10 text-white ml-1" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{t('home.sermon.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('home.sermon.description')}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>Pastor John Smith</span>
                  <span className="mx-2">•</span>
                  <span>March 10, 2024</span>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.newsletter.heading')}</h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('home.newsletter.subheading')}
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('home.newsletter.placeholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                {t('home.newsletter.cta')}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;