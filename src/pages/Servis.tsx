import { Link } from "react-router";
import Icon, { type IconName } from "@/components/Icon";
import { CtaBand, Eyebrow, PageHero, Seo } from "@/components/ui";
import { contact } from "@/data/site";

const items: [IconName, string, string][] = [
  ["service", "Seřízení oken a dveří", "Křídlo drhne, netěsní nebo se špatně zavírá? Seřídíme kování a obnovíme těsnost."],
  ["window", "Výměna okenních a dveřních prvků", "Poškozené sklo, těsnění, klika, pant nebo vložka — vyměníme za originální díly."],
  ["sun", "Servis stínicí techniky", "Opravy a seřízení žaluzií, rolet a sítí proti hmyzu."],
  ["shield", "Záruční i pozáruční servis", "Staráme se o okna, která jsme montovali, i o ta od jiných dodavatelů."],
];

export default function Servis() {
  return (
    <>
      <Seo
        title="Servis a opravy oken a dveří — Stříbro, Tachov, Plzeň"
        description="Záruční i pozáruční servis, seřízení a opravy oken, dveří a stínicí techniky. Výměna prvků, odborné poradenství. EDO OKNA, Černošín."
      />
      <PageHero
        eyebrow="Servis a opravy"
        title="Když okno drhne, netěsní nebo se rosí — pomůžeme"
        lead="Poskytujeme záruční i pozáruční servis a opravy oken, dveří a stínicí techniky. Rádi vám poradíme a doporučíme vhodné řešení."
        image="/img/b-4.jpg"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
            <div>
              <Eyebrow>Co zajišťujeme</Eyebrow>
              <h2>Profesionální montáže, opravy a seřízení</h2>
            </div>
            <p className="leading-7 text-black/58 lg:justify-self-end">
              Nabízíme slušné jednání, profesionální přístup a rychle a kvalitně odvedenou práci. Pomůžeme i s výběrem vhodného řešení, pokud oprava už nedává smysl.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {items.map(([icon, title, text]) => (
              <article key={title} className="flex gap-6 border border-black/10 bg-white p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#2E6B8A]/10 text-[#2E6B8A]"><Icon name={icon} /></div>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E2429] text-white">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-5 py-16 lg:grid-cols-3 lg:py-20">
          <div className="lg:col-span-2">
            <Eyebrow>Jak objednat servis</Eyebrow>
            <h2 className="text-3xl">Zavolejte nebo napište, co se děje</h2>
            <p className="mt-5 max-w-xl leading-7 text-white/60">
              Popište závadu, ideálně s fotkou. Ozveme se, domluvíme termín a přijedeme s potřebnými díly. U starších oken doporučíme, zda se oprava vyplatí, nebo je čas na výměnu.
            </p>
          </div>
          <div className="space-y-4 border-l border-white/15 pl-8">
            {contact.phones.map((p) => (
              <a key={p.href} href={p.href} className="flex items-center gap-3 text-xl font-bold hover:text-[#79B5CF]"><Icon name="phone" className="h-5 w-5 text-[#73AFCB]" /> {p.display}</a>
            ))}
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm hover:text-[#79B5CF]"><Icon name="mail" className="h-5 w-5 text-[#73AFCB]" /> {contact.email}</a>
            <p className="flex items-center gap-3 text-sm text-white/55"><Icon name="clock" className="h-5 w-5 text-[#73AFCB]" /> {contact.hours}</p>
            <Link to="/kontakt" className="btn-blue mt-4 px-6 py-3 text-xs">Poptat servis</Link>
          </div>
        </div>
      </section>

      <CtaBand title="Nebo je čas na nová okna?" text="Poradíme, kdy se oprava ještě vyplatí a kdy už ušetříte výměnou za profily Kömmerling." />
    </>
  );
}
