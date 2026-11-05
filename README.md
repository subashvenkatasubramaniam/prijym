# PRIJYM – React version

Laboratory & Research PHP template converted to React (Vite + React Router).
Design, CSS, fonts and all images are unchanged (served from `public/assets`).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
```

## Structure
- `src/pages/`            one component per old `.php` page (Home, About, Contact ...)
- `src/components/<x>/`   one component per old `parts/<x>/*.php` section
- `src/components/layout/` Header, Footer, Menu, MobileNav, SearchPopup, BackToTop, Preloader, Layout
- `src/legacy/plugins.js`  owl-carousel, WOW, GSAP title animation, accordion, tabs, isotope, fancybox
- `src/App.jsx`           all routes (`/about`, `/blog-details`, `/index-2` ...; unknown URL -> 404 page)
- `public/assets/`        original css / js / images / fonts
- Menu items are edited in `src/components/layout/Menu.jsx`

Note: banner / about / team images showing "1920x900", "300x330" etc. are placeholder
images shipped inside the original template - replace the files in `public/assets/images`.
