import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const TIER_ITEMS = {
  main: ["Python", "Django", "Django REST Framework", "React", "JavaScript", "TypeScript", "PostgreSQL", "Git", "GitHub"],
  familiar: ["Tailwind CSS", "shadcn/ui", "Linux"],
  exploring: ["Rust", "Docker", "AI", "Software Architecture", "Cloud", "Cybersecurity", "DevSecOps"],
};

export function Stack() {
  const { t } = useLanguage();

  const tiers = [
    { title: t.stack.main, note: t.stack.mainNote, items: TIER_ITEMS.main },
    { title: t.stack.familiar, note: t.stack.familiarNote, items: TIER_ITEMS.familiar },
    { title: t.stack.exploring, note: t.stack.exploringNote, items: TIER_ITEMS.exploring },
  ];

  return (
    <section id="stack" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-muted">{t.stack.eyebrow}</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.stack.title}</h2>
          <p className="mb-12 max-w-lg text-muted">{t.stack.subtitle}</p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <Reveal key={tier.title} delay={tierIndex * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-text/20">
                <h3 className="text-sm font-semibold">{tier.title}</h3>
                <p className="mt-1 text-xs text-muted">{tier.note}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tier.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-text"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
