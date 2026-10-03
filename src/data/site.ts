/* Contenu de la vitrine « Signal » : Bitume, auto-école fictive à Rabat.
   Tout ce que les pages affichent vient d'ici ; les composants restent
   purement visuels. Noms, chiffres et avis sont inventés. */

export const company = {
  name: 'Bitume',
  tagline: 'Auto-école',
  city: 'Rabat',
  email: 'bonjour@bitume.example',
  address: ['Quartier Agdal', 'Rabat — Maroc'],
  hours: 'Du lundi au samedi, 7 h 30 – 20 h',
} as const

/* ------------------------------------------------------------ permis ---- */

export interface Licence {
  id: 'b' | 'a' | 'c' | 'code' | 'plus'
  code: string
  title: string
  short: string
}

export const licences: Licence[] = [
  { id: 'b', code: 'B', title: 'Permis voiture',
    short: 'Boîte manuelle ou automatique, vingt heures de conduite pour commencer.' },
  { id: 'a', code: 'A', title: 'Permis moto',
    short: 'Plateau, circulation et équipement prêté : de la 125 à la grosse cylindrée.' },
  { id: 'c', code: 'C', title: 'Poids lourd',
    short: 'Le permis du métier de chauffeur, financé par beaucoup d’employeurs.' },
  { id: 'code', code: 'ETG', title: 'Code de la route',
    short: 'En salle ou sur l’appli, avec des examens blancs illimités.' },
  { id: 'plus', code: '+', title: 'Remise en route',
    short: 'Vous avez le permis mais plus l’habitude : quelques heures pour reprendre confiance.' },
]

/** Le tableau d'affichage : une ligne par permis, son statut passe d'EXAMEN à REÇU. */
export const board: [string, string][] = [
  ['PERMIS B', 'VOITURE'],
  ['PERMIS A', 'MOTO'],
  ['PERMIS A1', 'SCOOTER 125'],
  ['CODE', 'THÉORIE'],
  ['PERMIS C', 'POIDS LOURD'],
  ['PERMIS BE', 'REMORQUE'],
  ['PERMIS D', 'AUTOCAR'],
  ['PERMIS CE', 'SEMI-REMORQUE'],
]

/* ------------------------------------------------------------- route ---- */

export const phases = [
  { n: '01', label: 'Code', weeks: '3 à 6 semaines',
    title: 'Le code, sans par cœur',
    body: 'Des séances courtes en salle, l’appli pour réviser dans le bus, et des examens blancs jusqu’à ce que les réponses deviennent des réflexes.',
    deliverable: 'Accès à l’appli et examens blancs illimités' },
  { n: '02', label: 'Conduite', weeks: '20 heures environ',
    title: 'Au volant dès la première semaine',
    body: 'Parking, rond-point, autoroute, centre-ville aux heures de pointe : un moniteur, une voiture double commande, et un carnet qui suit vos progrès.',
    deliverable: 'Carnet de progression partagé' },
  { n: '03', label: 'Examen blanc', weeks: '1 séance',
    title: 'La répétition générale',
    body: 'Un autre moniteur joue l’inspecteur, sur le vrai parcours d’examen. Vous savez exactement ce qui vous attend, et ce qu’il reste à revoir.',
    deliverable: 'Bilan écrit et dernières heures ciblées' },
  { n: '04', label: 'Examen', weeks: 'le jour J',
    title: 'On vous accompagne jusqu’au bout',
    body: 'Votre moniteur vous conduit au centre d’examen et reste avec vous. Si ce n’est pas pour cette fois, la seconde présentation est préparée sans frais de dossier.',
    deliverable: 'Accompagnement au centre d’examen' },
]

/* ----------------------------------------------------------- preuves ---- */

/** Employeurs (inventés) qui financent le permis de leurs équipes. */
export const partners = ['Trans Atlas', 'Coursier Express', 'Bus Océan', 'Ferme du Gharb', 'Chantiers Bouregreg', 'Taxi Agdal']

export const figures = [
  { value: 87, unit: '%', label: 'de réussite au premier passage' },
  { value: 2300, label: 'permis obtenus depuis l’ouverture' },
  { value: 14, label: 'moniteurs diplômés d’État' },
  { value: 9, label: 'voitures et motos double commande' },
]

export const testimonials = [
  { quote: 'J’avais raté deux fois ailleurs. Ici, l’examen blanc sur le vrai parcours a tout changé : le jour J, rien ne m’a surprise.',
    name: 'Imane', role: 'Permis B · reçue au troisième essai' },
  { quote: 'Mon patron a financé le permis C. Six semaines plus tard, je conduisais mon propre camion.',
    name: 'Youssef', role: 'Chauffeur poids lourd' },
  { quote: 'À 52 ans, je n’avais plus conduit depuis vingt ans. Quatre heures de remise en route, et je reprends l’autoroute seule.',
    name: 'Latifa', role: 'Remise en route' },
]

/* ------------------------------------------------------- test du code ---- */

export const quiz = {
  question: 'Feu orange fixe, vous approchez du carrefour. Vous devez :',
  choices: [
    { id: 'a', label: 'Accélérer pour passer' },
    { id: 'b', label: 'Vous arrêter, sauf si c’est dangereux' },
    { id: 'c', label: 'Klaxonner et passer' },
  ],
  answer: 'b',
  right: 'Bonne réponse : le feu orange impose l’arrêt, sauf si freiner serait dangereux.',
  wrong: 'Raté : le feu orange impose l’arrêt, sauf si freiner serait dangereux.',
}

/* ---------------------------------------------------------------- seo ---- */

export const seo = {
  home: {
    title: 'Auto-école à Rabat : code, permis B, moto et poids lourd',
    description:
      'Code de la route, permis B, moto et poids lourd à Rabat. Examens blancs sur le vrai parcours, moniteur présent le jour J, 87 % de réussite au premier passage.',
  },
  notFound: {
    title: 'Page introuvable',
    description: "Cette page n'existe pas ou a été déplacée.",
  },
} as const
