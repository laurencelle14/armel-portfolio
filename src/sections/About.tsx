import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-muted">{t.about.eyebrow}</p>
          <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{t.about.title}</h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal delay={0.1} className="md:col-span-3">
            <p className="text-lg leading-relaxed text-text">{t.about.p1}</p>
            <p className="mt-5 leading-relaxed text-muted">{t.about.p2}</p>
            <p className="mt-5 leading-relaxed text-muted">{t.about.p3}</p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-text/20">
              <p className="mb-4 text-sm font-medium text-muted">{t.about.currently}</p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between gap-4">
                  <span className="text-muted">{t.about.status}</span>
                  <span className="text-right">{t.about.statusValue}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted">{t.about.focus}</span>
                  <span className="text-right">{t.about.focusValue}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted">{t.about.core}</span>
                  <span className="text-right">{t.about.coreValue}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted">{t.about.exploring}</span>
                  <span className="text-right">{t.about.exploringValue}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
