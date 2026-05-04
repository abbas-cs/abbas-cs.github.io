# AI Engineer Portfolio 🤖

A modern, minimal portfolio website for an AI Engineer. Built with React, TailwindCSS, and Framer Motion.

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | UI framework + fast dev server |
| TailwindCSS 3 | Utility-first styling |
| Framer Motion | Scroll animations + transitions |
| React Icons | Icon library |
| gh-pages | GitHub Pages deployment |

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← Add your actual resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Sticky nav with mobile hamburger menu
│   │   ├── Hero.jsx        ← Landing section with animated background
│   │   ├── About.jsx       ← Bio + stats card
│   │   ├── Skills.jsx      ← Categorized skill grid with icons
│   │   ├── Projects.jsx    ← Project cards with hover animations
│   │   ├── Experience.jsx  ← Vertical timeline
│   │   ├── Contact.jsx     ← Contact form + social links
│   │   └── Footer.jsx      ← Site footer
│   ├── data/
│   │   ├── projects.js     ← Project data (edit here!)
│   │   └── skills.js       ← Skills data (edit here!)
│   ├── App.jsx             ← Root component with lazy loading
│   ├── main.jsx            ← Entry point
│   └── index.css           ← Tailwind + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Clone or download the project
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## ✏️ Customization

### 1. Personal Information
Update your name, title, and bio in:
- `index.html` — page `<title>` and meta description
- `src/components/Hero.jsx` — name, title, summary
- `src/components/About.jsx` — bio paragraphs and stats
- `src/components/Navbar.jsx` — logo initials
- `src/components/Footer.jsx` — name and email

### 2. Projects
Edit `src/data/projects.js`:
```js
{
  id: 1,
  title: 'Your Project Name',
  description: 'Short description...',
  tech: ['Python', 'FastAPI', 'Docker'],
  github: 'https://github.com/yourrepo',
  demo: 'https://yourdemo.com',  // or null
  emoji: '🔬',
  color: 'from-blue-50 to-indigo-50',
  accent: '#2563EB',
}
```

### 3. Skills
Edit `src/data/skills.js` — add or remove skills from each category.

### 4. Experience
Edit `src/components/Experience.jsx` — update the `experiences` array with your actual roles.

### 5. Contact Info
Edit `src/components/Contact.jsx` — update the `contactLinks` array.

### 6. Resume
Place your resume PDF at `public/resume.pdf`. The "Download Resume" button links to this file.

### 7. Colors (Tailwind)
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#2563EB',   // Main blue
  accent: '#6366F1',    // Indigo accent
  surface: '#F9FAFB',   // Background gray
  ink: '#0F172A',       // Text dark
  muted: '#64748B',     // Muted text
}
```

## 📦 Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview locally:
```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Option A: Automated with gh-pages

1. In `package.json`, update the `homepage` field:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. Install the deploy dependency (already in package.json):
   ```bash
   npm install
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch.

### Option B: GitHub Actions (recommended for auto-deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then push to `main` — it deploys automatically! ✅

### Option C: Vercel or Netlify (even easier)

Connect your GitHub repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
Set build command: `npm run build` and output directory: `dist`.

## 🔮 Planned Features
- [ ] Dark mode (toggle is already in the Navbar, just needs implementation)
- [ ] Blog section
- [ ] Certifications section
- [ ] Animated skill progress bars

## 📄 License
MIT — free to use and customize.
