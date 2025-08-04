import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Clock, MapPin, Calendar, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const JSCZones = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const jscZones = [
    {
      name: "Young Professionals Zone",
      description: "A group for working adults in their 20s and 30s navigating career and faith",
      day: "Tuesday",
      time: "7:00 PM",
      location: "Church Conference Room",
      leader: "Mike & Sarah Davis",
      focus: "Career, Relationships, Purpose",
      image: "Young professionals in Bible study discussion"
    },
    {
      name: "Families Zone",
      description: "Parents supporting each other while raising children in faith",
      day: "Thursday",
      time: "6:30 PM",
      location: "Fellowship Hall",
      leader: "Tom & Jennifer Wilson",
      focus: "Parenting, Marriage, Family Life",
      image: "Families with children in group study setting"
    },
    {
      name: "Senior Saints Zone",
      description: "Mature believers sharing wisdom and growing together in faith",
      day: "Wednesday",
      time: "10:00 AM",
      location: "Senior Center",
      leader: "Pastor John & Mary Smith",
      focus: "Wisdom, Legacy, Spiritual Growth",
      image: "Senior adults in comfortable Bible study environment"
    },
    {
      name: "College & Career Zone",
      description: "Students and young adults exploring faith during life transitions",
      day: "Sunday",
      time: "6:00 PM",
      location: "Youth Room",
      leader: "Pastor Sarah Johnson",
      focus: "Identity, Future, Relationships",
      image: "College students in casual group discussion"
    },
    {
      name: "Men's Brotherhood Zone",
      description: "Men encouraging each other in faith, work, and relationships",
      day: "Saturday",
      time: "7:00 AM",
      location: "Coffee Shop Downtown",
      leader: "David Martinez",
      focus: "Leadership, Integrity, Purpose",
      image: "Men's group meeting over coffee and Bibles"
    },
    {
      name: "Women's Circle Zone",
      description: "Women supporting each other through life's joys and challenges",
      day: "Friday",
      time: "9:30 AM",
      location: "Church Library",
      leader: "Lisa Thompson",
      focus: "Friendship, Growth, Encouragement",
      image: "Women's group in warm, welcoming study space"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Deep Relationships",
      description: "Build meaningful friendships with people who share your faith and values"
    },
    {
      icon: BookOpen,
      title: "Biblical Growth",
      description: "Study God's Word together and apply it to your daily life"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Find encouragement and prayer support during life's ups and downs"
    }
  ];

  const handleJoinGroup = (groupName) => {
    toast({
      title: "🚧 Group Registration",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleStartGroup = () => {
    toast({
      title: "🚧 Start New Group",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>JSC Zones - Jerusalem Spiritual Centre (JSC)</title>
        <meta name="description" content="Join a JSC Zone at Jerusalem Spiritual Centre (JSC) and build meaningful relationships while growing in faith. Find groups for all ages and life stages." />
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">JSC Zones</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience authentic community and spiritual growth in small group settings where lasting friendships are formed
            </p>
            <Button 
              onClick={() => handleJoinGroup('general')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg"
            >
              Find Your Zone
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join a JSC Zone?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              JSC Zones provide the perfect environment for spiritual growth and meaningful connections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-50 p-8 rounded-xl"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JSC Zones Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current JSC Zones</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find a zone that fits your schedule and life stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jscZones.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <img  
                  className="w-full h-48 object-cover"
                  alt={`${group.name} zone`}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{group.name}</h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{group.day}s</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{group.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{group.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 text-blue-600 mr-2" />
                      <span>Led by {group.leader}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-900">Focus Areas:</span>
                    <p className="text-sm text-blue-600">{group.focus}</p>
                  </div>

                  <Button 
                    onClick={() => handleJoinGroup(group.name)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                  >
                    Join This Zone
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How JSC Zones Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get connected and start growing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose a Zone",
                description: "Browse our available zones and find one that fits your schedule and interests"
              },
              {
                step: "2",
                title: "Attend a Meeting",
                description: "Visit a zone meeting to see if it's a good fit. No commitment required for your first visit"
              },
              {
                step: "3",
                title: "Join & Grow",
                description: "Become a regular member and start building relationships while growing in faith"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Connected?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a zone that fits your needs? We'd love to help you start a new one!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleJoinGroup('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Contact Us About Zones
              </Button>
              <Button 
                onClick={handleStartGroup}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
              >
                Start a New Zone
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default JSCZones;