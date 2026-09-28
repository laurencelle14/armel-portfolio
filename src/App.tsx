import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Stack } from "@/sections/Stack";
import { Projects } from "@/sections/Projects";
import { LearningJourney } from "@/sections/LearningJourney";
import { Contact } from "@/sections/Contact";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/data/projects";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

const PROJECT_PREFIX = "#projet/";

function slugFromHash(): string | null {
  const hash = window.location.hash;
  return hash.startsWith(PROJECT_PREFIX) ? decodeURIComponent(hash.slice(PROJECT_PREFIX.length)) : null;
}

function scrollAfterViewChange() {
  requestAnimationFrame(() => {
    const hash = window.location.hash;
    if (hash && !hash.startsWith(PROJECT_PREFIX)) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  });
}

// Hash-based routing: shareable project URLs (#projet/anitche),
// browser back button works, and navbar anchors close the detail view.
function useProjectRoute() {
  const [slug, setSlug] = useState<string | null>(slugFromHash);

  useEffect(() => {
    const onHashChange = () => setSlug(slugFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const open = (next: string) => {
    window.location.hash = `projet/${encodeURIComponent(next)}`;
  };
  const close = () => {
    window.location.hash = "projects";
  };

  return { slug, open, close };
}

function AppContent() {
  const { slug, open, close } = useProjectRoute();
  const { t } = useLanguage();
  const openProject = slug ? projects.find((p) => p.slug === slug) : null;

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={scrollAfterViewChange}>
        {openProject ? (
          <motion.div key="detail" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <ProjectDetail project={openProject} onBack={close} />
          </motion.div>
        ) : (
          <motion.div key="home" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Hero />
            <About />
            <Stack />
            <Projects onOpen={open} />
            <LearningJourney />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer footerText={t.footer} />
    </div>
  );
}

function Footer({ footerText }: { footerText: string }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-8 text-xs text-muted">
        © {new Date().getFullYear()} Laurencelle Louis Armel Akpa. {footerText}
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
