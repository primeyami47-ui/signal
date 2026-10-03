/* Identité « Majorelle » : chaque métier a sa couleur, et sa photo passe en bichromie dans cette
   couleur (--duo-a clair, --duo-b sombre). */
const TONES: Record<string, { bg: string; fg: string; a: string; b: string }> = {
  qhse:         { bg: 'var(--cobalt)',  fg: '#fff',       a: 'var(--sky)',     b: 'var(--cobalt-d)' },
  formation:    { bg: 'var(--saffron)', fg: 'var(--ink)', a: 'var(--saffron)', b: 'var(--ink)' },
  organisation: { bg: 'var(--coral)',   fg: 'var(--ink)', a: '#FFB9A6',        b: 'var(--ink)' },
  digital:      { bg: 'var(--sky)',     fg: 'var(--ink)', a: 'var(--sky)',     b: 'var(--cobalt-d)' },
  etudes:       { bg: 'var(--pink)',    fg: 'var(--ink)', a: 'var(--pink)',    b: '#35205A' },
}
export const toneOf = (id: string) => TONES[id] ?? TONES.qhse
