# Sona Sales Pharmaceuticals — Website

Business website for **Sona Sales Pharmaceuticals**, Bihar's trusted I.V. Fluids distributor, covering all 38 districts of the state.

## Live Site

**https://devesh1102.github.io/sonasalesPharmaceuticals/**

Deployed via **GitHub Pages** from the `master` branch. Updates go live automatically on every push.

The GitHub repository is at:
**https://github.com/devesh1102/sonasalesPharmaceuticals**

## About the Project

A modern, single-page marketing website built with no frameworks — just plain HTML, CSS, and vanilla JavaScript.

**Sections:**
- **Hero** — animated floating orbs, headline, and CTA
- **About** — company background and trust signals
- **Products** — I.V. Fluids and drinking water product cards
- **Partners** — brand logos (Baxter, Claris Lifesciences, Aquafina, Kinley)
- **Coverage** — all 38 districts of Bihar
- **Contact** — inquiry form and contact details

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 |
| Styling | CSS3 (glassmorphism, scroll animations, dark theme) |
| Behaviour | Vanilla JavaScript |
| Fonts | Inter + Plus Jakarta Sans (Google Fonts) |
| Hosting | Azure Static Web Apps |
| CI/CD | GitHub Actions |

## Running Locally

No build step required. Just open the file in a browser:

```bash
# Option 1 — open directly
open index.html        # macOS
start index.html       # Windows

# Option 2 — serve with any static server (avoids CORS quirks with fonts)
npx serve .
# then visit http://localhost:3000
```

## Deployment

Pushes to `master` trigger the GitHub Actions workflow at `.github/workflows/azure-static-web-apps.yml`, which deploys the site automatically to Azure Static Web Apps.

**Required GitHub secret:**
- `AZURE_STATIC_WEB_APPS_API_TOKEN` — found in the Azure Portal under your Static Web App > Manage deployment token.

## Project Structure

```
SonaPani/
├── index.html                          # Single-page site
├── style.css                           # All styles
├── script.js                           # Scroll animations, mobile menu, etc.
└── .github/
    └── workflows/
        └── azure-static-web-apps.yml  # CI/CD pipeline
```

## Design Notes

- **Background:** `#050D1A` deep navy
- **Accent palette:** Blue/teal gradient (`#60EFFF` → `#0061FF`)
- **Cards:** Glassmorphism with subtle borders
- **Animations:** Intersection Observer-driven scroll reveals, floating hero orbs
- **Responsive:** Mobile hamburger menu, fluid grid layouts
