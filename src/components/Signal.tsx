import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useContent } from '../content'
import { Arrow } from './Reveal'
import './Signal.css'

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ================================================== tableau à palettes ===
   Un tableau d'affichage de gare : chaque ligne est un permis, et son
   statut passe d'« EXAMEN » à « REÇU ». Les caractères tournent comme de
   vraies palettes. Le HTML pré-rendu montre le tableau final, lisible. */

const W_CODE = 10, W_DOM = 14, W_ST = 8
const SHOWN = 4
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const pad = (s: string, n: number) => (s + ' '.repeat(n)).slice(0, n)

interface Line { code: string; dom: string; st: string; ok: boolean }
interface Board { rows: [string, string][]; exam: string; pass: string }
const lineOf = (b: Board, i: number, ok = true): Line => {
  const [c, d] = b.rows[i % b.rows.length]
  return { code: pad(c, W_CODE), dom: pad(d, W_DOM), st: pad(ok ? b.pass : b.exam, W_ST), ok }
}

function Cells({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`flap__cells ${className}`}>
      {[...text].map((ch, i) => (
        <span key={i} className="flap__cell">
          {/* La clé change avec le caractère : la palette est remontée et rejoue sa rotation. */}
          <span key={ch} className="flap__ch">{ch === ' ' ? ' ' : ch}</span>
        </span>
      ))}
    </span>
  )
}

export function FlapBoard() {
  const board = useContent().board
  const [lines, setLines] = useState<Line[]>(() => Array.from({ length: SHOWN }, (_, i) => lineOf(board, i)))
  const next = useRef(SHOWN)
  const slot = useRef(0)

  useEffect(() => {
    if (reduced()) return
    const timers: number[] = []
    const later = (fn: () => void, ms: number) => { timers.push(window.setTimeout(fn, ms)) }

    // Fait défiler une ligne vers sa cible : des caractères au hasard, puis
    // la cible, colonne par colonne de gauche à droite.
    const roll = (row: number, target: Line) => {
      const steps = 10
      for (let s = 0; s <= steps; s++) {
        later(() => {
          setLines((ls) => ls.map((l, i) => {
            if (i !== row) return l
            if (s === steps) return target
            const mix = (to: string, off: number) => [...to].map((ch, k) =>
              k + off < s * 2.2 ? ch : ch === ' ' ? ' ' : CHARS[(k * 7 + s * 13 + row) % CHARS.length]).join('')
            return { ...target, code: mix(target.code, 0), dom: mix(target.dom, 4) }
          }))
        }, s * 70)
      }
    }

    const cycle = () => {
      const row = slot.current
      slot.current = (slot.current + 1) % SHOWN
      const i = next.current++
      roll(row, lineOf(board, i, false))
      // Le statut passe à REÇU un instant plus tard : l'examen est réussi.
      later(() => setLines((ls) => ls.map((l, k) => (k === row ? { ...l, st: pad(board.pass, W_ST), ok: true } : l))), 1500)
    }
    const start = window.setTimeout(cycle, 1200)
    const id = window.setInterval(cycle, 2600)
    return () => { clearTimeout(start); clearInterval(id); timers.forEach(clearTimeout) }
  }, [board])

  return (
    <figure className="flap" aria-label={board.label}>
      <figcaption className="flap__top">
        <span>{board.title}</span>
        <span className="flap__dot" aria-hidden="true" />
      </figcaption>
      <div className="flap__head" aria-hidden="true">
        <span>{board.head[0]}</span><span className="flap__dom-h">{board.head[1]}</span><span>{board.head[2]}</span>
      </div>
      <ul className="flap__rows">
        {lines.map((l, i) => (
          <li key={i} className={`flap__row${l.ok ? ' is-ok' : ''}`}>
            <span className="sr-only">{l.code.trim()}, {l.dom.trim()} : {l.st.trim()}</span>
            <span aria-hidden="true" className="flap__line">
              <Cells text={l.code} />
              <Cells text={l.dom} className="flap__dom" />
              <Cells text={l.st} className="flap__st" />
            </span>
          </li>
        ))}
      </ul>
      <p className="flap__foot" aria-hidden="true">
        <span>{board.foot[0]}</span><span>{board.foot[1]}</span>
      </p>
    </figure>
  )
}

/* ============================================================ panneaux ===
   Cinq plaques émaillées, une par formation, suspendues à deux vis. Elles
   se balancent quand on les survole, et quand elles entrent à l'écran sur
   téléphone. */

const PLATES: Record<string, string> = {
  b: 'plate--yellow', a: 'plate--blue', c: 'plate--orange', code: 'plate--black', plus: 'plate--white',
}

/* Pictogrammes façon ISO 7010 : une forme, un trait épais. */
function Picto({ id }: { id: string }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 6, strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const }
  switch (id) {
    // Voiture de profil.
    case 'b': return <svg viewBox="0 0 64 64" className="picto"><path d="M6 42 V32 L14 30 L22 18 H42 L50 30 L58 32 V42 Z" {...s} /><circle cx="18" cy="44" r="6" {...s} /><circle cx="46" cy="44" r="6" {...s} /></svg>
    // Moto.
    case 'a': return <svg viewBox="0 0 64 64" className="picto"><circle cx="14" cy="44" r="9" {...s} /><circle cx="50" cy="44" r="9" {...s} /><path d="M14 44 L26 28 H40 L50 44 M36 18 H44 L48 28" {...s} /></svg>
    // Camion.
    case 'c': return <svg viewBox="0 0 64 64" className="picto"><path d="M4 14 H38 V44 H4 Z M38 24 H50 L60 34 V44 H38" {...s} /><circle cx="16" cy="48" r="5" {...s} /><circle cx="50" cy="48" r="5" {...s} /></svg>
    // Panneau triangulaire du code.
    case 'code': return <svg viewBox="0 0 64 64" className="picto"><path d="M32 6 L58 54 H6 Z" {...s} /><path d="M32 24 V38 M32 44 V46" {...s} /></svg>
    // Volant.
    default: return <svg viewBox="0 0 64 64" className="picto"><circle cx="32" cy="32" r="25" {...s} /><circle cx="32" cy="32" r="6" {...s} /><path d="M8 28 H26 M38 28 H56 M32 38 V57" {...s} /></svg>
  }
}

