# Headie — Portfolio

Cinematic personal portfolio for **Headie** (`@iamheadie`) — AI video creator and visual storyteller.

- Site: https://headie-portfolio.vercel.app
- Repo: https://github.com/iamHeadie/headie-portfolio

## Live films on this branch

Selected Work plays the files actually in `public/videos/`:

- `Quantum-Double-Slit_1080x1920.mp4`
- `Electromagnetism-Motors-Magnets_1080x1920.mp4`

Titles can stay editorial in `src/lib/projects.ts`. The `video` path must match the real filename.

GitHub rejects files over 100 MB. Host larger films on Cloudinary or YouTube and paste the URL into `projects.ts` instead of uploading the MP4.

## Local

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Adding a film

1. If the file is under 100 MB: drop the `.mp4` in `public/videos/`.
2. If it is larger: upload to Cloudinary or YouTube (unlisted) and use that URL.
3. Add or edit the entry in `src/lib/projects.ts` — set `video` to the real path or URL.
4. Set `featured: true` to show it in Selected Work.
