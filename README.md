# IRSC Website

Static frontend for the International Research Scholars Community.
Stack: React 18, Vite, Tailwind CSS, React Router (hash routing), Lucide React, Framer Motion.

## Run
```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Edit content
All scholars, projects, events, opportunities, resources and news live in `src/data/index.js`.
Names, dates and email addresses are sample content: replace them before launch.

## Deploy
`dist/` can be hosted on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
Hash routing means no server rewrite rules are needed.
