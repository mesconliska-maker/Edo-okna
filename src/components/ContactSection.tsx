import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { Eyebrow } from "@/components/ui";
import { contact } from "@/data/site";

/**
 * Contact form + details + map. Without a backend the form opens the
 * visitor's mail client with a pre-filled message to the company address.
 */
export default function ContactSection({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [field]: e.target.value });
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka z webu — ${form.name || "nový zákazník"}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nTelefon: ${form.phone}\nE-mail: ${form.email}\n\nPopis poptávky:\n${form.message}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kontakt" className="bg-[#F3F3EE]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.08fr_.92fr]">
        <div className="section-pad px-5 lg:pl-[max(2rem,calc((100vw-1220px)/2))] lg:pr-20">
          {!compact && (
            <>
              <Eyebrow>Kontakt</Eyebrow>
              <h2>Plánujete nová okna,<br />dveře nebo žaluzie?</h2>
            </>
          )}
          {compact && <h2 className="text-3xl">Napište nám</h2>}
          <p className="mt-5 text-black/55">Ozveme se a domluvíme nezávazné zaměření. Poradenství i zaměření jsou zdarma.</p>
          <form className="mt-10 grid gap-4 sm:grid-cols-2" onSubmit={submit}>
            <label><span>Jméno</span><input type="text" required value={form.name} onChange={update("name")} placeholder="Vaše jméno" /></label>
            <label><span>Telefon</span><input type="tel" required value={form.phone} onChange={update("phone")} placeholder="+420" /></label>
            <label className="sm:col-span-2"><span>E-mail</span><input type="email" value={form.email} onChange={update("email")} placeholder="vas@email.cz" /></label>
            <label className="sm:col-span-2"><span>Popis poptávky</span><textarea rows={4} value={form.message} onChange={update("message")} placeholder="Co plánujete? Počet oken, typ domu, lokalita…" /></label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn-blue w-full justify-center px-7 py-4 sm:w-auto">Odeslat poptávku <Icon name="arrow" className="h-5 w-5" /></button>
              <span className="text-xs text-black/45">Nebo rovnou zavolejte: <a href={contact.phones[0].href} className="font-bold text-[#2E6B8A]">{contact.phones[0].display}</a></span>
            </div>
          </form>
        </div>
        <div className="section-pad bg-[#1E2429] px-5 text-white lg:pl-16 lg:pr-[max(2rem,calc((100vw-1220px)/2))]">
          <p className="text-xs font-bold tracking-[.18em] text-[#77B0CA] uppercase">{contact.company} — {contact.owner}</p>
          <div className="mt-9 grid gap-7 sm:grid-cols-2">
            <div><span className="contact-label">Adresa</span><p>{contact.street}<br />{contact.city}</p></div>
            <div>
              <span className="contact-label">Telefon</span>
              <p>{contact.phones.map((p) => <a key={p.href} href={p.href} className="block hover:text-[#79B5CF]">{p.display}</a>)}</p>
            </div>
            <div><span className="contact-label">E-mail</span><p><a href={`mailto:${contact.email}`} className="hover:text-[#79B5CF]">{contact.email}</a></p></div>
            <div><span className="contact-label">Otevírací doba</span><p>{contact.hours}<br /><span className="text-white/45">So–Ne zavřeno</span></p></div>
          </div>
          <iframe
            title="Mapa — Javorová 282, Černošín"
            src={contact.mapEmbed}
            className="mt-10 h-56 w-full border border-white/15 grayscale-[.4]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={contact.mapLink} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between border border-white/15 bg-white/5 p-5 text-sm font-bold hover:bg-white/10">
            Otevřít v Google Maps <Icon name="arrow" className="h-5 w-5 text-[#78B2CC]" />
          </a>
        </div>
      </div>
    </section>
  );
}
