import Image from "next/image";

export default function Article2() {
  return (
    <section className="py-24 bg-[var(--choc)] text-[var(--cream)]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[var(--gold)] mb-8">
          Découvrez BestChoco
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <Image
            src="/assets/images/bestchoco-open.png"
            alt="Pot BestChoco - chocolat artisanal"
            width={400}
            height={300}
            loading="lazy"
            className="object-contain rounded-xl hover:opacity-[.9]"
          />
          <Image
            src="/assets/images/bestchoco-tasting.png"
            alt="Moment dégustation BestChoco"
            width={400}
            height={300}
            loading="lazy"
            className="object-cover rounded-xl hover:opacity-[.9]"
          />
          <Image
            src="/assets/images/levure.png"
            alt="Symbole artisanat BestChoco - levure pour fermentation"
            width={400}
            height={300}
            loading="lazy"
            className="object-contain rounded-xl hover:opacity-[.9]"
          />
        </div>
        
        <h2 className="text-3xl font-bold text-[var(--gold)] mt-12 mb-6">
          Nous Contacter
        </h2>
        
        <form className="space-y-4 mt-8">
          <div>
            <label className="block text-sm font-medium text-[var(--cream)] mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-[var(--cream)] border border-[var(--gold)] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--cream)] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[var(--cream)] border border-[var(--gold)] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--cream)] mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-[var(--cream)] border border-[var(--gold)] rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--gold)] text-[var(--choc)] font-bold py-3 rounded hover:opacity-[.9] transition-opacity"
          >
            Envoyer Message
          </button>
        </form>
      </div>
    </section>
  );
}
