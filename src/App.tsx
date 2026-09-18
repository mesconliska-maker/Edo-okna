import { useState, type ReactNode } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1657346088167-b982455bf29a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1800";
const interiorImage =
  "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400";
const garageImage =
  "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";
const windowImage =
  "https://images.unsplash.com/photo-1582586587646-b55bb2058ea4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";
const houseImage =
  "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400";

type IconName =
  | "arrow"
  | "building"
  | "check"
  | "door"
  | "garage"
  | "grid"
  | "lock"
  | "mail"
  | "menu"
  | "phone"
  | "play"
  | "school"
  | "screen"
  | "service"
  | "shield"
  | "sun"
  | "window";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M8 9h1m6 0h1M8 13h1m6 0h1M8 17h1m6 0h1M2 21h20" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    door: (
      <>
        <path d="M5 21V3h14v18M9 21V7h7v14" />
        <path d="M13 14h.01" />
      </>
    ),
    garage: (
      <>
        <path d="m3 9 9-6 9 6v12H3Z" />
        <path d="M7 21v-8h10v8M7 16h10" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M12 3v18M3 12h18" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    play: <path d="m9 7 8 5-8 5Z" />,
    school: (
      <>
        <path d="m3 10 9-6 9 6M5 10v9m4-9v9m6-9v9m4-9v9M3 20h18" />
      </>
    ),
    screen: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 9h18M8 4v16M3 14h5" />
      </>
    ),
    service: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6l-2.4 2.5-2.3-2.3a4 4 0 0 0 5 5l7.4 7.4a2.1 2.1 0 0 1-3 3l-7.4-7.4" />
        <path d="m5 13-3 3 6 6 3-3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    window: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M12 3v18M3 12h18M12 12l6-6" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

