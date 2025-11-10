# 🤾‍♂️ Bouzonville Handball – Site Officiel

Bienvenue sur le dépôt du **site web officiel du Bouzonville Handball**, un club dynamique et passionné basé à Bouzonville (Moselle).  
Le site vise à promouvoir le handball local, partager la vie du club, et offrir une plateforme moderne aux licenciés, supporters et partenaires.

---

## 🌍 Présentation

Ce site a été conçu pour :
- 🔹 Présenter le club, son histoire et ses équipes  
- 🔹 Afficher les résultats, classements et calendriers des compétitions  
- 🔹 Mettre en avant les actions de formation, d’arbitrage et de bien-être  
- 🔹 Valoriser les partenaires et la vie associative  
- 🔹 Faciliter l’accès aux documents et informations utiles  

Il combine **design moderne**, **accessibilité** et **simplicité d’administration**.

---

## ⚙️ Technologies utilisées

| Domaine | Technologies |
|----------|--------------|
| **Framework principal** | [Next.js](https://nextjs.org/) avec [React](https://react.dev/) |
| **Langage** | [TypeScript](https://www.typescriptlang.org/) |
| **Style & Thème** | [Tailwind CSS](https://tailwindcss.com/) + thème personnalisé du club |
| **Gestion de données** | [Prisma](https://www.prisma.io/) avec base SQL |
| **Validation** | [Zod](https://zod.dev/) |
| **Intégrations externes** | API Facebook (actualités du club) |
| **Hébergement** | [Vercel](https://vercel.com/) |
| **Autres** | Lucide React (icônes), shadcn/ui (composants UI), Upload fichiers/images |

---

## 🧭 Navigation du site

Le site est organisé autour de plusieurs sections accessibles depuis le menu principal.

### 🏠 Accueil
Page d’accueil avec présentation du club, actualités, événements récents et mise en avant des équipes.

---

### 👥 Le Club
- **Histoire** — Découvrez les origines, les moments forts et l’évolution du Bouzonville Handball.  
- **Staff** — Présentation des membres du comité, encadrants et bénévoles.  
- **Installations** — Informations sur les gymnases, terrains et infrastructures du club.

---

### 🏆 Équipes
Toutes les équipes du club, avec leurs effectifs, coachs, photos, niveaux et catégories (Séniors, -18, -15, etc.).

---

### 📅 Compétition
- **Calendrier** — Planning complet des matchs à venir, avec filtres par catégorie.  
- **Résultats** — Scores et statistiques des matchs passés, classement par équipe.

---

### 🎓 Formation & Développement
- **École de Handball** — Présentation du programme jeune et de l’encadrement.  
- **Arbitrage** — Mise en avant de la filière arbitrale et formation des jeunes arbitres.  
- **Handfit** — Découverte du Handfit, activité bien-être ouverte à tous.

---

### 🤝 Partenaires
Liste et présentation des **partenaires officiels** du club avec logos, liens et description.

---

### ℹ️ Informations
- **Entraînements** — Horaires et lieux des séances par catégorie.  
- **Licences & Tarifs** — Détails des tarifs d’inscription et démarches de licence.  
- **Documents** — Téléchargement de documents utiles (formulaires, règlements, etc.).

---

### 🛍️ Boutique
Espace dédié à la vente des produits officiels du club (maillots, accessoires, tenues d’entraînement…).

---

## 🎨 Thème et design

Le design est basé sur un thème sur mesure reflétant l’identité visuelle du club 💙💛

```css
@theme inline {
  --font-title-xl: var(--font-tt-bluescreens-42);
  --font-title-lg: var(--font-tt-bluescreens-32);
  --font-title-md: var(--font-tt-bluescreens-24);
  --font-body: var(--font-calibri-16);

  --color-primary: var(--color-primary-500);
  --color-secondary: var(--color-orange-500);
  --color-accent: var(--color-light-blue-500);
  --color-danger: var(--color-red-500);
  --color-dark: var(--color-black);
  --color-light: var(--color-white);
}
```

---

## 📁 Structure du projet

Le projet suit la structure standard de Next.js (App Router) pour une architecture modulaire.

```
Directory structure:
loricbndn-bouzonville-handball-site/
└── src/
    ├── app/             # Routing et pages (App Router)
    │   ├── (pages)/     # Pages du site public (home, club, competition, etc.)
    │   ├── admin/       # Pages d'administration sécurisées
    │   └── api/         # Routes d'API (pour les CRUD)
    ├── components/      # Composants React réutilisables
    │   ├── admin/       # Composants spécifiques aux interfaces admins
    │   ├── layout/      # Structure (Header, Footer, Sidebar, etc.)
    │   ├── pages/       # Composants spécifiques à des pages
    │   └── ui/          # Composants de base (boutons, cartes, inputs)
    ├── data/            # Données locales ou mockées
    ├── lib/             # Fonctions utilitaires, hooks, clients API (Prisma, NextAuth)
    ├── styles/          # Fichiers CSS et configuration Tailwind
    └── types/           # Définitions TypeScript (interfaces, types de données)
```

---

## 🧩 Qualité & bonnes pratiques
- ✅ Architecture modulaire et claire
- 🔒 Authentification sécurisée
- ⚙️ Gestion des rôles (membre, coach, admin)
- 🧱 Validation avec Zod
- 🧪 Tests et lint automatisés
- 🌐 Responsive design et SEO optimisé

---

## ✍️ Auteurs et Remerciements
Ce projet n'aurait pas été possible sans l'engagement de l'équipe et la contribution de la communauté.

### 👨‍💻 Auteur Principal
- [Loric Bondon](https://github.com/LoricBndn) – Développeur Full-Stack

### 🙏 Remerciements Spéciaux
- Le Comité du Bouzonville Handball pour leur vision et leur soutien.
- Tous les Bénévoles et Licenciés qui fournissent le contenu et les photos pour faire vivre le site.
- La communauté open source pour les outils et bibliothèques fantastiques utilisés (Next.js, React, Tailwind CSS, etc.).
