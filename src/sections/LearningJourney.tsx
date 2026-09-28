import { useLanguage } from "@/i18n/LanguageContext";

export function LearningJourney() {
  const { t } = useLanguage();
  const steps = t.learning.steps;

  return (
    <section id="learning" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-16">
        <p className="mb-6 text-sm font-semibold">{t.learning.eyebrow}</p>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-muted">
          {steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className={i === steps.length - 1 ? "font-medium text-accent" : ""}>{step}</span>
              {i < steps.length - 1 && <span aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
