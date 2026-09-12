import { useState } from "react";
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

function AppContent() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const { t } = useLanguage();
  const openProject = openSlug ? projects.find((p) => p.slug === openSlug) : null;

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <AnimatePresence mode="wait">
        {openProject ? (
          <motion.div key="detail" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <ProjectDetail project={openProject} onBack={() => setOpenSlug(null)} />
          </motion.div>
        ) : (
          <motion.div key="home" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Hero />
            <About />
            <Stack />
            <Projects onOpen={setOpenSlug} />
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
