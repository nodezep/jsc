import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'worship', name: 'Worship' },
    { id: 'community', name: 'Community' },
    { id: 'youth', name: 'Youth' },
    { id: 'outreach', name: 'Outreach' },
    { id: 'special', name: 'Special Events' }
  ];

  const events = [
    {
      id: 1,
      title: "Easter Celebration Service",
      date: "March 31, 2024",
      time: "9:00 AM",
      location: "Main Sanctuary",
      category: "worship",
      description: "Join us for a special Easter worship service celebrating the resurrection of Jesus Christ.",
      image: "Easter church service with beautiful decorations and congregation",
      featured: true
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "April 5, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Church Parking Lot",
      category: "outreach",
      description: "Help us collect food donations for local families in need.",
      image: "Volunteers organizing food donations at community drive"
    },
    {
      id: 3,
      title: "Youth Spring Retreat",
      date: "April 12-14, 2024",
      time: "Friday 6 PM - Sunday 4 PM",
      location: "Camp Wildwood",
      category: "youth",
      description: "A weekend retreat for teens to grow in faith and build friendships.",
      image: "Youth group at outdoor retreat with activities and worship"
    },
    {
      id: 4,
      title: "Marriage Enrichment Workshop",
      date: "April 20, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Fellowship Hall",
      category: "community",
      description: "Strengthen your marriage with practical tools and biblical principles.",
      image: "Couples participating in marriage workshop discussion"
    },
    {
      id: 5,
      title: "Mother's Day Brunch",
      date: "May 12, 2024",
      time: "10:30 AM - 12:30 PM",
      location: "Fellowship Hall",
      category: "special",
      description: "Celebrating all the wonderful mothers in our church family.",
      image: "Beautiful Mother's Day brunch setup with flowers and decorations"
    },
    {
      id: 6,
      title: "Vacation Bible School",
      date: "June 10-14, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Children's Wing",
      category: "youth",
      description: "A fun week of Bible stories, crafts, games, and music for kids.",
      image: "Children enjoying VBS activities with crafts and games"
    },
    {
      id: 7,
      title: "Community Block Party",
      date: "June 22, 2024",
      time: "4:00 PM - 8:00 PM",
      location: "Church Grounds",
      category: "outreach",
      description: "Free food, games, and fun for the whole neighborhood.",
      image: "Community block party with families enjoying food and activities"
    },
    {
      id: 8,
      title: "Men's Breakfast & Speaker",
      date: "July 6, 2024",
      time: "8:00 AM - 10:00 AM",
      location: "Fellowship Hall",
      category: "community",
      description: "Monthly men's gathering with breakfast and inspiring speaker.",
      image: "Men's breakfast gathering with speaker presentation"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const handleRSVP = (eventTitle) => {
    toast({
      title: "🚧 Event RSVP",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleAddToCalendar = (eventTitle) => {
    toast({
      title: "🚧 Add to Calendar",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Events - {t('nav.churchName')}</title>
        <meta name="description" content={`Stay updated with upcoming events at ${t('nav.churchName')} including worship services, community gatherings, and special celebrations.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for worship, fellowship, and community events that bring people together in faith and friendship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    className="w-full h-64 lg:h-full object-cover"
                    alt="Featured event"
                   src="https://images.unsplash.com/photo-1665220509244-fe8459807991" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Event
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {events.find(e => e.featured)?.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {events.find(e => e.featured)?.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{events.find(e => e.featured)?.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{events.find(e => e.featured)?.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{events.find(e => e.featured)?.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => handleRSVP(events.find(e => e.featured)?.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      RSVP Now
                    </Button>
                    <Button 
                      onClick={() => handleAddToCalendar(events.find(e => e.featured)?.title)}
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold"
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(event => !event.featured || selectedCategory !== 'all').map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img 
                  className="w-full h-48 object-cover"
                  alt={event.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.category === 'worship' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'community' ? 'bg-green-100 text-green-800' :
                      event.category === 'youth' ? 'bg-orange-100 text-orange-800' :
                      event.category === 'outreach' ? 'bg-blue-100 text-blue-800' :
                      'bg-pink-100 text-pink-800'
                    }`}>
                      {categories.find(c => c.id === event.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleRSVP(event.title)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm"
                    >
                      RSVP
                    </Button>
                    <Button 
                      onClick={() => handleAddToCalendar(event.title)}
                      variant="outline"
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg"
                    >
                      <Calendar className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss out on upcoming events and special gatherings. Subscribe to our newsletter 
              or follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleRSVP('newsletter')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Subscribe to Newsletter
              </Button>
              <Button 
                onClick={() => handleRSVP('calendar')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
              >
                View Full Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;