# Headie — Portfolio

Cinematic personal portfolio for **Headie** (`@iamheadie`) — AI video creator and visual storyteller.

A dark, editorial, mobile-first single-page site with immersive video previews, a dedicated project view per film, scroll-based reveals, and a prominent socials section. Built with React 19, React Router, Vite and Tailwind v4.

- Site: https://headie-portfolio.vercel.app
- Repo: https://github.com/iamHeadie/headie-portfolio

## Local

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Structure

```
src/
  lib/
    site.ts        # name, bio, socials, tools, stats — edit your details here
    projects.ts    # the films: metadata, objective, concept, process, poster + video paths
  components/       # Nav, Footer, ProjectCard, VideoPlayer (lightbox), Reveal, icons…
  pages/
    Home.tsx        # Hero · Selected Work · All Projects · About · Process · Tools · Socials · Contact
    ProjectPage.tsx # dedicated project view + immersive player
public/
  videos/          # .mp4 films (portrait 9:16 or 16:9)
  images/          # poster frames (jpg), one per film
```

## Adding a film

1. Drop the `.mp4` in `public/videos/` and a poster still in `public/images/`.
2. Add an entry to `projects.ts` (set `poster`, `video`, `aspect`, and the copy fields).
3. Set `featured: true` to surface it in **Selected Work**.

Poster frames were extracted from the source videos with `ffmpeg` (e.g.
`ffmpeg -ss 40 -i film.mp4 -frames:v 1 -q:v 2 poster.jpg`).

## Socials

The X / Twitter panel is built to hold a live post feed. Until an X API key is
wired in, it shows curated teasers that link to the profile — swap those in
`Home.tsx` (the `hoverPost` helper) for real embeds when available.
