import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Download, Calendar, Clock, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Sermons = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('all');
  const { toast } = useToast();

  const sermonSeries = [
    { id: 'all', name: 'All Sermons' },
    { id: 'walking-faith', name: 'Walking in Faith' },
    { id: 'love-action', name: 'Love in Action' },
    { id: 'easter-series', name: 'Easter Series' },
    { id: 'psalms-study', name: 'Psalms Study' }
  ];

  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "March 17, 2024",
      duration: "35 min",
      series: "walking-faith",
      description: "Discover how to strengthen your faith journey and trust in God's plan for your life.",
      thumbnail: "Pastor John Smith delivering sermon about faith",
      featured: true
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Sarah Johnson",
      date: "March 10, 2024",
      duration: "28 min",
      series: "walking-faith",
      description: "Understanding the importance of prayer in our daily walk with God.",
      thumbnail: "Pastor Sarah Johnson speaking about prayer"
    },
    {
      id: 3,
      title: "Serving Others with Joy",
      speaker: "Pastor John Smith",
      date: "March 3, 2024",
      duration: "32 min",
      series: "love-action",
      description: "How we can show God's love through acts of service and kindness.",
      thumbnail: "Pastor speaking about service and community"
    },
    {
      id: 4,
      title: "He is Risen",
      speaker: "Pastor John Smith",
      date: "March 31, 2024",
      duration: "40 min",
      series: "easter-series",
      description: "Celebrating the resurrection of Jesus Christ and what it means for us today.",
      thumbnail: "Easter sermon with cross and resurrection theme"
    },
    {
      id: 5,
      title: "Finding Peace in Chaos",
      speaker: "Guest Speaker Mike Davis",
      date: "February 25, 2024",
      duration: "30 min",
      series: "psalms-study",
      description: "Drawing from Psalm 23 to find God's peace in difficult times.",
      thumbnail: "Guest speaker delivering message about peace"
    },
    {
      id: 6,
      title: "Building Strong Relationships",
      speaker: "Pastor Sarah Johnson",
      date: "February 18, 2024",
      duration: "33 min",
      series: "love-action",
      description: "Biblical principles for healthy relationships in marriage, family, and friendship.",
      thumbnail: "Pastor Sarah speaking about relationships"
    },
    {
      id: 7,
      title: "God's Faithfulness",
      speaker: "Pastor John Smith",
      date: "February 11, 2024",
      duration: "37 min",
      series: "walking-faith",
      description: "Exploring how God's faithfulness sustains us through every season of life.",
      thumbnail: "Pastor John delivering message about God's faithfulness"
    },
    {
      id: 8,
      title: "The Heart of Worship",
      speaker: "Worship Pastor David Wilson",
      date: "February 4, 2024",
      duration: "25 min",
      series: "psalms-study",
      description: "Understanding what it means to worship God in spirit and truth.",
      thumbnail: "Worship pastor speaking about authentic worship"
    }
  ];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeries = selectedSeries === 'all' || sermon.series === selectedSeries;
    return matchesSearch && matchesSeries;
  });

  const handlePlaySermon = (sermonTitle) => {
    toast({
      title: "🚧 Sermon Player",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleDownloadSermon = (sermonTitle) => {
    toast({
      title: "🚧 Download Sermon",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Sermons - {t('nav.churchName')}</title>
        <meta name="description" content={`Listen to inspiring sermons from ${t('nav.churchName')}.`} />
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Sermons</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to inspiring messages that will encourage your faith and help you grow in your relationship with God
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-600">
                <Filter className="w-5 h-5 mr-2" />
                <span className="font-medium">Series:</span>
              </div>
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sermonSeries.map((series) => (
                  <option key={series.id} value={series.id}>
                    {series.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      {selectedSeries === 'all' && searchTerm === '' && (
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
                    alt="Featured sermon"
                   src="https://images.unsplash.com/photo-1573604253901-67bdb250d078" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button 
                      onClick={() => handlePlaySermon(sermons.find(s => s.featured)?.title)}
                      className="w-20 h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Latest Sermon
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {sermons.find(s => s.featured)?.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {sermons.find(s => s.featured)?.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{sermons.find(s => s.featured)?.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{sermons.find(s => s.featured)?.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">Speaker:</span>
                      <span>{sermons.find(s => s.featured)?.speaker}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => handlePlaySermon(sermons.find(s => s.featured)?.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Listen Now
                    </Button>
                    <Button 
                      onClick={() => handleDownloadSermon(sermons.find(s => s.featured)?.title)}
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold flex items-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Sermons Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSermons.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No sermons found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.filter(sermon => !sermon.featured || selectedSeries !== 'all' || searchTerm !== '').map((sermon, index) => (
                <motion.div
                  key={sermon.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="sermon-card bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      className="w-full h-48 object-cover"
                      alt={sermon.title}
                     src="https://images.unsplash.com/photo-1572129420970-3013277fbcaf" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => handlePlaySermon(sermon.title)}
                        className="w-16 h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {sermon.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {sermonSeries.find(s => s.id === sermon.series)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{sermon.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{sermon.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="font-semibold mr-2">Speaker:</span>
                        <span>{sermon.speaker}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handlePlaySermon(sermon.title)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Listen
                      </Button>
                      <Button 
                        onClick={() => handleDownloadSermon(sermon.title)}
                        variant="outline"
                        className="border-gray-300 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* YouTube Integration CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Watch on YouTube</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our YouTube channel to never miss a sermon and get notified when new messages are available.
            </p>
            <Button 
              onClick={() => handlePlaySermon('youtube-channel')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Visit Our YouTube Channel
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sermons;