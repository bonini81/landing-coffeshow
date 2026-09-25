# Image assets

Drop the real files here using these exact names (or update the `src` in
`index.html` if you'd rather rename them). Until a file exists, the page
shows a readable placeholder automatically — nothing else to change.

Where to configure the rest:
- **Links** (ticket sales, social profiles): `js/main.js` → `LINKS` object.
- **Font**: `css/styles.css` → `--font-display` / `--font-body` in `:root`.

## Logos (transparent PNG or SVG recommended)
| File | Used for | Suggested size |
|---|---|---|
| `logo-coffeeshow.png` | Coffee Show Supermaxi main logo | ~720×280px |
| `logo-produbanco.png` | Produbanco sponsor logo | ~400×100px |
| `logo-buenplan.png` | buenplan.com.ec ticketing logo | ~400×80px |
| `logo-supermaxi.png` | Supermaxi organizer logo | ~360×110px |
| `logo-wom.png` | WOM Agency organizer logo | ~280×110px |
| `favicon.png` | Browser tab icon | 512×512px |
| `og-image.jpg` | Social share preview image | 1200×630px |

## Decorative / hero photography
| File | Used for |
|---|---|
| `hero-latte.png` | Latte-art cup photo, hero section (circular crop) |
| `lips.png` | Red coffee-bean "lips" graphic (hero + program section) |
| `portafilter.png` | Portafilter with ground coffee (experience band) |

## Artist photos (portrait, ~4:5 ratio, JPG recommended)
| File | Artist |
|---|---|
| `artist-machaka.jpg` | Machaka |
| `artist-monserrath-astudillo.jpg` | Monserrath Astudillo |
| `artist-israel-anabel.jpg` | Israel Brito y Anabel Naranjo |
| `artist-rocola-bacalao.jpg` | Rocola Bacalao |
| `artist-jose-pacheco.jpg` | José Pacheco |
| `artist-pancho-vinachi.jpg` | Pancho Viñachi |

## Sponsor logos (grid, transparent PNG, ~240×96px)
| File | Brand |
|---|---|
| `sponsor-starbucks.png` | Starbucks Coffee |
| `sponsor-natures-heart.png` | Nature's Heart |
| `sponsor-nutri.png` | Nutri |
| `sponsor-mazda.png` | Mazda |
| `sponsor-nescafe.png` | Nescafé |
| `sponsor-minerva.png` | Minerva |
| `sponsor-dentonomy.png` | Dentonomy |
| `sponsor-marley.png` | Marley Coffee |
| `sponsor-sinners.png` | Sinners |
| `sponsor-si-cafe.png` | Sí Café |
| `sponsor-juan-valdez.png` | Juan Valdez Café |
| `sponsor-cosecha-roja.png` | Cosecha Roja |
| `sponsor-tru.png` | TRÜ |
| `sponsor-cafe-oro.png` | Café Oro |
| `sponsor-holstein.png` | Holstein |
| `sponsor-sello-rojo.png` | Sello Rojo |
| `sponsor-black-decker.png` | Black+Decker |

## Using .svg instead of .png
If you have vector logos, just rename the file with a `.svg` extension and
update the matching `src="assets/img/...png"` in `index.html` to `.svg` —
everything else (fallback, sizing) keeps working the same way.
