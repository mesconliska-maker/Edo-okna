import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import Icon from "@/components/Icon";
import { contact, nav } from "@/data/site";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1E2429]/96 text-[#EFEFEA] backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="EDO OKNA domů">
          <span className="relative grid h-10 w-10 grid-cols-2 gap-[3px] border-2 border-[#5A9ABB] p-[5px]">
            <i className="border border-[#5A9ABB]" />
            <i className="border border-[#5A9ABB]" />
            <i className="border border-[#5A9ABB]" />
            <i className="border border-[#5A9ABB]" />
          </span>
          <span>
            <b className="block text-xl leading-none tracking-[0.08em]">EDO OKNA</b>
            <small className="mt-1 block text-[9px] tracking-[0.18em] text-white/50 uppercase">{contact.owner}</small>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-[12px] font-semibold xl:flex">
          {nav.filter((item) => item.to !== "/kontakt").map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "text-[#79B5CF]" : "")}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href={contact.phones[0].href} className="flex items-center gap-2 text-sm font-bold">
            <Icon name="phone" className="h-4 w-4 text-[#73AFCB]" />
            {contact.phones[0].display}
          </a>
          <Link to="/kontakt" className="btn-blue px-5 py-3 text-xs">Nezávazná poptávka</Link>
        </div>
        <button
          className="grid h-11 w-11 place-items-center border border-white/20 xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#1E2429] px-5 py-5 text-sm xl:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `block border-b border-white/10 py-3 ${isActive ? "text-[#79B5CF]" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
          <a href={contact.phones[0].href} className="mt-4 flex items-center gap-2 font-bold md:hidden">
            <Icon name="phone" className="h-4 w-4 text-[#73AFCB]" /> {contact.phones[0].display}
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#151A1E] text-white/55">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <b className="text-base tracking-wider text-white">EDO OKNA</b>
          <p className="mt-3 max-w-xs text-sm leading-6">
            Montáž oken, dveří, žaluzií a sítí proti hmyzu. {contact.region}.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <img src="/img/spolehliva-firma.png" alt="Spolehlivá firma 2023" className="h-14 w-14" />
            <img src="/img/ceska-okna.jpg" alt="Zaručeně česká okna" className="h-12 w-12 rounded-sm" />
            <img src="/img/koemmerling.png" alt="Kömmerling" className="h-7 rounded bg-white px-1.5 py-0.5" />
          </div>
        </div>
        <div>
          <span className="contact-label">Navigace</span>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}><Link to={item.to} className="hover:text-white">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <span className="contact-label">Kontakt</span>
          <p className="text-sm leading-6">
            {contact.owner}<br />{contact.street}<br />{contact.city}
          </p>
          <p className="mt-3 text-sm leading-6">
            {contact.phones.map((p) => (
              <a key={p.href} href={p.href} className="block hover:text-white">{p.display}</a>
            ))}
            <a href={`mailto:${contact.email}`} className="block hover:text-white">{contact.email}</a>
          </p>
          <p className="mt-3 text-sm">{contact.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-5 text-xs md:flex-row md:items-center md:justify-between lg:px-8">
          <p>IČ {contact.ic} &nbsp;·&nbsp; DIČ {contact.dic}</p>
          <p>© 2026 EDO OKNA — {contact.owner}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3F3EE] text-[#1B2126]">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
