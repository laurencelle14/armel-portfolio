import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const TIER_ITEMS = {
  main: ["Python", "Django", "Django REST Framework", "React", "JavaScript", "TypeScript", "PostgreSQL", "Git", "GitHub"],
  familiar: ["Tailwind CSS", "shadcn/ui", "Linux", "Rust", "Tauri", "SQLite"],
  exploring: ["FastAPI", "Docker", "AI / ML", "Software Architecture", "Cloud", "Cybersecurity", "DevSecOps"],
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
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.stack.title}</h2>
          <p className="mb-12 max-w-lg text-muted">{t.stack.subtitle}</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.title} className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold">{tier.title}</h3>
              <p className="mt-1 text-xs text-muted">{tier.note}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tier.items.map((item) => (
                  <li key={item} className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-text">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
