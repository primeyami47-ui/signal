# Signal — Bitume, auto-école

**Site vitrine de démonstration.** Bitume est une marque fictive :
l’auto-école, les noms, les chiffres et les avis sont inventés pour
montrer le design.

**En ligne :** https://primeyami47-ui.github.io/signal/

## Le design

« Signal » emprunte tout son vocabulaire à la route : jaune de
signalisation, noir, orange de balisage, bleu des panneaux de direction,
bandes de danger, plaques émaillées. Les titres sont en capitales très
étroites, comme sur un panneau ; les codes et étiquettes en mono.

- **Un tableau d’affichage à palettes** dans le hero : chaque ligne est un
  permis, ses lettres tournent comme sur un vrai tableau de gare, et son
  statut passe d’« EXAMEN » à « REÇU ».
- **Un bandeau de chantier** qui défile entre deux bandes de danger.
- **Cinq plaques émaillées** vissées, une par formation, avec des
  pictogrammes façon ISO 7010 (voiture, moto, camion, panneau, volant) :
  elles se balancent au survol, et en entrant à l’écran sur téléphone.
- **Le parcours est une route** : quatre panneaux de direction bleus le long
  d’une chaussée dont la ligne centrale défile avec la page, jusqu’au
  panneau final « Reçu ».
- **Un vrai test du code** : une question d’examen, corrigée sur place.
- Un bandeau d’information en tête avec l’heure du Maroc, des chiffres qui
  comptent à l’entrée dans l’écran, un menu mobile façon panneau noir, et
  « BITUME » en géant au pied de page.

## Technique

Vite + React 19 + TypeScript. La page est **prérendue en HTML statique**
puis reprise par React (hydratation) : le contenu s’affiche sans attendre
le JavaScript. Polices auto-hébergées : Archivo (axe de chasse) et IBM
Plex Mono. Tout s’arrête proprement avec « réduire les animations ».

```bash
npm install
npm run dev      # http://localhost:5173/signal/
npm run build    # vérification des types, bundle et prérendu dans dist/
npm run lint
```

Chaque push sur `main` publie le site sur GitHub Pages
(`.github/workflows/pages.yml`).
