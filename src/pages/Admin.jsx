import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  FileText, 
  Calendar, 
  Users, 
  ImageIcon,
  LogOut,
  Save,
  Plus,
  Edit,
  Trash2,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [content, setContent] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Check authentication on component mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
        await loadContent();
      } else {
        localStorage.removeItem('admin_token');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('admin_token');
    }
    
    setIsLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginForm)
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('admin_token', data.token);
        setIsAuthenticated(true);
        await loadContent();
        toast({
          title: "Login successful",
          description: "Welcome to the admin panel!"
        });
      } else {
        toast({
          title: "Login failed",
          description: data.error || "Invalid credentials",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: "Network error. Please try again.",
        variant: "destructive"
      });
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setContent(null);
    navigate('/');
  };

  const loadContent = async () => {
    try {
      const response = await fetch('/api/content');
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      }
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  };

  const updateContent = async (endpoint, data) => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/content/${endpoint}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        await loadContent();
        toast({
          title: "Success",
          description: "Content updated successfully!"
        });
        return true;
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      console.error('Update error:', error);
      toast({
        title: "Update failed",
        description: "Failed to update content. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
          <title>Admin Login - JSC</title>
        </Helmet>
        
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Panel Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to manage website content
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  required
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Admin Panel - JSC</title>
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">JSC Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-blue-600 hover:text-blue-700">
                View Website
              </Link>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-6 w-full mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="pages" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Pages
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="sermons" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Sermons
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Media
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardTab content={content} />
          </TabsContent>

          <TabsContent value="pages">
            <PagesTab content={content} updateContent={updateContent} />
          </TabsContent>

          <TabsContent value="events">
            <EventsTab content={content} updateContent={updateContent} />
          </TabsContent>

          <TabsContent value="sermons">
            <SermonsTab content={content} updateContent={updateContent} />
          </TabsContent>

          <TabsContent value="media">
            <MediaTab />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab content={content} updateContent={updateContent} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Dashboard Tab Component
const DashboardTab = ({ content }) => {
  if (!content) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Events</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{content.events?.length || 0}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Sermons</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{content.sermons?.length || 0}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pages</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Object.keys(content.pages || {}).length}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Site Status</CardTitle>
          <Settings className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">Active</div>
        </CardContent>
      </Card>
    </div>
  );
};

