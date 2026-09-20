# NEXRAD — site web

Site corporate et produit de **NEXRAD**, l'écosystème logiciel intelligent pour les professionnels de santé.

- **Radiologie** — Nexrad AI (dictée et comptes rendus structurés), Nexrad RIS (gestion du centre d'imagerie), Nexrad Bridge (application desktop d'intégration PACS / RIS / Word), PACS, viewer, DICOM worklist, HL7.
- **Médecine** — Nextoubib, le dossier médical et copilote de consultation du médecin (dictée, ordonnances, documents, QR Scan, OCR, triage infirmier, gestion de cabinet).

Site actuel : https://nexrad.org

## Stack

| Couche      | Choix                                                     |
| ----------- | --------------------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack), React 19              |
| Langage     | TypeScript strict                                         |
| Styles      | Tailwind CSS v4, design tokens en variables CSS           |
| UI          | Radix UI (primitives), lucide-react (icônes), Motion      |
| Formulaires | React Hook Form + Zod, Server Actions                     |
| Qualité     | ESLint (eslint-config-next), Prettier, Vitest, Playwright |
| CI/CD       | GitHub Actions, déploiement cible Vercel                  |
| Package     | **pnpm** (ne pas changer de gestionnaire de paquets)      |

## Démarrage

```bash
git clone https://github.com/nextoubib/SiteWeb.git
cd SiteWeb
pnpm install
cp .env.example .env.local
pnpm dev
```

Node.js 22 (voir `.nvmrc`). Le site tourne sur http://localhost:3000.

## Scripts

| Script           | Rôle                                                |
| ---------------- | --------------------------------------------------- |
| `pnpm dev`       | Serveur de développement                            |
| `pnpm build`     | Build de production                                 |
| `pnpm start`     | Sert le build de production                         |
| `pnpm lint`      | ESLint                                              |
| `pnpm typecheck` | `tsc --noEmit`                                      |
| `pnpm test`      | Tests unitaires Vitest                              |
| `pnpm test:e2e`  | Tests Playwright (smoke + responsive, hors CI)      |
| `pnpm format`    | Prettier (écriture) — `format:check` en CI          |
| `pnpm ci`        | Enchaîne lint, typecheck, test et build comme la CI |

## Architecture

```text
src/
├── app/                  Routes (App Router), metadata, sitemap, robots
│   ├── radiologie/       Landing radiologie + /ai, /ris, /bridge
│   ├── nextoubib/        Landing Nextoubib
│   ├── solutions/  technology/  pricing/  demo/  resources/  about/
├── components/
│   ├── ui/               Primitives (Button, Badge, Card, Tabs, Accordion, Sheet…)
│   ├── layout/           Container, Section, Footer
│   ├── navigation/       Navbar, MegaMenu, MobileMenu
│   ├── sections/         Hero, CTA, FAQ, FeatureGrid, ProductShowcase…
│   ├── products/         Cartes et vitrines produit
│   ├── diagrams/         Écosystème, workflows, interopérabilité (SVG/CSS)
│   ├── animations/       Reveal / stagger (Motion, reduced-motion safe)
│   ├── forms/            DemoForm (RHF + Zod) et Server Action
│   └── seo/              JsonLd
├── data/                 Contenu marketing centralisé (products, navigation, pricing, faq…)
├── lib/                  utils, seo, constants
└── types/                Types partagés
```

Principes :

- **Server Components par défaut** ; `"use client"` uniquement pour les menus, drawers, tabs, accordéons, formulaires et animations.
- **Contenu centralisé** dans `src/data/*` pour éviter la duplication dans le JSX.
- **Design system** : tokens de couleur, typographie et rayons définis dans `src/app/globals.css` (`@theme`) et consommés via Tailwind.
- **SEO** : Metadata API (title, description, canonical, Open Graph, Twitter), `sitemap.ts`, `robots.ts`, JSON-LD (Organization, SoftwareApplication, FAQPage, BreadcrumbList).
- **i18n** : contenu FR d'abord ; l'architecture (données centralisées, `lang` dans le layout) permet une migration vers `next-intl` sans refonte.

## Règles de contenu

Le site présente des logiciels d'assistance destinés à des professionnels de santé.

- Le médecin ou le radiologue conserve la validation, la responsabilité et la décision finale. Les fonctions IA sont présentées comme une **assistance** (jamais « diagnostic autonome », jamais « prescription autonome »).
- **Ne jamais inventer** : certifications (HDS, HIPAA, ISO 27001, CE, FDA…), chiffres clients, statistiques, taux de précision, temps gagné, investisseurs, partenaires, tarifs. Une métrique doit avoir une origine identifiable.
- Orthanc et OHIF sont des projets open source tiers : les citer avec attribution, sans laisser entendre qu'ils appartiennent à NEXRAD.

## Variables d'environnement

Copier `.env.example` vers `.env.local`. Aucune valeur secrète ne doit être commitée ; les secrets vont dans **GitHub Actions Secrets** ou **Vercel Environment Variables**.

| Variable               | Rôle                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (canonical, sitemap, Open Graph)                     |
| `NEXT_PUBLIC_APP_URL`  | URL de connexion à l'application (lien « Connexion »)             |
| `DEMO_WEBHOOK_URL`     | Webhook optionnel recevant les demandes de démo (CRM, automation) |
| `DEMO_WEBHOOK_TOKEN`   | Jeton optionnel envoyé au webhook (`Authorization: Bearer …`)     |

## Git workflow

```text
main      ← production (nexrad.org)
  ↑ pull request de release
develop   ← intégration / staging
  ↑ pull request
feature/* fix/* chore/*
```

1. `git checkout develop && git pull origin develop`
2. `git checkout -b feature/ma-fonctionnalite`
3. Implémentation, puis `pnpm ci`
4. `git push -u origin feature/ma-fonctionnalite`
5. Pull request **vers `develop`** (template fourni)
6. La CI doit être verte, revue, merge
7. Release : pull request **`develop` → `main`**, validée par un humain — jamais de merge automatique vers `main`

Commits en [Conventional Commits](https://www.conventionalcommits.org/) : `feat(ris): add DICOM workflow section`, `fix(nav): correct mobile menu overflow`, `ci(actions): validate release pull requests`…

## CI/CD

`.github/workflows/ci.yml` s'exécute sur les pull requests et les pushs vers `develop` et `main` :

- **Branch policy** — une PR vers `main` doit provenir de `develop` (ou `hotfix/*`) ; sinon le check échoue.
- **Quality** — installation pnpm (lockfile gelé), lint, typecheck, tests, build Next.js, vérification Prettier.

Protections de branches recommandées (à activer dans les réglages GitHub) : PR obligatoire, checks `Branch policy` et `Lint, typecheck, test, build` requis, branche à jour avant merge, conversations résolues, pas de force-push ni de suppression sur `main` et `develop`, au moins 1 approbation sur `main`.

Déploiement cible : Vercel connecté au dépôt — `develop` → preview/staging, `main` → production. Les Preview Deployments des PR permettent de valider design, responsive et performance avant merge. Aucune modification DNS sans validation explicite.

## Conventions

- Composants en PascalCase, un composant par fichier, `export function`.
- Classes Tailwind fusionnées via `cn()` (`clsx` + `tailwind-merge`).
- Icônes : `lucide-react` uniquement.
- Animations : Motion, toujours compatibles `prefers-reduced-motion`.
- Accessibilité : HTML sémantique, labels, focus visible, contrastes, `alt` renseignés.