export function SignPlates() {
  const t = useContent().licences
  const list = useRef<HTMLUListElement>(null)

  // Sur téléphone, chaque plaque se balance une fois en entrant à l'écran.
  useEffect(() => {
    const el = list.current
    if (!el || reduced() || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-swung'); io.unobserve(e.target) } })
    }, { threshold: 0.45 })
    el.querySelectorAll('.plate').forEach((p) => io.observe(p))
    return () => io.disconnect()
  }, [])

  return (
    <ul className="plates" ref={list}>
      {t.list.map((e, i) => {
        return (
          <li key={e.id} className={`plate ${PLATES[e.id]}`} style={{ '--i': i } as CSSProperties}>
            <a href="#contact" className="plate__in">
              <span className="plate__screws" aria-hidden="true"><i /><i /></span>
              <span className="plate__top">
                <span className="plate__code">{e.code === '+' ? t.bonus : `${t.cat} ${e.code}`}</span>
                <Picto id={e.id} />
              </span>
              <span className="plate__title">{e.title}</span>
              <span className="plate__short">{e.short}</span>
              <span className="plate__go">{t.book} <Arrow /></span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

/* =============================================================== route ===
   Le parcours est une route : quatre panneaux de direction bleus, et une
   chaussée dont la ligne centrale défile avec la page. */

export function Route() {
  const t = useContent().route
  const road = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = road.current
    if (!el || reduced()) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.2)))
        el.style.setProperty('--p', p.toFixed(3))
        el.style.setProperty('--dash', `${Math.round(window.scrollY * 0.6)}px`)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="route" ref={road}>
      <div className="route__road" aria-hidden="true"><span className="route__lane" /><span className="route__car" /></div>
      <ol className="route__signs">
        {t.phases.map((ph, i) => (
          <li key={ph.n} className="route__stop" style={{ '--i': i } as CSSProperties}>
            <div className="route__sign">
              <span className="route__km t-num">{ph.n}</span>
              <span className="route__label">{ph.label}</span>
              <svg className="route__arrow" viewBox="0 0 40 24" aria-hidden="true"><path d="M2 12 H34 M24 3 L35 12 L24 21" fill="none" stroke="currentColor" strokeWidth="4.5" /></svg>
            </div>
            <div className="route__body">
              <h3 className="t-h3">{ph.title}</h3>
              <p>{ph.body}</p>
              <p className="route__deliv"><span>{t.included}</span>{ph.deliverable}</p>
              <span className="route__weeks">{t.duration} · {ph.weeks}</span>
            </div>
          </li>
        ))}
        <li className="route__stop route__stop--end" style={{ '--i': 4 } as CSSProperties}>
          <div className="route__sign route__sign--end">
            <svg viewBox="0 0 64 64" aria-hidden="true" className="route__done"><path d="M14 33 L27 46 L50 19" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="square" /></svg>
            <span className="route__label">{t.end}</span>
          </div>
        </li>
      </ol>
    </div>
  )
}

/* ============================================================== bandeau ==
   Une bande noire encadrée de bandes de danger, qui défile en continu. */

export function ZoneBand({ items }: { items: string[] }) {
  const row = items.map((t) => (
    <span key={t} className="zone__item">{t}<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="4" y="4" width="56" height="56" rx="6" fill="#FFD400" /><path d="M15 33 L27 45 L50 20" fill="none" stroke="#111" strokeWidth="9" strokeLinecap="square" /></svg></span>
  ))
  return (
    <div className="zone" aria-hidden="true">
      <div className="hazard hazard--run" />
      <div className="zone__track">
        <div className="zone__row">{row}</div>
        <div className="zone__row">{row}</div>
      </div>
      <div className="hazard hazard--run" />
    </div>
  )
}

/* ======================================================= cartes d'élèves ===
   Les avis sont des cartes d'élève Bitume : une photo (ici l'initiale), un
   permis, et le tampon « REÇU » posé de travers sur la carte. */

export function StudentCards() {
  const t = useContent().cards
  return (
    <ul className="scards">
      {t.list.map((c, i) => (
        <li key={c.name} className="scard" style={{ '--i': i } as CSSProperties}>
          <p className="scard__head"><span>{t.header}</span><span className="scard__no t-num" dir="ltr">N° 0{i + 1}</span></p>
          <div className="scard__body">
            <div className="scard__photo" aria-hidden="true">{[...c.name.normalize('NFD')][0]}</div>
            <dl className="scard__fields">
              <div><dt>{t.name}</dt><dd>{c.name}</dd></div>
              <div><dt>{t.licence}</dt><dd className="t-num" dir="ltr">{c.licence === '+' ? '—' : c.licence}</dd></div>
            </dl>
            <span className="scard__stamp" aria-hidden="true">{t.stamp}</span>
          </div>
          <blockquote className="scard__quote">{c.quote}</blockquote>
          <p className="scard__role">{c.role}</p>
        </li>
      ))}
    </ul>
  )
}
