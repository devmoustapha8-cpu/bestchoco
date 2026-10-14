import Image from "next/image";

export default function Article1() {
  return (
    <section className="py-24 bg-[var(--cream)]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[var(--choc)] mb-6">
          BestChoco - Notre Histoire
        </h1>
        <p className="text-lg leading-relaxed text-[var(--gris)] mb-8">
          Fondée en 2024, BestChoco s'engage à offrir le vrai goût du chocolat
          artisanal en Guinée. Sélection rigoureuse des fèves, torréfaction
          traditionnelle et recettes transmises de génération en génération.
        </p>
        
        <h2 className="text-2xl font-semibold text-[var(--choc)] mt-12 mb-4">
          Nos Valeurs
        </h2>
        <ul className="list-disc list-inside space-y-4 text-[var(--gris)]">
          <li>Qualité artisanale</li>
          <li>Tradition familiale</li>
          <li>Sourcing éthique</li>
        </ul>
        
        <Image
          src="/assets/images/bestchoco-open.png"
          alt="Pot BestChocoouvert - symbole de notre ouverture au monde"
          width={600}
          height={638}
          loading="lazy"
          className="mt-12 max-w-full rounded-xl object-contain"
        />
      </div>
    </section>
  );
}
