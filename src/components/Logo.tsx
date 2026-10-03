/**
 * Le logo Bitume : une plaque de signalisation carrée, jaune, à bord noir,
 * qui porte une coche. Le panneau ne signale pas un danger : il signale
 * que le permis est en poche.
 *
 * Construction (repère 64 × 64) : plaque arrondie de 6, bord 5 ; coche
 * épaisseur 9, bouts carrés, comme un pictogramme ISO 7010.
 */
export type LogoTone = 'color' | 'reverse' | 'ink' | 'white'

const TONES: Record<LogoTone, { plate: string; edge: string; tick: string }> = {
  color:   { plate: 'var(--yellow)', edge: 'var(--black)', tick: 'var(--black)' },
  reverse: { plate: 'var(--yellow)', edge: 'var(--yellow)', tick: 'var(--black)' },
  ink:     { plate: '#fff',          edge: 'var(--black)', tick: 'var(--black)' },
  white:   { plate: 'transparent',   edge: '#fff',         tick: '#fff' },
}

export const TICK = 'M15 33 L27 45 L50 20'

export function LogoMark({ tone = 'color', size = 40, className = '', draw = false }: {
  tone?: LogoTone; size?: number; className?: string; draw?: boolean
}) {
  const t = TONES[tone]
  return (
    <svg className={`bmark${draw ? ' bmark--draw' : ''} ${className}`} width={size} height={size}
         viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect className="bmark__plate" x="2.5" y="2.5" width="59" height="59" rx="7" fill={t.plate} stroke={t.edge} strokeWidth="5" />
      <path className="bmark__tick" d={TICK} pathLength={100} stroke={t.tick} strokeWidth="9" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}

/** Plaque + nom : « BITUME » en capitales étroites, « auto-école » en mono. */
export default function Logo({ tone = 'color', size = 44, className = '', draw = false }: {
  tone?: LogoTone; size?: number; className?: string; draw?: boolean
}) {
  const text = tone === 'reverse' || tone === 'white' ? '#fff' : 'var(--black)'
  return (
    <span className={`blogo ${className}`} style={{ color: text }}>
      <LogoMark tone={tone} size={size} draw={draw} />
      <span className="blogo__word" aria-hidden="true">
        Bitume<small>Auto-école</small>
      </span>
    </span>
  )
}
