import Icon from "@/components/Icon";
import { ChecklistItem, CtaBand, Eyebrow, PageHero, Seo } from "@/components/ui";
import { blinds, stock } from "@/data/site";

export default function ZaluzieSite() {
  return (
    <>
      <Seo
        title="Montáž žaluzií, rolet a sítí proti hmyzu — Stříbro, Tachov, Plzeň"
        description="Horizontální, vertikální a zatemňující žaluzie, předokenní rolety a sítě proti hmyzu. Poradenství, zaměření, demontáž starých a montáž nových. EDO OKNA, Plzeňský kraj."
      />
      <PageHero
        eyebrow="Žaluzie, rolety a sítě"
        title="Světlo, soukromí a klid od hmyzu — přesně podle vás"
        lead="Široký výběr stínicí techniky v mnoha barvách a vzorech. Plus nenápadné sítě proti hmyzu do nových i stávajících oken a dveří."
        image={stock.blinds}
        imageAlt="Plisé žaluzie v interiéru"
        imagePosition="object-[center_40%]"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <Eyebrow>Montáž žaluzií</Eyebrow>
              <h2>Ochrana před sluncem i stylový doplněk</h2>
              <p className="mt-6 leading-7 text-black/55">
                Žaluzie plní nejen funkci ochrany před přímým slunečním zářením a soukromí, ale i funkci estetickou. Vybírat můžete z mnoha barev lamel a vzorů, aby ladily s okny i interiérem.
              </p>
              <ul className="mt-8 space-y-3">
                <ChecklistItem>Poradenství a výběr vhodného typu</ChecklistItem>
                <ChecklistItem>Přesné zaměření na místě</ChecklistItem>
                <ChecklistItem>Demontáž stávajících žaluzií</ChecklistItem>
                <ChecklistItem>Montáž nových žaluzií a rolet</ChecklistItem>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {blinds.map(([title, text], i) => (
                <article key={title} className="border border-black/10 bg-white p-7 shadow-[0_15px_40px_rgba(20,30,35,.05)]">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon name={i === 3 ? "shield" : "sun"} className="h-8 w-8 text-[#2E6B8A]" />
                    <span className="text-2xl font-light text-black/15">0{i + 1}</span>
                  </div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E7ECEB]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden">
            <img src="/img/foto/plise-zaluzie.jpg" alt="Plisé žaluzie na oknech v novostavbě" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="section-pad px-5 lg:pl-20 lg:pr-[max(2rem,calc((100vw-1220px)/2))]">
            <Eyebrow warm>Předokenní rolety</Eyebrow>
            <h2>Rolety, které v zimě šetří teplo a v létě chladí</h2>
            <p className="mt-6 max-w-xl leading-7 text-black/58">
              Předokenní roleta vytváří před oknem další izolační vrstvu vzduchu. V létě zastaví přehřívání interiéru, v zimě sníží tepelné ztráty a zároveň zvýší bezpečnost domu. Dodáváme v barvě sladěné s okny.
            </p>
          </div>
        </div>
      </section>

      <section id="site" className="section-pad scroll-mt-20 bg-[#1E2429] text-[#EFEFEA]">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Sítě proti hmyzu</Eyebrow>
              <h2>Zbavte se hmyzu jednou provždy</h2>
              <p className="mt-6 leading-7 text-white/60">
                Díky sítím proti hmyzu už nemusíte kupovat drahé a často nefunkční spreje a odpuzovače. Sítě jsou nenápadné a nijak nebrání v otevírání, zavírání ani vyklápění oken.
              </p>
              <p className="mt-4 leading-7 text-white/60">
                Vyrábějí se z jemného, ale velmi odolného vlákna, které odolá teplotám i povětrnostním vlivům. Dodáváme a instalujeme je do nových i starých oken a dveří — pro dům, byt i kancelář.
              </p>
              <ul className="mt-8 space-y-3">
                <ChecklistItem>Okenní sítě pevné i otevíravé</ChecklistItem>
                <ChecklistItem>Dveřní sítě na panty nebo posuvné</ChecklistItem>
                <ChecklistItem>Rám v barvě okna</ChecklistItem>
              </ul>
            </div>
            <div className="relative min-h-[360px] overflow-hidden border border-white/10">
              <img src="/img/b-3.jpg" alt="Detail sítě proti hmyzu v okenním rámu" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Chcete žaluzie, rolety nebo sítě?" text="Přijedeme, zaměříme a doporučíme vhodný typ. Zaměření je zdarma." />
    </>
  );
}
