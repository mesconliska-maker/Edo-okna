import { useState } from "react";
import Icon from "@/components/Icon";
import { ChecklistItem, CtaBand, Eyebrow, PageHero, Seo } from "@/components/ui";
import { doorHardware, profiles, windowHardware, type Profile } from "@/data/site";

const steps = [
  ["Odborné poradenství", "Zdarma probereme typ domu, orientaci, požadavky na izolaci i rozpočet."],
  ["Zaměření", "Přijedeme, zaměříme každý otvor a navrhneme přesné řešení."],
  ["Demontáž původních oken", "Šetrně odstraníme stará okna a dveře, včetně odvozu."],
  ["Montáž oken a dveří", "Precizní osazení, kotvení a utěsnění podle technologických postupů."],
  ["Montáž parapetů", "Vnitřní i venkovní parapety v barvě podle vašeho výběru."],
  ["Zednické práce", "Omítky, začištění ostění — předáváme hotové, čisté dílo."],
];

function ProfileCard({ profile }: { profile: Profile }) {
  const [variant, setVariant] = useState(0);
  return (
    <article id={`profil-${profile.num}`} className="scroll-mt-28 border border-black/10 bg-white shadow-[0_20px_60px_rgba(20,30,35,.06)]">
      <div className="grid lg:grid-cols-[.9fr_1.1fr]">
        <div className="bg-[#F3F3EE] p-8">
          <div className="flex items-start justify-between">
            <span className="text-8xl font-extrabold tracking-[-.08em] text-[#1B2126]/8">{profile.num}</span>
            <img src="/img/koemmerling.png" alt="Kömmerling" className="h-7" />
          </div>
          <img src={profile.variants[variant].image} alt={`Řez profilem Kömmerling ${profile.num} — ${profile.variants[variant].name}`} className="mx-auto -mt-6 h-64 w-64 object-contain" />
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {profile.variants.map((v, i) => (
              <button
                key={v.name}
                type="button"
                onClick={() => setVariant(i)}
                className={`px-3 py-2 text-xs font-bold transition ${i === variant ? "bg-[#2E6B8A] text-white" : "bg-white text-black/60 hover:text-black"}`}
              >
                {v.name}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-black/45">Široká škála barevných dekorů — ukázka čtyř nejžádanějších.</p>
        </div>
        <div className="p-8 lg:p-10">
          <p className="text-[10px] font-bold tracking-[.2em] text-[#2E6B8A] uppercase">Profilový systém</p>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight">{profile.title}</h3>
          <p className="mt-4 leading-7 text-black/58">{profile.text}</p>
          <dl className="mt-7 grid grid-cols-2 gap-x-6 border-t border-black/10">
            {profile.specs.map(([label, value]) => (
              <div key={label} className="flex flex-col border-b border-black/8 py-3">
                <dt className="text-[10px] font-bold tracking-[.12em] text-black/40 uppercase">{label}</dt>
                <dd className="mt-0.5 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#C4762E]"><Icon name="check" className="h-4 w-4" /> Možnost čerpání dotace Nová zelená úsporám</p>
        </div>
      </div>
    </article>
  );
}

export default function OknaDvere() {
  return (
    <>
      <Seo
        title="Montáž oken a dveří Stříbro, Tachov, Plzeň — Kömmerling 76 a 88"
        description="Plastová, dřevěná a hliníková okna a dveře. Profily Kömmerling 76 a 88, kování Siegenia Aubi Titan AF, kliky Secustik, trojskla Swisspacer. Zaměření, montáž, parapety, začištění. Až 40 % úspora na vytápění."
      />
      <PageHero
        eyebrow="Okna a dveře"
        title={<>Plastová, dřevěná a hliníková okna, která ušetří až <span className="text-[#E09A58]">40 %</span> na vytápění</>}
        lead="Dodáváme a montujeme okna a dveře nejvyšší kvality. Značky Kömmerling, Inoutic Prestige, Arcade a Eforte. Od poradenství přes zaměření až po zednické začištění."
        image="/img/foto/novostavba-bungalov.jpg"
        imageAlt="Novostavba s hnědými okny a dveřmi"
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#profily" className="btn-blue px-7 py-4">Profily Kömmerling 76 a 88</a>
          <a href="#kovani" className="btn-outline px-7 py-4">Kování a bezpečnost</a>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Eyebrow>Jak to probíhá</Eyebrow>
              <h2>Rychle a precizně, od zaměření po montáž</h2>
              <p className="mt-6 leading-7 text-black/58">
                Okna a dveře zaměříme, namontujeme včetně parapetů a začištění. S výběrem vám rádi pomůžeme — poradenství i zaměření poskytujeme zdarma.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Plastová", "Dřevěná", "Hliníková"].map((t) => (
                  <span key={t} className="border border-[#2E6B8A]/25 bg-white px-4 py-2 text-xs font-bold text-[#2E6B8A]">{t} okna a dveře</span>
                ))}
              </div>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {steps.map(([title, text], i) => (
                <li key={title} className="border border-black/10 bg-white p-6">
                  <span className="text-xs font-bold tracking-widest text-[#2E6B8A]">0{i + 1}</span>
                  <h3 className="mt-3 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="profily" className="section-pad scroll-mt-20 bg-[#E7ECEB]">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
            <div>
              <Eyebrow>Technologie</Eyebrow>
              <h2>Profily Kömmerling — dlouhá životnost, reálná úspora</h2>
            </div>
            <p className="leading-7 text-black/58 lg:justify-self-end">
              Montujeme plastové okenní profily německého výrobce Kömmerling ve dvou variantách. Oba systémy s ekologickým jádrem, třemi těsněními a trojsklem plně vyhovují nárokům pasivních a energeticky úsporných domů.
            </p>
          </div>
          <div className="mt-14 grid gap-8">
            {profiles.map((profile) => <ProfileCard key={profile.num} profile={profile} />)}
          </div>
          <p className="mt-8 text-sm text-black/45">Pracujeme také s profilovými systémy Inoutic Prestige, Arcade a Eforte.</p>
        </div>
      </section>

      <section id="kovani" className="section-pad scroll-mt-20 bg-[#1E2429] text-[#EFEFEA]">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Kování oken</Eyebrow>
              <h2>Siegenia Aubi Titan AF s pojistkou proti chybnému otevření</h2>
              <p className="mt-6 leading-7 text-white/60">
                Okna osazujeme celoobvodovým kováním se zvýšenou bezpečností od německého výrobce Siegenia Aubi. Standardně s mikroventilací u otvíravě sklopných oken a bezpečnostními klikami Secustik.
              </p>
              <ul className="mt-8 space-y-4">
                {windowHardware.map(([title, text]) => (
                  <ChecklistItem key={title}><b className="text-white">{title}</b> <span className="text-white/60">— {text}</span></ChecklistItem>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Vchodové dveře</Eyebrow>
              <h2>Bezpečnostní výbava vchodových dveří</h2>
              <p className="mt-6 leading-7 text-white/60">
                Dveře jsou osazeny panty Joker, vícebodovým kováním KFV a bezpečnostní vložkou Mul-T-Lock 7×7 s pěti klíči a bezpečnostní kartou proti nelegálnímu kopírování.
              </p>
              <ul className="mt-8 space-y-4">
                {doorHardware.map(([title, text]) => (
                  <ChecklistItem key={title}><b className="text-white">{title}</b> <span className="text-white/60">— {text}</span></ChecklistItem>
                ))}
              </ul>
              <div className="mt-10 grid grid-cols-2 gap-3">
                <img src="/img/foto/vchodove-dvere-antracit.jpg" alt="Moderní vchodové dveře v antracitu" className="h-56 w-full object-cover" />
                <img src="/img/gallery/foto05.jpg" alt="Vchodové dveře v dekoru dřeva" className="h-56 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
            <div>
              <Eyebrow>Velkoplošné prosklení</Eyebrow>
              <h2>Posuvné HS portály a zimní zahrady</h2>
            </div>
            <p className="leading-7 text-black/58 lg:justify-self-end">
              Zdvižně-posuvné dveře (HS portál) otevřou obývací pokoj na terasu bez prahu a bez sloupků. Prosklené stěny a zimní zahrady stavíme ze stejných profilů Kömmerling — se stejnou izolací jako okna.
            </p>
          </div>
          <div className="mt-12 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/img/foto/hs-portal-dub.jpg", "Posuvný HS portál, dekor zlatý dub"],
              ["/img/foto/zimni-zahrada.jpg", "Prosklení zimní zahrady"],
              ["/img/foto/proskleni-terasa.jpg", "Prosklená stěna na terasu"],
            ].map(([src, title]) => (
              <figure key={src} className="gallery-item">
                <img src={src} alt={title} loading="lazy" className="h-full w-full object-cover" />
                <figcaption><span>{title}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E7ECEB]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden">
            <img src="/img/gallery/Image01.jpg" alt="Řez okenním profilem s izolačním trojsklem" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="section-pad px-5 lg:pl-20 lg:pr-[max(2rem,calc((100vw-1220px)/2))]">
            <Eyebrow>Zasklení</Eyebrow>
            <h2>Izolační skla s teplým rámečkem Swisspacer</h2>
            <p className="mt-6 max-w-xl leading-7 text-black/58">
              Distanční rámeček Swisspacer je vyroben z materiálu s nízkou tepelnou vodivostí. Oproti hliníkovému rámečku výrazně omezuje tepelný most na okraji skla — sklo je u rámu teplejší, nerosí se a neplesniví. Profily 76 a 88 standardně osazujeme izolačním trojsklem, dvojsklo dodáme na přání.
            </p>
            <ul className="mt-8 space-y-3">
              <ChecklistItem>Nižší tepelné ztráty po celé ploše okna</ChecklistItem>
              <ChecklistItem>Vyšší odolnost proti kondenzaci a plísním</ChecklistItem>
              <ChecklistItem>Zvuková izolace až 40 dB</ChecklistItem>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
