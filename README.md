# PVC Poolzubehör Website

Professionelle Website für PVC Poolzubehör mit JTL-WaWi Integration.

## Von POOL Total GmbH - Minden

"...wir machen Pools klar!"

## Inhalt

- `index.html` - Komplette Website (Single-Page, responsive)
- `products.json` - JTL-WaWi Produktexport-Format (Beispiel)
- `integration-guide.md` - Anleitung zur JTL-WaWi Anbindung

## Deployment

1. **Cloudflare Pages**: Repo mit Cloudflare Pages verbinden → kostenloses CDN + SSL
2. **Hetzner**: Dateien auf Webserver hochladen
3. **GitHub Pages**: Settings → Pages → Source: main branch

## JTL-WaWi Anbindung

Siehe `integration-guide.md` für drei Integrationswege:
- JTL-Connector (Vollintegration)
- SQL2REST (Custom API)
- CSV/XML Export + Cronjob (Einfach)

## Tech Stack

- HTML5 / CSS3 / Vanilla JS
- Keine Build-Tools benötigt
- Google Fonts (Bricolage Grotesque + Plus Jakarta Sans)
- Responsive Design (Mobile, Tablet, Desktop)
