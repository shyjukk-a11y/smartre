# SMART RE — سمارت ري

AI-powered Saudi Arabia property marketplace concept. Static site — plain HTML, CSS and JavaScript, no build step, no framework, no npm install required.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home — hero, AI/manual search, featured listings |
| `property.html?id=1` | Property detail (gallery, floor plan, mortgage widget, reserve/enquiry) |
| `map.html` | Interactive map search with radius filter (Leaflet + OpenStreetMap) |
| `compare.html` | Side-by-side property comparison |
| `mortgage-calculator.html` | Standalone mortgage calculator |
| `blog.html` / `blog-post.html?slug=...` | Market insights & area guides |
| `area-compare.html` | Side-by-side neighborhood comparison |
| `invest.html` | Investment view — yield, cap rate, cash-on-cash return |
| `saved.html` | Saved properties & saved searches (stored in the browser's localStorage) |

Shared across every page: `styles.css` (design system) and `app.js` (property data, saved/compare state, notifications, chatbot).

## Run locally

No install needed — any static file server works:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to Vercel

**Option A — CLI (fastest):**
```bash
npx vercel
```
Run from inside this folder and follow the prompts. `vercel.json` is already set up for static hosting.

**Option B — Dashboard:**
Go to [vercel.com/new](https://vercel.com/new) and drag this folder onto the page, or connect it as a Git repository.

**Option C — Git + Vercel:**
```bash
git add .
git commit -m "Deploy SMART RE demo"
git push
```
Then import the repo at [vercel.com/new](https://vercel.com/new). No framework preset or build command needed — Vercel serves the files as-is.

## Notes

- "Saved" state (hearted properties, saved searches, compare list, read notifications) lives in each visitor's browser localStorage — it does not sync across devices or persist server-side.
- The chatbot, AI pricing, and AI match scores are scripted demo responses, not a live LLM integration.
- Payment and government-integration screens (Moyasar/Stripe/MOJ/Absher/Balady) are UI mockups for demo purposes — no real payment processing or government API calls occur.
