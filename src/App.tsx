import { useState, type ReactNode } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1657346088167-b982455bf29a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1800";
const garageImage =
  "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";
const windowImage =
  "https://images.unsplash.com/photo-1582586587646-b55bb2058ea4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200";

// Real photos migrated from www.oknastribro.cz
const galleryPhotos = [
  { src: "/img/gallery/Image02.jpg", title: "Plastová okna, rodinný dům" },
  { src: "/img/gallery/foto09.jpg", title: "Výkladce a vstupní dveře, Stříbro" },
  { src: "/img/gallery/foto05.jpg", title: "Vchodové dveře v dekoru dřeva" },
  { src: "/img/gallery/foto03.jpg", title: "Montáž oken v novostavbě" },
  { src: "/img/gallery/Image03.jpg", title: "Výměna oken, starší zástavba" },
  { src: "/img/gallery/foto08.jpg", title: "Dřevěné vchodové dveře" },
  { src: "/img/gallery/Image04.jpg", title: "Okna a dveře, rodinný dům" },
  { src: "/img/gallery/foto01.jpg", title: "Novostavba, kompletní dodávka" },
  { src: "/img/gallery/foto02.jpg", title: "Hrubá stavba před montáží" },
  { src: "/img/gallery/foto04.jpg", title: "Osazení oken a dveří" },
  { src: "/img/gallery/foto06.jpg", title: "Posuvné dveře na terasu" },
  { src: "/img/gallery/foto07.jpg", title: "Prosklená stěna" },
];

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
    image: "/img/b-1.jpg",
    title: "Montáž oken a dveří",
    text: "Plastová, dřevěná i hliníková okna a dveře. Poradíme, zaměříme, demontujeme původní okna, namontujeme včetně parapetů a zednického začištění.",
  },
  {
    icon: "sun" as const,
    image: "/img/b-2.jpg",
    title: "Montáž žaluzií",
    text: "Horizontální, vertikální i zatemňující žaluzie a předokenní rolety v mnoha barvách a vzorech. Včetně demontáže stávajících.",
  },
  {
    icon: "screen" as const,
    image: "/img/b-3.jpg",
    title: "Sítě proti hmyzu",
    text: "Nenápadné sítě z jemného, ale odolného vlákna do nových i stávajících oken a dveří. Nebrání otevírání ani vyklápění.",
  },
  {
    icon: "service" as const,
    image: "/img/b-4.jpg",
    title: "Servis a opravy",
    text: "Záruční i pozáruční servis oken, dveří a stínicí techniky. Seřízení, výměna prvků a odborné poradenství.",
  },
];

