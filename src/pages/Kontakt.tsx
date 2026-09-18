import { Link } from "react-router";
import Icon, { type IconName } from "@/components/Icon";
import ContactSection from "@/components/ContactSection";
import { Eyebrow, Seo } from "@/components/ui";
import { contact } from "@/data/site";

const facts: [IconName, string, string][] = [
  ["pin", "Sídlo", `${contact.street}, ${contact.city}`],
  ["clock", "Otevírací doba", `${contact.hours}, So–Ne zavřeno`],
  ["ruler", "Kde montujeme", contact.region],
  ["building", "Fakturační údaje", `${contact.owner} · IČ ${contact.ic} · DIČ ${contact.dic}`],
];

export default function Kontakt() {
  return (
    <>
      <Seo
        title="Kontakt — Emil Doha, Černošín"
        description="EDO OKNA, Emil Doha, Javorová 282, 349 58 Černošín. Telefon 605 148 738, 602 148 738, e-mail emildoha@tiscali.cz. Po–Pá 8–16. IČ 75950537."
      />
      <section className="bg-[#1E2429] text-white">
        <div className="mx-auto max-w-[1220px] px-5 pt-14 pb-14 lg:pt-20 lg:pb-20">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> Úvod
          </Link>
          <Eyebrow>Kontakt</Eyebrow>
          <h1 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">Ozvěte se, přijedeme a zaměříme</h1>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([icon, label, value]) => (
              <div key={label} className="bg-[#1E2429] py-6 sm:px-6 first:pl-0">
                <Icon name={icon} className="h-6 w-6 text-[#73AFCB]" />
                <span className="contact-label mt-4">{label}</span>
                <p className="text-sm leading-6 text-white/80">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection compact />
    </>
  );
}
