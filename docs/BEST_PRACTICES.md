# RÈGLES & BONNES PRATIQUES - BestChoco Site Vitrine (2 Articles)

## Objectif
Site vitrine BestChoco avec **2 articles seulement** (pas d'e-commerce, pas d'application complexe).
Article 1: "Notre Histoire/Article 1"
Article 2: "Galerie & Contact/Article 2"

## Stack Technique
- **Next.js:** 16.3.3 (tel que package.json)
- **TypeScript:** avec config stricte
- **Tailwind CSS:** v4
- **Pas de Supabase** pas d'authentification (2 articles vitrine seulement)
- **Pas de API routes complexes** (formulaire contact basique seulement)

## Structure Projet (2 Articles)

### Fichier layout.tsx unique
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BestChoco - Artisanat Chocolatier à Guinée",
  description: "Site vitrine 2 articles BestChoco: histoire & galerie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-full bg-[var(--choc)] text-[var(--cream)] font-[var(--font-sans)]">
        <header className="border-b [&>_:not(:first-child)]:mt-2 [&_a]:text-[var(--gold)]">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/article1" className="text-[var(--gold)] font-bold text-lg tracking-wider">
              BestChoco
            </a>
            <nav className="flex gap-6">
              <a href="/article1" className="hover:text-[var(--choc2)] transition-colors">Histoire</a>
              <a href="/article2" className="hover:text-[var(--choc2)] transition-colors">Galerie</a>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-8">
          {children}
        </main>

        <footer className="border-t mt-12 pt-8 text-sm text-[var(--gris)]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center">
              BestChoco · Artisan chocolatier · Conakry, Guinée
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

### Article 1: `/article1/page.tsx` - Histoire/Présentation
```tsx
export default function Article1() {
  return (
    <section className="py-24 bg-[var(--cream)]">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[var(--choc)] mb-6">
          BestChoco - Notre Histoire
        </h1>
        <p className="text-lg leading-relaxed text-[var(--gris-fonce)] mb-8">
          Fondée en 2024, BestChoco s'engage à offrir le vrai goût du chocolat
          artisanal en Guinée. Sélection rigoureuse des fèves, torréfaction
          traditionnelle et recettes transmises de génération en génération.
        </p>
        
        <h2 className="text-2xl font-semibold text-[var(--choc)] mt-12 mb-4">
          Nos Valeurs
        </h2>
        <ul className="list-disc list-inside space-y-4 text-[var(--gris-fonce)]">
          <li>Qualité artisanale</li>
          <li>Tradition familiale</li>
          <li>Sourcing éthique</li>
        </ul>
        
        <Image
          src="/assets/images/bestchoco-open.png"
          alt="Pot BestChocoouvert - symbole de notre ouverture au monde"
          width={600}
          height={400}
          loading="lazy"
          className="mt-12 rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
```

### Article 2: `/article2/page.tsx` - Galerie & Contact
```tsx
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
            className="object-cover rounded-xl hover:opacity-[.9]"
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
            alt="Symbole artisanat BestChoco"
            width={400}
            height={300}
            loading="lazy"
            className="object-cover rounded-xl hover:opacity-[.9]"
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
            /></textarea>
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
```

## Animations - Spécifique 2 Articles

### Article 1 (Histoire)
- Fade-in progressif au chargement section
- Images avec `transition-opacity` au survol (max 1 seul hover à la fois)
- Pas d'animation complexe, rester léger

### Article 2 (Galerie)
- Grid d'images avec `transition-transform` et `transition-opacity` au `:hover`
- Image active légèrement agrandie: `scale-105`
- Focus-visible sur les images cliquables
- Aucun carousel complexe (too heavy pour vitrine 2 articles)

### Commun aux 2 articles
- `prefers-reduced-motion` respecté (media query `@media (prefers-reduced-motion: reduce)`)
- Pas de `data-image/base64` (toujours next/image)
- Toutes les animations en CSS native, pas de Framer Motion lourd

