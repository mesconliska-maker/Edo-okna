import type { IconName } from "@/components/Icon";

export const contact = {
  company: "EDO OKNA",
  owner: "Emil Doha",
  street: "Javorová 282",
  city: "349 58 Černošín",
  phones: [
    { display: "605 148 738", href: "tel:+420605148738" },
    { display: "602 148 738", href: "tel:+420602148738" },
  ],
  email: "emildoha@tiscali.cz",
  hours: "Po–Pá 8:00–16:00",
  ic: "75950537",
  dic: "CZ8001092308",
  region: "Stříbro, Tachov, Mariánské Lázně, Plzeň a okolí",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.492038557983!2d12.884086115882015!3d49.81441674086889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a8321cb7ac1a9%3A0xb7923bd2b9eaf4c0!2zSmF2b3JvdsOhIDI4MiwgMzQ5IDU4IMSMZXJub8Whw61u!5e0!3m2!1scs!2scz!4v1507580856695",
  mapLink: "https://maps.google.com/?q=Javorová+282+Černošín",
};

export const nav = [
  { label: "Okna a dveře", to: "/okna-a-dvere" },
  { label: "Žaluzie a sítě", to: "/zaluzie-a-site" },
  { label: "Servis", to: "/servis" },
  { label: "Garážová vrata", to: "/garazova-vrata" },
  { label: "Pro školy a státní správu", to: "/pro-skoly-a-statni-spravu" },
  { label: "Fotogalerie", to: "/fotogalerie" },
  { label: "Kontakt", to: "/kontakt" },
];

export const stock = {
  hero: "/img/foto/bytovy-dum.jpg",
  garage: "/img/foto/garazova-vrata-sekcni.jpg",
  window: "/img/foto/hs-portal-dub.jpg",
  blinds: "/img/foto/plise-zaluzie.jpg",
};

export type Service = {
  icon: IconName;
  image: string;
  title: string;
  text: string;
  to: string;
};

export const services: Service[] = [
  {
    icon: "window",
    image: "/img/b-1.jpg",
    title: "Montáž oken a dveří",
    text: "Plastová, dřevěná i hliníková okna a dveře. Poradíme, zaměříme, demontujeme původní okna, namontujeme včetně parapetů a zednického začištění.",
    to: "/okna-a-dvere",
  },
  {
    icon: "sun",
    image: "/img/b-2.jpg",
    title: "Montáž žaluzií",
    text: "Horizontální, vertikální i zatemňující žaluzie a předokenní rolety v mnoha barvách a vzorech. Včetně demontáže stávajících.",
    to: "/zaluzie-a-site",
  },
  {
    icon: "screen",
    image: "/img/b-3.jpg",
    title: "Sítě proti hmyzu",
    text: "Nenápadné sítě z jemného, ale odolného vlákna do nových i stávajících oken a dveří. Nebrání otevírání ani vyklápění.",
    to: "/zaluzie-a-site#site",
  },
  {
    icon: "service",
    image: "/img/b-4.jpg",
    title: "Servis a opravy",
    text: "Záruční i pozáruční servis oken, dveří a stínicí techniky. Seřízení, výměna prvků a odborné poradenství.",
    to: "/servis",
  },
];

export type Profile = {
  num: string;
  title: string;
  text: string;
  image: string;
  variants: { name: string; image: string }[];
  specs: [string, string][];
};

export const profiles: Profile[] = [
  {
    num: "76",
    title: "Kömmerling Profil 76",
    text: "Šestikomorový profil se stavební hloubkou 76 mm, třemi těsněními a trojsklem. Plně vyhovuje nárokům pasivních a energeticky úsporných domů — spolehlivá volba pro novostavby i rekonstrukce.",
    image: "/img/profil76/System-76-AD-Standard-1-bila.jpg",
    variants: [
      { name: "Bílá", image: "/img/profil76/System-76-AD-Standard-1-bila.jpg" },
      { name: "Dřevodekor", image: "/img/profil76/System-76-AD-Standard-2-drevo.jpg" },
      { name: "Šedá", image: "/img/profil76/System-76-AD-Standard-3-seda.jpg" },
      { name: "Hnědá", image: "/img/profil76/System-76-AD-Standard-4-hneda.jpg" },
    ],
    specs: [
      ["Prostup tepla Uw", "0,73–0,98 W/m²K"],
      ["Design", "rovné křídlo"],
      ["Profil", "Kömmerling, ekologické jádro"],
      ["Počet komor", "6"],
      ["Stavební hloubka", "76 mm"],
      ["Počet těsnění", "3"],
      ["Zasklení", "trojsklo"],
      ["Kování", "Siegenia Titan AF"],
      ["Zvuková izolace", "až 40 dB"],
      ["Vyztužení", "ocelová výztuha 1,5–2,5 mm"],
      ["Podkladní profil", "5komorový, zateplený"],
    ],
  },
  {
    num: "88",
    title: "Kömmerling Profil 88",
    text: "Sedmikomorový systém se stavební hloubkou 88 mm dosahuje jedinečných hodnot součinitele prostupu tepla. Naprostá špička v tepelně izolačních vlastnostech pro pasivní a nízkoenergetické domy.",
    image: "/img/profil88/System-88-1-bila.jpg",
    variants: [
      { name: "Bílá", image: "/img/profil88/System-88-1-bila.jpg" },
      { name: "Dřevodekor", image: "/img/profil88/System-88-2-drevo.jpg" },
      { name: "Antracit", image: "/img/profil88/System-88-3-anthrazit.jpg" },
      { name: "Šedá", image: "/img/profil88/System-88-4-seda.jpg" },
    ],
    specs: [
      ["Prostup tepla Uw", "0,72–0,96 W/m²K"],
      ["Design", "rovné křídlo"],
      ["Profil", "Kömmerling"],
      ["Počet komor", "7"],
      ["Stavební hloubka", "88 mm"],
      ["Počet těsnění", "3"],
      ["Zasklení", "trojsklo"],
      ["Kování", "Siegenia Titan AF"],
      ["Zvuková izolace", "až 40 dB"],
      ["Vyztužení", "ocelová výztuha 1,5–2,5 mm"],
      ["Podkladní profil", "5komorový, zateplený"],
    ],
  },
];

