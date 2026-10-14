# Guide de Manipulation des Images - BestChoco 2 Articles

## Contexte
Site vitrine BestChoco avec **2 articles/sections** utilisant les images du projet Design Motion.

## Images dispo dans `public/assets/images/` (4 fichiers)

### 1. bestchoco-open.png
- **Article 1:** Hero section / "Notre histoire" - en background pleine largeur
- **Article 2:** Galerie produits - dans la grille (4 images max par ligne)
- **Utilisation:** Pot chocolat ouvert, chocolat visible
- **Taille:** 1920x1080 d'origine, utiliser object-fit ou redimensionner à 800px

### 2. bestchoco-tasting.png
- **Article 1:** Illustration "dégustation" dans la section histoire
- **Article 2:** Photo client/témoignage dans la galerie
- **Note:** L'image `#man` a été retirée du projet original, mais cette img peut servir
- **Utilisation:** Ambiance, "quoi vivre avec BestChoco"

### 3. levure.png
- **Article 1:** Peut représenter "artisanat" ou "produits de boulangerie" dans l'histoire
- **Article 2:** Icône décorative dans la galerie si pertinent
- **Adapter:** Le caption selon l'article (artisanat vs produits)

### 4.ouvert.png
- **Article 1:** Indicateur "Ouvert/Fermé" dans l'en-tête
- **Article 2:** Footer ou section "Horaires"
- **Utilisation:** Icône petite (16x16px ou 24x24px)

## Procédure d'intégration par Article

### Article 1 - "BestChoco - Notre Histoire"
```tsx
// Dans app/article1/page.tsx
<Image
  src="/assets/images/bestchoco-open.png"
  alt="Pot BestChoco ouvert - lancement de la marque"
  width={1200}
  height={630}
  loading="lazy"
  className="object-cover rounded-t-lg w-full h-64 sm:h-80 md:h-[400px]"
/>

<Image
  src="/assets/images/levure.png"
  alt="Symbole artisanat BestChoco"
  width={400}
  height={400}
  loading="lazy"
  className="rounded-xl my-8"
/>
```

### Article 2 - "BestChoco - Galerie & Contact"
```tsx
// Dans app/article2/page.tsx - Galerie grille
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <Image
    src="/assets/images/bestchoco-open.png"
    alt="Pot BestChoco ouvert"
    width={400}
    height={300}
    loading="lazy"
    className="object-cover rounded-xl hover:transform-hover"
  />
  <Image
    src="/assets/images/bestchoco-tasting.png"
    alt="Dégustation BestChoco"
    width={400}
    height={300}
    loading="lazy"
    className="object-cover rounded-xl hover:transform-hover"
  />
  {/* 2 images de plus ou laisser vides si seulement 2 produits */}
</div>
```

## Règles d'optimisation (2 Articles)

### Ne jamais utiliser
- Les `data:image/base64` lourds du fichier HTML originel (trop gros pour du vitrine)
- Plusieurs pages Next.js séparées (garder 2 articles dans `/article1/` et `/article2/`)

### Toujours
- `<Next/Image>` pour le lazy loading entre les 2 articles
- `alt` text significatif pour chaque article (différent selon contexte)
- Formats WebP automatiques via next.config.ts config
- Largeur max 800px dans les grilles d'article 2
- Hmax 1920px pour backgrounds article 1 (mais pas nécessaire en vitrine)

## Mise en page selon les 2 Articles

### Article 1 (largeur pleine)
- Background image bestchoco-open en `object-cover`
- Texte par-dessus avec contraste (gold sur choc, cream sur gold)
- Padding env(safe-area-inset-*)

### Article 2 (grille responsive)
- Grid: 1 colonne mobile, 2 tablette, 3 desktop
- Images clickables vers "détail" (mais pas de page séparée, maybe modal)
- Espacement constant: gap-4 entre toutes les tailles d'écran
- Images mêmes hauteurs pour alignement: object-fill ou hauteur fixe en CSS

## Nommage et Identification
- Garder noms originaux bestchoco-open, bestchoco-tasting etc.
- Pour articuler: préfixer si besoin dans le code: `imgArticle1_` ou `imgArticle2_`
- Pas de renommer les fichiers réels dans public/, juste commentaire code

## Cas particulier: Passage d'article
- Au scroll ou clic menu, animer le transition entre article1 et article2
- Pas de rechargement page complet (useNext/onnavigate ou anchor smooth)
- Fade transitions entre les deux concepts du site vitrine