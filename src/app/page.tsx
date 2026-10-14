"use client";

import { type FormEvent, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    document.documentElement.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Contact BESTCHOCO");
    const body = encodeURIComponent(
      `Nom : ${formData.get("name")}\nEmail : ${formData.get("email")}\n\nMessage :\n${formData.get("message")}`,
    );
    window.location.href = `mailto:contact@bestchoco-guinee.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section id="top" className="hero">
        <div className="hero-backdrop" aria-hidden="true">
          {/* Image Desktop / Tablette */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src="/assets/images/hero-bestchoco-integrated.jpg"
              alt="Bannière BESTCHOCO d'exception avec pot et chocolat artisanal"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right lg:object-center"
            />
          </div>
          {/* Image optimisée Mobile Vertical */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="/assets/images/hero-mobile.jpg"
              alt="BESTCHOCO pâte à tartiner chocolat noisette"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-layout">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Artisanat d’exception · Conakry, Guinée</span>
            <h1>L’Atelier<br />du Goût</h1>
            <p className="hero-lead">Des saveurs authentiques, nées de la nature.</p>
            <p className="hero-description">
              BESTCHOCO célèbre l’accord du cacao et de la noisette. Découvrez aussi
              Somapan, la levure boulangère qui garantit la réussite de vos fournées.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#bestchoco">Découvrir nos produits <span aria-hidden="true">→</span></a>
              <a className="button-outline" href="#histoire">Voir notre histoire</a>
            </div>
          </div>
        </div>
      </section>

      <section id="bestchoco" className="section-dark scroll-mt-20">
        <div data-reveal className="section-shell compact">
          <div className="product-grid">
            <div className="product-display">
              <Image
                src="/assets/images/bestchoco-open.png"
                alt="Pot BESTCHOCO ouvert, la pâte à tartiner est visible"
                width={1217}
                height={1292}
                sizes="(max-width: 640px) 85vw, (max-width: 900px) 38vw, 28vw"
              />
            </div>

            <div>
              <span className="section-kicker">Notre spécialité</span>
              <h2 className="section-title">BESTCHOCO</h2>
              <p className="mt-2 text-xs font-semibold tracking-[.14em] text-[#e5c158] uppercase">
                Pâte à tartiner cacao-noisette
              </p>
              <p className="section-text mt-5">
                Une pâte chocolatée onctueuse à savourer au petit-déjeuner, au goûter
                ou à partager. Le pot BESTCHOCO met le cacao et la noisette au cœur
                d’un moment simple et gourmand.
              </p>
              <ul className="feature-list">
                <li>Cacao & noisette</li>
                <li>Une texture à tartiner</li>
                <li>À savourer à tout moment</li>
              </ul>
              <a className="button-primary" href="/article2">En savoir plus <span aria-hidden="true">→</span></a>
            </div>

            <figure className="food-photo">
              <Image
                src="/assets/images/chocolate-toast.jpg"
                alt="Tartine de pain garnie de pâte à tartiner et de noisettes"
                fill
                sizes="(max-width: 900px) 100vw, 32vw"
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="somapan" className="section-light scroll-mt-20">
        <div data-reveal className="section-shell">
          <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-6 space-y-4">
              <span className="section-kicker">L’univers de la boulangerie</span>
              <h2 className="section-title">Somapan</h2>
              <p className="text-xs font-semibold tracking-[.13em] text-[#8f5534] uppercase">
                Levure Sèche Instantanée · Somadir
              </p>
              <p className="section-text">
                Pour le pain croustillant du quotidien comme pour les viennoiseries et les créations boulangères d'exception.
                La levure instantanée <strong>Somapan</strong> assure une force de levée naturelle, régulière et rapide, pour une mie généreusement alvéolée et une croûte bien dorée.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a className="button-primary" href="#contact">Commander Somapan <span aria-hidden="true">→</span></a>
                <a className="button-outline" href="tel:+224620000000">Conseil boulanger</a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/70 border border-[#d9cbb9] shadow-sm flex flex-col items-center text-center">
                <div className="relative w-28 h-36 mb-2">
                  <Image
                    src="/assets/images/somapan.png"
                    alt="Paquet sous vide Somapan 450g"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-sm text-[#38251b]">Paquet 450 g</h4>
                <p className="text-[11px] text-[#6f6055]">Sous vide haute protection</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#d9cbb9] shadow-sm flex flex-col items-center text-center">
                <div className="relative w-28 h-36 mb-2">
                  <Image
                    src="/assets/images/somapanCarton.png"
                    alt="Carton professionnel Somapan 10 kg"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-bold text-sm text-[#38251b]">Carton Pro 10 kg</h4>
                <p className="text-[11px] text-[#6f6055]">10 x 1 kg · Pour boulangeries</p>
              </div>
            </div>
          </div>

          {/* Grande Scène Vitrine Pain & Levure Somapan */}
          <div className="relative rounded-2xl overflow-hidden border border-[#d9cbb9] shadow-xl aspect-[16/9] max-h-[520px]">
            <Image
              src="/assets/images/somapan-bakery-showcase.jpg"
              alt="Pain artisanal croustillant, farine et levure sèche instantanée Somapan"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,7,5,0.7)] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#fbf8f3]">
              <span className="font-serif font-bold text-sm">✦ Pain doré à la farine fine & Levure Somapan</span>
              <span className="bg-[#8f5534] text-white px-3 py-1 rounded-full text-[11px] font-semibold">
                Levée Rapide & Efficace
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="histoire" className="section-deep scroll-mt-20">
        <div data-reveal className="section-shell">
          <div className="story-layout">
            <div className="story-copy">
              <span className="section-kicker">Notre histoire</span>
              <h2 className="section-title">Une passion transmise.</h2>
              <p className="section-text mt-5">
                Fondée en 2024, BESTCHOCO porte une idée simple : faire découvrir
                le plaisir du chocolat artisanal à Conakry. Une maison attachée au
                goût, au geste et aux recettes qui se partagent.
              </p>
              <a className="button-outline mt-6" href="/article1">Notre histoire <span aria-hidden="true">→</span></a>
            </div>

            <div className="story-grid" aria-label="L’univers BESTCHOCO">
              <figure className="story-card">
                <Image src="/assets/images/cocoa-beans.jpg" alt="Fèves de cacao et ingrédients" fill sizes="(max-width: 640px) 100vw, 40vw" />
                <figcaption>Cacao & noisette<small>Les saveurs au cœur de BESTCHOCO</small></figcaption>
              </figure>
              <figure className="story-card">
                <Image src="/assets/images/bestchoco-tasting.png" alt="Moment de dégustation BESTCHOCO" fill sizes="(max-width: 640px) 50vw, 28vw" />
                <figcaption>Un moment à savourer</figcaption>
              </figure>
              <figure className="story-card">
                <Image src="/assets/images/saf-bakery.jpg" alt="Pain tout juste sorti du fournil" fill sizes="(max-width: 640px) 50vw, 28vw" />
                <figcaption>Le pain du quotidien</figcaption>
              </figure>
              <figure className="story-card story-product-card">
                <Image src="/assets/images/bestchoco-open.png" alt="Pot BESTCHOCO ouvert" fill sizes="(max-width: 640px) 50vw, 28vw" />
                <figcaption>La gourmandise BESTCHOCO</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-band scroll-mt-20">
        <div data-reveal className="section-shell compact">
          <div className="contact-grid">
            <div>
              <span className="section-kicker">Contact & commandes</span>
              <h2 className="section-title">Une question ?</h2>
              <p className="mt-2 text-sm text-[#d4c9bd]">Notre équipe est à votre écoute.</p>
            </div>
            <div className="contact-info">
              <a href="tel:+224620000000">Téléphone · +224 620 00 00 00</a>
              <span>Conakry, République de Guinée</span>
              <a href="mailto:contact@bestchoco-guinee.com">contact@bestchoco-guinee.com</a>
            </div>
            <a className="button-primary" href="#contact-form">Nous contacter <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-cream scroll-mt-20">
        <div data-reveal className="section-shell compact grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="section-kicker">Écrivez-nous</span>
            <h2 className="section-title">Parlons de votre projet.</h2>
            <p className="section-text mt-4">Une question sur BESTCHOCO, la levure Somapan ou une demande de partenariat ?</p>
          </div>
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleContactSubmit}>
            <div>
              <label className="contact-label" htmlFor="name">Nom</label>
              <input className="contact-field" id="name" name="name" autoComplete="name" required />
            </div>
            <div>
              <label className="contact-label" htmlFor="email">Email</label>
              <input className="contact-field" id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="sm:col-span-2">
              <label className="contact-label" htmlFor="message">Message</label>
              <textarea className="contact-field resize-y" id="message" name="message" rows={3} required />
            </div>
            <button className="button-primary sm:col-span-2 sm:justify-self-start" type="submit">Préparer mon message <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </section>
    </>
  );
}
