# Service Manager Web Application

## Overview

This is a web application built with **React** for managing and displaying services and blog posts. It connects to a WordPress instance (TasteWP temporary site) for dynamic content and uses Google reCAPTCHA v2 (frontend-only) to validate the contact form. The application is hosted live on **Vercel**.

---

## Live Demo

[Service Manager Live Demo](https://service-manager-psi.vercel.app)

---

## WordPress (TasteWP) Setup

1. Temporary WP URL: `https://zealousrake.s2-tastewp.com`
2. Admin credentials:
   - Username: `admin`
   - Password: `admin123`
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
