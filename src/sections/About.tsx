import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const facts = [
    { label: t.about.status, value: t.about.statusValue },
    { label: t.about.focus, value: t.about.focusValue },
    { label: t.about.core, value: t.about.coreValue },
    { label: t.about.exploring, value: t.about.exploringValue },
  ];

  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{t.about.title}</h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-text">{t.about.p1}</p>
            <p className="mt-5 leading-relaxed text-muted">{t.about.p2}</p>
            <p className="mt-5 leading-relaxed text-muted">{t.about.p3}</p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="mb-4 text-sm font-medium text-accent">{t.about.currently}</p>
              <ul className="space-y-3 text-sm">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex justify-between gap-4">
                    <span className="text-muted">{fact.label}</span>
                    <span className="text-right">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
