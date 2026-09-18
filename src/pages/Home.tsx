import { Link } from "react-router";
import Icon from "@/components/Icon";
import ContactSection from "@/components/ContactSection";
import { Eyebrow, Seo } from "@/components/ui";
import { blinds, galleryPhotos, profiles, services, stock, windowHardware } from "@/data/site";

export default function Home() {
  return (
    <>
      <Seo
        title="Montáž oken, dveří a žaluzií — Stříbro, Tachov, Plzeň"
        description="Plastová, dřevěná a hliníková okna a dveře s profily Kömmerling, kováním Siegenia Aubi Titan AF a zasklením Swisspacer. Žaluzie, sítě proti hmyzu, garážová vrata TRIDO. Emil Doha, Černošín."
      />

      <section className="relative min-h-[760px] overflow-hidden bg-[#1E2429] text-white">
        <img src={stock.hero} alt="Moderní rodinný dům s velkými okny" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,28,.96)_0%,rgba(18,24,28,.82)_48%,rgba(18,24,28,.18)_100%)]" />
        <div className="absolute inset-0 technical-grid opacity-20" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1280px] items-center px-5 py-24 lg:px-8">
          <div className="max-w-[820px]">
            <p className="mb-7 max-w-2xl text-[11px] font-bold tracking-[0.2em] text-[#86BDD5] uppercase sm:text-xs">
              Montáž oken a dveří ve Stříbře, Tachově, Mariánských Lázních a Plzni
            </p>
            <h1 className="max-w-[800px] text-[2.65rem] leading-[1.03] font-extrabold tracking-[-0.045em] sm:text-6xl lg:text-[4.65rem]">
              Okna a dveře, které vám ušetří až <span className="text-[#E09A58]">40 %</span> nákladů na vytápění
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Plastová, dřevěná a hliníková okna s profily Kömmerling, kováním Siegenia Aubi Titan AF a zasklením Swisspacer.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/kontakt" className="btn-blue px-7 py-4">Nezávazná poptávka <Icon name="arrow" className="h-5 w-5" /></Link>
              <Link to="/okna-a-dvere" className="btn-outline px-7 py-4">Prohlédnout technologie</Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-semibold tracking-wide text-white/65">
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#E09A58]" /> Zaměření a konzultace zdarma</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#E09A58]" /> Precizní montáž</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#E09A58]" /> Následný servis</span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 hidden w-[310px] border-l border-white/10 bg-[#1E2429]/90 p-7 backdrop-blur md:block">
          <p className="text-[10px] font-bold tracking-[.2em] text-[#E09A58] uppercase">Působíme v regionu</p>
          <p className="mt-2 text-sm leading-6 text-white/70">Plzeňský kraj a široké okolí Černošína</p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-black/10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-8">
          <div className="flex items-center gap-4 py-6 lg:pr-7">
            <img src="/img/spolehliva-firma.png" alt="Spolehlivá firma 2023 — ocenění Živé firmy" className="h-14 w-14 shrink-0" />
            <div><b className="block text-sm">Spolehlivá firma</b><span className="text-xs text-black/55">nejvyšší úroveň certifikace</span></div>
          </div>
          <div className="flex items-center gap-4 py-6 lg:px-7">
            <img src="/img/ceska-okna.jpg" alt="Certifikát Zaručeně česká okna" className="h-14 w-14 shrink-0" />
            <div><b className="block text-sm">Zaručeně česká okna</b><span className="text-xs text-black/55">certifikát 2018 a 2019</span></div>
          </div>
          <div className="flex items-center gap-4 py-6 lg:px-7">
            <Icon name="grid" className="h-9 w-9 shrink-0 text-[#2E6B8A]" />
            <div><b className="block text-sm">Kömmerling 76 a 88</b><span className="text-xs text-black/55">prověřené profilové systémy</span></div>
          </div>
          <div className="flex items-center gap-4 py-6 lg:pl-7">
            <Icon name="school" className="h-9 w-9 shrink-0 text-[#2E6B8A]" />
            <div><b className="block text-sm">Školy a státní správa</b><span className="text-xs text-black/55">nabídky pro veřejné zakázky</span></div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
            <div>
              <Eyebrow>Co nabízíme</Eyebrow>
              <h2>Rychle a precizně,<br />od zaměření po montáž</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/58 lg:justify-self-end">
              Kompletní dodávka bez starostí. Každý detail zaměříme, doporučíme vhodnou technologii a vše čistě dokončíme.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link to={service.to} key={service.title} className="service-card group block">
                <div className="relative -mx-[1.65rem] -mt-8 mb-7 h-40 overflow-hidden bg-[#1E2429]">
                  <img src={service.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 right-5 text-[10px] font-bold tracking-widest text-white/70">0{index + 1}</span>
                  <div className="absolute bottom-0 left-6 grid h-11 w-11 translate-y-1/2 place-items-center bg-[#2E6B8A] text-white shadow-lg">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/55">{service.text}</p>
                <span className="mt-7 flex items-center gap-2 text-xs font-bold text-[#2E6B8A]">Zjistit více <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="technologie" className="section-pad overflow-hidden bg-[#1E2429] text-[#EFEFEA]">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>Technologie</Eyebrow>
              <h2>Profily Kömmerling.<br />Dlouhá životnost,<br />reálná úspora.</h2>
              <p className="mt-7 max-w-md leading-7 text-white/58">
                Precizně navržené německé profilové systémy s výbornou tepelnou izolací pro rekonstrukce i novostavby. Oba systémy splňují nároky pasivních a nízkoenergetických domů.
              </p>
              <img src="/img/koemmerling.png" alt="Kömmerling" className="mt-7 h-8 w-auto rounded bg-white px-2 py-1" />
              <div className="mt-12 border-l-2 border-[#C4762E] pl-6">
                <b className="text-6xl tracking-[-.06em] text-[#E6A05D]">až 40 %</b>
                <p className="mt-2 text-sm font-semibold">úspora nákladů na vytápění</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {profiles.map((profile) => (
                <Link to={`/okna-a-dvere#profil-${profile.num}`} key={profile.num} className="profile-card block">
                  <div className="flex items-start justify-between">
                    <span className="text-7xl font-extrabold tracking-[-.08em] text-white/10">{profile.num}</span>
                    <img src={profile.image} alt={`Řez profilem Kömmerling ${profile.num}`} className="h-28 w-28 rounded bg-white object-contain p-1" />
                  </div>
                  <p className="mt-6 text-[10px] font-bold tracking-[.2em] text-[#6EAAC7] uppercase">Profilový systém</p>
                  <h3 className="mt-2 text-2xl font-bold">{profile.title}</h3>
                  <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-6">
                    {profile.specs.filter(([label]) => ["Stavební hloubka", "Počet komor", "Prostup tepla Uw", "Zvuková izolace"].includes(label)).map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-[10px] font-bold tracking-[.14em] text-white/40 uppercase">{label}</dt>
                        <dd className="mt-0.5 text-sm font-semibold text-white/85">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-6 flex items-center gap-2 text-xs font-bold text-[#79B5CF]">Technické parametry <Icon name="arrow" className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
            <p className="text-xs text-white/35">Pracujeme také s profilovými systémy Inoutic Prestige, Arcade a Eforte.</p>
            <p className="flex items-center gap-2 text-xs font-semibold text-[#E6A05D]"><Icon name="check" className="h-4 w-4" /> Na oba profily lze čerpat dotaci Nová zelená úsporám</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-[560px] overflow-hidden bg-[#1E2429]">
            <img src={stock.window} alt="Detail kvalitního okenního rámu" className="absolute inset-0 h-full w-full object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2429] via-transparent to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 border border-white/20 bg-[#1E2429]/85 p-6 text-white backdrop-blur">
              <div className="flex items-center gap-4">
                <Icon name="lock" className="h-9 w-9 text-[#79B0C9]" />
                <div><b className="block">Siegenia Aubi Titan AF</b><span className="text-xs text-white/55">Celoobvodové kování se zvýšenou bezpečností</span></div>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow>Kování a bezpečnost</Eyebrow>
            <h2>Německé kování Siegenia Aubi Titan AF</h2>
            <p className="mt-6 text-lg leading-8 text-black/58">
              Okna osazujeme celoobvodovým kováním se zvýšenou bezpečností od německého výrobce Siegenia Aubi. Robustní mechanismus doplňuje pojistka proti chybnému otevření.
            </p>
            <div className="mt-9 grid gap-x-6 gap-y-7 sm:grid-cols-2">
              {windowHardware.map(([title, text]) => (
                <div key={title} className="border-t border-black/15 pt-5">
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-black/50">{text}</p>
                </div>
              ))}
            </div>
            <Link to="/okna-a-dvere#kovani" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#2E6B8A]">Kování oken i vchodových dveří <Icon name="arrow" className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#E7ECEB]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="section-pad px-5 lg:pl-[max(2rem,calc((100vw-1220px)/2))] lg:pr-20">
            <Eyebrow>Zasklení</Eyebrow>
            <h2>Izolační dvojskla i trojskla s rámečkem Swisspacer</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/58">
              Teplý distanční rámeček Swisspacer omezuje tepelný most na okraji skla. Výsledkem jsou nižší tepelné ztráty a vyšší odolnost proti kondenzaci. Profily 76 a 88 standardně osazujeme trojsklem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Méně tepelných ztrát", "Omezení kondenzace", "Vyšší komfort"].map((item) => (
                <span key={item} className="border border-[#2E6B8A]/25 bg-white px-4 py-3 text-xs font-bold text-[#2E6B8A]">{item}</span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden bg-white">
            <img src="/img/gallery/Image01.jpg" alt="Řez okenním profilem s izolačním zasklením" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#E7ECEB] to-transparent" />
            <div className="absolute right-7 bottom-7 bg-[#C4762E] px-6 py-5 text-white">
              <Icon name="sun" className="mb-2 h-7 w-7" /><b className="text-sm">Teplo zůstává doma</b>
            </div>
          </div>
        </div>
      </section>

      <section id="stineni" className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <Eyebrow>Žaluzie a rolety</Eyebrow>
              <h2>Světlo přesně podle vás</h2>
              <p className="mt-6 leading-7 text-black/55">Široký výběr stínicí techniky v mnoha barvách pro soukromí, pohodlí i ochranu před letním přehříváním. K tomu sítě proti hmyzu do každého okna i dveří.</p>
              <Link to="/zaluzie-a-site" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#2E6B8A]">Žaluzie, rolety a sítě <Icon name="arrow" className="h-5 w-5" /></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {blinds.map(([title, text], i) => (
                <article key={title} className="border border-black/10 bg-white p-7 shadow-[0_15px_40px_rgba(20,30,35,.05)]">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon name={i === 3 ? "shield" : "sun"} className="h-8 w-8 text-[#2E6B8A]" />
                    <span className="text-2xl font-light text-black/15">0{i + 1}</span>
                  </div>
                  <h3 className="font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E2429] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[510px]">
            <img src={stock.garage} alt="Moderní garážová vrata" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1E2429]/45" />
          </div>
          <div className="section-pad flex items-center px-5 lg:pl-20 lg:pr-[max(2rem,calc((100vw-1220px)/2))]">
            <div>
              <Eyebrow>Garážová vrata</Eyebrow>
              <h2>Sekční i rolovací vrata TRIDO</h2>
              <p className="mt-6 max-w-lg leading-7 text-white/58">Spolehlivá garážová vrata navržená na míru vašemu domu. Komfortní ovládání elektrickým pohonem a dálkovým ovladačem.</p>
              <div className="mt-9 flex gap-8 border-t border-white/15 pt-7">
                <span className="flex items-center gap-2 text-sm"><Icon name="garage" className="h-5 w-5 text-[#72AFCB]" /> Sekční</span>
                <span className="flex items-center gap-2 text-sm"><Icon name="grid" className="h-5 w-5 text-[#72AFCB]" /> Rolovací</span>
                <span className="flex items-center gap-2 text-sm"><Icon name="remote" className="h-5 w-5 text-[#72AFCB]" /> Dálkové ovládání</span>
              </div>
              <Link to="/garazova-vrata" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#79B5CF]">Více o vratech TRIDO <Icon name="arrow" className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="instituce" className="section-pad bg-[#2E6B8A] text-white">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.8fr]">
            <div>
              <Eyebrow warm>Pro školy a státní správu</Eyebrow>
              <h2>Zkušenosti i s veřejnými zakázkami</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Připravujeme samostatné, transparentní nabídky pro školy, obce a orgány státní správy. Od technické specifikace přes harmonogram až po přesné předání.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/pro-skoly-a-statni-spravu" className="btn-warm px-6 py-4">Nabídka pro školy <Icon name="arrow" className="h-5 w-5" /></Link>
                <Link to="/pro-skoly-a-statni-spravu" className="border border-white/35 px-6 py-4 text-sm font-bold hover:bg-white/10">Nabídka pro státní správu</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/20">
              {[
                ["school", "Školy"],
                ["building", "Obce a úřady"],
                ["check", "Jasná specifikace"],
                ["shield", "Spolehlivé plnění"],
              ].map(([icon, text]) => (
                <div key={text} className="min-h-36 bg-[#2E6B8A] p-6">
                  <Icon name={icon as "school"} className="h-8 w-8 text-[#E9A15B]" /><b className="mt-8 block text-sm">{text}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="galerie" className="section-pad bg-white">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div><Eyebrow>Naše práce</Eyebrow><h2>Realizace, za kterými si stojíme</h2></div>
            <Link to="/fotogalerie" className="flex items-center gap-2 text-sm font-bold text-[#2E6B8A]">Celá fotogalerie ({galleryPhotos.length}) <Icon name="arrow" className="h-5 w-5" /></Link>
          </div>
          <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPhotos.slice(0, 6).map((photo, i) => (
              <Link to="/fotogalerie" key={photo.src} className={`group block ${i === 0 ? "lg:col-span-2 lg:row-span-2" : i === 3 ? "lg:col-span-2" : ""}`}>
                <figure className="gallery-item h-full">
                  <img src={photo.src} alt={photo.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption><span>{photo.title}</span><Icon name="arrow" className="h-5 w-5" /></figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
