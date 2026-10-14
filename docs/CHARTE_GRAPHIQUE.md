# CHARTE GRAPHIQUE - BestChoco Site Vitrine (2 Articles)

## Contexte
Site vitrine pour BestChoco avec **2 articles/sections principales** :
1. **Article 1 : Présentation BestChoco** - Histoire, valeurs, produits phares
2. **Article 2 : Galerie/Contact** - Galerie photos, formulaire de contact, coordonnées

## Couleurs principales (extrapolées du projet Design Motion)
- **Gold (Gold):** --gold: #F6B91A (utilisé pour les boutons, accents, CTA)
- **Choc (Choc):** --choc: #2B120A (fond principal, texte, en-têtes)
- **Choc2 (Choc2):** --choc2: #5A2A12 (secondaires, survol, interstates)
- **Red (Red):** --red: #C8101E (actions importantes, erreurs, mentions)
- **Cream (Crème):** --cream: #FFF3D6 (arrière-plans de sections, cartes)

## Typographie
- **Primary font:** Bricolage Grotesque (headers, boutons, titres d'articles)
- **Secondary font:** Fraunces (texte mis en avant, citations dans les articles)
- **Fallback:** system-ui, sans-serif

## Espacements
- Utiliser `env(safe-area-inset-top)` et `env(safe-area-inset-bottom)` pour le padding
- Conteneur max-width: 1920px pour le design desktop, responsive pour mobile
- Espacement entre les deux articles: 3rem minimum

## Mise en page
- `box-sizing: border-box` sur :root
- `padding-top: env(safe-area-inset-top, 0px)`
- `padding-bottom: env(safe-area-inset-bottom, 0px)`
- Flex column center alignment sur body pour l'article 1 (hero)
- Display grid/flex pour l'article 2 (galerie)

## Images et Assets
- Toutes les images du projet original (bestchoco-open.png, bestchoco-tasting.png, levure.png,ouvert.png) sont disponibles dans `public/assets/images/`
- Format recommandé: WebP pour le web, PNG pour les transparences
- Utiliser `next/image` avec optimisation
- Largeurs d'origine: 1920x1080 pour les backgrounds, mais redimensionner à 800px max pour le web
- Remplacer les `data:image/base64` lourds par ces fichiers

## Structure sur 2 Articles

### Article 1 : "BestChoco - Notre Histoire" (app/article1/page.tsx)
- Hero section avec background et CTA
- "Notre histoire" - 2-3 paragraphes
- "Nos valeurs" - 3 icônes/points clés
- Galerie mini (2-3 images bestchoco-open.png)
- CTA "Découvrir nos produits"

### Article 2 : "BestChoco - Galerie & Contact" (app/article2/page.tsx)
- Galerie photos produits (grille responsive)
- Images: bestchoco-open.png, bestchoco-tasting.png
- Formulaire de contact simple
- Coordonnées, horaires
- Footer commun

## Navigation entre Articles
- Menu header avec deux liens: "Accueil" | "Galerie"
- Ancrage smooth scroll entre les articles sur page longue
- Bouton "Retour en haut" sur l'article 2

## Animations
- Utiliser CSS native (transform, opacity, transition) de préférence
- **Pas de scènes 18s completes** (comme dans le projet Design Motion originel)
- Legères au survol sur les images de galerie
- Fade-in à l'apparition de chaque article au scroll
- Respecter `prefers-reduced-motion`
- Les effets "gloss", "shadow" du projet original en CSS allégé

## Composants UI recommandés
- Boutons: background gold, color choc, border-0, border-radius 6px
- Deux styles de cartes: article1 (section) et article2 (galerie grille)
- Header compact avec deux liens seulement
- Footer unique commun aux deux articles

## Structure des fichiers (simplifiée)
```
src/app/
├── layout.tsx          ← Header + Footer communs
├── article1/
│   └── page.tsx        ← Article 1: Histoire/Values
└── article2/
    └── page.tsx        ← Article 2: Galerie/Contact

(Plus pas de dossiers produits/, a-propos/, contact/ séparés)
```

## Bonnes pratiques
1. Toujours tester sur mobile (largeur < 768px) - les 2 articles doivent s'empiler
2. Utiliser `next/image` pour éviter les CLS entre les deux articles
3. Les images ne doivent pas dépasser 800px de largeur dans les grilles
4. Alt text significatif pour chaque image (2 articles x ~4-5 images = ~10 au total)
5. Respecter la charte graphique globale (pas de couleurs outside --gold/--choc/--cream)
6. **Pas de Supabase, pas d'authentification** (site vitrine 2 articles seulement)
7. Pas de API routes complexes (juste formulaire contact basique)
8. Animation d'entrée différente pour chaque article (pour différencier visuellement)