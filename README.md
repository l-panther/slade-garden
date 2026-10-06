# Slade Gardens Adventure Playground — Nuxt 4 + Bootstrap

This is the Nuxt conversion of the static redesign, now with Bootstrap 5
layered in for the grid/utility system. Your custom stylesheet still
owns the actual look — colors, type, buttons, cards, the hero, the
plank divider — Bootstrap just handles responsive layout structure.

## How Bootstrap is layered in

- `bootstrap/dist/css/bootstrap.min.css` is added as a dependency and
  loaded in `nuxt.config.ts` **before** `~/assets/css/style.css`, so
  when a class name is defined in both, your custom rule wins (same
  specificity, later source order).
- The one unavoidable collision was `.container` — Bootstrap defines
  it as a real layout primitive, and your stylesheet had its own fixed
  -width `.container`. To avoid a silent fight between the two, your
  version was renamed to `.site-container` everywhere. Bootstrap's own
  `.container`/`.container-fluid` are free to use if you want them
  later.
- Every custom CSS-grid layout (`.split`, the What's On cards, feature
  cards, testimonials, footer columns, sponsor logo strips, the
  grants/volunteers lists, the staff/membership layout, and the
  contact/venue-hire forms) now uses Bootstrap's `row` / `col-*`
  classes for its grid, instead of a bespoke `display:grid` rule per
  section. The box styling for each of those (cards, shadows, colors,
  padding) is untouched, still coming from `style.css`.
- `.gallery-grid` (the masonry-style venue-hire photo layout — one
  tall image plus two stacked) stays on custom CSS Grid, since
  Bootstrap's 12-column grid doesn't do that spanning layout cleanly.
- `flex-lg-row-reverse` (a Bootstrap utility) replaces the old
  `.split.reverse` CSS for image/text sections that alternate sides,
  e.g. About's "So much to do" and "Young volunteers" on Get Involved.

## Structure

Nuxt 4 puts your application source inside an `app/` directory by
default — `nuxt.config.ts` and `public/` stay at the project root.

```
nuxt.config.ts               loads Bootstrap CSS, then your stylesheet, plus fonts
public/                      static passthrough files (robots.txt, favicon, etc.)
app/
  app.vue                     root shell (<NuxtLayout><NuxtPage /></NuxtLayout>)
  layouts/default.vue         header + page content + footer
  components/
    SiteHeader.vue              nav + mobile hamburger/drawer
    SiteFooter.vue              shared footer (Bootstrap row/col columns)
    TopBar.vue                  donate strip + community hub bar (home page only)
  composables/
    useScrollReveal.js           IntersectionObserver fade-in-on-scroll,
                                  call it once per page in <script setup>
  assets/css/style.css         your look: colors, type, buttons, cards — no grid rules
  pages/
    index.vue                   Home
    about.vue                   About
    get-involved.vue            Get Involved
    venue-hire.vue               Venue Hire
    contact.vue                 Contact
```

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- Every page calls `useScrollReveal()` in its own `<script setup>` —
  the composable re-initialises on each page navigation, so the fade-in
  effect works whether someone lands directly on a page or clicks
  between them via the nav.
- Internal links use `<NuxtLink>` so navigation between pages is
  client-side (no full reload); external/placeholder links (`#`,
  socials, "Safeguarding Policy" download, etc.) are left as plain
  `<a>` tags, matching the original.
- All imagery is hot-linked from Unsplash, same as the static version —
  swap in real photos of Slade Gardens whenever you have them, ideally
  via `public/` + `<img src="/your-photo.jpg">` or a CMS/asset service.
- Bootstrap's JS bundle (dropdowns, the built-in navbar collapse, etc.)
  isn't included — the site's mobile nav uses its own small Vue-driven
  toggle in `SiteHeader.vue`, so there was nothing to gain from it. Add
  `import 'bootstrap/dist/js/bootstrap.bundle.min.js'` in a client
  plugin later if you start using Bootstrap components (modals,
  tooltips, etc.) that need it.
