import Icon from "@/components/Icon";
import { ChecklistItem, CtaBand, Eyebrow, PageHero, Seo } from "@/components/ui";
import { stock } from "@/data/site";

export default function GarazovaVrata() {
  return (
    <>
      <Seo
        title="Garážová vrata TRIDO — sekční a rolovací, s elektrickým pohonem"
        description="Sekční a rolovací garážová vrata české značky TRIDO. Elektrický pohon, dálkové ovládání, zateplené lamely. Zaměření a montáž v Plzeňském kraji."
      />
      <PageHero
        eyebrow="Garážová vrata"
        title="Sekční i rolovací vrata TRIDO, i s elektrickým pohonem"
        lead="Spolehlivá garážová vrata navržená na míru vašemu domu. Komfortní ovládání elektrickým pohonem a dálkovým ovladačem — z auta, bez vystupování."
        image={stock.garage}
        imageAlt="Sekční garážová vrata TRIDO v dekoru dřeva"
        imagePosition="object-[center_58%]"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <Eyebrow>Dva typy vrat</Eyebrow>
          <h2>Vyberte podle prostoru v garáži</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="border border-black/10 bg-white p-8 lg:p-10">
              <Icon name="garage" className="h-10 w-10 text-[#2E6B8A]" />
              <h3 className="mt-6 text-2xl font-bold">Sekční vrata</h3>
              <p className="mt-4 leading-7 text-black/58">
                Vrata složená z vodorovných zateplených lamel, která se při otevírání zasouvají pod strop garáže. Nezabírají místo před garáží ani v ní. Nejoblíbenější volba pro rodinné domy.
              </p>
              <ul className="mt-6 space-y-3">
                <ChecklistItem>Zateplené lamely — teplejší garáž a přilehlé místnosti</ChecklistItem>
                <ChecklistItem>Široký výběr povrchů a barev sladěných s okny</ChecklistItem>
                <ChecklistItem>Možnost prosklení nebo integrovaných dveří</ChecklistItem>
              </ul>
            </article>
            <article className="border border-black/10 bg-white p-8 lg:p-10">
              <Icon name="grid" className="h-10 w-10 text-[#2E6B8A]" />
              <h3 className="mt-6 text-2xl font-bold">Rolovací vrata</h3>
              <p className="mt-4 leading-7 text-black/58">
                Lamely se navíjejí do kompaktního boxu nad otvorem. Ideální tam, kde pod stropem není místo na vodicí dráhy — nízké garáže, průjezdy, řadové domy.
              </p>
              <ul className="mt-6 space-y-3">
                <ChecklistItem>Minimální nároky na prostor</ChecklistItem>
                <ChecklistItem>Hliníkové lamely s izolační výplní</ChecklistItem>
                <ChecklistItem>Vhodné i pro dodatečnou montáž</ChecklistItem>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-1 sm:grid-cols-2">
          <figure className="gallery-item min-h-[340px]">
            <img src="/img/foto/garazova-vrata-sekcni.jpg" alt="Hotová sekční vrata TRIDO v dekoru dřeva" className="h-full w-full object-cover" />
            <figcaption><span>Sekční vrata TRIDO, dekor zlatý dub</span></figcaption>
          </figure>
          <figure className="gallery-item min-h-[340px]">
            <img src="/img/foto/garazova-vrata-hruba-stavba.jpg" alt="Montáž garážových vrat v hrubé stavbě" className="h-full w-full object-cover" />
            <figcaption><span>Montáž vrat a oken v hrubé stavbě</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-[#1E2429] text-[#EFEFEA]">
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_.8fr] lg:py-24">
          <div>
            <Eyebrow warm>Pohon a ovládání</Eyebrow>
            <h2>Otevřete z auta, aniž byste vystoupili</h2>
            <p className="mt-6 max-w-xl leading-7 text-white/60">
              Elektrický pohon s tichým chodem a dálkovým ovladačem. Vrata se při překážce automaticky zastaví a vrátí, při výpadku proudu je lze odblokovat a otevřít ručně.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/15">
            {[
              ["remote", "Dálkové ovládání"],
              ["shield", "Bezpečnostní stop"],
              ["lock", "Zamykání v zavřené poloze"],
              ["service", "Servis a náhradní díly"],
            ].map(([icon, text]) => (
              <div key={text} className="bg-[#1E2429] p-6">
                <Icon name={icon as "remote"} className="h-8 w-8 text-[#E9A15B]" /><b className="mt-6 block text-sm">{text}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Chcete nabídku na garážová vrata?" text="Zaměříme otvor, doporučíme typ a připravíme cenu včetně montáže a pohonu." />
    </>
  );
}
