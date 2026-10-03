import { useEffect, useRef, useState } from 'react'
import { useContent } from '../content'
import { LOCALES, useLang } from '../i18n'

const ease = (t: number) => 1 - Math.pow(1 - t, 3)

/** 0 → 1 quand l'élément entre dans l'écran, une seule fois. Le HTML
    prérendu montre déjà la valeur finale (1) : jamais un compteur à zéro
    pour un robot ou sans JavaScript. */
function useRise(ref: React.RefObject<Element | null>, ms: number) {
  const [p, setP] = useState(1)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) return
    setP(0)
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t: number) => {
        const k = Math.min(1, (t - t0) / ms)
        setP(ease(k))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [ref, ms])
  return p
}

/** Un demi-cadran : l'aiguille monte jusqu'au taux de réussite. */
function Gauge({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = useRise(ref, 1600)
  const shown = Math.round(value * p)
  const angle = -90 + 180 * (value / 100) * p
  const ticks = Array.from({ length: 11 }, (_, i) => i)
  return (
    <div className="gauge" ref={ref} role="img" aria-label={`${value}% ${label}`}>
      <svg viewBox="0 0 240 150" className="gauge__svg" aria-hidden="true">
        <path d="M20 130 A100 100 0 0 1 220 130" className="gauge__track" pathLength={100} />
        <path d="M20 130 A100 100 0 0 1 220 130" className="gauge__fill" pathLength={100}
              style={{ strokeDasharray: 100, strokeDashoffset: 100 - value * p }} />
        {ticks.map((i) => {
          const a = (-180 + i * 18) * Math.PI / 180
          const r1 = i % 5 === 0 ? 82 : 88
          return <line key={i} x1={120 + r1 * Math.cos(a)} y1={130 + r1 * Math.sin(a)}
                       x2={120 + 96 * Math.cos(a)} y2={130 + 96 * Math.sin(a)} className="gauge__tick" />
        })}
        <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: '120px 130px' }}>
          <path d="M116 130 L120 44 L124 130 Z" className="gauge__needle" />
        </g>
        <circle cx="120" cy="130" r="9" className="gauge__hub" />
      </svg>
      <p className="gauge__value t-num" dir="ltr">{shown}<small>%</small></p>
      <p className="gauge__label">{label}</p>
    </div>
  )
}

/** Un compteur de voiture : des chiffres dans des cases, qui défilent. */
function Odometer({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = useRise(ref, 1400)
  const lang = useLang()
  const text = Math.round(value * p).toLocaleString(LOCALES[lang])
  const full = value.toLocaleString(LOCALES[lang])
  return (
    <div className="odo" ref={ref} role="group" aria-label={`${full} ${label}`}>
      <p className="odo__digits t-num" dir="ltr" aria-hidden="true">
        {[...text.padStart(full.length, ' ')].map((c, i) => (
          <span key={i} className={c === ' ' || c === ' ' || c === ' ' ? 'odo__gap' : 'odo__d'}>{c.trim() ? c : ''}</span>
        ))}
      </p>
      <p className="odo__label">{label}</p>
    </div>
  )
}

/** Le tableau de bord : un cadran pour le taux de réussite, des compteurs
    pour le reste. Chaque chiffre a sa place, comme au volant. */
export default function Dash() {
  const d = useContent().dash
  return (
    <div className="dash">
      <Gauge value={d.passRate} label={d.gauge} />
      <div className="dash__odos">
        {d.odo.map((o) => <Odometer key={o.label} value={o.value} label={o.label} />)}
      </div>
    </div>
  )
}
