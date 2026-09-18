import { Link } from "react-router";
import Icon, { type IconName } from "@/components/Icon";
import { ChecklistItem, CtaBand, Eyebrow, PageHero, Seo } from "@/components/ui";
import { contact } from "@/data/site";

const promises: [IconName, string, string][] = [
  ["check", "Přesná technická specifikace", "Nabídka s parametry profilů, zasklení a kování podle zadávací dokumentace."],
  ["clock", "Harmonogram podle provozu", "Montáž o prázdninách, mimo úřední hodiny nebo po etapách, aby provoz nebyl omezen."],
  ["shield", "Spolehlivé plnění", "Držitel certifikace Spolehlivá firma. Termíny a rozpočet, na které se dá spolehnout."],
  ["building", "Předání a dokumentace", "Předávací protokol, revize, prohlášení o shodě a záruční podmínky."],
];

export default function Instituce() {
  return (
    <>
      <Seo
        title="Nabídka pro školy a státní správu — výměna oken a dveří"
        description="Výměna oken a dveří pro školy, obce a orgány státní správy. Transparentní nabídka, harmonogram mimo provoz, zkušenosti s veřejnými zakázkami. EDO OKNA, Plzeňský kraj."
      />
      <PageHero
        eyebrow="Pro školy a státní správu"
        title="Zkušenosti i s veřejnými zakázkami"
        lead="Připravujeme samostatné, transparentní nabídky pro školy, obce a orgány státní správy. Od technické specifikace přes harmonogram až po přesné předání."
        warm
        image="/img/gallery/foto09.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
            <div>
              <Eyebrow warm>Co od nás dostanete</Eyebrow>
              <h2>Nabídka, kterou lze bez úprav předložit ke schválení</h2>
            </div>
            <p className="leading-7 text-black/58 lg:justify-self-end">
              Víme, že u veřejných zakázek rozhoduje úplnost dokumentace a dodržení termínů. Nabídku připravíme tak, aby obsahovala vše, co potřebujete pro výběrové řízení nebo rozhodnutí rady.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {promises.map(([icon, title, text]) => (
              <article key={title} className="flex gap-6 border border-black/10 bg-white p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#C4762E]/10 text-[#C4762E]"><Icon name={icon} /></div>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2E6B8A] text-white">
        <div className="mx-auto grid max-w-[1220px] gap-6 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <article className="border border-white/20 bg-white/5 p-8 lg:p-10">
            <Icon name="school" className="h-10 w-10 text-[#E9A15B]" />
            <h3 className="mt-6 text-2xl font-bold">Nabídka pro školy</h3>
            <p className="mt-4 leading-7 text-white/70">
              Mateřské, základní i střední školy. Výměnu oken plánujeme na prázdniny a víkendy, aby výuka nebyla narušena.
            </p>
            <ul className="mt-6 space-y-3">
              <ChecklistItem>Bezpečnostní kliky se zámkem do učeben</ChecklistItem>
              <ChecklistItem>Mikroventilace pro zdravé klima ve třídách</ChecklistItem>
              <ChecklistItem>Zvuková izolace až 40 dB</ChecklistItem>
            </ul>
          </article>
          <article className="border border-white/20 bg-white/5 p-8 lg:p-10">
            <Icon name="building" className="h-10 w-10 text-[#E9A15B]" />
            <h3 className="mt-6 text-2xl font-bold">Nabídka pro státní správu</h3>
            <p className="mt-4 leading-7 text-white/70">
              Obecní úřady, radnice, kulturní domy, hasičské zbrojnice a další obecní budovy. Rozumíme požadavkům dotačních programů.
            </p>
            <ul className="mt-6 space-y-3">
              <ChecklistItem>Parametry splňující podmínky dotací na úspory energií</ChecklistItem>
              <ChecklistItem>Montáž mimo úřední hodiny nebo po etapách</ChecklistItem>
              <ChecklistItem>Kompletní dokumentace k předání</ChecklistItem>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1220px] px-5 text-center">
          <Eyebrow warm>Reference</Eyebrow>
          <h2 className="mx-auto">Rádi vám ukážeme dokončené realizace</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-black/58">
            Reference z veřejných zakázek předkládáme na vyžádání spolu s nabídkou. Zavolejte na {contact.phones[0].display} nebo napište.
          </p>
          <Link to="/kontakt" className="btn-blue mt-8 px-7 py-4">Vyžádat nabídku <Icon name="arrow" className="h-5 w-5" /></Link>
        </div>
      </section>

      <CtaBand title="Připravujete výměnu oken ve škole nebo na úřadě?" text="Pošlete nám zadání nebo výkaz výměr — připravíme nabídku k předložení." />
    </>
  );
}
