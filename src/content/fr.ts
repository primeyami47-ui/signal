/* Contenu de la vitrine « Signal » : Bitume, auto-école fictive à Rabat.
   Tout ce que la page affiche vient d'ici ; en.ts et ar.ts reprennent
   exactement la même forme. Noms, chiffres et avis sont inventés. */

const fr = {
  company: {
    name: 'Bitume',
    tagline: 'Auto-école',
    email: 'bonjour@bitume.example',
    address: ['Quartier Agdal', 'Rabat — Maroc'],
    hours: 'Du lundi au samedi, 7 h 30 – 20 h',
  },

  ui: {
    skip: 'Aller au contenu',
    home: 'accueil',
    navLabel: 'Navigation principale',
    menuLabel: 'Menu',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    langLabel: 'Langue',
    cta: 'Tester le code',
    ctaShort: 'Test du code',
    tickerCity: 'BITUME/RABAT',
    tickerOpen: 'Auto-école ouverte',
    tickerList: 'Permis B · A · A1 · C · CE · D · Code de la route',
  },

  nav: [
    { to: '#permis', label: 'Permis', code: 'A1' },
    { to: '#parcours', label: 'Parcours', code: 'B2' },
    { to: '#avis', label: 'Avis', code: 'C3' },
    { to: '#contact', label: 'Contact', code: 'D4' },
  ],

  /* Le tableau d'affichage reste en capitales latines, comme un vrai
     tableau à palettes : une ligne par permis, EXAMEN puis REÇU. */
  board: {
    label: 'Tableau des permis préparés par Bitume',
    title: 'Tableau des examens',
    head: ['Permis', 'Véhicule', 'Statut'],
    foot: ['Piste 01 · Rabat', 'Prochain départ : vous'],
    exam: 'EXAMEN',
    pass: 'REÇU',
    rows: [
      ['PERMIS B', 'VOITURE'], ['PERMIS A', 'MOTO'], ['PERMIS A1', 'SCOOTER 125'], ['CODE', 'THÉORIE'],
      ['PERMIS C', 'POIDS LOURD'], ['PERMIS BE', 'REMORQUE'], ['PERMIS D', 'AUTOCAR'], ['PERMIS CE', 'SEMI-REMORQUE'],
    ] as [string, string][],
  },

  hero: {
    proof: 'de réussite au premier passage',
    line1: 'Le permis,',
    line2: 'sans détour.',
    lead: 'Code, conduite, examen : Bitume vous accompagne de la première leçon jusqu’au permis, en voiture, à moto ou en poids lourd.',
    alt: 'Nos permis',
    note: '1 question · 10 secondes · sans inscription',
  },

  zone: ['Zone de conduite', 'Permis B', 'Permis A', 'Permis C', 'Permis D', 'Code de la route', 'Remise en route'],

  licences: {
    eyebrow: 'A1 · Nos permis',
    title: ['Cinq formations.', 'Une seule route.'],
    unsure: 'Pas sûr de votre niveau au code ?',
    unsureLink: 'Faire le test',
    book: 'Réserver une leçon',
    cat: 'Cat.',
    bonus: 'Bonus',
    list: [
      { id: 'b', code: 'B', title: 'Permis voiture', short: 'Boîte manuelle ou automatique, vingt heures de conduite pour commencer.' },
      { id: 'a', code: 'A', title: 'Permis moto', short: 'Plateau, circulation et équipement prêté : de la 125 à la grosse cylindrée.' },
      { id: 'c', code: 'C', title: 'Poids lourd', short: 'Le permis du métier de chauffeur, financé par beaucoup d’employeurs.' },
      { id: 'code', code: 'ETG', title: 'Code de la route', short: 'En salle ou sur l’appli, avec des examens blancs illimités.' },
      { id: 'plus', code: '+', title: 'Remise en route', short: 'Vous avez le permis mais plus l’habitude : quelques heures pour reprendre confiance.' },
    ],
  },

  route: {
    eyebrow: 'B2 · Le parcours',
    title: ['Quatre étapes.', 'Aucun détour.'],
    lead: 'Le même trajet pour tous les permis, avec ce qui est inclus à chaque panneau.',
    included: 'Inclus',
    duration: 'Durée',
    end: 'Reçu',
    phases: [
      { n: '01', label: 'Code', weeks: '3 à 6 semaines', title: 'Le code, sans par cœur',
        body: 'Des séances courtes en salle, l’appli pour réviser dans le bus, et des examens blancs jusqu’à ce que les réponses deviennent des réflexes.',
        deliverable: 'Accès à l’appli et examens blancs illimités' },
      { n: '02', label: 'Conduite', weeks: '20 heures environ', title: 'Au volant dès la première semaine',
        body: 'Parking, rond-point, autoroute, centre-ville aux heures de pointe : un moniteur, une voiture double commande, et un carnet qui suit vos progrès.',
        deliverable: 'Carnet de progression partagé' },
      { n: '03', label: 'Examen blanc', weeks: '1 séance', title: 'La répétition générale',
        body: 'Un autre moniteur joue l’inspecteur, sur le vrai parcours d’examen. Vous savez exactement ce qui vous attend, et ce qu’il reste à revoir.',
        deliverable: 'Bilan écrit et dernières heures ciblées' },
      { n: '04', label: 'Examen', weeks: 'le jour J', title: 'On vous accompagne jusqu’au bout',
        body: 'Votre moniteur vous conduit au centre d’examen et reste avec vous. Si ce n’est pas pour cette fois, la seconde présentation est préparée sans frais de dossier.',
        deliverable: 'Accompagnement au centre d’examen' },
    ],
  },

  test: {
    tag: 'Contrôle · 1 minute',
    title: ['Prêt pour', 'le code ?'],
    lead: 'Trois vraies questions d’examen, corrigées sur place. Les quarante autres, c’est en salle ou sur l’appli.',
    step: 'Question {n} / {total}',
    next: 'Question suivante',
    seeScore: 'Voir mon score',
    scoreTitle: 'Votre score',
    score: '{s} sur {n}',
    verdicts: ['Le code se révise : venez en salle, on le fait ensemble.', 'Presque ! Il vous manque quelques réflexes.', 'Bien joué : vous avez le niveau pour passer à la conduite.', 'Sans faute ! Direction la piste.'],
    again: 'Recommencer',
    book: 'Réserver une leçon',
    correct: 'Bonne réponse',
    wrong: 'Raté',
    questions: [
      { q: 'Feu orange fixe, vous approchez du carrefour. Vous devez :', explain: 'Le feu orange impose l’arrêt, sauf si freiner serait dangereux.',
        choices: ['Accélérer pour passer', 'Vous arrêter, sauf si c’est dangereux', 'Klaxonner et passer'], answer: 1 },
      { q: 'En agglomération, la vitesse maximale autorisée est en principe de :', explain: 'En ville, la limite habituelle est de 60 km/h, sauf panneau contraire.',
        choices: ['30 km/h', '60 km/h', '90 km/h'], answer: 1 },
      { q: 'Un piéton s’engage sur le passage devant vous. Vous devez :', explain: 'Le piéton engagé est prioritaire : on ralentit, et on s’arrête s’il le faut.',
        choices: ['Ralentir et vous arrêter', 'Klaxonner pour qu’il se dépêche', 'Accélérer pour passer avant lui'], answer: 0 },
    ],
  },

  dash: {
    eyebrow: 'C3 · Tableau de bord',
    title: ['Les chiffres,', 'au compteur.'],
    passRate: 87,
    gauge: 'de réussite au premier passage',
    odo: [
      { value: 2300, label: 'permis obtenus depuis l’ouverture' },
      { value: 14, label: 'moniteurs diplômés d’État' },
      { value: 9, label: 'voitures et motos double commande' },
    ],
  },

  cards: {
    eyebrow: 'Cartes d’élèves',
    title: ['Ils ont eu', 'le permis.'],
    header: 'BITUME · CARTE D’ÉLÈVE',
    name: 'Nom',
    licence: 'Permis',
    stamp: 'REÇU',
    list: [
      { quote: 'J’avais raté deux fois ailleurs. Ici, l’examen blanc sur le vrai parcours a tout changé : le jour J, rien ne m’a surprise.',
        name: 'Imane', licence: 'B', role: 'reçue au troisième essai' },
      { quote: 'Mon patron a financé le permis C. Six semaines plus tard, je conduisais mon propre camion.',
        name: 'Youssef', licence: 'C', role: 'chauffeur poids lourd' },
      { quote: 'À 52 ans, je n’avais plus conduit depuis vingt ans. Quatre heures de remise en route, et je reprends l’autoroute seule.',
        name: 'Latifa', licence: '+', role: 'remise en route' },
    ],
  },

  close: {
    who: 'B',
    title: 'Première leçon offerte.',
    lead: 'Écrivez-nous : un moniteur vous répond sous 24 heures et fixe votre première heure de conduite.',
    cta: 'Écrire un message',
  },

  footer: {
    line1: 'Le permis,',
    line2: 'sans détour.',
    about: 'Auto-école à Rabat : code de la route, permis B, moto, poids lourd et remise en route.',
    colLicences: 'A1 · Permis',
    colSchool: 'B2 · L’auto-école',
    school: [
      { to: '#parcours', label: 'Le parcours' },
      { to: '#avis', label: 'Avis d’élèves' },
      { to: '#test', label: 'Test du code' },
      { to: '#contact', label: 'Nous écrire' },
    ],
    colContact: 'D4 · Contact',
    demo: 'Marque fictive · site vitrine de démonstration',
    giant: 'BITUME',
  },

  notFound: {
    eyebrow: 'Erreur 404',
    title: 'Sens interdit : cette page n’existe pas.',
    lead: 'Elle a peut-être changé d’adresse.',
    cta: 'Retour à l’accueil',
  },

  error: {
    title: 'Une erreur est survenue',
    lead: 'Rechargez la page. Si le problème persiste, écrivez-nous à',
    reload: 'Recharger la page',
  },

  seo: {
    home: {
      title: 'Auto-école à Rabat : code, permis B, moto et poids lourd',
      description: 'Code de la route, permis B, moto et poids lourd à Rabat. Examens blancs sur le vrai parcours, moniteur présent le jour J, 87 % de réussite au premier passage.',
    },
    notFound: { title: 'Page introuvable', description: 'Cette page n’existe pas ou a été déplacée.' },
  },
}

export type Content = typeof fr
export default fr
