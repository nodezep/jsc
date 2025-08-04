const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { loadContent, saveContent } = require('../models/content');
const router = express.Router();

// Get all content
router.get('/', async (req, res) => {
  try {
    const content = await loadContent();
    res.json(content);
  } catch (error) {
    console.error('Error loading content:', error);
    res.status(500).json({ error: 'Failed to load content' });
  }
});

// Update page content
router.put('/pages/:page', authenticateToken, async (req, res) => {
  try {
    const { page } = req.params;
    const updates = req.body;
    
    const content = await loadContent();
    
    if (!content.pages[page]) {
      return res.status(404).json({ error: 'Page not found' });
    }
    
    content.pages[page] = { ...content.pages[page], ...updates };
    await saveContent(content);
    
    res.json({ success: true, page: content.pages[page] });
  } catch (error) {
    console.error('Error updating page:', error);
    res.status(500).json({ error: 'Failed to update page' });
  }
});

// Add new event
router.post('/events', authenticateToken, async (req, res) => {
  try {
    const event = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...req.body
    };
    
    const content = await loadContent();
    content.events.push(event);
    await saveContent(content);
    
    res.json({ success: true, event });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: 'Failed to add event' });
  }
});

// Update event
router.put('/events/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const content = await loadContent();
    const eventIndex = content.events.findIndex(e => e.id === id);
    
    if (eventIndex === -1) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    content.events[eventIndex] = { ...content.events[eventIndex], ...updates };
    await saveContent(content);
    
    res.json({ success: true, event: content.events[eventIndex] });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Failed to update event' });
  }
});

// Delete event
router.delete('/events/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const content = await loadContent();
    content.events = content.events.filter(e => e.id !== id);
    await saveContent(content);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

// Add new sermon
router.post('/sermons', authenticateToken, async (req, res) => {
  try {
    const sermon = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...req.body
    };
    
    const content = await loadContent();
    content.sermons.push(sermon);
    await saveContent(content);
    
    res.json({ success: true, sermon });
  } catch (error) {
    console.error('Error adding sermon:', error);
    res.status(500).json({ error: 'Failed to add sermon' });
  }
});

// Update sermon
router.put('/sermons/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const content = await loadContent();
    const sermonIndex = content.sermons.findIndex(s => s.id === id);
    
    if (sermonIndex === -1) {
      return res.status(404).json({ error: 'Sermon not found' });
    }
    
    content.sermons[sermonIndex] = { ...content.sermons[sermonIndex], ...updates };
    await saveContent(content);
    
    res.json({ success: true, sermon: content.sermons[sermonIndex] });
  } catch (error) {
    console.error('Error updating sermon:', error);
    res.status(500).json({ error: 'Failed to update sermon' });
  }
});

// Delete sermon
router.delete('/sermons/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const content = await loadContent();
    content.sermons = content.sermons.filter(s => s.id !== id);
    await saveContent(content);
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting sermon:', error);
    res.status(500).json({ error: 'Failed to delete sermon' });
  }
});

// Update contact information
router.put('/contact', authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    
    const content = await loadContent();
    content.contact = { ...content.contact, ...updates };
    await saveContent(content);
    
    res.json({ success: true, contact: content.contact });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Update site settings
router.put('/settings', authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    
    const content = await loadContent();
    content.settings = { ...content.settings, ...updates };
    await saveContent(content);
    
    res.json({ success: true, settings: content.settings });
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

module.exports = router;