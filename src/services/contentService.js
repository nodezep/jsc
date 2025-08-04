const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3001/api';

class ContentService {
  async fetchContent() {
    try {
      const response = await fetch(`${API_BASE_URL}/content`);
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Failed to fetch content:', error);
      return null;
    }
  }

  async fetchPageContent(page) {
    try {
      const content = await this.fetchContent();
      return content?.pages?.[page] || null;
    } catch (error) {
      console.error(`Failed to fetch ${page} content:`, error);
      return null;
    }
  }

  async fetchEvents() {
    try {
      const content = await this.fetchContent();
      return content?.events || [];
    } catch (error) {
      console.error('Failed to fetch events:', error);
      return [];
    }
  }

  async fetchSermons() {
    try {
      const content = await this.fetchContent();
      return content?.sermons || [];
    } catch (error) {
      console.error('Failed to fetch sermons:', error);
      return [];
    }
  }

  async fetchSettings() {
    try {
      const content = await this.fetchContent();
      return content?.settings || {};
    } catch (error) {
      console.error('Failed to fetch settings:', error);
      return {};
    }
  }

  async fetchContactInfo() {
    try {
      const content = await this.fetchContent();
      return content?.contact || {};
    } catch (error) {
      console.error('Failed to fetch contact info:', error);
      return {};
    }
  }

  // Default fallback content for when API is not available
  getDefaultContent() {
    return {
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
  }
}

export const contentService = new ContentService();
export default contentService;