"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu si la fenêtre est redimensionnée en mode desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquer le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(13,7,5,0.96)] shadow-[0_10px_30px_rgba(0,0,0,0.7)] border-b border-[var(--bronze-line)] backdrop-blur-xl"
          : "bg-[rgba(24,13,9,0.92)] border-b border-[var(--bronze-line)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo / Monogramme */}
        <a
          href="/#top"
          onClick={closeMenu}
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="BESTCHOCO, accueil"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f5e2a3] via-[#d4af37] to-[#8f5534] font-serif text-lg font-black text-[#140a06] shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-shadow group-hover:shadow-[0_0_22px_rgba(212,175,55,0.6)]">
            B
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-[0.14em] text-[var(--ivory)] group-hover:text-[#f5e2a3] transition-colors">
              BESTCHOCO
            </span>
            <span className="text-[9px] font-medium tracking-[0.22em] text-[#d4af37] uppercase">
              Artisanat de Guinée
            </span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav
          className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wider uppercase text-[#e2d5c7]"
          aria-label="Navigation principale"
        >
          <a
            href="/#top"
            className="relative py-1 transition-colors duration-200 hover:text-[var(--champagne)] group"
          >
            Accueil
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--champagne)] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#bestchoco"
            className="relative py-1 transition-colors duration-200 hover:text-[var(--champagne)] group"
          >
            BESTCHOCO
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--champagne)] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#somapan"
            className="relative py-1 transition-colors duration-200 hover:text-[var(--champagne)] group"
          >
            Somapan
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--champagne)] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#histoire"
            className="relative py-1 transition-colors duration-200 hover:text-[var(--champagne)] group"
          >
            Notre Histoire
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--champagne)] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="/#contact"
            className="relative py-1 transition-colors duration-200 hover:text-[var(--champagne)] group"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--champagne)] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Boutons Desktop & Mobile */}
        <div className="flex items-center gap-3">
          {/* CTA Desktop */}
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--champagne)] bg-gradient-to-r from-[var(--champagne)] to-[#c59728] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#140a06] shadow-[0_4px_16px_rgba(212,175,55,0.3)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_6px_22px_rgba(212,175,55,0.5)] active:scale-95"
          >
            <span>Commander</span>
            <span aria-hidden="true" className="text-sm font-black">→</span>
          </a>

          {/* Mini CTA Mobile (Bouton d'appel rapide avec icône SVG) */}
          <a
            href="tel:+224620000000"
            className="sm:hidden flex h-10 items-center gap-2 rounded-full border border-[var(--bronze-line)] bg-[rgba(35,20,14,0.85)] px-3.5 text-[11px] font-bold text-[var(--champagne)] hover:border-[var(--champagne)] active:scale-95 transition-all shadow-sm"
            aria-label="Appeler l'atelier"
          >
            <svg
              className="w-3.5 h-3.5 text-[var(--champagne)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Appeler</span>
          </a>

          {/* Bouton Hamburger Mobile Animé */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--bronze-line)] bg-[rgba(35,20,14,0.85)] text-[var(--ivory)] transition-all hover:border-[var(--champagne)] active:scale-90"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-[var(--champagne)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[var(--champagne)] rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[var(--champagne)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu Déroulant Mobile avec Backdrop Blur Haute Définition */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[rgba(10,5,3,0.97)] backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-6 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="space-y-6 pt-2">
          <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#d4af37]">
            Menu de navigation
          </p>
          <nav className="flex flex-col gap-4 text-lg font-serif">
            <a
              href="/#top"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[var(--bronze-line)] pb-3 text-[var(--ivory)] hover:text-[var(--champagne)] transition-colors group"
            >
              <span>Accueil</span>
              <svg className="w-4 h-4 text-[var(--champagne)] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
            <a
              href="/#bestchoco"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[var(--bronze-line)] pb-3 text-[var(--ivory)] hover:text-[var(--champagne)] transition-colors group"
            >
              <span>BESTCHOCO Cacao & Noisettes</span>
              <svg className="w-4 h-4 text-[var(--champagne)] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
            <a
              href="/#somapan"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[var(--bronze-line)] pb-3 text-[var(--ivory)] hover:text-[var(--champagne)] transition-colors group"
            >
              <span>Somapan Boulangerie</span>
              <svg className="w-4 h-4 text-[var(--champagne)] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
            <a
              href="/#histoire"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[var(--bronze-line)] pb-3 text-[var(--ivory)] hover:text-[var(--champagne)] transition-colors group"
            >
              <span>Notre Histoire & Valeurs</span>
              <svg className="w-4 h-4 text-[var(--champagne)] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
            <a
              href="/#contact"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[var(--bronze-line)] pb-3 text-[var(--ivory)] hover:text-[var(--champagne)] transition-colors group"
            >
              <span>Contact & Commandes</span>
              <svg className="w-4 h-4 text-[var(--champagne)] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </nav>

          {/* Grand Bouton CTA Mobile */}
          <div className="pt-4 space-y-3">
            <a
              href="/#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--champagne)] to-[#c59728] py-4 text-center text-sm font-bold uppercase tracking-widest text-[#140a06] shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-98 transition-all"
            >
              <span>Passer une commande</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="https://wa.me/224620000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[var(--bronze-line)] bg-[rgba(35,20,14,0.6)] py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-[var(--ivory)] hover:text-[var(--champagne)] hover:border-[var(--champagne)] active:scale-98 transition-all"
            >
              <svg
                className="w-4 h-4 text-[#25D366]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.953 1.18-.176.2-.351.226-.653.075-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.786-1.68-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.237-.245-.588-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9-.12.58-.354 1.78-1.42 2.03-2.022.25-.602.25-1.117.175-1.229-.075-.112-.276-.188-.577-.338zM12.04 2C6.51 2 2.024 6.486 2.024 12.016c0 1.98.577 3.824 1.579 5.385L2 22l4.757-1.543a9.96 9.96 0 0 0 5.283 1.506c5.53 0 10.016-4.486 10.016-10.016S17.57 2 12.04 2zm0 18.232a8.2 8.2 0 0 1-4.185-1.144l-.3-.178-3.111 1.009 1.036-3.033-.195-.311a8.216 8.216 0 0 1-1.26-4.359c0-4.547 3.7-8.247 8.247-8.247 4.547 0 8.247 3.7 8.247 8.247 0 4.547-3.7 8.247-8.247 8.247z" />
              </svg>
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Coordonnées en bas de menu mobile */}
        <div className="pt-6 border-t border-[var(--bronze-line)] mt-6 text-xs text-[#a99a8c] space-y-1">
          <p className="font-semibold text-[var(--ivory)]">Atelier BESTCHOCO · Conakry</p>
          <p>Tél : +224 620 00 00 00</p>
          <p>Email : contact@bestchoco-guinee.com</p>
        </div>
      </div>
    </header>
  );
}
