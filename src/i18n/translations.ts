export type Lang = "fr" | "en";

export type TranslationSchema = {
  nav: { home: string; about: string; projects: string; stack: string; contact: string };
  hero: {
    greeting: string;
    role: string;
    description: string;
    viewProjects: string;
    contact: string;
    downloadCV: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    currently: string;
    status: string;
    statusValue: string;
    focus: string;
    focusValue: string;
    core: string;
    coreValue: string;
    exploring: string;
    exploringValue: string;
  };
  stack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    main: string;
    mainNote: string;
    familiar: string;
    familiarNote: string;
    exploring: string;
    exploringNote: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    back: string;
    role: string;
    status: string;
    details: string;
    source: string;
    demo: string;
    overview: string;
    problem: string;
    solution: string;
    features: string;
    challenges: string;
    learned: string;
  };
  statusValues: { shipped: string; deployed: string; dev: string; docs: string };
  learning: { eyebrow: string; steps: string[] };
  contact: { eyebrow: string; title: string; subtitle: string };
  footer: string;
};

export const translations: Record<Lang, TranslationSchema> = {
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", stack: "Stack", contact: "Contact" },
    hero: {
      greeting: "Salut, je suis",
      role: "Développeur logiciel en formation.",
      description:
        "Je construis des applications web full-stack avec Python, Django et React — étudiant en développement logiciel, j'apprends en construisant de vrais projets.",
      viewProjects: "Voir les projets",
      contact: "Contact",
      downloadCV: "Télécharger le CV",
    },
    about: {
      eyebrow: "01 · À propos",
      title: "À propos de moi",
      p1: "Je suis étudiant en troisième année de développement logiciel, actuellement concentré sur la construction d'applications web full-stack — principalement avec Python, Django et React. J'aime comprendre comment un produit fonctionne de bout en bout : l'API, le modèle de données, l'interface, et les décisions entre les deux.",
      p2: "L'essentiel de ce que je sais vient de la construction de vraies choses — une plateforme e-commerce multi-portails au sein d'une équipe de neuf développeurs, une application desktop en Rust livrée à un client, une boutique en ligne en cours de conception pour une vraie cliente — plutôt que des exercices isolés. C'est aussi là que se fait la plupart de mon apprentissage : déboguer un vrai bug, c'est souvent le moment où un concept devient enfin clair.",
      p3: "En parallèle de mon socle technique, j'explore progressivement l'architecture logicielle, l'IA, la cybersécurité, le DevSecOps et les systèmes cloud — des domaines qui m'intéressent vraiment, mais où je débute encore, et j'essaie de ne pas en exagérer le niveau.",
      currently: "Actuellement",
      status: "Statut",
      statusValue: "Étudiant en développement logiciel",
      focus: "Focus",
      focusValue: "Développement web full-stack",
      core: "Socle technique",
      coreValue: "Python · Django · React",
      exploring: "Exploration",
      exploringValue: "Architecture · IA · Sécurité",
    },
    stack: {
      eyebrow: "02 · Stack",
      title: "Stack technique",
      subtitle: "Organisée selon ma confiance réelle avec chaque outil — pas un mur de logos.",
      main: "Stack principale",
      mainNote: "Ce avec quoi je construis au quotidien.",
      familiar: "Maîtrise partielle",
      familiarNote: "À l'aise, encore en approfondissement.",
      exploring: "En exploration",
      exploringNote: "Début de parcours — curiosité, pas encore expertise.",
    },
    projects: {
      eyebrow: "03 · Projets",
      title: "Projets",
      subtitle: "Des projets réels, à des stades réels — certains livrés, d'autres encore en cours.",
      viewDetails: "Voir les détails",
      back: "Retour aux projets",
      role: "Rôle",
      status: "Statut",
      details: "Détails",
      source: "Code source",
      demo: "Démo en ligne",
      overview: "Aperçu",
      problem: "Problème",
      solution: "Solution",
      features: "Fonctionnalités clés",
      challenges: "Défis techniques",
      learned: "Ce que j'ai appris",
    },
    statusValues: {
      shipped: "Livré",
      deployed: "Déployé",
      dev: "En développement",
      docs: "Conception / phase MVP",
    },
    learning: {
      eyebrow: "Parcours d'apprentissage",
      steps: [
        "Fondamentaux de la programmation",
        "Python",
        "Django",
        "API REST / DRF",
        "React",
        "TypeScript",
        "Architecture logicielle",
      ],
    },
    contact: {
      eyebrow: "04 · Contact",
      title: "Construisons quelque chose.",
      subtitle: "Ouvert aux stages, postes junior et collaborations. N'hésitez pas à me contacter.",
    },
    footer: "Construit avec React, TypeScript & Tailwind CSS.",
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Developer in training.",
      description:
        "Building full-stack web applications with Python, Django and React — currently a software development student, learning by shipping real projects.",
      viewProjects: "View Projects",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    about: {
      eyebrow: "01 · About",
      title: "About Me",
      p1: "I'm a third-year software development student, currently focused on building full-stack web applications — mostly with Python, Django and React. I like understanding how a product actually works end to end: the API, the data model, the interface, and the decisions in between.",
      p2: "Most of what I know comes from building real things — a multi-portal e-commerce platform within a nine-developer team, a Rust desktop app delivered to a client, an online store being designed for a real client — rather than isolated exercises. That's also where most of my learning happens: debugging an actual bug is usually where a concept finally clicks.",
      p3: "Alongside my core stack, I'm gradually exploring software architecture, AI, cybersecurity, DevSecOps and cloud systems — areas I find genuinely interesting, but that I'm still early in, and I try not to overstate that.",
      currently: "Currently",
      status: "Status",
      statusValue: "Software development student",
      focus: "Focus",
      focusValue: "Full-stack web development",
      core: "Core stack",
      coreValue: "Python · Django · React",
      exploring: "Exploring",
      exploringValue: "Architecture · AI · Security",
    },
    stack: {
      eyebrow: "02 · Stack",
      title: "Tech Stack",
      subtitle: "Organized by how confident I actually am with each — not a wall of logos.",
      main: "Main Stack",
      mainNote: "What I build with day to day.",
      familiar: "Familiar With",
      familiarNote: "Comfortable using, still deepening.",
      exploring: "Currently Exploring",
      exploringNote: "Early stage — curiosity, not expertise yet.",
    },
    projects: {
      eyebrow: "03 · Projects",
      title: "Projects",
      subtitle: "Real projects, at real stages — some shipped, some still in progress.",
      viewDetails: "View details",
      back: "Back to projects",
      role: "Role",
      status: "Status",
      details: "Details",
      source: "Source",
      demo: "Live demo",
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      features: "Key Features",
      challenges: "Technical Challenges",
      learned: "Lessons Learned",
    },
    statusValues: {
      shipped: "Shipped",
      deployed: "Deployed",
      dev: "In development",
      docs: "Design / MVP stage",
    },
    learning: {
      eyebrow: "Learning path",
      steps: [
        "Programming fundamentals",
        "Python",
        "Django",
        "REST APIs / DRF",
        "React",
        "TypeScript",
        "Software architecture",
      ],
    },
    contact: {
      eyebrow: "04 · Contact",
      title: "Let's build something.",
      subtitle: "Open to internships, junior roles, and collaborations. Feel free to reach out.",
    },
    footer: "Built with React, TypeScript & Tailwind CSS.",
  },
};
