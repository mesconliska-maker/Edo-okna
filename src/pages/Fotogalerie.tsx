import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { CtaBand, Eyebrow, PageHero, Seo } from "@/components/ui";
import { certificates, galleryPhotos } from "@/data/site";

export default function Fotogalerie() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? null : (i + 1) % galleryPhotos.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Seo
        title="Fotogalerie realizací — okna, dveře, montáže"
        description="Fotografie dokončených montáží oken a dveří EDO OKNA ve Stříbře, Tachově a okolí. Rodinné domy, novostavby, rekonstrukce, vchodové dveře."
      />
      <PageHero
        eyebrow="Fotogalerie"
        title="Realizace, za kterými si stojíme"
        lead="Výběr z dokončených montáží oken a dveří — novostavby, rekonstrukce i komerční objekty v Plzeňském kraji."
        image="/img/foto/zimni-zahrada.jpg"
        imageAlt="Prosklení zimní zahrady"
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((photo, i) => (
              <button
                type="button"
                key={photo.src}
                onClick={() => setOpen(i)}
                className={`group text-left ${i % 7 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
                aria-label={`Zvětšit: ${photo.title}`}
              >
                <figure className="gallery-item h-full">
                  <img src={photo.src} alt={photo.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <figcaption><span>{photo.title}</span><Icon name="arrow" className="h-5 w-5" /></figcaption>
                </figure>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-[1220px] px-5">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Eyebrow>Certifikáty</Eyebrow>
              <h2>Ověřená kvalita</h2>
              <p className="mt-6 leading-7 text-black/58">
                Držíme certifikát Zaručeně česká okna a nejvyšší úroveň ocenění Spolehlivá firma. Montujeme výhradně profily s ověřeným původem a doloženými parametry.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <img src="/img/spolehliva-firma.png" alt="Spolehlivá firma 2023" className="h-24 w-24" />
                <img src="/img/ceska-okna.jpg" alt="Zaručeně česká okna" className="h-20 w-20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <a key={cert.src} href={cert.src} target="_blank" rel="noreferrer" className="border border-black/10 bg-[#F3F3EE] p-3 transition hover:border-[#2E6B8A]/40">
                  <img src={cert.src} alt={cert.title} loading="lazy" className="w-full" />
                  <span className="mt-3 block text-center text-xs font-bold text-black/55">{cert.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Chcete podobnou realizaci u vás doma?" />

      {open !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f1417]/95 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button type="button" className="absolute top-5 right-5 grid h-11 w-11 place-items-center border border-white/25 text-white" aria-label="Zavřít" onClick={() => setOpen(null)}>
            <Icon name="close" />
          </button>
          <button
            type="button"
            className="absolute left-3 grid h-11 w-11 place-items-center border border-white/25 text-white sm:left-6"
            aria-label="Předchozí"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + galleryPhotos.length) % galleryPhotos.length); }}
          >
            <Icon name="arrow" className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            className="absolute right-3 grid h-11 w-11 place-items-center border border-white/25 text-white sm:right-6"
            aria-label="Další"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % galleryPhotos.length); }}
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={galleryPhotos[open].src} alt={galleryPhotos[open].title} className="max-h-[80vh] w-auto max-w-full object-contain" />
            <figcaption className="mt-4 text-center text-sm font-bold text-white/80">
              {galleryPhotos[open].title} <span className="ml-3 font-normal text-white/40">{open + 1} / {galleryPhotos.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
