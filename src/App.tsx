import { BrowserRouter, Link, Route, Routes } from "react-router";
import Layout from "@/components/Layout";
import { Seo } from "@/components/ui";
import Home from "@/pages/Home";
import OknaDvere from "@/pages/OknaDvere";
import ZaluzieSite from "@/pages/ZaluzieSite";
import Servis from "@/pages/Servis";
import GarazovaVrata from "@/pages/GarazovaVrata";
import Instituce from "@/pages/Instituce";
import Fotogalerie from "@/pages/Fotogalerie";
import Kontakt from "@/pages/Kontakt";

function NotFound() {
  return (
    <section className="section-pad">
      <Seo title="Stránka nenalezena" description="Stránka nebyla nalezena." />
      <div className="mx-auto max-w-[1220px] px-5 text-center">
        <p className="text-xs font-bold tracking-[.2em] text-[#2E6B8A] uppercase">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Stránka nenalezena</h1>
        <p className="mt-4 text-black/55">Odkaz je neplatný nebo stránka byla přesunuta.</p>
        <Link to="/" className="btn-blue mt-8 px-7 py-4">Zpět na úvod</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="okna-a-dvere" element={<OknaDvere />} />
          <Route path="zaluzie-a-site" element={<ZaluzieSite />} />
          <Route path="servis" element={<Servis />} />
          <Route path="garazova-vrata" element={<GarazovaVrata />} />
          <Route path="pro-skoly-a-statni-spravu" element={<Instituce />} />
          <Route path="fotogalerie" element={<Fotogalerie />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
