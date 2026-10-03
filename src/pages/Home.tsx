import { useState } from 'react'
import Seo from '../components/Seo'
import Reveal, { Arrow } from '../components/Reveal'
import Figures from '../components/Figures'
import { FlapBoard, Route, SignPlates, ZoneBand } from '../components/Signal'
import { useContent } from '../content'
import { useLang } from '../i18n'
import './Home.css'

export default function Home() {
  const t = useContent()
  const lang = useLang()
  const quiz = t.test
  // Le test du code : une vraie question, corrigée sur place.
  const [picked, setPicked] = useState<string | null>(null)
  const right = picked === quiz.answer

  return (
    <>
      <Seo {...t.seo.home} />

      {/* ---------------------------------------------------------- hero
          Jaune de signalisation, un titre en capitales étroites, et le
          tableau des examens qui tourne à droite. */}
      <section className="shero">
        <div className="wrap shero__in">
          <div className="shero__text">
            <p className="shero__proof">
              <span className="shero__badge t-num">{t.reviews.figures[0].value}%</span>
              {t.hero.proof}
            </p>
            <h1 className="shero__h">
              <span className="ln"><span>{t.hero.line1}</span></span>
              <span className="ln"><span className="shero__box">{t.hero.line2}</span></span>
            </h1>
            <p className="shero__lead">{t.hero.lead}</p>
            <div className="shero__cta">
              <a href="#test" className="btn btn--primary">{t.ui.cta} <Arrow /></a>
              <a href="#permis" className="btn btn--light">{t.hero.alt}</a>
            </div>
            <p className="shero__note">{t.hero.note}</p>
          </div>
          <div className="shero__board">
            <FlapBoard key={lang} />
          </div>
        </div>
        {/* Marquage au sol : une flèche géante qui pointe vers la suite. */}
        <svg className="shero__floor" viewBox="0 0 400 120" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 120 L150 0 H250 L400 120 Z" />
        </svg>
      </section>

      <ZoneBand items={t.zone} />

      {/* ------------------------------------------------------ confiance */}
      <section className="slogos" aria-label={t.partnersTitle}>
        <div className="wrap">
          <p className="slogos__h"><span>{t.partnersRef}</span> {t.partnersTitle}</p>
          <ul className="slogos__row slogos__row--names">
            {t.partners.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ permis */}
      <section className="sec ssvc" id="permis">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">{t.licences.eyebrow}</span>
            <h2 className="t-h2">{t.licences.title[0]}<br />{t.licences.title[1]}</h2>
          </Reveal>
          <SignPlates />
          <p className="ssvc__diag">
            {t.licences.unsure}{' '}
            <a href="#test" className="link">{t.licences.unsureLink} <Arrow /></a>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- parcours */}
      <section className="sec sec--soft sroute" id="parcours">
        <div className="wrap">
          <Reveal className="head head--center">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--isoblue)' }}>{t.route.eyebrow}</span>
            <h2 className="t-h2">{t.route.title[0]}<br />{t.route.title[1]}</h2>
            <p className="t-lead">{t.route.lead}</p>
          </Reveal>
          <Route />
        </div>
      </section>

      {/* ---------------------------------------------------------- test */}
      <section className="sdiag on-dark" id="test">
        <div className="wrap sdiag__in">
          <Reveal className="sdiag__text">
            <p className="sdiag__tag">{quiz.tag}</p>
            <h2 className="sdiag__h">{quiz.title[0]}<br />{quiz.title[1]}</h2>
            <p className="t-lead">{quiz.lead}</p>
          </Reveal>
          <Reveal delay={80} className="sdiag__card">
            <div className="sdiag__bar" aria-hidden="true"><span /></div>
            <p className="sdiag__step">{quiz.step}</p>
            <p className="sdiag__q">{quiz.question}</p>
            <div className="sdiag__chips">
              {quiz.choices.map((c) => (
                <button key={c.id} type="button" aria-pressed={picked === c.id}
                        className={`chip${picked === c.id ? (c.id === quiz.answer ? ' is-right' : ' is-wrong') : ''}`}
                        onClick={() => setPicked(c.id)}>
                  {c.label}
                </button>
              ))}
            </div>
            <p className={`sdiag__result${picked ? (right ? ' is-right' : ' is-wrong') : ''}`} aria-live="polite">
              {picked && (right ? quiz.right : quiz.wrong)}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- avis */}
      <section className="sec sproof" id="avis">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--orange)' }}>{t.reviews.eyebrow}</span>
            <h2 className="t-h2">{t.reviews.title[0]}<br />{t.reviews.title[1]}</h2>
          </Reveal>
          <Reveal><Figures /></Reveal>
          <ul className="squotes">
            {t.reviews.list.map((r, i) => (
              <Reveal as="li" key={r.name} delay={i * 80} className="squote">
                <blockquote>{lang === 'fr' ? `« ${r.quote} »` : lang === 'ar' ? `«${r.quote}»` : `“${r.quote}”`}</blockquote>
                <p className="squote__who"><strong>{r.name}</strong><span>{r.role}</span></p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- fin */}
      <section className="sec sclose" id="contact">
        <div className="wrap">
          <Reveal className="close">
            <div className="close__who" aria-hidden="true">{t.close.who}</div>
            <div className="close__text">
              <h2 className="t-h2">{t.close.title}</h2>
              <p className="t-lead">{t.close.lead}</p>
            </div>
            <div className="close__cta">
              <a href={`mailto:${t.company.email}`} className="btn btn--primary">{t.close.cta} <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
