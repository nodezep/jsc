const fs = require('fs').promises;
const path = require('path');

const CONTENT_FILE = path.join(__dirname, '../data/content.json');
const DATA_DIR = path.join(__dirname, '../data');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
};

// Default content structure
const defaultContent = {
  pages: {
    home: {
      hero: {
        slides: [
          {
            title: "Welcome to JSC",
            subtitle: "A place where faith meets community",
            cta: "Join Us This Sunday",
            link: "/contact"
          },
          {
            title: "Experience God's Love",
            subtitle: "Together we grow in faith and fellowship",
            cta: "Discover Our Ministries", 
            link: "/ministries"
          },
          {
            title: "Serving Our Community",
            subtitle: "Making a difference through love and action",
            cta: "Get Involved",
            link: "/ministries#outreach"
          }
        ]
      },
      services: [
        {
          title: "Sunday Worship",
          time: "9:00 AM",
          description: "Join us for uplifting worship and inspiring messages"
        },
        {
          title: "Sunday School",
          time: "10:30 AM", 
          description: "Bible study and fellowship for all ages"
        },
        {
          title: "Youth Service",
          time: "6:00 PM",
          description: "Dynamic worship designed for young people"
        }
      ],
      welcome: {
        title: "Welcome to Jerusalem Spiritual Centre",
        description: "We are a vibrant community of believers dedicated to spreading God's love and building lasting relationships through faith, worship, and service.",
        stats: [
          { number: "500+", label: "Active Members" },
          { number: "15", label: "Years of Service" },
          { number: "50+", label: "Community Programs" },
          { number: "12", label: "Ministries" }
        ]
      }
    },
    about: {
      title: "About Jerusalem Spiritual Centre",
      description: "Founded in 2009, Jerusalem Spiritual Centre has been a beacon of hope and faith in our community.",
      vision: "To be a Christ-centered community that transforms lives and impacts the world.",
      mission: "To glorify God by making disciples who love Jesus, love each other, and love the world.",
      values: [
        "Faith in Jesus Christ",
        "Community and Fellowship", 
        "Service and Outreach",
        "Biblical Teaching",
        "Prayer and Worship"
      ]
    }
  },
  events: [],
  sermons: [],
  ministries: [],
  contact: {
    address: "123 Faith Street, Community City, CC 12345",
    phone: "+1 (555) 123-4567",
    email: "info@jsc.org",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM"
  },
  settings: {
    siteName: "Jerusalem Spiritual Centre (JSC)",
    tagline: "A community of believers",
    primaryColor: "#2563eb",
    secondaryColor: "#dc2626"
  }
};

// Load content from file
const loadContent = async () => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(CONTENT_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create it with default content
    await saveContent(defaultContent);
    return defaultContent;
  }
};

// Save content to file
const saveContent = async (content) => {
  await ensureDataDir();
  await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));
};

module.exports = {
  loadContent,
  saveContent,
  defaultContent
};