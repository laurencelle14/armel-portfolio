export type StatusKey = "shipped" | "deployed" | "dev" | "docs";

type Localized = {
  tagline: string;
  description: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string[];
  learned: string[];
};

export type Project = {
  slug: string;
  name: string;
  stack: string[];
  statusKey: StatusKey;
  github?: string;
  demo?: string;
  image?: string;
  fr: Localized;
  en: Localized;
};

// Order matters: strongest / most complete projects first.
export const projects: Project[] = [
  {
    slug: "budgetchantier",
    name: "Gestionnaire Budgétaire de Projet",
    stack: ["Tauri", "Rust", "SQLite"],
    statusKey: "shipped",
    fr: {
      tagline: "Application desktop pour suivre les budgets de chantier.",
      description:
        "Un outil de gestion budgétaire pour projets de construction, sous forme d'application desktop Tauri/Rust, offline-first avec une base SQLite locale.",
      role: "Développeur full-stack",
      overview:
        "Cet outil aide à suivre les budgets de projets sur des chantiers. C'est une application desktop Windows construite avec Tauri et Rust, offline-first, avec une base SQLite locale.",
      problem:
        "Un client avait besoin d'un moyen simple et fiable de suivre les budgets de projet sans dépendre de tableurs, dans un outil rapide et fonctionnant hors ligne sur desktop.",
      solution:
        "L'application utilise Tauri avec un backend Rust et SQLite pour un stockage local-first, garantissant un fonctionnement rapide et fiable même sans connexion internet.",
      features: [
        "Système d'animation modale en bulle pour consulter les détails du budget",
        "Palette visuelle personnalisée (noir/beige/doré) affinée après avoir testé d'autres directions",
        "Base de données locale SQLite pour un usage offline-first",
      ],
      challenges: [
        "Corriger un bug de calcul du backend Rust dans la formule du reliquat budgétaire",
        "Concevoir une architecture locale-first fiable avec Tauri et SQLite",
      ],
      learned: [
        "Une expérience pratique de Rust à travers une vraie application desktop, pas seulement des tutoriels",
        "Quand simplifier un système (comme retirer l'authentification, inutile sur un poste local) plutôt que de le sur-ingénierer",
        "Comment itérer sur un système de design visuel plutôt que de se contenter du premier essai",
      ],
    },
    en: {
      tagline: "Desktop app for tracking construction project budgets.",
      description:
        "A budget management tool for construction projects, built as an offline-first Tauri/Rust desktop app with a local SQLite database.",
      role: "Full-stack developer",
      overview:
        "This tool helps track project budgets on construction sites. It's a Windows desktop app built with Tauri and Rust, offline-first, with a local SQLite database.",
      problem:
        "A client needed a simple, reliable way to track project budgets without relying on spreadsheets, in a tool that felt fast and worked offline on desktop.",
      solution:
        "The app uses Tauri with a Rust backend and SQLite for local-first storage, keeping it fast and reliable even without an internet connection.",
      features: [
        "Bubble-expansion modal animation system for viewing budget details",
        "Custom warm visual palette (noir/beige/doré) refined after testing other directions",
        "Local SQLite database for fully offline-first use",
      ],
      challenges: [
        "Fixing a Rust backend calculation bug in the reliquat (remaining budget) formula",
        "Designing a reliable local-first architecture with Tauri and SQLite",
      ],
      learned: [
        "Practical Rust experience through a real desktop application, not just tutorials",
        "When to simplify a system (like dropping auth, unnecessary on a local machine) rather than over-engineer it",
        "How to iterate on a visual design system rather than settling on the first option",
      ],
    },
  },
  {
    slug: "anitche",
    name: "Anitche",
    stack: ["Django", "Django REST Framework", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker"],
    statusKey: "dev",
    fr: {
      tagline: "Plateforme e-commerce multi-portails construite en équipe.",
      description:
        "Une plateforme e-commerce avec des portails séparés pour clients, vendeurs, livreurs et administrateurs, développée en monorepo au sein d'une équipe de neuf développeurs.",
      role: "Développeur backend & infrastructure",
      overview:
        "Anitche est une plateforme e-commerce multi-portails desservant clients, vendeurs et livreurs via un seul système, développée en collaboration au sein d'une équipe de neuf développeurs.",
      problem:
        "Un même système e-commerce devait servir des types d'utilisateurs très différents — acheteurs, vendeurs et livreurs — chacun avec ses propres permissions et flux, tout en restant maintenable en tant que base de code d'équipe.",
      solution:
        "Un monorepo Django avec 12 apps dédiées, des settings séparés pour dev/prod, et une couche API REST partagée sécurisée par JWT. Les tâches de fond (notifications, traitement des commandes) passent par Celery et Redis. Le backend est actuellement en refactorisation, avec une partie en Django et une partie en FastAPI, validée par une CI sur chaque branche.",
      features: [
        "Modules support et panier construits de zéro avec une couverture de tests complète",
        "Configuration des 12 apps Django avec settings séparés (base/dev/prod)",
        "Mise en place de DRF, authentification SimpleJWT, et files Celery/Redis",
        "Coordination des branches Git et de l'infrastructure avec l'équipe",
      ],
      challenges: [
        "Coordonner les branches Git et éviter les conflits de fusion entre neuf contributeurs",
        "Structurer un découpage des settings de monorepo (base/dev/prod) qui reste cohérent à mesure que des apps s'ajoutent",
        "Écrire une couverture de tests complète pour les modules support et panier avant fusion",
      ],
      learned: [
        "Comment planifier et maintenir une architecture monorepo Django en équipe",
        "Une expérience pratique de Celery/Redis pour les tâches asynchrones",
        "La rigueur nécessaire pour coordonner des branches Git sur une base de code partagée",
      ],
    },
    en: {
      tagline: "Multi-portal e-commerce platform built with a team.",
      description:
        "An e-commerce platform with separate client, vendor, courier and admin portals, built as a monorepo within a nine-developer team.",
      role: "Backend developer & infrastructure",
      overview:
        "Anitche is a multi-portal e-commerce platform serving clients, vendors and couriers through one system, developed collaboratively within a nine-developer team.",
      problem:
        "A single e-commerce system needed to serve very different user types — buyers, sellers and delivery couriers — each with their own permissions and workflows, while staying maintainable as a team codebase.",
      solution:
        "A Django monorepo with 12 dedicated apps, split settings for dev/prod, and a shared REST API layer secured with JWT. Background tasks (notifications, order processing) run through Celery and Redis. The backend is currently being refactored, split between Django and FastAPI, with CI running on every branch.",
      features: [
        "Built the support and panier (cart) modules from scratch with full test coverage",
        "Configured all 12 Django apps with split settings (base/dev/prod)",
        "Set up DRF, SimpleJWT authentication, and Celery/Redis task queues",
        "Coordinated Git branches and infrastructure across the team",
      ],
      challenges: [
        "Coordinating Git branches and avoiding merge conflicts across nine contributors",
        "Structuring a monorepo settings split (base/dev/prod) that stays consistent as apps are added",
        "Writing full test coverage for the support and cart modules before merging",
      ],
      learned: [
        "How to plan and maintain a Django monorepo architecture as part of a team",
        "Practical experience with Celery/Redis for asynchronous tasks",
        "The discipline required for Git branch coordination on a shared codebase",
      ],
    },
  },
  {
    slug: "melo-caprice-boutik",
    name: "Melo Caprice Boutik",
    // Planned stack — adjust once implementation choices are locked in.
    stack: ["Django", "Django REST Framework", "React", "PostgreSQL"],
    statusKey: "docs",
    fr: {
      tagline: "Boutique en ligne de perruques, mèches et soins — en conception.",
      description:
        "Projet de digitalisation d'une activité familiale de vente de perruques, mèches de luxe, extensions et soins capillaires/corporels : catalogue, panier, compte client et paiement en ligne.",
      role: "Développeur full-stack",
      overview:
        "Melo Caprice Boutik sera la plateforme e-commerce d'une activité déjà existante, pour lui donner une présence en ligne au-delà des ventes locales et des réseaux sociaux. Le projet est actuellement en phase de cadrage et de conception.",
      problem:
        "L'activité manque de structuration pour ses ventes et a une faible portée à l'international : sans plateforme, la visibilité et la capacité à vendre au-delà du cercle local restent limitées.",
      solution:
        "Une boutique en ligne complète est prévue : consultation libre du catalogue, panier accessible sans compte, compte obligatoire pour commander, recherche et filtres produits, liste de favoris, paiement en ligne, et un espace administrateur pour que la cliente gère elle-même ses produits.",
      features: [
        "Catalogue avec recherche et filtres par catégorie (perruques, mèches, extensions, soins)",
        "Panier accessible sans compte, compte obligatoire pour valider une commande",
        "Liste de favoris et paiement en ligne",
        "Espace administrateur pour la gestion des produits (ajout / modification / suppression)",
      ],
      challenges: [
        "Concevoir un modèle de données produit flexible pour gérer des variantes (couleur, longueur, taille) et le stock",
        "Penser une interface simple à prendre en main pour une administratrice non technique",
      ],
      learned: [
        "Comment cadrer un cahier des charges avec une vraie cliente et ses contraintes réelles",
        "Comment concevoir un espace admin pensé pour un usage non technique",
      ],
    },
    en: {
      tagline: "Online store for wigs, hair extensions and care products — in design.",
      description:
        "A project to digitize an existing family business selling wigs, luxury hair extensions and hair/body care products: catalog, cart, customer accounts and online payment.",
      role: "Full-stack developer",
      overview:
        "Melo Caprice Boutik will be the e-commerce platform for an already-existing business, giving it an online presence beyond local sales and social media. The project is currently in the scoping and design phase.",
      problem:
        "The business lacks structured sales and has limited international reach — without a platform, visibility and the ability to sell beyond the local circle stay limited.",
      solution:
        "A full online store is planned: free catalog browsing, a cart usable without an account, mandatory account creation to check out, product search and filters, a favorites list, online payment, and an admin area so the client can manage products herself.",
      features: [
        "Catalog with search and filters by category (wigs, extensions, hair/body care)",
        "Cart usable without an account; account required to check out",
        "Favorites list and online payment",
        "Admin area for product management (add / edit / delete)",
      ],
      challenges: [
        "Designing a flexible product data model to handle variants (color, length, size) and stock",
        "Planning an interface simple enough for a non-technical admin to use confidently",
      ],
      learned: [
        "How to scope a cahier des charges with a real client and their actual constraints",
        "How to design an admin area built for non-technical use",
      ],
    },
  },
  {
    slug: "vellum",
    name: "Vellum",
    stack: ["Django", "Django REST Framework", "FastAPI", "React", "Vite", "Stripe Connect"],
    statusKey: "docs",
    fr: {
      tagline: "Marketplace de licences de beats multi-producteurs.",
      description:
        "Une marketplace permettant à des producteurs de musique de licencier leurs beats, planifiée avec un cahier des charges complet et une direction UI en mode sombre, anciennement nommée BeatVault.",
      role: "Design produit & architecture",
      overview:
        "Vellum est une marketplace où plusieurs producteurs indépendants peuvent lister et licencier leurs beats, actuellement au stade de la spécification et du design.",
      problem:
        "Les marketplaces de beats doivent gérer de nombreux vendeurs indépendants, chacun rémunéré pour ses propres ventes, ce qui est plus complexe qu'une boutique mono-vendeur classique.",
      solution:
        "Le plan combine Django/DRF pour l'API principale, FastAPI exploré pour certains services spécifiques, un frontend React/Vite, et Stripe Connect pour répartir les paiements entre la plateforme et les producteurs individuels.",
      features: [
        "Cahier des charges complet et documentation MVP rédigés avant l'implémentation",
        "Maquettes UI sombres inspirées de BeatStars avec un accent doré",
        "Intégration Stripe Connect planifiée pour payer plusieurs producteurs",
      ],
      challenges: [
        "Concevoir un modèle de données et un flux de paiement supportant plusieurs vendeurs indépendants",
        "Décider où Django et FastAPI s'intègrent chacun avant d'écrire le code d'implémentation",
      ],
      learned: [
        "Comment cadrer un MVP et rédiger un cahier des charges clair avant de construire",
        "Comment sont généralement structurés les paiements multi-parties avec Stripe Connect",
      ],
    },
    en: {
      tagline: "Multi-producer beat licensing marketplace.",
      description:
        "A marketplace concept for music producers to license beats, planned with a full specification and dark-mode UI direction, previously named BeatVault.",
      role: "Product design & architecture",
      overview:
        "Vellum is a marketplace where multiple independent producers can list and license their beats, currently at the specification and design stage.",
      problem:
        "Beat marketplaces need to support many independent sellers, each receiving payment for their own sales, which is more complex than a typical single-vendor store.",
      solution:
        "The plan combines Django/DRF for the core API, FastAPI being explored for specific services, a React/Vite frontend, and Stripe Connect to split payments between the platform and individual producers.",
      features: [
        "Full cahier des charges and MVP documentation written before implementation",
        "Dark, BeatStars-inspired UI mockups with a gold accent",
        "Planned Stripe Connect integration for paying multiple producers",
      ],
      challenges: [
        "Designing a data model and payment flow that supports multiple independent sellers",
        "Deciding where Django and FastAPI each fit before writing implementation code",
      ],
      learned: [
        "How to scope an MVP and write a clear cahier des charges before building",
        "How multi-party payments with Stripe Connect are typically structured",
      ],
    },
  },
];
