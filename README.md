<div align="center">

# 🗼 ParisÉlan

### *A Modern, Premium Paris Travel Experience*

**ParisÉlan** is a visually stunning, cinematic Paris travel website built with React + TypeScript. It features a scroll-driven frame-by-frame background animation, beautiful glassmorphic UI, and a full suite of travel-planning sections designed to make users fall in love with Paris before they even book a ticket.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

![ParisÉlan Preview](./public/preview.png)

</div>

---

## ✨ Features

### 🎬 Cinematic Scroll Background
- 300 JPEG frames loaded silently in the background
- Smooth lerp (linear interpolation) animation as you scroll
- Cover-fit canvas rendering — looks perfect on every screen size
- No loading screen — instant, seamless experience

### 🖱️ Ambient Cursor Glow
- Soft radial light follows your mouse with a smooth lag
- Adds a premium, alive feel to every section

### 📊 Scroll Progress Bar
- Glowing white progress line at the very top of the screen
- Fills as you scroll — cinematic and functional

### 🔢 Animated Statistics
- Numbers count up with easeOutExpo when scrolled into view
- Powered by `IntersectionObserver` — fires exactly once per visit

### 📅 Best Time to Visit
- Interactive month grid with weather icons
- Current month is **automatically highlighted**
- Seasonal breakdowns: Peak Season / Sweet Spot / Festive

### 🗺️ Key Sections
| Section | Description |
|---|---|
| **Hero** | Full-cinematic hero with CTA buttons |
| **Stats** | Animated numbers: travelers, satisfaction, experiences |
| **Top Landmarks** | Eiffel Tower, The Louvre, Montmartre |
| **Experiences** | Iconic, Hidden, After Dark, Food & Culture |
| **Culinary Journey** | French gastronomy & exclusive food tours |
| **Best Time to Visit** | Month-by-month weather & travel guide |
| **Curated Tours** | Handpicked tour packages |
| **Why ParisÉlan** | Trust signals & unique value proposition |
| **Traveler Stories** | Real guest testimonials with 5-star ratings |
| **Final CTA** | Compelling call to action with trip planner modal |

### 🔝 Floating Back to Top
- Appears after scrolling 300px
- Smooth hover animation (white → black inversion)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI Framework |
| TypeScript | ~5.8 | Type Safety |
| Vite | ^6.2 | Build Tool & Dev Server |
| Tailwind CSS v4 | ^4.1 | Utility-first Styling |
| Lucide React | ^0.546 | Icon Library |
| DM Sans | Google Fonts | Typography |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### 1. Clone the Repository

```bash
git clone https://github.com/UdayKumbhar532/Paris-lan-premium-and-distinctive.git
cd Paris-lan-premium-and-distinctive
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Cinematic Frames (Required)

The cinematic scroll background requires **300 JPEG frames** placed in the `public/assets/` folder.

- Files must be named: `ezgif-frame-001.jpg` → `ezgif-frame-300.jpg`
- Recommended resolution: `1920×1080` or higher
- They are not included in the repository due to file size

```
public/
  assets/
    ezgif-frame-001.jpg
    ezgif-frame-002.jpg
    ...
    ezgif-frame-300.jpg
```

### 4. Start the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `localhost:3000` |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking |

---

## 🗂️ Project Structure

```
Paris-lan-premium-and-distinctive/
├── public/
│   └── assets/            # 300 cinematic JPEG frames (add manually)
├── src/
│   ├── components/
│   │   ├── Header.tsx               # Sticky navigation with ParisÉlan logo
│   │   ├── HeroSection.tsx          # Full-height cinematic hero
│   │   ├── StatsSection.tsx         # Animated count-up statistics
│   │   ├── TopLandmarksSection.tsx  # Iconic Paris landmarks
│   │   ├── ExperiencesSection.tsx   # 4 experience categories
│   │   ├── CulinaryJourneySection.tsx # French food & gastronomy
│   │   ├── BestTimeSection.tsx      # When to visit Paris guide
│   │   ├── ToursSection.tsx         # Curated tour packages
│   │   ├── WhyUsSection.tsx         # Trust & value signals
│   │   ├── TravelerStoriesSection.tsx # Testimonials
│   │   ├── FinalCTASection.tsx      # CTA + footer
│   │   ├── TripPlannerModal.tsx     # Interactive trip planner
│   │   ├── ScrollCanvasBackground.tsx # Cinematic 300-frame canvas
│   │   ├── ScrollProgressBar.tsx    # Top scroll progress line
│   │   ├── CursorGlow.tsx           # Ambient cursor glow effect
│   │   └── BackToTop.tsx            # Floating back-to-top button
│   ├── App.tsx                      # Root app component
│   ├── main.tsx                     # React entry point
│   └── index.css                    # Global styles (Tailwind + DM Sans)
├── index.html                       # HTML entry + SEO meta tags
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json
```

---

## 🎨 Design Philosophy

ParisÉlan is built around a **cinematic glassmorphism** design language:

- **Transparent sections** — every section is see-through to let the scroll background breathe
- **Backdrop blur** — subtle `backdrop-blur-md` on cards and nav for depth
- **No black backgrounds** — pure transparency layered over the dynamic canvas
- **Text shadows** — subtle drop shadows on all text for perfect legibility over any frame
- **DM Sans typography** — elegant, modern, and highly readable at all weights

---

## 🌐 SEO

The site includes full Open Graph and Twitter Card meta tags in `index.html`:
- `<title>ParisÉlan</title>`
- `og:title`, `og:description`, `og:type`
- `twitter:card`

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests with improvements

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute it.

---

<div align="center">

Made with ❤️ for Paris · **ParisÉlan** · 2026

*Your Paris. Your Way.*

</div>
