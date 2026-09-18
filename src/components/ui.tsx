import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import Icon from "@/components/Icon";

export function Eyebrow({ children, warm = false }: { children: ReactNode; warm?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.19em] uppercase ${warm ? "text-[#C4762E]" : "text-[#2E6B8A]"}`}>
      <span className={`h-px w-8 ${warm ? "bg-[#C4762E]" : "bg-[#2E6B8A]"}`} />
      {children}
    </div>
  );
}

/** Sets document title + meta description per page. */
export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | EDO OKNA`;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
  return null;
}

/** Dark hero for subpages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  warm = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image?: string;
  imageAlt?: string;
  warm?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#1E2429] text-white">
      {image && (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,28,.97)_0%,rgba(18,24,28,.88)_45%,rgba(18,24,28,.35)_100%)]" />
        </>
      )}
      <div className="absolute inset-0 technical-grid opacity-15" />
      <div className="relative mx-auto max-w-[1220px] px-5 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white">
          <Icon name="arrow" className="h-4 w-4 rotate-180" /> Úvod
        </Link>
        <Eyebrow warm={warm}>{eyebrow}</Eyebrow>
        <h1 className="max-w-[820px] text-4xl leading-[1.05] font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.9rem]">{title}</h1>
        {lead && <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

/** Warm conversion band used at the bottom of subpages. */
export function CtaBand({ title = "Plánujete nová okna, dveře nebo žaluzie?", text = "Ozvěte se, přijedeme, zaměříme a připravíme nezávaznou nabídku." }) {
  return (
    <section className="bg-[#C4762E] text-white">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div>
          <h2 className="text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/kontakt" className="btn-dark px-7 py-4">Nezávazná poptávka <Icon name="arrow" className="h-5 w-5" /></Link>
          <a href="tel:+420605148738" className="btn-outline px-7 py-4"><Icon name="phone" className="h-4 w-4" /> 605 148 738</a>
        </div>
      </div>
    </section>
  );
}

export function ChecklistItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6">
      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-[#C4762E]" />
      <span>{children}</span>
    </li>
  );
}
