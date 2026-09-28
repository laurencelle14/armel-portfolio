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
  contact: { title: string; subtitle: string };
  footer: string;
};

export const translations: Record<Lang, TranslationSchema> = {
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", stack: "Stack", contact: "Contact" },
    hero: {
      greeting: "Salut, je suis",
      role: "Développeur logiciel en formation.",
      description:
        "Je construis des applications web full-stack avec Python, Django et React. Étudiant en troisième année de génie logiciel, j'apprends surtout en travaillant sur des projets concrets.",
      viewProjects: "Voir les projets",
      contact: "Me contacter",
      downloadCV: "Télécharger le CV",
    },
    about: {
      title: "À propos de moi",
      p1: "Je suis en troisième année de licence en génie logiciel et je me concentre sur le développement web full-stack, principalement avec Python, Django et React. Ce qui me plaît, c'est de comprendre un produit de bout en bout : l'API, le modèle de données, l'interface et les choix qui relient tout ça.",
      p2: "J'ai surtout appris en construisant de vrais projets. Une plateforme e-commerce multi-portails avec une équipe de neuf développeurs, une application desktop en Rust livrée à un client, et une boutique en ligne que je conçois pour une vraie cliente. Les bugs qui m'ont fait le plus galérer sont souvent ceux qui m'ont le plus appris.",
      p3: "À côté de ça, je m'intéresse à l'architecture logicielle, à la cybersécurité, au cloud et surtout à l'IA, que je compte approfondir en master. Et quand je ne code pas, je produis de la musique. C'est de là qu'est venue l'idée de Vellum.",
      currently: "Actuellement",
      status: "Statut",
      statusValue: "Étudiant en L3 génie logiciel",
      focus: "Focus",
      focusValue: "Développement web full-stack",
      core: "Socle technique",
      coreValue: "Python · Django · React",
      exploring: "Exploration",
      exploringValue: "IA · Architecture · Sécurité",
    },
    stack: {
      title: "Stack technique",
      subtitle: "Classée selon mon niveau réel avec chaque outil.",
      main: "Stack principale",
      mainNote: "Ce que j'utilise au quotidien.",
      familiar: "Maîtrise partielle",
      familiarNote: "Je m'en sers, j'approfondis encore.",
      exploring: "En exploration",
      exploringNote: "Je découvre, je pratique petit à petit.",
    },
    projects: {
      title: "Projets",
      subtitle: "Du projet livré à celui encore en conception, avec le statut de chacun.",
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
      docs: "En conception",
    },
    learning: {
      eyebrow: "Mon parcours",
      steps: [
        "Bases de la programmation",
        "Python",
        "Django",
        "API REST / DRF",
        "React",
        "TypeScript",
        "Architecture logicielle",
      ],
    },
    contact: {
      title: "Me contacter",
      subtitle:
        "Je cherche un stage ou un premier poste en développement, et je suis ouvert aux collaborations. Le plus rapide, c'est par email.",
    },
    footer: "Code source du site",
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      role: "Software developer in training.",
      description:
        "I build full-stack web applications with Python, Django and React. I'm a third-year software engineering student, and I learn mostly by working on real projects.",
      viewProjects: "View projects",
      contact: "Get in touch",
      downloadCV: "Download CV",
    },
    about: {
      title: "About me",
      p1: "I'm a third-year software engineering student focused on full-stack web development, mainly with Python, Django and React. What I enjoy is understanding a product end to end: the API, the data model, the interface and the choices that tie them together.",
      p2: "Most of what I know comes from building real projects. A multi-portal e-commerce platform with a team of nine developers, a Rust desktop app delivered to a client, and an online store I'm designing for a real client. The bugs that gave me the hardest time are usually the ones that taught me the most.",
      p3: "Beyond that, I'm interested in software architecture, cybersecurity, cloud and above all AI, which I plan to study further in a master's program. When I'm not coding, I produce music. That's where the idea for Vellum came from.",
      currently: "Currently",
      status: "Status",
      statusValue: "3rd-year software engineering student",
      focus: "Focus",
      focusValue: "Full-stack web development",
      core: "Core stack",
      coreValue: "Python · Django · React",
      exploring: "Exploring",
      exploringValue: "AI · Architecture · Security",
    },
    stack: {
      title: "Tech stack",
      subtitle: "Sorted by how well I actually know each tool.",
      main: "Main stack",
      mainNote: "What I use day to day.",
      familiar: "Familiar with",
      familiarNote: "I use them, still going deeper.",
      exploring: "Exploring",
      exploringNote: "Learning and practicing step by step.",
    },
    projects: {
      title: "Projects",
      subtitle: "From shipped work to projects still in design, each with its current status.",
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
      features: "Key features",
      challenges: "Technical challenges",
      learned: "What I learned",
    },
    statusValues: {
      shipped: "Shipped",
      deployed: "Deployed",
      dev: "In development",
      docs: "In design",
    },
    learning: {
      eyebrow: "My path",
      steps: [
        "Programming basics",
        "Python",
        "Django",
        "REST APIs / DRF",
        "React",
        "TypeScript",
        "Software architecture",
      ],
    },
    contact: {
      title: "Get in touch",
      subtitle:
        "I'm looking for an internship or a first developer role, and I'm open to collaborations. Email is the fastest way to reach me.",
    },
    footer: "Site source code",
  },
};