function Eyebrow({ children, warm = false }: { children: ReactNode; warm?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.19em] uppercase ${warm ? "text-[#C4762E]" : "text-[#2E6B8A]"}`}>
      <span className={`h-px w-8 ${warm ? "bg-[#C4762E]" : "bg-[#2E6B8A]"}`} />
      {children}
    </div>
  );
}

const services = [
  {
    icon: "window" as const,
    title: "Montáž oken a dveří",
    text: "Zaměříme a namontujeme plastová, dřevěná i hliníková okna včetně parapetů a čistého začištění.",
  },
  {
    icon: "sun" as const,
    title: "Montáž žaluzií",
    text: "Horizontální, vertikální i zatemňující žaluzie, předokenní rolety a široký výběr barev.",
  },
  {
    icon: "screen" as const,
    title: "Sítě proti hmyzu",
    text: "Moderní, přesně zaměřené sítě pro okna i dveře, které nenaruší vzhled vašeho domova.",
  },
  {
    icon: "service" as const,
    title: "Servis a opravy",
    text: "Seřízení a opravy stávajících oken. Rádi poradíme a doporučíme vhodné a úsporné řešení.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3F3EE] text-[#1B2126]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1E2429]/96 text-[#EFEFEA] backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 lg:px-8">
          <a href="#" className="group flex items-center gap-3" aria-label="EDO OKNA domů">
            <span className="relative grid h-10 w-10 grid-cols-2 gap-[3px] border-2 border-[#5A9ABB] p-[5px]">
              <i className="border border-[#5A9ABB]" />
              <i className="border border-[#5A9ABB]" />
              <i className="border border-[#5A9ABB]" />
              <i className="border border-[#5A9ABB]" />
            </span>
            <span>
              <b className="block text-xl leading-none tracking-[0.08em]">EDO OKNA</b>
              <small className="mt-1 block text-[9px] tracking-[0.18em] text-white/50 uppercase">Emil Doha</small>
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-[12px] font-semibold xl:flex">
            <a href="#sluzby">Okna a dveře</a>
            <a href="#technologie">Technologie</a>
            <a href="#stineni">Žaluzie a sítě</a>
            <a href="#servis">Servis</a>
            <a href="#instituce">Pro školy a státní správu</a>
            <a href="#galerie">Fotogalerie</a>
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <a href="tel:+420605148738" className="flex items-center gap-2 text-sm font-bold">
              <Icon name="phone" className="h-4 w-4 text-[#73AFCB]" />
              605 148 738
            </a>
            <a href="#kontakt" className="btn-blue px-5 py-3 text-xs">Nezávazná poptávka</a>
          </div>
          <button
            className="grid h-11 w-11 place-items-center border border-white/20 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otevřít menu"
          >
            <Icon name="menu" />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#1E2429] px-5 py-5 text-sm md:hidden">
            {[
              ["Služby", "#sluzby"],
              ["Technologie", "#technologie"],
              ["Žaluzie a sítě", "#stineni"],
              ["Pro školy a státní správu", "#instituce"],
              ["Fotogalerie", "#galerie"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-3">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#1E2429] text-white">
          <img src={heroImage} alt="Moderní rodinný dům s velkými okny" className="absolute inset-0 h-full w-full object-cover object-center" />
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
                <a href="#kontakt" className="btn-blue px-7 py-4">Nezávazná poptávka <Icon name="arrow" className="h-5 w-5" /></a>
                <a href="#technologie" className="btn-outline px-7 py-4">Prohlédnout technologie</a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-semibold tracking-wide text-white/65">
                <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#E09A58]" /> Zaměření a konzultace</span>
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
          <div className="mx-auto grid max-w-[1280px] divide-y divide-black/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            {[
              ["shield", "Nejvyšší úroveň", "certifikace Spolehlivá firma"],
              ["grid", "Kömmerling 76 a 88", "prověřené profilové systémy"],
              ["school", "Školy a státní správa", "nabídky pro veřejné zakázky"],
            ].map(([icon, title, text]) => (
              <div key={title} className="flex items-center gap-4 py-7 md:px-7 first:pl-0">
                <Icon name={icon as IconName} className="h-9 w-9 shrink-0 text-[#2E6B8A]" />
                <div><b className="block text-sm">{title}</b><span className="text-xs text-black/55">{text}</span></div>
              </div>
            ))}
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
                <article key={service.title} className="service-card group">
                  <span className="absolute top-5 right-6 text-[10px] font-bold tracking-widest text-black/25">0{index + 1}</span>
                  <div className="mb-10 grid h-12 w-12 place-items-center bg-[#2E6B8A]/10 text-[#2E6B8A] transition-colors group-hover:bg-[#2E6B8A] group-hover:text-white">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-black/55">{service.text}</p>
                  <a href="#kontakt" className="mt-7 flex items-center gap-2 text-xs font-bold text-[#2E6B8A]">Zjistit více <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
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
                  Precizně navržené německé profilové systémy s výbornou tepelnou izolací pro rekonstrukce i novostavby.
                </p>
                <div className="mt-12 border-l-2 border-[#C4762E] pl-6">
                  <b className="text-6xl tracking-[-.06em] text-[#E6A05D]">až 40 %</b>
                  <p className="mt-2 text-sm font-semibold">úspora nákladů na vytápění</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["76", "Kömmerling Profil 76", "Univerzální stavební hloubka 76 mm pro spolehlivou izolaci a široké možnosti použití.", ["Promyšlená vícekomorová konstrukce", "Moderní tenký vzhled", "Vhodný pro renovace"]],
                  ["88", "Kömmerling Profil 88", "Prémiový systém se stavební hloubkou 88 mm pro nejvyšší nároky na tepelný komfort.", ["Vynikající tepelná izolace", "Robustní moderní konstrukce", "Ideální pro nízkoenergetické domy"]],
                ].map(([num, title, text, bullets]) => (
                  <article key={title as string} className="profile-card">
                    <div className="flex items-start justify-between">
                      <span className="text-7xl font-extrabold tracking-[-.08em] text-white/10">{num as string}</span>
                      <Icon name="window" className="h-10 w-10 text-[#5D9CBA]" />
                    </div>
                    <p className="mt-10 text-[10px] font-bold tracking-[.2em] text-[#6EAAC7] uppercase">Profilový systém</p>
                    <h3 className="mt-2 text-2xl font-bold">{title as string}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/55">{text as string}</p>
                    <ul className="mt-7 space-y-3">
                      {(bullets as string[]).map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-xs text-white/70"><Icon name="check" className="h-4 w-4 shrink-0 text-[#C4762E]" />{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
            <p className="mt-10 text-xs text-white/35">Pracujeme také s profilovými systémy Inoutic Prestige, Arcade a Eforte.</p>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[560px] overflow-hidden bg-[#1E2429]">
              <img src={windowImage} alt="Detail kvalitního okenního rámu" className="absolute inset-0 h-full w-full object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2429] via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 border border-white/20 bg-[#1E2429]/85 p-6 text-white backdrop-blur">
                <div className="flex items-center gap-4">
                  <Icon name="lock" className="h-9 w-9 text-[#79B0C9]" />
                  <div><b className="block">Titan AF</b><span className="text-xs text-white/55">Bezpečí v každém detailu</span></div>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Kování a bezpečnost</Eyebrow>
              <h2>Německé kování Siegenia Aubi Titan AF</h2>
              <p className="mt-6 text-lg leading-8 text-black/58">
                Maximální pohodlí při každém otevření. Robustní celoobvodové kování doplňuje chytrá pojistka proti chybnému otevření.
              </p>
              <div className="mt-9 grid gap-x-6 gap-y-7 sm:grid-cols-2">
                {[
                  ["Pojistka proti chybnému otevření", "Spolehlivě brání nesprávné manipulaci s křídlem."],
                  ["Skryté kování", "Čistý vzhled bez viditelných pantů jako volitelná výbava."],
                  ["Mikroventilace ve standardu", "U všech otvíravě sklopných oken pro snadné větrání."],
                  ["Kliky Secustik", "Bezpečnostní mechanismus slyšitelně zapadne při otočení."],
                ].map(([title, text]) => (
                  <div key={title} className="border-t border-black/15 pt-5">
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-black/50">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E7ECEB]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="section-pad px-5 lg:pl-[max(2rem,calc((100vw-1220px)/2))] lg:pr-20">
              <Eyebrow>Zasklení</Eyebrow>
              <h2>Izolační dvojskla s rámečkem Swisspacer</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/58">
                Teplý distanční rámeček Swisspacer omezuje tepelný most na okraji skla. Výsledkem jsou nižší tepelné ztráty a vyšší odolnost proti kondenzaci.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Méně tepelných ztrát", "Omezení kondenzace", "Vyšší komfort"].map((item) => (
                  <span key={item} className="border border-[#2E6B8A]/25 bg-white px-4 py-3 text-xs font-bold text-[#2E6B8A]">{item}</span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[430px] overflow-hidden">
              <img src={interiorImage} alt="Teplý interiér s velkým oknem" className="absolute inset-0 h-full w-full object-cover" />
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
                <p className="mt-6 leading-7 text-black/55">Široký výběr stínicí techniky v mnoha barvách pro soukromí, pohodlí i ochranu před letním přehříváním.</p>
                <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#2E6B8A]">Vybrat řešení <Icon name="arrow" className="h-5 w-5" /></a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Horizontální žaluzie", "Plynulá regulace světla a snadná údržba."],
                  ["Vertikální žaluzie", "Elegantní řešení pro velké prosklené plochy."],
                  ["Zatemňující žaluzie", "Klidný spánek a soukromí v každou denní dobu."],
                  ["Předokenní rolety", "Stínění, tepelná ochrana i vyšší bezpečnost."],
                ].map(([title, text], i) => (
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
            <div className="relative min-h-[510px]">
              <img src={garageImage} alt="Moderní garážová vrata" className="absolute inset-0 h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1E2429]/45" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white px-5 py-4 text-[#1B2126]">
                <Icon name="play" className="h-5 w-5 text-[#2E6B8A]" /><span className="text-xs font-bold">Prohlédnout video realizace</span>
              </div>
            </div>
            <div className="section-pad flex items-center px-5 lg:pl-20 lg:pr-[max(2rem,calc((100vw-1220px)/2))]">
              <div>
                <Eyebrow>Garážová vrata</Eyebrow>
                <h2>Sekční i rolovací vrata TRIDO</h2>
                <p className="mt-6 max-w-lg leading-7 text-white/58">Spolehlivá garážová vrata navržená na míru vašemu domu. Komfortní ovládání elektrickým pohonem a dálkovým ovladačem.</p>
                <div className="mt-9 flex gap-8 border-t border-white/15 pt-7">
                  <span className="flex items-center gap-2 text-sm"><Icon name="garage" className="h-5 w-5 text-[#72AFCB]" /> Sekční</span>
                  <span className="flex items-center gap-2 text-sm"><Icon name="grid" className="h-5 w-5 text-[#72AFCB]" /> Rolovací</span>
                </div>
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
                  <a href="#kontakt" className="btn-warm px-6 py-4">Nabídka pro školy <Icon name="arrow" className="h-5 w-5" /></a>
                  <a href="#kontakt" className="border border-white/35 px-6 py-4 text-sm font-bold">Nabídka pro státní správu</a>
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
                    <Icon name={icon as IconName} className="h-8 w-8 text-[#E9A15B]" /><b className="mt-8 block text-sm">{text}</b>
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
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#2E6B8A]">Zobrazit fotogalerii <Icon name="arrow" className="h-5 w-5" /></a>
            </div>
            <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [heroImage, "Okna v rodinném domě", "lg:col-span-2 lg:row-span-2"],
                [interiorImage, "Interiérové stínění", ""],
                [windowImage, "Precizní detail montáže", ""],
                [houseImage, "Kompletní realizace", "lg:col-span-2"],
              ].map(([src, title, classes]) => (
                <figure key={title} className={`gallery-item group ${classes}`}>
                  <img src={src} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption><span>{title}</span><Icon name="arrow" className="h-5 w-5" /></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-[#F3F3EE]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.08fr_.92fr]">
            <div className="section-pad px-5 lg:pl-[max(2rem,calc((100vw-1220px)/2))] lg:pr-20">
              <Eyebrow>Kontakt</Eyebrow>
              <h2>Plánujete nová okna,<br />dveře nebo žaluzie?</h2>
              <p className="mt-5 text-black/55">Napište nám. Ozveme se a domluvíme nezávazné zaměření.</p>
              <form className="mt-10 grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
                <label><span>Jméno</span><input type="text" placeholder="Vaše jméno" /></label>
                <label><span>Telefon</span><input type="tel" placeholder="+420" /></label>
                <label className="sm:col-span-2"><span>E-mail</span><input type="email" placeholder="vas@email.cz" /></label>
                <label className="sm:col-span-2"><span>Popis poptávky</span><textarea rows={4} placeholder="S čím vám můžeme pomoci?" /></label>
                <div className="sm:col-span-2"><button className="btn-blue w-full justify-center px-7 py-4 sm:w-auto">Odeslat poptávku <Icon name="arrow" className="h-5 w-5" /></button></div>
              </form>
            </div>
            <div className="section-pad bg-[#1E2429] px-5 text-white lg:pl-16 lg:pr-[max(2rem,calc((100vw-1220px)/2))]">
              <p className="text-xs font-bold tracking-[.18em] text-[#77B0CA] uppercase">EDO OKNA — Emil Doha</p>
              <div className="mt-9 space-y-7">
                <div><span className="contact-label">Adresa</span><p>Javorová 282<br />349 58 Černošín</p></div>
                <div><span className="contact-label">Telefon</span><p><a href="tel:+420605148738">605 148 738</a><br /><a href="tel:+420602148738">602 148 738</a></p></div>
                <div><span className="contact-label">E-mail</span><p><a href="mailto:emildoha@tiscali.cz">emildoha@tiscali.cz</a></p></div>
                <div><span className="contact-label">Otevírací doba</span><p>Po–Pá &nbsp; 8:00–16:00<br /><span className="text-white/45">So–Ne &nbsp; zavřeno</span></p></div>
              </div>
              <a href="https://maps.google.com/?q=Javorová+282+Černošín" target="_blank" rel="noreferrer" className="mt-10 flex items-center justify-between border border-white/15 bg-white/5 p-5 text-sm font-bold">
                Zobrazit na mapě <Icon name="arrow" className="h-5 w-5 text-[#78B2CC]" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#151A1E] text-white/55">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-8">
          <b className="text-base tracking-wider text-white">EDO OKNA</b>
          <p>IČ 75950537 &nbsp;·&nbsp; DIČ CZ8001092308</p>
          <p>© 2026 EDO OKNA — Emil Doha</p>
        </div>
      </footer>
    </div>
  );
}
