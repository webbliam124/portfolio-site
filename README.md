# A and K Blinds - Official Website

Professional website for **A and K Blinds**, a leading upholstery and custom blinds manufacturer based in Krugersdorp, South Africa.

**Live Site:** [https://aandk.co.za](https://aandk.co.za)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [SEO Implementation](#seo-implementation)
- [Deployment](#deployment)
- [Development](#development)
- [Contact Form](#contact-form)
- [Business Information](#business-information)

---

## Overview

A and K Blinds is a family-owned business founded by William Webb, offering:
- **Upholstery Services**: Furniture reupholstery, recliner servicing, lounge suite alterations, bed boxes & headboards, furniture repairs, leather repairs, dining chairs, and office chairs
- **Blinds Division**: Vertical blinds, venetian blinds, wooden blinds, roller blinds, patio blinds, outdoor blinds, repairs & servicing, and spare parts

All manufacturing is done in-house at their Krugersdorp workshop, serving customers across South Africa.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 7** | Build Tool & Dev Server |
| **React Router 7** | Client-side Routing |
| **Motion (Framer Motion)** | Animations |
| **react-helmet-async** | SEO Meta Tags |
| **Web3Forms** | Contact Form Handling |
| **Cloudflare Pages** | Hosting & CDN |

---

## Project Structure

```
portfolio-site/
├── public/
│   ├── favicon.png
│   ├── logo.png
│   ├── logo-white.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/
│   │   ├── projects/          # Gallery images
│   │   └── ...                 # Hero & feature images
│   └── videos/                 # Background videos
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation & mega menu
│   │   ├── Header.css
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Footer.css
│   │   ├── SEO.jsx            # Reusable SEO component
│   │   └── WhatsAppButton.jsx # Floating WhatsApp CTA
│   ├── data/
│   │   ├── services.js        # Service definitions
│   │   └── schema.js          # JSON-LD structured data
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Upholstery.jsx     # Upholstery services overview
│   │   ├── Blinds.jsx         # Blinds services overview
│   │   ├── ServiceDetail.jsx  # Individual service pages
│   │   ├── Gallery.jsx        # Project portfolio
│   │   ├── About.jsx          # Company information
│   │   └── Contact.jsx        # Contact form & details
│   ├── App.jsx                # Router configuration
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles & variables
├── index.html                 # HTML template with fallback meta
├── package.json
├── vite.config.js
└── README.md
```

---

## Features

### Navigation
- Responsive header with mega menu dropdowns
- Mobile-optimized hamburger menu
- Smooth scroll behaviour

### Pages
- **Home**: Hero video, value propositions, service overview, featured projects, about teaser, contact information
- **Upholstery**: Overview of 8 upholstery services with process steps
- **Blinds**: Overview of 8 blind types/services with key differentiators
- **Service Detail**: Individual pages for all 16 services with FAQs
- **Gallery**: Filterable portfolio with lightbox viewer
- **About**: Company story, team section, values, showroom information
- **Contact**: Multi-channel contact options with enquiry form

### UI/UX
- Motion animations on scroll
- Video backgrounds
- Responsive design (mobile-first)
- Accessible navigation
- WhatsApp floating button

---

## SEO Implementation

### Meta Tags
- Dynamic page titles and descriptions via `react-helmet-async`
- Open Graph tags for social sharing
- Twitter Card meta tags
- Geographic meta tags for local SEO
- Canonical URLs

### Structured Data (JSON-LD)
- **LocalBusiness** schema with full business details
- **Service** schema for each service page
- **FAQPage** schema for service FAQs
- **BreadcrumbList** schema for navigation

### Technical SEO
- `sitemap.xml` with all 22 pages
- `robots.txt` for crawler directives
- Semantic HTML structure
- Fast page loads via Vite optimization

### Target Keywords
**Primary (Krugersdorp focus):**
- blinds krugersdorp
- upholstery krugersdorp
- blind repairs krugersdorp
- furniture reupholstery krugersdorp

**Secondary (National):**
- custom blinds south africa
- furniture upholstery south africa
- vertical blinds gauteng

---

## Deployment

### Hosting
The site is hosted on **Cloudflare Pages** with automatic deployments from GitHub.

### Custom Domain
- Primary: `aandk.co.za`
- Alias: `www.aandk.co.za`

### Deploy Commands
```bash
# Build for production
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=aandk
```

### Environment
- Node.js 18+
- npm 9+

---

## Development

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Server
Runs at `http://localhost:5173` with hot module replacement.

### Adding Services
Services are defined in `/src/data/services.js`. Each service includes:
- `id`: URL slug
- `name`: Display name
- `shortDesc`: Card description
- `description`: Full page content
- `benefits`: Array of key benefits
- `image`: Hero image URL
- `faqs`: Array of Q&A objects

---

## Contact Form

### Provider
The contact form uses [Web3Forms](https://web3forms.com/) for serverless form handling.

### Configuration
- Access key stored in `Contact.jsx`
- Submissions sent to: `sales@aandkblinds.co.za`
- File attachments supported (max 5MB)
- Reply-to set to submitter's email

### Form Fields
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Service Type (required)
- Message/Project Details (required)
- Photo Attachment (optional)

---

## Business Information

### A and K Blinds

**Address:**
172 Voortrekker Rd
Kenmare, Krugersdorp
1724, South Africa

**Contact:**
- Phone: 011 955 4085
- WhatsApp: +27 82 859 2123
- Email: sales@aandkblinds.co.za

**Hours:**
Monday - Friday: 08:00 - 16:00

**Services:**
- Upholstery (8 services)
- Blinds (8 products/services)

---

## License

Copyright 2024-2026 A and K Blinds. All rights reserved.

---

## Credits

- **Design & Development**: Built with React and Vite
- **Hosting**: Cloudflare Pages
- **Forms**: Web3Forms
- **Fonts**: DM Sans (Google Fonts)
