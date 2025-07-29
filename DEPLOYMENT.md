# Lagos Artisans Finder - Deployment Guide

## 🚀 Vercel Deployment Instructions

### Files to Upload:
- index.html (main app file)
- styles.css (styling)
- app.js (main functionality)
- data.js (artisan data)
- manifest.json (PWA manifest)
- sw.js (service worker)
- netlify.toml (deployment config)
- .gitignore (ignore file)

### Deployment Steps:

1. **Visit Vercel.com**
   - Go to https://vercel.com
   - Click "Sign Up" or "Login"

2. **Import Project**
   - Click "New Project" or "Import Project"
   - Choose "Import Git Repository" or "Upload Files"

3. **Upload Method Options:**

   **Option A: Drag & Drop**
   - Drag the entire `lagos-artisans-finder` folder to Vercel
   - Vercel will automatically detect it as a static site

   **Option B: GitHub Integration**
   - First upload to GitHub
   - Then import from GitHub to Vercel

4. **Configuration:**
   - Framework Preset: "Other" or "Static Site"
   - Build Command: Leave empty (no build needed)
   - Output Directory: Leave empty (root directory)
   - Install Command: Leave empty

5. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Get your live URL: `https://your-project-name.vercel.app`

### Post-Deployment:
- Test PWA installation on mobile
- Share URL with users
- Monitor usage via Vercel dashboard

## 📱 PWA Features Available:
- Installable on mobile devices
- Offline functionality
- Push notifications ready
- App store submission ready

## 🌍 Live URL:
After deployment, your app will be available at:
`https://lagos-artisans-finder-[random].vercel.app`

## 🔧 Troubleshooting:
- If service worker doesn't work, ensure HTTPS is enabled (Vercel provides this automatically)
- If manifest doesn't load, check file paths are correct
- For any issues, check Vercel deployment logs
