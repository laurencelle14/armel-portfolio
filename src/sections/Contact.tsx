import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAIL = "laurencelleakpa18@gmail.com";
const GITHUB_URL = "https://github.com/laurencelle14";
const LINKEDIN_URL = "https://www.linkedin.com/in/laurencelle-akpa-522484432";

export function Contact() {
  const { t } = useLanguage();

  const cards = [
    { href: `mailto:${EMAIL}`, icon: Mail, label: EMAIL },
    { href: GITHUB_URL, icon: Github, label: "GitHub" },
    { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-muted">{t.contact.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
          <p className="mb-10 max-w-lg text-muted">{t.contact.subtitle}</p>
        </Reveal>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {cards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={card.href.startsWith("mailto:") ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="focus-ring inline-flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 transition-colors duration-200 hover:border-text/30"
            >
              <card.icon size={18} />
              <span className="text-sm">{card.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
