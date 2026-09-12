import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const STEPS = [
  "Programming fundamentals",
  "Python",
  "Django",
  "REST APIs / DRF",
  "React",
  "TypeScript",
  "Software architecture",
];

export function LearningJourney() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-16">
        <p className="mb-6 font-mono text-sm text-muted">{t.learning.eyebrow}</p>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-muted">
          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2"
            >
              <span className={i === STEPS.length - 1 ? "font-medium text-text" : ""}>{step}</span>
              {i < STEPS.length - 1 && <span aria-hidden="true">→</span>}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