// Pages Tab Component
const PagesTab = ({ content, updateContent }) => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    if (content?.pages?.[selectedPage]) {
      setPageData(content.pages[selectedPage]);
    }
  }, [content, selectedPage]);

  const handleSave = async () => {
    await updateContent(`pages/${selectedPage}`, pageData);
  };

  const updateField = (field, value) => {
    setPageData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!content) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Page Content Management</h2>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Page Selector */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Pages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.keys(content.pages || {}).map(page => (
                <Button
                  key={page}
                  variant={selectedPage === page ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedPage(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Content Editor */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Edit {selectedPage.charAt(0).toUpperCase() + selectedPage.slice(1)} Page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedPage === 'home' && (
                <HomePageEditor pageData={pageData} updateField={updateField} />
              )}
              {selectedPage === 'about' && (
                <AboutPageEditor pageData={pageData} updateField={updateField} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Home Page Editor Component
const HomePageEditor = ({ pageData, updateField }) => {
  const updateHeroSlide = (index, field, value) => {
    const newSlides = [...(pageData.hero?.slides || [])];
    newSlides[index] = { ...newSlides[index], [field]: value };
    updateField('hero', { ...pageData.hero, slides: newSlides });
  };

  return (
    <div className="space-y-6">
      {/* Hero Slides */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Hero Slides</h3>
        {pageData.hero?.slides?.map((slide, index) => (
          <div key={index} className="border rounded-lg p-4 mb-4 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Slide {index + 1}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={slide.title || ''}
                  onChange={(e) => updateHeroSlide(index, 'title', e.target.value)}
                />
              </div>
              <div>
                <Label>Link</Label>
                <Input
                  value={slide.link || ''}
                  onChange={(e) => updateHeroSlide(index, 'link', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label>Subtitle</Label>
              <Textarea
                value={slide.subtitle || ''}
                onChange={(e) => updateHeroSlide(index, 'subtitle', e.target.value)}
                rows={2}
              />
            </div>
            <div>
              <Label>Call to Action Text</Label>
              <Input
                value={slide.cta || ''}
                onChange={(e) => updateHeroSlide(index, 'cta', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Welcome Section</h3>
        <div className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              value={pageData.welcome?.title || ''}
              onChange={(e) => updateField('welcome', { ...pageData.welcome, title: e.target.value })}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              value={pageData.welcome?.description || ''}
              onChange={(e) => updateField('welcome', { ...pageData.welcome, description: e.target.value })}
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Editor Component
const AboutPageEditor = ({ pageData, updateField }) => {
  return (
    <div className="space-y-6">
      <div>
        <Label>Page Title</Label>
        <Input
          value={pageData.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
        />
      </div>
      <div>
        <Label>Description</Label>
        <Textarea
          value={pageData.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          rows={4}
        />
      </div>
      <div>
        <Label>Vision Statement</Label>
        <Textarea
          value={pageData.vision || ''}
          onChange={(e) => updateField('vision', e.target.value)}
          rows={3}
        />
      </div>
      <div>
        <Label>Mission Statement</Label>
        <Textarea
          value={pageData.mission || ''}
          onChange={(e) => updateField('mission', e.target.value)}
          rows={3}
        />
      </div>
    </div>
  );
};

// Events Tab Component
const EventsTab = ({ content, updateContent }) => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (content?.events) {
      setEvents(content.events);
    }
  }, [content]);

  const handleAddEvent = async (eventData) => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/content/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });

      if (response.ok) {
        const data = await response.json();
        setEvents(prev => [...prev, data.event]);
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Failed to add event:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/content/events/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setEvents(prev => prev.filter(e => e.id !== eventId));
      }
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Events Management</h2>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {showAddForm && (
        <EventForm 
          onSubmit={handleAddEvent}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="text-lg">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{event.date}</p>
              <p className="text-sm mb-4">{event.description}</p>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditingEvent(event)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Event Form Component
const EventForm = ({ event = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: event.title || '',
    description: event.description || '',
    date: event.date || '',
    time: event.time || '',
    location: event.location || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.id ? 'Edit Event' : 'Add New Event'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Date</Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>
            <div>
              <Label>Time</Label>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>
          <div>
            <Label>Location</Label>
            <Input
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
          <div className="flex space-x-2">
            <Button type="submit">Save Event</Button>
            <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

// Sermons Tab Component
const SermonsTab = ({ content, updateContent }) => {
  // Similar implementation to EventsTab but for sermons
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Sermons Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Sermon
        </Button>
      </div>
      <div className="text-center py-12 text-gray-500">
        Sermons management functionality coming soon...
      </div>
    </div>
  );
};

// Media Tab Component
const MediaTab = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/media/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setFiles(prev => [...prev, data.file]);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
    
    setUploading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Media Management</h2>
        <div>
          <input
            type="file"
            onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0])}
            style={{ display: 'none' }}
            id="file-upload"
            accept="image/*,.pdf,.doc,.docx"
          />
          <Button asChild disabled={uploading}>
            <label htmlFor="file-upload">
              <Upload className="w-4 h-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload File'}
            </label>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {files.map(file => (
          <Card key={file.filename}>
            <CardContent className="p-3">
              <div className="aspect-square bg-gray-100 rounded flex items-center justify-center mb-2">
                <ImageIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xs truncate">{file.originalName}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Settings Tab Component
const SettingsTab = ({ content, updateContent }) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    if (content?.settings) {
      setSettings(content.settings);
    }
  }, [content]);

  const handleSave = async () => {
    await updateContent('settings', settings);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Site Settings</h2>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Site Name</Label>
            <Input
              value={settings.siteName || ''}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
            />
          </div>
          <div>
            <Label>Tagline</Label>
            <Input
              value={settings.tagline || ''}
              onChange={(e) => setSettings({...settings, tagline: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Primary Color</Label>
              <Input
                type="color"
                value={settings.primaryColor || '#2563eb'}
                onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
              />
            </div>
            <div>
              <Label>Secondary Color</Label>
              <Input
                type="color"
                value={settings.secondaryColor || '#dc2626'}
                onChange={(e) => setSettings({...settings, secondaryColor: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;