export const windowHardware: [string, string][] = [
  ["Pojistka proti chybnému otevření", "Spolehlivě brání nesprávné manipulaci s křídlem."],
  ["Skryté kování", "Čistý vzhled bez viditelných pantů jako volitelná výbava."],
  ["Mikroventilace ve standardu", "U všech otvíravě sklopných oken pro snadné větrání."],
  ["Kliky Secustik", "Bezpečnostní mechanismus slyšitelně zapadne při otočení."],
];

export const doorHardware: [string, string][] = [
  ["Kování KFV", "Vícebodový zámek po celé výšce dveří."],
  ["Panty Joker", "Robustní, seřiditelné panty pro těžká křídla."],
  ["Bezpečnostní vložka Mul-T-Lock 7×7", "Včetně pěti klíčů a bezpečnostní karty."],
];

export const blinds: [string, string][] = [
  ["Horizontální žaluzie", "Klasika s plynulou regulací světla a snadnou údržbou. Mnoho barev lamel."],
  ["Vertikální žaluzie", "Elegantní řešení pro velké prosklené plochy a kanceláře."],
  ["Zatemňující žaluzie", "Klidný spánek a soukromí v každou denní dobu."],
  ["Předokenní rolety", "Stínění, tepelná ochrana v létě i v zimě a vyšší bezpečnost."],
];

export const galleryPhotos = [
  { src: "/img/foto/bytovy-dum.jpg", title: "Bytový dům — kompletní výměna oken" },
  { src: "/img/foto/garazova-vrata-sekcni.jpg", title: "Sekční garážová vrata TRIDO v dekoru dřeva" },
  { src: "/img/foto/hs-portal-dub.jpg", title: "Posuvný HS portál, dekor zlatý dub" },
  { src: "/img/foto/novostavba-bungalov.jpg", title: "Bungalov — hnědá okna a dveře" },
  { src: "/img/foto/vchodove-dvere-antracit.jpg", title: "Vchodové dveře v antracitu" },
  { src: "/img/foto/zimni-zahrada.jpg", title: "Prosklení zimní zahrady" },
  { src: "/img/foto/plise-zaluzie.jpg", title: "Plisé žaluzie v interiéru" },
  { src: "/img/foto/proskleni-terasa.jpg", title: "Velkoplošné prosklení na terasu" },
  { src: "/img/foto/novostavba-hneda-okna.jpg", title: "Novostavba — okna a vchodové dveře" },
  { src: "/img/foto/hs-portal-montaz.jpg", title: "Montáž posuvných dveří" },
  { src: "/img/foto/zimni-zahrada-2.jpg", title: "Zimní zahrada — dřevodekor" },
  { src: "/img/foto/posuvne-dvere-porotherm.jpg", title: "Posuvné dveře v hrubé stavbě" },
  { src: "/img/foto/okna-novostavba-ytong.jpg", title: "Bílá okna a balkonové dveře, novostavba" },
  { src: "/img/foto/garazova-vrata-hruba-stavba.jpg", title: "Garážová vrata a okna v hrubé stavbě" },
  { src: "/img/foto/zahradni-domek-okna.jpg", title: "Okna a dveře zahradního domku" },
  { src: "/img/foto/bytovy-dum-2.jpg", title: "Bytový dům po výměně oken" },
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

export const certificates = [
  { src: "/img/cert/ceska-okna-2018.jpg", title: "Zaručeně česká okna — certifikát 2018" },
  { src: "/img/cert/ceska-okna-2019.jpg", title: "Zaručeně česká okna — certifikát 2019" },
];
