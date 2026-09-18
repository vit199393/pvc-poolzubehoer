# JTL-WaWi Integration Guide - PVC Poolzubehör Website

## Übersicht

Diese Website ist so aufgebaut, dass sie direkt mit JTL-WaWi (ab Version 1.7+) synchronisiert werden kann. Es gibt drei Integrationswege, je nach Anforderung:

---

## Option 1: JTL-Connector (Empfohlen für Vollintegration)

Der JTL-Connector ist die offizielle Schnittstelle für die Zwei-Wege-Synchronisation zwischen JTL-WaWi und Shop-Systemen.

### Voraussetzungen
- JTL-WaWi 1.7+ (Sie haben 1.11.10)
- Webserver mit PHP 8.0+
- JTL-Connector (kostenlos)

### Schritte
1. JTL-Connector auf dem Webserver installieren
2. In JTL-WaWi unter Webshops verbinden
3. Produktkategorien zuordnen
4. Automatische Synchronisation aktivieren

---

## Option 2: REST-API / SQL2REST

Mit SQL2REST kann direkt auf die JTL-WaWi Datenbank zugegriffen werden.

---

## Option 3: CSV/XML Export + Cronjob

Einfachste Variante: Export aus JTL-WaWi, Konvertierung zu JSON, Upload zum Server.

---

## Hosting & Deployment

### Option A: Hetzner (bestehende Infrastruktur)
### Option B: Cloudflare Pages (Kostenlos & CDN)
### Option C: JTL-Shop Subshop

---

## Produktdaten-Format (products.json)

Das JSON-Format folgt den JTL-WaWi Feldnamen: kArtikel, cArtNr, cName, cKurzBeschreibung, fPreis, fMwSt, fLagerbestand, cKategorie, etc.

---

## Checkliste für Go-Live

- [ ] Domain/Subdomain registrieren
- [ ] DNS-Eintrag setzen (Cloudflare)
- [ ] SSL-Zertifikat aktivieren
- [ ] JTL-WaWi Export/Connector konfigurieren
- [ ] Produktdaten synchronisieren
- [ ] Produktbilder hochladen
- [ ] Impressum & Datenschutz anpassen
- [ ] AGB und Widerrufsrecht einbinden
- [ ] Zahlungsmethoden konfigurieren (Mollie/Klarna)
- [ ] Trusted Shops Integration
- [ ] Google Merchant Center Feed einrichten
- [ ] SISTRIX SEO-Monitoring einrichten
