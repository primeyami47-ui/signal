import Seo from '../components/Seo'
import Reveal, { Arrow } from '../components/Reveal'
import Dash from '../components/Dash'
import Quiz from '../components/Quiz'
import { FlapBoard, Route, SignPlates, StudentCards, ZoneBand } from '../components/Signal'
import { useContent } from '../content'
import { useLang } from '../i18n'
import './Home.css'

export default function Home() {
  const t = useContent()
  const lang = useLang()

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
              <span className="shero__badge t-num">{t.dash.passRate}%</span>
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

      {/* ---------------------------------------------------------- test
          Le test du code vient tout de suite après les permis : c'est la
          première chose qu'on peut faire, avant même de s'inscrire. */}
      <section className="sdiag on-dark" id="test">
        <div className="wrap sdiag__in">
          <Reveal className="sdiag__text">
            <p className="sdiag__tag">{t.test.tag}</p>
            <h2 className="sdiag__h">{t.test.title[0]}<br />{t.test.title[1]}</h2>
            <p className="t-lead">{t.test.lead}</p>
          </Reveal>
          <Reveal delay={80} className="sdiag__card"><Quiz /></Reveal>
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

      {/* --------------------------------------------------------- tableau de bord */}
      <section className="sec sdash" id="avis">
        <div className="wrap">
          <Reveal className="head head--center">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--black)' }}>{t.dash.eyebrow}</span>
            <h2 className="t-h2">{t.dash.title[0]}<br />{t.dash.title[1]}</h2>
          </Reveal>
          <Dash />
        </div>
      </section>

      {/* ------------------------------------------------------------- avis */}
      <section className="sec scardsec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow" style={{ ['--dot' as string]: 'var(--orange)' }}>{t.cards.eyebrow}</span>
            <h2 className="t-h2">{t.cards.title[0]}<br />{t.cards.title[1]}</h2>
          </Reveal>
          <StudentCards />
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
