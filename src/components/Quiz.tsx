import { useState } from 'react'
import { useContent } from '../content'
import { Arrow } from './Reveal'

const LETTERS = ['A', 'B', 'C']

/** Le test du code : trois vraies questions, une à la fois. On répond, la
    correction tombe tout de suite avec son explication, puis le score. */
export default function Quiz() {
  const t = useContent().test
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const total = t.questions.length
  const finished = idx >= total
  const q = t.questions[Math.min(idx, total - 1)]

  const pick = (i: number) => {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) setScore((s) => s + 1)
  }
  const next = () => { setPicked(null); setIdx((n) => n + 1) }
  const reset = () => { setPicked(null); setIdx(0); setScore(0) }

  return (
    <div className="quiz" aria-live="polite">
      <div className="quiz__bar" aria-hidden="true">
        {t.questions.map((_, i) => <span key={i} className={i < idx || (i === idx && picked !== null) ? 'is-done' : i === idx ? 'is-now' : ''} />)}
      </div>

      {!finished ? (
        <>
          <p className="quiz__step">{t.step.replace('{n}', String(idx + 1)).replace('{total}', String(total))}</p>
          <p className="quiz__q">{q.q}</p>
          <div className="quiz__choices" role="group">
            {q.choices.map((c, i) => {
              const state = picked === null ? '' : i === q.answer ? ' is-right' : i === picked ? ' is-wrong' : ' is-dim'
              return (
                <button key={c} type="button" className={`quiz__choice${state}`} aria-pressed={picked === i} onClick={() => pick(i)}>
                  <span className="quiz__letter" aria-hidden="true">{LETTERS[i]}</span>{c}
                </button>
              )
            })}
          </div>
          {picked !== null && (
            <div className="quiz__after">
              <p className={`quiz__explain ${picked === q.answer ? 'is-right' : 'is-wrong'}`}>
                <strong>{picked === q.answer ? t.correct : t.wrong}</strong> — {q.explain}
              </p>
              <button type="button" className="btn btn--primary" onClick={next}>
                {idx + 1 < total ? t.next : t.seeScore} <Arrow />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="quiz__result">
          <p className="quiz__step">{t.scoreTitle}</p>
          <p className="quiz__score t-num">{t.score.replace('{s}', String(score)).replace('{n}', String(total))}</p>
          <p className="quiz__verdict">{t.verdicts[score]}</p>
          <div className="quiz__after">
            <a href="#contact" className="btn btn--primary">{t.book} <Arrow /></a>
            <button type="button" className="link" onClick={reset}>{t.again}</button>
          </div>
        </div>
      )}
    </div>
  )
}
