# Portfolio de Virginie Vachet

Portfolio monopage développé avec Vue 3 et Vite.

## Lancer le projet

```bash
npm install
npm run dev
```

Vérifications disponibles :

```bash
npm run lint
npm run build
```

## Principes de conception

- HTML sémantique, hiérarchie de titres cohérente et lien d’évitement ;
- navigation utilisable au clavier, focus visible et zones interactives explicites ;
- contrastes élevés et prise en charge de `prefers-reduced-motion` et
  `prefers-contrast` ;
- composants simples et données métier isolées dans `src/data/portfolio.js` ;
- aucune police, image, bibliothèque d’icônes ou ressource de suivi distante ;
- JavaScript limité au runtime Vue et contenu consultable sans interaction complexe.

Ces choix couvrent une partie importante des bonnes pratiques du RGAA. Une déclaration
de conformité exige toutefois un audit complet sur le site final, son hébergement et
ses contenus définitifs.