const profiles = [
  {
    num: "76",
    image: "/img/profil76/System-76-AD-Standard-1-bila.jpg",
    title: "Kömmerling Profil 76",
    text: "Šestikomorový profil se stavební hloubkou 76 mm, třemi těsněními a trojsklem. Spolehlivá volba pro novostavby i rekonstrukce.",
    specs: [
      ["Stavební hloubka", "76 mm"],
      ["Počet komor", "6"],
      ["Těsnění", "3"],
      ["Prostup tepla Uw", "0,73–0,98 W/m²K"],
      ["Zvuková izolace", "až 40 dB"],
      ["Kování", "Siegenia Titan AF"],
    ] as [string, string][],
    colors: [
      ["Bílá", "#f4f4f2"],
      ["Zlatý dub", "#a86b2c"],
      ["Šedá", "#8a8d8f"],
      ["Hnědá", "#5a3d28"],
    ] as [string, string][],
  },
  {
    num: "88",
    image: "/img/profil88/System-88-1-bila.jpg",
    title: "Kömmerling Profil 88",
    text: "Sedmikomorový systém se stavební hloubkou 88 mm — špička v tepelně izolačních vlastnostech pro pasivní a nízkoenergetické domy.",
    specs: [
      ["Stavební hloubka", "88 mm"],
      ["Počet komor", "7"],
      ["Těsnění", "3"],
      ["Prostup tepla Uw", "0,72–0,96 W/m²K"],
      ["Zvuková izolace", "až 40 dB"],
      ["Kování", "Siegenia Titan AF"],
    ] as [string, string][],
    colors: [
      ["Bílá", "#f4f4f2"],
      ["Zlatý dub", "#a86b2c"],
      ["Antracit", "#3a3d40"],
      ["Šedá", "#8a8d8f"],
    ] as [string, string][],
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

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
                <article key={service.title} className="service-card group">
                  <div className="relative -mx-[1.65rem] -mt-8 mb-7 h-40 overflow-hidden bg-[#1E2429]">
                    <img src={service.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute top-4 right-5 text-[10px] font-bold tracking-widest text-white/70">0{index + 1}</span>
                    <div className="absolute bottom-0 left-6 grid h-11 w-11 translate-y-1/2 place-items-center bg-[#2E6B8A] text-white shadow-lg">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </div>
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
                  <article key={profile.num} className="profile-card">
                    <div className="flex items-start justify-between">
                      <span className="text-7xl font-extrabold tracking-[-.08em] text-white/10">{profile.num}</span>
                      <img src={profile.image} alt={`Řez profilem Kömmerling ${profile.num}`} className="h-28 w-28 rounded bg-white object-contain p-1" />
                    </div>
                    <p className="mt-6 text-[10px] font-bold tracking-[.2em] text-[#6EAAC7] uppercase">Profilový systém</p>
                    <h3 className="mt-2 text-2xl font-bold">{profile.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/55">{profile.text}</p>
                    <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-6">
                      {profile.specs.map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-[10px] font-bold tracking-[.14em] text-white/40 uppercase">{label}</dt>
                          <dd className="mt-0.5 text-sm font-semibold text-white/85">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-6 flex items-center gap-2">
                      {profile.colors.map(([name, hex]) => (
                        <span key={name} title={name} className="h-5 w-5 rounded-full border border-white/25" style={{ background: hex }} />
                      ))}
                      <span className="ml-1 text-xs text-white/45">Bílá, dřevodekory, šedá, antracit a další</span>
                    </div>
                  </article>
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
              <img src={windowImage} alt="Detail kvalitního okenního rámu" className="absolute inset-0 h-full w-full object-cover opacity-75" />
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
                {[
                  ["Pojistka proti chybnému otevření", "Spolehlivě brání nesprávné manipulaci s křídlem."],
                  ["Skryté kování", "Čistý vzhled bez viditelných pantů jako volitelná výbava."],
                  ["Mikroventilace ve standardu", "U všech otvíravě sklopných oken pro snadné větrání."],
                  ["Kliky Secustik", "Bezpečnostní mechanismus slyšitelně zapadne při otočení."],
                  ["Dveře: kování KFV, panty Joker", "Vchodové dveře s vícebodovým zámkem a seřiditelnými panty."],
                  ["Bezpečnostní vložka Mul-T-Lock 7×7", "Včetně pěti klíčů a bezpečnostní karty."],
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
              <button type="button" onClick={() => setGalleryOpen(!galleryOpen)} className="flex items-center gap-2 text-sm font-bold text-[#2E6B8A]">
                {galleryOpen ? "Zobrazit méně" : `Zobrazit celou fotogalerii (${galleryPhotos.length})`} <Icon name="arrow" className={`h-5 w-5 transition ${galleryOpen ? "-rotate-90" : "rotate-90"}`} />
              </button>
            </div>
            <div className="mt-12 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(galleryOpen ? galleryPhotos : galleryPhotos.slice(0, 6)).map((photo, i) => (
                <figure key={photo.src} className={`gallery-item group ${i === 0 ? "lg:col-span-2 lg:row-span-2" : i === 3 ? "lg:col-span-2" : ""}`}>
                  <img src={photo.src} alt={photo.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption><span>{photo.title}</span><Icon name="arrow" className="h-5 w-5" /></figcaption>
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
              <iframe
                title="Mapa — Javorová 282, Černošín"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.492038557983!2d12.884086115882015!3d49.81441674086889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a8321cb7ac1a9%3A0xb7923bd2b9eaf4c0!2zSmF2b3JvdsOhIDI4MiwgMzQ5IDU4IMSMZXJub8Whw61u!5e0!3m2!1scs!2scz!4v1507580856695"
                className="mt-10 h-56 w-full border border-white/15 grayscale-[.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a href="https://maps.google.com/?q=Javorová+282+Černošín" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between border border-white/15 bg-white/5 p-5 text-sm font-bold">
                Otevřít v Google Maps <Icon name="arrow" className="h-5 w-5 text-[#78B2CC]" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#151A1E] text-white/55">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-8">
          <b className="text-base tracking-wider text-white">EDO OKNA</b>
          <div className="flex items-center gap-4">
            <img src="/img/spolehliva-firma.png" alt="Spolehlivá firma 2023" className="h-12 w-12" />
            <img src="/img/ceska-okna.jpg" alt="Zaručeně česká okna" className="h-11 w-11 rounded-sm" />
          </div>
          <p>IČ 75950537 &nbsp;·&nbsp; DIČ CZ8001092308</p>
          <p>© 2026 EDO OKNA — Emil Doha</p>
        </div>
      </footer>
    </div>
  );
}
