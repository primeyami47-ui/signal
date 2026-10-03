import { useState } from 'react'
import Seo from '../components/Seo'
import Reveal, { Arrow } from '../components/Reveal'
import Figures from '../components/Figures'
import { FlapBoard, Route, SignPlates, ZoneBand } from '../components/Signal'
import { company, figures, partners, quiz, seo, testimonials } from '../data/site'
import './Home.css'

export default function Home() {
  // Le test du code : une vraie question, corrigée sur place.
  const [picked, setPicked] = useState<string | null>(null)
  const right = picked === quiz.answer

  return (
    <>
      <Seo {...seo.home} />

      {/* ---------------------------------------------------------- hero
          Jaune de signalisation, un titre en capitales étroites, et le
          tableau des examens qui tourne à droite. */}
      <section className="shero">
        <div className="wrap shero__in">
          <div className="shero__text">
            <p className="shero__proof">
              <span className="shero__badge t-num">{figures[0].value}%</span>
              de réussite au premier passage
            </p>
            <h1 className="shero__h">
              <span className="ln"><span>Le permis,</span></span>
              <span className="ln"><span className="shero__box">sans détour.</span></span>
            </h1>
            <p className="shero__lead">
              Code, conduite, examen&nbsp;: {company.name} vous accompagne de la
              première leçon jusqu’au permis, en voiture, à moto ou en poids lourd.
            </p>
            <div className="shero__cta">
              <a href="#test" className="btn btn--primary">Tester le code <Arrow /></a>
              <a href="#permis" className="btn btn--light">Nos permis</a>
            </div>
            <p className="shero__note">1 question · 10 secondes · sans inscription</p>
          </div>
          <div className="shero__board">
            <FlapBoard />
          </div>
        </div>
        {/* Marquage au sol : une flèche géante qui pointe vers la suite. */}
        <svg className="shero__floor" viewBox="0 0 400 120" aria-hidden="true" preserveAspectRatio="none">
          <path d="M0 120 L150 0 H250 L400 120 Z" />
        </svg>
      </section>

      <ZoneBand items={['Zone de conduite', 'Permis B', 'Permis A', 'Permis C', 'Permis D', 'Code de la route', 'Remise en route']} />

      {/* ------------------------------------------------------ confiance */}
      <section className="slogos" aria-label="Ils financent le permis de leurs équipes">
        <div className="wrap">
          <p className="slogos__h"><span>Réf.</span> Ils financent le permis de leurs équipes</p>
          <ul className="slogos__row slogos__row--names">
            {partners.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ permis */}
      <section className="sec ssvc" id="permis">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">A1 · Nos permis</span>
            <h2 className="t-h2">Cinq formations.<br />Une seule route.</h2>
          </Reveal>
          <SignPlates />
          <p className="ssvc__diag">
            Pas sûr de votre niveau au code&nbsp;?{' '}
            <a href="#test" className="link">Faire le test <Arrow /></a>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- parcours */}
      <section className="sec sec--soft sroute" id="parcours">
        <div className="wrap">
          <Reveal className="head head--center">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--isoblue)' }}>B2 · Le parcours</span>
            <h2 className="t-h2">Quatre étapes.<br />Aucun détour.</h2>
            <p className="t-lead">Le même trajet pour tous les permis, avec ce qui est inclus à chaque panneau.</p>
          </Reveal>
          <Route />
        </div>
      </section>

      {/* ---------------------------------------------------------- test */}
      <section className="sdiag on-dark" id="test">
        <div className="wrap sdiag__in">
          <Reveal className="sdiag__text">
            <p className="sdiag__tag">Contrôle · 10 secondes</p>
            <h2 className="sdiag__h">Prêt pour<br />le code&nbsp;?</h2>
            <p className="t-lead">Une vraie question d’examen, corrigée sur place. Les quarante autres, c’est en salle ou sur l’appli.</p>
          </Reveal>
          <Reveal delay={80} className="sdiag__card">
            <div className="sdiag__bar" aria-hidden="true"><span /></div>
            <p className="sdiag__step">Question 1 / 40</p>
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
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--orange)' }}>C3 · Avis</span>
            <h2 className="t-h2">Ils ont eu<br />le permis.</h2>
          </Reveal>
          <Reveal><Figures /></Reveal>
          <ul className="squotes">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.name} delay={i * 80} className="squote">
                <blockquote>« {t.quote} »</blockquote>
                <p className="squote__who"><strong>{t.name}</strong><span>{t.role}</span></p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- fin */}
      <section className="sec sclose" id="contact">
        <div className="wrap">
          <Reveal className="close">
            <div className="close__who" aria-hidden="true">B</div>
            <div className="close__text">
              <h2 className="t-h2">Première leçon offerte.</h2>
              <p className="t-lead">
                Écrivez-nous&nbsp;: un moniteur vous répond sous 24&nbsp;heures
                et fixe votre première heure de conduite.
              </p>
            </div>
            <div className="close__cta">
              <a href={`mailto:${company.email}`} className="btn btn--primary">Écrire un message <Arrow /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
