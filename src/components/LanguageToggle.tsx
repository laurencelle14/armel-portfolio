import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      className="focus-ring inline-flex h-9 items-center justify-center rounded-full border border-border px-3 text-xs font-medium text-muted transition-colors duration-200 hover:text-text hover:border-text/30"
    >
      {lang === "fr" ? "FR" : "EN"}
    </button>
  );
}
