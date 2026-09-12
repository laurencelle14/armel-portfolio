import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="mx-auto flex max-w-content flex-col-reverse items-center justify-center gap-12 px-6 pb-24 pt-16 md:flex-row md:items-center md:gap-16 md:pt-28 md:pb-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 text-center md:text-left"
      >
        <motion.p variants={item} className="mb-5 font-mono text-sm text-muted">
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Laurencelle Louis Armel Akpa
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-xl font-medium text-muted sm:text-2xl">
          {t.hero.role}
        </motion.p>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <a
            href="#projects"
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform duration-200 ease-smooth hover:-translate-y-0.5"
          >
            {t.hero.viewProjects}
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-text/40"
          >
            <Mail size={16} />
            {t.hero.contact}
          </a>
          {/* Add your real CV file to /public and update the href below. */}
          <a
            href="/cv.pdf"
            className="focus-ring inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted transition-colors duration-200 hover:text-text"
          >
            <Download size={16} />
            {t.hero.downloadCV}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-shrink-0"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-surface sm:h-52 sm:w-52 md:h-64 md:w-64">
          <img
            src="/images/profile.jpg"
            alt="Laurencelle Louis Armel Akpa"
            className="h-full w-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted shadow-sm"
        >
          Python · Django · React
        </motion.div>
      </motion.div>
    </section>
  );
}
