import { useEffect, useRef, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import type Lenis from 'lenis'
import { company, licences } from '../data/site'
import { Arrow } from './Reveal'
import Logo from './Logo'
import './Layout.css'

// Quatre destinations (les sections de la page), chacune avec son code de panneau.
const nav = [
  { to: '#permis', label: 'Permis', code: 'A1' },
  { to: '#parcours', label: 'Parcours', code: 'B2' },
  { to: '#avis', label: 'Avis', code: 'C3' },
  { to: '#contact', label: 'Contact', code: 'D4' },
]

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Heure du Maroc, comme sur un tableau d'affichage. */
function Clock() {
  const [t, setT] = useState('')
  useEffect(() => {
    const f = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Casablanca' })
    const tick = () => setT(f.format(new Date()))
    tick()
    const id = setInterval(tick, 20_000)
    return () => clearInterval(id)
  }, [])
  return <span className="t-num">{t || '--:--'}</span>
}

export default function Layout() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const lenis = useRef<Lenis | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Défilement doux (Lenis) cadencé par GSAP ; au doigt, défilement natif.
  useEffect(() => {
    if (reduced()) return
    let stop = () => {}
    let cancelled = false
    ;(async () => {
      const [{ default: LenisCtor }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'), import('gsap'), import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const l = new LenisCtor({ lerp: 0.12, anchors: true })
      l.on('scroll', ScrollTrigger.update)
      const tick = (t: number) => l.raf(t * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      lenis.current = l
      stop = () => { gsap.ticker.remove(tick); l.destroy(); lenis.current = null }
    })()
    return () => { cancelled = true; stop() }
  }, [])

  useEffect(() => {
    if (!open) return
    lenis.current?.stop()
    document.documentElement.classList.add('menu-open')
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      lenis.current?.start()
      document.documentElement.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true, force: true })
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>

      {/* Bandeau d'information : une ligne en mono, comme en tête d'un tableau. */}
      <div className="ticker" aria-hidden="true">
        <div className="wrap ticker__in">
          <span>BITUME/RABAT</span>
          <span className="ticker__live"><i /> Auto-école ouverte · <Clock /></span>
          <span className="ticker__hide">Permis B · A · A1 · C · CE · D · Code de la route</span>
        </div>
      </div>

      <header className={`hdr${stuck ? ' hdr--stuck' : ''}${open ? ' hdr--open' : ''}`}>
        <div className="hdr__in wrap">
          <Link to="/" className="hdr__brand" aria-label={`${company.name}, accueil`} onClick={() => setOpen(false)}>
            <Logo tone={open ? 'reverse' : 'color'} size={42} draw />
          </Link>

          <nav className="hdr__nav" aria-label="Navigation principale">
            {nav.map((n) => (
              <a key={n.to} href={n.to} className="hdr__link">
                <span className="hdr__code">{n.code}</span>{n.label}
              </a>
            ))}
          </nav>

          <a href="#test" className="btn btn--sun hdr__cta">
            Test du code <Arrow />
          </a>

          <button className="hdr__burger" aria-expanded={open} aria-controls="menu"
                  aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                  onClick={() => setOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Menu mobile : un panneau noir, quatre grandes directions fléchées. */}
      <div id="menu" ref={menuRef} className={`menu${open ? ' is-open' : ''}`} inert={!open}>
        <nav className="menu__nav wrap" aria-label="Menu">
          {nav.map((n, i) => (
            <a key={n.to} href={n.to} onClick={() => setOpen(false)}
               style={{ ['--i' as string]: i }} className="menu__link">
              <span className="menu__code">{n.code}</span>
              <span className="menu__label">{n.label}</span>
              <Arrow />
            </a>
          ))}
          <a href="#test" onClick={() => setOpen(false)} className="btn btn--sun menu__cta" style={{ ['--i' as string]: 4 }}>
            Tester le code <Arrow />
          </a>
          <div className="menu__contact" style={{ ['--i' as string]: 5 }}>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.hours}</span>
          </div>
        </nav>
        <div className="hazard hazard--run menu__hazard" aria-hidden="true" />
      </div>

      <main id="main"><Outlet /></main>

      <footer className="ftr on-dark">
        <div className="hazard" aria-hidden="true" />
        <div className="wrap ftr__top">
          <p className="ftr__line">Le permis,<br /><span>sans détour.</span></p>
          <a href="#test" className="btn btn--sun">Tester le code <Arrow /></a>
        </div>

        <div className="wrap ftr__in">
          <div className="ftr__brand">
            <Logo tone="reverse" size={44} />
            <p>
              Auto-école à Rabat : code de la route, permis B, moto, poids
              lourd et remise en route.
            </p>
          </div>

          <div className="ftr__col">
            <h2>A1 · Permis</h2>
            {licences.map((l) => <a key={l.id} href="#permis">{l.title}</a>)}
          </div>

          <div className="ftr__col">
            <h2>B2 · L’auto-école</h2>
            <a href="#parcours">Le parcours</a>
            <a href="#avis">Avis d’élèves</a>
            <a href="#test">Test du code</a>
            <a href="#contact">Nous écrire</a>
          </div>

          <div className="ftr__col">
            <h2>D4 · Contact</h2>
            <address>{company.address.map((l) => <span key={l}>{l}</span>)}</address>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.hours}</span>
          </div>
        </div>

        <div className="wrap ftr__bar">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span className="ftr__demo">Marque fictive · site vitrine de démonstration</span>
        </div>

        <div className="ftr__giant" aria-hidden="true">BITUME</div>
      </footer>
    </>
  )
}
