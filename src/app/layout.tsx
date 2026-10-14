import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "BESTCHOCO — L’Atelier du Goût à Conakry",
  description: "Découvrez BESTCHOCO, pâte à tartiner cacao-noisette d'exception, et la levure instantanée Somapan à Conakry.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />

        <main id="top">{children}</main>

        <footer className="site-footer">
          <div className="section-shell compact">
            <div className="footer-grid">
              <div>
                <a href="/#top" className="brand-mark text-base font-bold">BESTCHOCO</a>
                <p className="mt-2 max-w-xs text-xs text-[#bbaea1]">Maison artisanale · Conakry, Guinée</p>
              </div>
              <div>
                <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[.14em] text-[#e5c158]">Navigation</h2>
                <div className="grid gap-2 text-xs">
                  <a href="/#bestchoco">Nos produits</a>
                  <a href="/article1">Notre histoire</a>
                  <a href="/article2">Galerie & contact</a>
                </div>
              </div>
              <div>
                <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-[.14em] text-[#e5c158]">Nous joindre</h2>
                <div className="grid gap-2 text-xs">
                  <a href="tel:+224620000000">+224 620 00 00 00</a>
                  <a href="mailto:contact@bestchoco-guinee.com">contact@bestchoco-guinee.com</a>
                  <span>Conakry, Guinée</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] text-[#a99a8c] sm:flex-row sm:justify-between">
              <span>© {new Date().getFullYear()} BESTCHOCO. Tous droits réservés.</span>
              <span>Cacao · Noisette · Gourmandise</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
