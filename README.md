# Service Manager Web Application

## Overview

This is a web application built with **React** for managing and displaying services and blog posts. It connects to a **WordPress** instance (TasteWP temporary site) for dynamic content and uses Google reCAPTCHA v2 (frontend-only) to validate the contact form. The application is hosted live on **Vercel**.

---

## Live Demo

[Service Manager Live Demo](https://service-manager-psi.vercel.app)

---

## WordPress (TasteWP) Setup

1. Temporary WP URL: `https://zealousrake.s2-tastewp.com`
2. Admin credentials:
   - Username: `admin`
   - Password: `jfsl9-lssC4`
3. REST API Endpoints used:
   - Services: `https://zealousrake.s2-tastewp.com/wp-json/wp/v2/services?_embed`
   - Posts: `https://zealousrake.s2-tastewp.com/wp-json/wp/v2/posts?_embed`
4. To export SQL/XML data:
   - WP Admin → Tools → Export → Choose **All Content** → Download export file.

---

## Features

- Display dynamic services and blog posts fetched from WordPress REST API.  
- Search and filter functionality for services and blogs.  
- Responsive UI with Tailwind CSS.  
- Contact form with **frontend-only Google reCAPTCHA v2** verification.  
- Live deployment on Vercel.

---

## Running Locally

1. Clone the repo:

```bash
git clone https://github.com/Karanb2707/service-manager.git
cd service-manager/service-manager-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:5173 in your browser.


## Switching from Local JSON to WordPress

### Local JSON (for testing offline)
- `services.json` and `blogs.json` in the `public/` folder.  
- Uncomment the `fetch("/services.json")` or `fetch("/blogs.json")` in respective components.

### WordPress API
- Use the TasteWP endpoints listed above.  
- Comment out local JSON fetch if using WP.

---

## Deployment on Vercel

1. Connect your GitHub repository to Vercel.  
2. Build & output settings in Vercel:
   - **Build Command:** `npm install && npm run build`
   - **Output Directory:** `dist`
3. Deploy. The live URL will be accessible immediately.

---

## Security Headers (Planned/Implemented)

- All API calls use HTTPS endpoints.  
- Cross-Origin requests limited to WordPress REST API.  
- Frontend-only reCAPTCHA prevents basic spam submissions on contact form.  

> Note: Since backend verification is not implemented, reCAPTCHA is **frontend-only**.

---

## Project Structure Highlights

- `src/pages/` → Routes for Home, Services, Blogs, Blog Details, Contact.  
- `src/components/` → Reusable components (ServiceCard, BlogCard, ContactForm).  
- `public/` → Static assets like local JSON (optional) and favicon.  
- Tailwind CSS for styling and responsive design.

---

## Contact Form / reCAPTCHA

- Uses `react-google-recaptcha` for frontend validation.  
- Validation checks if user clicks the checkbox.  
- No backend verification; form submission is handled only on frontend.

---

## Notes

- Use HTTPS for WordPress endpoints in production to avoid mixed-content issues.  
- The application is fully responsive and visually cohesive.  
- Search and filtering works for both services and blog posts.

