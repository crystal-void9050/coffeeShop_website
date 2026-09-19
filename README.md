# Branzac — Specialty Coffee Website

A premium, animated single-page marketing site for Branzac, a specialty coffee shop featuring single-origin beans, pour-over, and an in-house espresso bar.

## Tech

- **React 19** + **Vite** + **Tailwind CSS 3** + **GSAP** + **Lucide React** + **React Router**

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

Output in `dist/`.

## Stack & features

- Fixed pill navbar with glass-on-scroll + mobile hamburger overlay
- Full-viewport hero with Unsplash coffee-beans background and GSAP staggered entrance
- 3 feature cards: rotating roast-card shuffler, **CoffeeRain** signature animation (coffee bean drops falling through a V60 dripper onto a wooden counter with steam wisps), and a weekly reservation scheduler with animated cursor
- Pillars section with animated CountUp counters (IntersectionObserver + RAF)
- 3-step sticky-stack Protocol section with GSAP ScrollTrigger scrub
- 6-tile dark ServicesGrid with gap-px dividers
- Trust signals (SCA Certified, Direct-Trade, In-House Roast)
- Contact form with drag-drop file upload and idle/sending/sent state machine
- Multi-column footer with status pulse and legal links

## Brand

- Primary: forest green `#1C3D2A`
- Accent: copper `#B87333`
- Background: warm cream `#F7F5F0`
- Typography: Plus Jakarta Sans (display) · Cormorant Garamond (italic flourish) · Inter (body) · JetBrains Mono (labels)

## License

Private.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
