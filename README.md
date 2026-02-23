# Altruisty Innovation — Empowering Future Leaders

A **professional, dark-themed static website** for [Altruisty Innovation](https://altruistyinnovation.com/) — a community-driven platform that empowers entrepreneurs and students through startup services, software development, virtual incubation, and academic empowerment.

> **Based in Chennai, Tamil Nadu** | Bridging education and real-world experience

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections (Homepage)](#page-sections-homepage)
- [Inner Pages](#inner-pages)
- [Theme & Styling](#theme--styling)
- [Key Libraries & Plugins](#key-libraries--plugins)
- [Customisation Guide](#customisation-guide)
- [Browser Support](#browser-support)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 5, Custom Dark Theme |
| Scripting | jQuery 3.7.1, Vanilla JS |
| Animations | GSAP (ScrollTrigger, ScrollSmoother, SplitText, TextPlugin), WOW.js, Animate.css |
| Sliders | Swiper.js |
| Icons | Font Awesome 6 |
| Lightbox | Magnific Popup |
| Misc UI | Nice Select, MeanMenu, Parallaxie, CounterUp, Waypoints, Chroma.js |

> **No build tools required** — pure static HTML/CSS/JS. No npm, Webpack, or bundler needed.

---

## Project Structure

```
├── index.html                          # Main homepage (dark-themed Altruisty)
├── index-original-backup.html          # Backup of original Infitech template
├── about.html / about-2.html
├── service.html / service-2.html / service-details.html
├── project.html / project-carousel.html / project-details.html
├── team.html / team-2.html / team-details.html
├── news.html / news-grid.html / news-details.html
├── contact.html
├── pricing.html / faq.html / 404.html
│
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css           # Bootstrap 5 grid & utilities
│   │   ├── all.min.css                 # Font Awesome icons
│   │   ├── animate.css                 # CSS animation keyframes
│   │   ├── swiper-bundle.min.css       # Swiper carousel styles
│   │   ├── magnific-popup.css          # Lightbox styles
│   │   ├── meanmenu.css               # Mobile hamburger menu
│   │   ├── nice-select.css            # Custom select dropdowns
│   │   ├── main.css                    # Base template styles
│   │   └── altruisty-dark.css          # ★ Dark theme override (Altruisty)
│   │
│   ├── js/
│   │   ├── jquery-3.7.1.min.js         # jQuery core
│   │   ├── bootstrap.bundle.min.js     # Bootstrap JS
│   │   ├── gsap.min.js                 # GreenSock animation core
│   │   ├── ScrollTrigger.min.js        # Scroll-triggered animations
│   │   ├── ScrollSmoother.min.js       # Smooth scrolling
│   │   ├── SplitText.min.js            # Text splitting for animation
│   │   ├── swiper-bundle.min.js        # Swiper slider engine
│   │   ├── wow.min.js                  # Reveal-on-scroll animations
│   │   ├── main.js                     # Primary custom JS
│   │   └── ...                         # Other plugins
│   │
│   ├── img/                            # All images by section
│   │   ├── logo/                       # black-logo.svg, white-logo.svg
│   │   └── home-5/                     # Hero, about, brand, icons, etc.
│   │
│   └── webfonts/                       # Font Awesome webfonts
```

---

## Getting Started

1. **Clone / download** the repository
2. **Open `index.html`** directly in a browser — no server required
3. For a better dev experience, use a local server:
   ```bash
   # VS Code Live Server extension (recommended)
   # Or Python:
   python -m http.server 8000
   # Or Node:
   npx serve .
   ```
4. Navigate to `http://localhost:8000`

---

## Page Sections (Homepage)

The homepage (`index.html`) includes the following sections:

| # | Section | Description |
|---|---------|-------------|
| 1 | **Preloader** | Animated "ALTRUISTY" letter loading screen |
| 2 | **Header / Navbar** | Sticky dark navigation with dropdown menus and mobile hamburger |
| 3 | **Hero** | "Make Your Dream Come Reality" with dual CTA buttons |
| 4 | **Brand Slider** | Partner/client logo carousel |
| 5 | **Services** | Software Development, Business Development, Virtual Incubation |
| 6 | **Vision & Mission** | Two-card layout with Altruisty's vision and mission statements |
| 7 | **About** | Company story with counter stats (50+ startups) and images |
| 8 | **Community** | Three community groups — Company, Students, Channel |
| 9 | **What We Do** | Feature cards: Software, Training, Enterprise, Education |
| 10 | **Marquee** | Scrolling keywords: Startups, Innovation, Mentorship, etc. |
| 11 | **Startup Services** | Checklist: Investor Connect, Mentorship, Funding, Patent, Registration, Idea-to-Product |
| 12 | **Internship CTA** | Call-to-action for student internship registration |
| 13 | **Testimonials** | Client review slider with 4.9 rating badge |
| 14 | **News & Insights** | Latest blog/update cards |
| 15 | **Footer** | Company info, service links, newsletter signup, social icons |

---

## Inner Pages

| Page | File(s) |
|------|---------|
| About | `about.html`, `about-2.html` |
| Services | `service.html`, `service-2.html`, `service-details.html` |
| Portfolio | `project.html`, `project-carousel.html`, `project-details.html` |
| Team | `team.html`, `team-2.html`, `team-details.html` |
| News / Blog | `news.html`, `news-grid.html`, `news-details.html` |
| Contact | `contact.html` |
| Pricing | `pricing.html` |
| FAQ | `faq.html` |
| 404 | `404.html` |

---

## Theme & Styling

### Dark Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#0a0a0f` | Main dark background |
| `--bg-card` | `#12121a` | Card/panel backgrounds |
| `--bg-section-alt` | `#0e0e16` | Alternating section backgrounds |
| `--theme` | `#6C63FF` | **Purple** primary accent |
| `--theme-secondary` | `#00D4AA` | **Teal/green** secondary accent |
| `--header` | `#f0f0f5` | Heading text color |
| `--text` | `#b0adb7` | Body text color |

### Design Features
- **Glassmorphism cards** with subtle borders and backdrop blur
- **Hover effects** — cards lift with purple glow on hover  
- **Custom scrollbar** in purple accent
- **Smooth scroll animations** via GSAP ScrollSmoother
- **Reveal-on-scroll** using WOW.js + Animate.css

### CSS Architecture
- `main.css` — Base template styles (16,900+ lines)
- `altruisty-dark.css` — Dark override layer (450+ lines) loaded after main.css

---

## Key Libraries & Plugins

### Animation
- **GSAP + Plugins** — Timeline animations, smooth scrolling, text effects
- **WOW.js + Animate.css** — Reveal-on-scroll effects
- **CounterUp** — Animated stat counters

### UI Components
- **Swiper.js** — Touch-friendly carousels (brands, services, testimonials)
- **Magnific Popup** — Responsive image/video lightbox
- **MeanMenu** — Mobile-responsive hamburger navigation
- **Nice Select** — Styled dropdown replacements
- **Parallaxie** — Background parallax scrolling

### Utilities
- **jQuery 3.7.1** — DOM manipulation and plugin foundation
- **Bootstrap 5** — Grid system and responsive utilities
- **Chroma.js** — Color manipulation

---

## Customisation Guide

### Changing Accent Colors
Edit the CSS variables at the top of `assets/css/altruisty-dark.css`:
```css
:root {
  --theme: #6C63FF;           /* Change purple accent */
  --theme-secondary: #00D4AA; /* Change teal accent */
}
```

### Replacing Logo
Swap SVG files in `assets/img/logo/`:
- `white-logo.svg` — Used in header and footer (on dark backgrounds)
- `black-logo.svg` — Used on light backgrounds (inner pages)

### Editing Content
All text is directly in the HTML files. No templating engine — just edit the text between HTML tags.

### Adding/Removing Sections
Each section is wrapped in clear HTML comments:
```html
<!-- ==================== HERO SECTION ==================== -->
...
<!-- ==================== SERVICES SECTION ==================== -->
```
Copy, rearrange, or delete entire blocks to modify the layout.

### Contact Form
Uses `assets/js/ajax-mail.js` for AJAX submission. Configure a server-side mail handler and update the endpoint in that file.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

---

## Deployment

This is a static site — deploy to any static hosting:

```bash
# Netlify (drag & drop or CLI)
netlify deploy --prod

# Vercel
vercel --prod

# GitHub Pages
# Push to repo and enable Pages in Settings

# Firebase Hosting
firebase deploy
```

---

## Credits

- Template base: Infitech HTML Template by Pixel-plus
- Customised for: **Altruisty Innovation**, Chennai, Tamil Nadu
- Address: 16, 12, 2nd St Rd, Urrur Kuppam, Besant Nagar, Chennai, Tamil Nadu 600090

---

&copy; 2024-26 Altruisty Innovation. All rights reserved.
