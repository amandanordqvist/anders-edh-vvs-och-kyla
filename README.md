# Anders Edh VVS & Kyla AB – hemsida

Byggd med [Astro](https://astro.build) – genererar ren, statisk HTML som laddar snabbt och är bra för Google.
Bilder optimeras automatiskt (AVIF/WebP i flera storlekar) och typsnitten ligger lokalt (ingen Google Fonts-koppling, bra för GDPR).

## Kom igång

Kräver Node.js 22 eller senare.

```bash
npm install
npm run dev      # utvecklingsserver på http://localhost:4321
npm run build    # typkontroll + bygger färdig sida till dist/
npm run preview  # förhandsgranska byggd sida
```

## Struktur

```
src/
  data/site.ts         # ALL företagsinfo: telefon, e-post, adress, värmepumpar, garantier
  layouts/Layout.astro # <head>, SEO, delningsbild, strukturerad data (schema.org)
  components/          # en komponent per sektion (Header, Hero, HeatPumps, …)
  assets/img/          # originalbilder – optimeras vid bygget
  styles/global.css    # färger, typografi, knappar
public/                # filer som kopieras rakt av (favicon)
```

## Innan publicering

1. Ange riktig e-postadress i `src/data/site.ts` (`email`).
2. Ange domänen i `astro.config.mjs` (`site`) – ger canonical-länk och korrekt delningsbild.

## Publicering

Mappen `dist/` kan läggas på valfritt webbhotell. Enklast är att koppla repot till Netlify, Vercel
eller Cloudflare Pages – byggkommando `npm run build`, publiceringsmapp `dist`.
