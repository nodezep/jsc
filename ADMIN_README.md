# JSC Admin Panel

This admin panel allows you to manage all content on the church website without touching the source code.

## Features

- **Content Management**: Edit page content, hero slides, welcome sections
- **Events Management**: Add, edit, and delete church events
- **Sermons Management**: Manage sermon content and media
- **Media Upload**: Upload and manage images and documents
- **Site Settings**: Configure site name, colors, and contact information
- **Secure Authentication**: Admin login protection

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Servers

```bash
npm start
```

This will start both the frontend (port 5173) and backend API server (port 3001).

### 3. Access the Admin Panel

1. Open your browser and go to `http://localhost:5173/admin`
2. Login with the default credentials:
   - Username: `admin`
   - Password: `admin123`

**Important**: Change these credentials in the `.env` file for production!

### 4. Manage Content

Once logged in, you can:

- **Dashboard**: View statistics about your content
- **Pages**: Edit home page slides, welcome text, about page content
- **Events**: Add upcoming church events with dates, times, and descriptions
- **Sermons**: Manage sermon recordings and notes
- **Media**: Upload images and documents for use across the site
- **Settings**: Update site name, colors, and contact information

## Configuration

### Environment Variables

Update the `.env` file with your settings:

```env
PORT=3001
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_secure_password
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Content Storage

Content is stored in `server/data/content.json`. This file is automatically created with default content when the server first runs.

## Production Deployment

1. Update the `.env` file with production values
2. Set `NODE_ENV=production`
3. Run `npm run build` to build the frontend
4. Start the backend server with `npm run server`
5. Serve the built frontend files through your web server

## Content Structure

The admin panel manages content in the following structure:

```json
{
  "pages": {
    "home": {
      "hero": { "slides": [...] },
      "services": [...],
      "welcome": { "title": "", "description": "" }
    },
    "about": {
      "title": "",
      "description": "",
      "vision": "",
      "mission": "",
      "values": [...]
    }
  },
  "events": [...],
  "sermons": [...],
  "contact": { "address": "", "phone": "", "email": "" },
  "settings": { "siteName": "", "tagline": "", "colors": {...} }
}
```

## Security Notes

- Change default admin credentials immediately
- Use strong JWT secrets in production
- Consider implementing role-based access for multiple administrators
- Regular backup of content.json file is recommended

## Support

For technical support or questions about the admin panel, contact your web administrator.