## Mise en page & Responsive

### Mobile-first (première priorité)
- Article 1: full-width background image, texte en colonne
- Article 2: grid 1 colonne mobile, 2 tablette, 3 desktop
- Menu header: hamburger sur mobile (< 640px), 2 liens horizontal < 768px

### Breakpoints
- `sm:` → 640px (mobile large)
- `md:` → 768px (tablette)
- `lg:` → 1024px (petit desktop)
- `xl:` → 1280px (desktop standard)
- `2xl:` → 1536px (large)

### Conteneurs
- `max-w-7xl` center mx auto pour le contenu principal
- Padding px-4 sur mobile, px-6 md, px-8 lg
- Espacement constant: `gap-4` quelle que taille écran

## Images - Règles Spécifiques 2 Articles

### Depuis Design Motion (4 images)
1. **bestchoco-open.png** → Article 1 (hero/section) ET Article 2 (galerie) - polyvalente
2. **bestchoco-tasting.png** → Article 2 seulement (galerie), pas dans article1
3. **levure.png** → Peuvent apparaître dans les 2 selon contexte, mais pas obligatoire
4. **ouvert.png** → En-tête/footer communs, très petite taille

### Taille et Format
- **next/image** configuré: `formats: ['webp', 'png']`
- **Largeur max 800px** dans la galerie article 2 (gain performance)
- **Pas de limite stricte** article 1 si bel hero background (mais pas > 1920px)
- **Taille fichier visée < 200KB** par image (optimisation automatique next)

### Alt Text (2 articles = ~6-8 images au total)
- Chaque `<Image>` doit avoir `alt` unique et significatif
- Exemple article 1: `"Pot BestChocoouvert - lancement marque 2024"`
- Exemple article 2: `"Pot BestChocoouvert - photo galerie produits"`
- Jamais de `alt` vide (`alt=""`) si image informative

## Formulaire de Contact (Article 2 seulement)

### HTML natif (pas de backend, pas de base de données)
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" required className="..." />
  <input type="email" name="email" required className="..." />
  <textarea name="message" required className="..." /></textarea>
  <button type="submit" className="...">Envoyer</button>
</form>
```

### Alternatives (si needed)
- Formspree (gratuit jusqu'à 50 submissions/mois)
- Netlify Forms (ajouter `data-netlify="true"` sur `<form>`)
- Pas de validation JS complexe (HTML5 `required` suffit)

## Déploiement

### Vercel (recommandé)
- `vercel --prod` depuis le dossier bestchoco
- Pas de variables d'environnement nécessaires (pas de Supabase)
- Domaine: configurer dans dashboard Vercel (`bestchoco.vercel.app` ou custom)

### Git
- Branche `main` deployée automatiquement
- Commits: messages en français ou anglais (constants)
- `.gitignore` standard: `node_modules`, `.next`, `*.env*`

## Dépannage Rapide

### Problème: Images pas bonnes taille
1. Vérifier `next.config.ts` images.formats
2. Utiliser `width`/`height` props sur `<Image>` (pas de CSS width seule)
3. `rm -rf .next` + redémarrer dev server
4. Vérifier pas de `sizes` en double dans le markup

### Problème: Article 2 grille cassé mobile
1. Vérifier `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
2. Les images ont-elles mêmes `height` prop ? (obligatoire pour grid)
3. Vérifier pas de `object-left` ou `object-right` non désiré

### Problème: Couleurs outside charte
1. Vérifier toutes les `bg-[color]` utilisent les variables `--gold`, `--choc`, `--cream`
2. Pas de `bg-gray-50` ou autresoutside la charte
3. Redémarrer server après modification tailwind

### Problème: Formulaire contact ne poste pas
1. C'est normal - pas de backend configuré (site vitrine 2 articles)
2. Utiliser Formspree ou Netlify si besoin de recevoir messages
3. Ou enlever le `action` du form pour garder en local (submit vide)