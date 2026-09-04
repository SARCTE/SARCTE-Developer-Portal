# SARCTE Developer Portal

Public developer portal for the SARCTE ecosystem — projects, repositories, releases and technical resources.

## Production URL
`https://github.sarcte.eu`

## Repository role
This repository contains only the public static website for the SARCTE Developer Portal. Internal documentation, credentials, customer data, private infrastructure configurations and sensitive LAB details must never be committed here.

## Structure
- `index.html` — portal homepage
- `styles.css` — visual design
- `app.js` — public project/repository data and UI rendering
- `assets/` — SARCTE public branding assets
- `robots.txt` — crawler directives
- `sitemap.xml` — public sitemap
- `.gitignore` — local files excluded from Git
- `DEPLOY_OVH.md` — OVH Git deployment procedure

## Branch
Production deployment uses the `main` branch.

## Security rule
Before every public push, verify that no secrets, tokens, private IP addresses, customer files, backups or internal-only documentation are included.

© 2026 SARCTE.
