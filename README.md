# Wong Wei Sheng | Portfolio

Personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Updating content

All text lives in one file: `src/data/resume.ts` (profile, skills, projects, experience, education, links).
Edit it there and every section updates.

To change the downloadable resume, replace `public/WeiSheng_Resume.pdf` (keep the file name).

## Scripts

- `npm run dev` start the dev server
- `npm run build` type-check and build for production
- `npm run lint` run ESLint
- `npm run preview` preview the production build

## Deploying

Import the repo into Vercel. The defaults (Vite, `npm run build`, `dist`) work as is.
