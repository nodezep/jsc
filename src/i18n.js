import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About Us',
            ministries: 'Ministries',
            jscZones: 'JSC Zones',
            events: 'Events',
            sermons: 'Sermons',
            contact: 'Contact',
            donate: 'Donate',
            churchName: 'Jerusalem Spiritual Centre (JSC)'
          },
          footer: {
            churchName: 'Jerusalem Spiritual Centre (JSC)',
            description: "A community of believers dedicated to spreading God's love and building lasting relationships through faith, worship, and service.",
            quickLinks: 'Quick Links',
            serviceTimes: 'Service Times',
            sundayWorship: 'Sunday Worship',
            sundaySchool: 'Sunday School',
            wednesdayPrayer: 'Wednesday Prayer',
            fridayYouth: 'Friday Youth',
            contactUs: 'Contact Us',
            copyright: '© 2024 Jerusalem Spiritual Centre (JSC). All rights reserved. Built with love and faith.'
          },
          home: {
            helmet: {
              title: 'Jerusalem Spiritual Centre (JSC) - Welcome Home',
              description: "Welcome to Jerusalem Spiritual Centre (JSC) - A community of believers dedicated to spreading God's love. Join us for Sunday worship at 9:00 AM."
            },
            hero: {
              slide1: { title: 'Welcome to JSC', subtitle: 'A place where faith meets community', cta: 'Join Us This Sunday' },
              slide2: { title: "Experience God's Love", subtitle: 'Together we grow in faith and fellowship', cta: 'Discover Our Ministries' },
              slide3: { title: 'Serving Our Community', subtitle: 'Making a difference through love and action', cta: 'Get Involved' }
            },
            services: {
              heading: 'Join Us for Worship',
              subheading: 'Experience meaningful worship, inspiring messages, and genuine community every week',
              service1: { title: 'Sunday Worship', description: 'Join us for inspiring worship and biblical teaching' },
              service2: { title: 'Sunday School', description: 'Bible study for all ages and spiritual growth' },
              service3: { title: 'Wednesday Prayer', description: 'Midweek prayer and fellowship gathering' }
            },
            children: {
              heading: "JSC Kids Ministry",
              description: "A fun, safe, and engaging environment where children learn about God's love through age-appropriate lessons, worship, and activities. We are passionate about nurturing the next generation of believers.",
              cta: "Learn More About JSC Kids"
            },
            mission: {
              heading: 'Our Mission',
              description: "To create a welcoming community where people can encounter God's love, grow in their faith, and make a positive impact in the world through service and compassion.",
              value1: 'Love', value2: 'Community', value3: 'Growth'
            },
            events: {
              heading: 'Upcoming Events',
              subheading: 'Join us for these special gatherings and activities'
            },
            sermon: {
              heading: 'Latest Sermon',
              subheading: 'Watch our most recent message',
              title: 'Walking in Faith',
              description: "Discover how to strengthen your faith journey and trust in God's plan for your life."
            },
            newsletter: {
              heading: 'Stay Connected',
              subheading: 'Subscribe to our newsletter for updates on events, sermons, and community news',
              placeholder: 'Enter your email', cta: 'Subscribe'
            }
          },
          about: {
            helmet: { title: 'About Us - Jerusalem Spiritual Centre (JSC)', description: "Learn about Jerusalem Spiritual Centre (JSC)'s mission, values, and leadership." },
            hero: { title: 'About Jerusalem Spiritual Centre (JSC)', subtitle: 'A community of believers united in faith, committed to love, and dedicated to serving God and our neighbors' },
            story: {
              heading: 'Our Story',
              p1: "Jerusalem Spiritual Centre (JSC) was founded in 1985 with a simple vision: to create a place where people could experience God's love and grow in their faith journey together.",
              p2: "What started as a small gathering of families has grown into a vibrant community of over 500 members, all united by our shared commitment to following Jesus Christ.",
              p3: "Throughout our history, we've remained dedicated to biblical teaching, authentic worship, and serving our community with compassion and grace."
            },
            values: {
              heading: 'Our Core Values', subheading: 'These fundamental principles guide everything we do as a church community',
              love: { title: 'Love', description: "We believe in showing God's unconditional love to everyone we meet" },
              community: { title: 'Community', description: 'Building strong relationships and supporting one another in faith' },
              truth: { title: 'Truth', description: 'Grounded in biblical truth and committed to spiritual growth' },
              service: { title: 'Service', description: 'Making a positive impact in our community and beyond' }
            },
            leadership: {
              heading: 'Our Leadership', subheading: 'Meet the dedicated leaders who guide our church with wisdom, compassion, and faith',
              pastor1: { name: 'Pastor John Smith', role: 'Senior Pastor', description: "Leading our church with wisdom and compassion for over 15 years" },
              pastor2: { name: 'Pastor Sarah Johnson', role: 'Associate Pastor', description: 'Passionate about youth ministry and community outreach programs' },
              leader1: { name: 'David Wilson', role: 'Worship Leader', description: 'Creating inspiring worship experiences that connect hearts to God' }
            },
            mission: {
              heading: 'Our Mission',
              statement: "To know Christ and make Him known by creating a welcoming community where people can encounter God's love, grow in their faith, and make a positive impact in the world.",
              visionHeading: 'Our Vision',
              visionStatement: "To be a church that transforms lives and communities through the power of God's love, creating disciples who live out their faith with authenticity and purpose."
            }
          },
          ministries: {
            helmet: { title: 'Ministries - Jerusalem Spiritual Centre (JSC)', description: "Discover the various ministries at Jerusalem Spiritual Centre (JSC) including youth, children's, worship, and outreach." },
            hero: { title: 'Our Ministries', subtitle: 'Discover opportunities to grow in faith, serve others, and build meaningful relationships in our church community.' },
            cta: { title: 'Find Your Place to Serve', subtitle: "God has given each of us unique gifts and talents. Discover how you can use yours to make a difference in our church and community.", button: "Contact Us About Serving" },
            leadership: { heading: 'Ministry Leadership', subheading: 'Our dedicated ministry leaders are here to help you grow in faith and find your place in our community' },
            getInvolved: 'Get Involved',
            whatWeOffer: 'What We Offer:',
            adults: { title: "Adult Ministry", description: "Bible studies, fellowship groups, and spiritual growth opportunities for adults of all ages", features: ["Weekly Bible Studies", "Men's & Women's Groups", "Marriage Enrichment", "Senior Saints"] },
            youth: { title: "Youth Ministry", description: "Engaging programs for teenagers to grow in faith while building lasting friendships", features: ["Friday Night Youth", "Summer Camps", "Mission Trips", "Youth Worship Team"] },
            children: { title: "Children's Ministry", description: "Fun and interactive programs that teach children about God's love in age-appropriate ways", features: ["Sunday School", "VBS", "Children's Choir", "Family Events"] },
            worship: { title: "Worship Ministry", description: "Creating meaningful worship experiences through music, arts, and creative expression", features: ["Worship Team", "Choir", "Technical Arts", "Creative Arts"] },
            discipleship: { title: "Discipleship", description: "Helping believers grow deeper in their relationship with Christ through mentoring and study", features: ["Mentorship Program", "New Member Classes", "Leadership Training", "Small Groups"] },
            outreach: { title: "Outreach Ministry", description: "Serving our community and sharing God's love through practical acts of service", features: ["Food Bank", "Community Events", "Missions Support", "Volunteer Opportunities"] }
          },
          whatsapp: {
            title: 'Chat with us on WhatsApp',
            message: "Hello! I'd like to know more about Jerusalem Spiritual Centre (JSC)."
          }
        }
      },
      sw: {
        translation: {
          nav: {
            home: 'Mwanzo', about: 'Kutuhusu', ministries: 'Huduma', jscZones: 'Kanda za JSC', events: 'Matukio', sermons: 'Mahubiri', contact: 'Mawasiliano', donate: 'Toa Sadaka', churchName: 'Jerusalem Spiritual Centre (JSC)'
          },
          footer: {
            churchName: 'Jerusalem Spiritual Centre (JSC)',
            description: 'Jumuiya ya waumini waliojitolea kueneza upendo wa Mungu na kujenga uhusiano wa kudumu kupitia imani, ibada, na huduma.',
            quickLinks: 'Viungo vya Haraka', serviceTimes: 'Nyakati za Ibada', sundayWorship: 'Ibada ya Jumapili', sundaySchool: 'Shule ya Jumapili',
            wednesdayPrayer: 'Maombi ya Jumatano', fridayYouth: 'Vijana Ijumaa', contactUs: 'Wasiliana Nasi', copyright: '© 2024 Jerusalem Spiritual Centre (JSC). Haki zote zimehifadhiwa. Imejengwa kwa upendo na imani.'
          },
          home: {
            helmet: { title: 'Jerusalem Spiritual Centre (JSC) - Karibu Nyumbani', description: 'Karibu Jerusalem Spiritual Centre (JSC) - Jumuiya ya waumini waliojitolea kueneza upendo wa Mungu. Jiunge nasi kwa ibada ya Jumapili saa 3:00 asubuhi.' },
            hero: {
              slide1: { title: 'Karibu JSC', subtitle: 'Mahali ambapo imani hukutana na jumuiya', cta: 'Jiunge Nasi Jumapili Hii' },
              slide2: { title: 'Pata Uzoefu wa Upendo wa Mungu', subtitle: 'Pamoja tunakua katika imani na ushirika', cta: 'Gundua Huduma Zetu' },
              slide3: { title: 'Kuhudumia Jamii Yetu', subtitle: 'Kuleta mabadiliko kupitia upendo na vitendo', cta: 'Shiriki' }
            },
            services: {
              heading: 'Jiunge Nasi kwa Ibada', subheading: 'Pata uzoefu wa ibada yenye maana, ujumbe unaovutia, na jumuiya ya kweli kila wiki',
              service1: { title: 'Ibada ya Jumapili', description: 'Jiunge nasi kwa ibada ya kusisimua na mafundisho ya kibiblia' },
              service2: { title: 'Shule ya Jumapili', description: 'Mafunzo ya Biblia kwa rika zote na ukuaji wa kiroho' },
              service3: { title: 'Maombi ya Jumatano', description: 'Mkutano wa maombi na ushirika wa katikati ya juma' }
            },
            children: {
              heading: "Huduma ya Watoto ya JSC", description: "Mazingira ya kufurahisha, salama, na ya kuvutia ambapo watoto hujifunza kuhusu upendo wa Mungu kupitia masomo yanayolingana na umri wao, ibada, na shughuli mbalimbali. Tuna shauku ya kulea kizazi kijacho cha waumini.", cta: "Jifunze Zaidi Kuhusu Watoto wa JSC"
            },
            mission: {
              heading: 'Dhamira Yetu', description: 'Kuunda jumuiya karibishi ambapo watu wanaweza kukutana na upendo wa Mungu, kukua katika imani yao, na kuleta athari chanya duniani kupitia huduma na huruma.',
              value1: 'Upendo', value2: 'Jumuiya', value3: 'Ukuaji'
            },
            events: { heading: 'Matukio Yajayo', subheading: 'Jiunge nasi kwa mikusanyiko na shughuli hizi maalum' },
            sermon: {
              heading: 'Hubiri la Hivi Karibuni', subheading: 'Tazama ujumbe wetu wa hivi karibuni', title: 'Kutembea kwa Imani', description: 'Gundua jinsi ya kuimarisha safari yako ya imani na kumtumaini Mungu katika mpango wake kwa maisha yako.'
            },
            newsletter: { heading: 'Endelea Kuunganishwa', subheading: 'Jiandikishe kwa jarida letu kwa sasisho juu ya matukio, mahubiri, na habari za jamii', placeholder: 'Ingiza barua pepe yako', cta: 'Jiandikishe' }
          },
          about: {
            helmet: { title: 'Kutuhusu - Jerusalem Spiritual Centre (JSC)', description: "Jifunze kuhusu dhamira, maadili, na uongozi wa Jerusalem Spiritual Centre (JSC). Gundua kujitolea kwetu kwa imani, jamii, na huduma." },
            hero: { title: 'Kuhusu Jerusalem Spiritual Centre (JSC)', subtitle: 'Jumuiya ya waumini waloungana katika imani, waliojitolea kupenda, na waliojitolea kumtumikia Mungu na jirani zetu' },
            story: {
              heading: 'Hadithi Yetu',
              p1: "Jerusalem Spiritual Centre (JSC) ilianzishwa mwaka 1985 na maono rahisi: kuunda mahali ambapo watu wanaweza kupata upendo wa Mungu na kukua pamoja katika safari yao ya imani.",
              p2: "Kilichoanza kama mkusanyiko mdogo wa familia kimekua na kuwa jumuiya hai ya zaidi ya wanachama 500, wote wakiunganishwa na kujitolea kwetu kumfuata Yesu Kristo.",
              p3: "Katika historia yetu yote, tumebaki tumejitolea kwa mafundisho ya kibiblia, ibada ya kweli, na kuihudumia jamii yetu kwa huruma na neema."
            },
            values: {
              heading: 'Maadili Yetu ya Msingi', subheading: 'Kanuni hizi za msingi huongoza kila kitu tunachofanya kama jumuiya ya kanisa',
              love: { title: 'Upendo', description: "Tunaamini katika kuonyesha upendo usio na masharti wa Mungu kwa kila mtu tunayekutana naye" },
              community: { title: 'Jumuiya', description: 'Kujenga uhusiano thabiti na kusaidiana katika imani' },
              truth: { title: 'Ukweli', description: 'Kujikita katika ukweli wa kibiblia na kujitolea kwa ukuaji wa kiroho' },
              service: { title: 'Huduma', description: 'Kuleta athari chanya katika jamii yetu na kwingineko' }
            },
            leadership: {
              heading: 'Uongozi Wetu', subheading: 'Kutana na viongozi waliojitolea wanaoongoza kanisa letu kwa hekima, huruma, na imani',
              pastor1: { name: 'Mchungaji John Smith', role: 'Mchungaji Mkuu', description: "Kuongoza kanisa letu kwa hekima na huruma kwa zaidi ya miaka 15" },
              pastor2: { name: 'Mchungaji Sarah Johnson', role: 'Mchungaji Msaidizi', description: 'Mwenye shauku ya huduma ya vijana na programu za kufikia jamii' },
              leader1: { name: 'David Wilson', role: 'Kiongozi wa Ibada', description: 'Kuunda uzoefu wa ibada unaovutia unaounganisha mioyo na Mungu' }
            },
            mission: {
              heading: 'Dhamira Yetu', statement: "Kumjua Kristo na kumfanya ajulikane kwa kuunda jumuiya karibishi ambapo watu wanaweza kukutana na upendo wa Mungu, kukua katika imani yao, na kuleta athari chanya duniani.",
              visionHeading: 'Maono Yetu', visionStatement: "Kuwa kanisa linalobadilisha maisha na jamii kupitia nguvu ya upendo wa Mungu, na kuunda wanafunzi wanaoishi imani yao kwa uhalisi na kusudi."
            }
          },
          ministries: {
            helmet: { title: 'Huduma - Jerusalem Spiritual Centre (JSC)', description: "Gundua huduma mbalimbali katika Jerusalem Spiritual Centre (JSC) ikiwa ni pamoja na vijana, watoto, ibada, na ufikiaji." },
            hero: { title: 'Huduma Zetu', subtitle: 'Gundua fursa za kukua katika imani, kuwahudumia wengine, na kujenga uhusiano wenye maana katika jumuiya ya kanisa letu.' },
            cta: { title: 'Tafuta Nafasi Yako ya Kuhudumu', subtitle: "Mungu amempa kila mmoja wetu vipawa na talanta za kipekee. Gundua jinsi unavyoweza kutumia vyako kuleta mabadiliko katika kanisa letu na jamii.", button: "Wasiliana Nasi Kuhusu Kuhudumu" },
            leadership: { heading: 'Uongozi wa Huduma', subheading: 'Viongozi wetu wa huduma waliojitolea wako hapa kukusaidia kukua katika imani na kupata nafasi yako katika jamii yetu' },
            getInvolved: 'Shiriki',
            whatWeOffer: 'Tunachotoa:',
            adults: { title: "Huduma ya Watu Wazima", description: "Mafunzo ya Biblia, vikundi vya ushirika, na fursa za ukuaji wa kiroho kwa watu wazima wa rika zote", features: ["Mafunzo ya Biblia ya Kila Wiki", "Vikundi vya Wanaume na Wanawake", "Uboreshaji wa Ndoa", "Watakatifu Wazee"] },
            youth: { title: "Huduma ya Vijana", description: "Programu za kuvutia kwa vijana kukua katika imani huku wakijenga urafiki wa kudumu", features: ["Vijana Usiku wa Ijumaa", "Kambi za Kiangazi", "Safari za Kimisionari", "Timu ya Ibada ya Vijana"] },
            children: { title: "Huduma ya Watoto", description: "Programu za kufurahisha na mwingiliano zinazowafundisha watoto kuhusu upendo wa Mungu kwa njia zinazolingana na umri wao", features: ["Shule ya Jumapili", "VBS", "Kwaya ya Watoto", "Matukio ya Familia"] },
            worship: { title: "Huduma ya Ibada", description: "Kuunda uzoefu wa ibada wenye maana kupitia muziki, sanaa, na usemi wa ubunifu", features: ["Timu ya Ibada", "Kwaya", "Sanaa za Ufundi", "Sanaa za Ubunifu"] },
            discipleship: { title: "Uanafunzi", description: "Kuwasaidia waumini kukua kwa undani zaidi katika uhusiano wao na Kristo kupitia ushauri na masomo", features: ["Programu ya Ushauri", "Madarasa ya Wanachama Wapya", "Mafunzo ya Uongozi", "Vikundi Vidogo"] },
            outreach: { title: "Huduma ya Ufikiaji", description: "Kuhudumia jamii yetu na kushiriki upendo wa Mungu kupitia matendo ya huduma", features: ["Benki ya Chakula", "Matukio ya Jamii", "Usaidizi wa Misheni", "Fursa za Kujitolea"] }
          },
          whatsapp: {
            title: 'Ongea nasi kwenye WhatsApp',
            message: "Habari! Ningependa kujua zaidi kuhusu Jerusalem Spiritual Centre (JSC)."
          }
        }
      }
    }
  });

export default i18n;