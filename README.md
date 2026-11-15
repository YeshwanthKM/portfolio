# Yeshwanth KM – Personal Portfolio Website

Modern, responsive personal portfolio built with **React**, **TypeScript**, and **Tailwind CSS**, closely following the editorial brutalist design language from the Jhanvi Shah Figma portfolio template reference.

---

## 🚀 Features & Sections

- **Typography & Theme**: Dual font system featuring **Sora** and **Outfit** with high-contrast monochrome aesthetics, stroked headline outlines, and alternating light/dark rhythm.
- **Hero Section**: Dynamic typewriter headline with verified social profiles (LinkedIn, GitHub, Email) and authentic second-year CSE (AI & ML) headline.
- **Skills & Learning Journey**: Honest representation of core languages (`C`, `Python`, `Java`), developer tooling (`Antigravity`, `GitHub`), focal interests, and an active **Currently Learning Journey** tracker.
- **About Me**: High-contrast dark section detailing academic background at **Rajalakshmi Institute of Technology**, hackathon interests, GDG meetups, and AI-assisted engineering exploration.
- **Education**: Detailed degree card for B.E. Computer Science & Engineering (AI & ML), Class of 2029, in Chennai.
- **Featured Projects**:
  - `01` **CropSync – Farmer-Buyer Marketplace** (SIH 2026, Python/Flask/Supabase)
  - `02` **TypeNull – AI-Powered Application Validation & Document Authentication** (SIH 2026, React/TypeScript/FastAPI/Supabase)
  - Includes verified GitHub repository links and development notices.
- **Honors & Achievements**: Prominently features **First Prize – Website Building Challenge 2026** (hosted by GeeksforGeeks Campus Club at RIT) alongside SIH 2026 and competitive hackathons.
- **Developer Community & Events**: Highlights **GDG DevFest Mangalore 2025**, **GDG DevFest Chennai**, meetups, bootcamps, and technical workshops.
- **Contact Me**: Dual-column layout with "Let's talk for Something special", direct email links, and an interactive contact form.
- **Interactions**: Custom fluid cursor follower, responsive mobile menu drawer, and smooth scroll-to-top button.

---

## 🛠️ Local Development & Scripts

Inside the `Projects/portfolio` directory:

```bash
# Start local development server
npm run dev

# Run TypeScript typecheck & production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📂 Project Architecture

```
Projects/portfolio/
├── public/
│   ├── assets/
│   │   ├── hero_illustration.svg
│   │   └── about_illustration.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Community.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```
