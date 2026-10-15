import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { activitiesForUnit } from './data/activities'
import { routeCopy, units, vocabularyTranslations, type RouteId, type Unit } from './data/curriculum'
import { BrandLogo, BrandMark } from './components/BrandLogo'
import { VocabularyArt } from './components/VocabularyArt'

const routeIds: RouteId[] = ['investigadores', 'constructores']

const routeIllustrations: Record<RouteId, { src: string; alt: string }> = {
  investigadores: {
    src: '/illustrations/route-investigadores-v1.png',
    alt: 'Personajes explorando con una lupa',
  },
  constructores: {
    src: '/illustrations/route-constructores-v1.png',
    alt: 'Personajes construyendo juntos',
  },
}

const unitIllustrations: Record<string, { src: string; alt: string }> = {
  colores: { src: '/illustrations/colors-flashcard.png', alt: 'Manchas de colores ilustradas' },
  dias: { src: '/illustrations/days-flashcard.png', alt: 'Calendario ilustrado' },
  emociones: { src: '/illustrations/feelings-flashcard.png', alt: 'Personaje con tarjetas de emociones' },
  alimentos: { src: '/illustrations/food-flashcard.png', alt: 'Canasta ilustrada con alimentos' },
  naturaleza: { src: '/illustrations/nature-flashcard.png', alt: 'Escena ilustrada de naturaleza' },
}

const topicStyle = (unit: Unit) => ({
  '--topic-color': unit.color,
  '--topic-soft': unit.softColor,
}) as CSSProperties

const isRouteId = (value: string): value is RouteId => routeIds.includes(value as RouteId)

function UnitIllustration({ unit, compact = false }: { unit: Unit; compact?: boolean }) {
  const illustration = unitIllustrations[unit.id]
  return <figure className={`unit-illustration ${compact ? 'unit-illustration-compact' : ''}`}>
    <img src={illustration.src} alt={illustration.alt}/>
  </figure>
}

export default function App() {
  const [helpOpen, setHelpOpen] = useState(false)
  const helpRef = useRef<HTMLDialogElement>(null)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const parts = location.pathname.split('/').filter(Boolean)
    const route = isRouteId(parts[1] ?? '') ? routeCopy[parts[1] as RouteId] : undefined
    const unit = units.find(item => item.id === parts[3])
    document.title = unit && route
      ? `${unit.name} · ${route.label} | Weaving with teachers`
      : route
        ? `${route.label} | Weaving with teachers`
        : 'Weaving with teachers'
  }, [location.pathname])

  useEffect(() => {
    if (helpOpen) helpRef.current?.showModal()
    else helpRef.current?.close()
  }, [helpOpen])

  return <div className="app-shell">
    <a className="skip-link" href="#main-content">Ir al contenido</a>
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" to="/" aria-label="Weaving with teachers, ir al inicio"><BrandLogo compact/></Link>
        <button className="help-button" onClick={() => setHelpOpen(true)}>Cómo usar</button>
      </div>
    </header>

    <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/ruta/:routeId" element={<RoutePage/>}/>
        <Route path="/ruta/:routeId/unidad/:unitId" element={<TopicPage/>}/>
        <Route path="/ruta/:routeId/actividad/:unitId/*" element={<LegacyActivityRedirect/>}/>
        <Route path="/tema/:unitId" element={<Navigate to="/" replace/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </main>

    <footer className="site-footer">
      <div className="footer-brand"><BrandMark/><div><strong>Weaving with teachers</strong><span>Guía metodológica para agentes educativos</span></div></div>
      <p>Acceso abierto · sin registro · sin perfiles</p>
    </footer>

    <dialog ref={helpRef} className="help-dialog" onCancel={() => setHelpOpen(false)} onClick={event => { if (event.target === event.currentTarget) setHelpOpen(false) }} aria-labelledby="help-title">
      <button className="dialog-close" onClick={() => setHelpOpen(false)} aria-label="Cerrar">×</button>
      <span className="eyebrow">Orientación rápida</span>
      <h2 id="help-title">Consulta la guía en tres pasos.</h2>
      <ol>
        <li>Elige Investigadores o Constructores.</li>
        <li>Elige uno de los cinco temas.</li>
        <li>Consulta el vocabulario y las actividades sugeridas para esa ruta.</li>
      </ol>
      <p>No necesitas crear una cuenta y la plataforma no guarda resultados personales.</p>
      <button className="primary-button" onClick={() => setHelpOpen(false)}>Entendido</button>
    </dialog>
  </div>
}

function Welcome() {
  return <div className="welcome-page">
    <section className="welcome-hero content-width">
      <div className="welcome-copy">
        <span className="eyebrow"><span className="spark-dot"/> Guía metodológica</span>
        <BrandLogo/>
        <h1>Guía metodológica para la sensibilización del inglés</h1>
        <p className="hero-intro">Elige la ruta que vas a consultar.</p>
      </div>
      <figure className="weaving-scene"><img src="/illustrations/hero-learning-v1.png" alt="Libro abierto con elementos de colores, emociones, alimentos y naturaleza"/></figure>
    </section>

    <section className="routes-section" aria-labelledby="routes-title">
      <div className="content-width">
        <header className="section-intro">
          <span className="eyebrow">Actividades sugeridas</span>
          <h2 id="routes-title">Elige una ruta</h2>
          <p>Investigadores o Constructores</p>
        </header>
        <div className="route-grid">
          {routeIds.map(routeId => {
            const route = routeCopy[routeId]
            const illustration = routeIllustrations[routeId]
            const activityCount = units.reduce((count, unit) => count + (routeId === 'investigadores' ? unit.investigators.length : unit.builders.length), 0)
            return <Link className={`route-card route-card-${routeId}`} to={`/ruta/${routeId}`} key={routeId}>
              <img src={illustration.src} alt={illustration.alt}/>
              <div>
                <span className="eyebrow">{route.eyebrow}</span>
                <h3>{route.label}</h3>
                <p>{route.description}</p>
                <small>{activityCount} actividades en 5 temas</small>
              </div>
              <span className="route-arrow" aria-hidden="true">→</span>
            </Link>
          })}
        </div>
      </div>
    </section>
  </div>
}

function RoutePage() {
  const { routeId = '' } = useParams()
  if (!isRouteId(routeId)) return <Navigate to="/" replace/>
  const route = routeCopy[routeId]

  return <div className="route-page">
    <div className="content-width route-page-inner">
      <Link className="back-link" to="/">← Elegir otra ruta</Link>
      <header className="route-hero">
        <div>
          <span className="eyebrow">{route.eyebrow}</span>
          <h1>{route.label}</h1>
          <p>{route.description}</p>
        </div>
        <img src={routeIllustrations[routeId].src} alt={routeIllustrations[routeId].alt}/>
      </header>

      <section className="topics-section route-topics" aria-labelledby="topics-title">
        <header className="section-intro">
          <span className="eyebrow">Cinco temas</span>
          <h2 id="topics-title">Elige un tema</h2>
        </header>
        <div className="topic-grid">
          {units.map(unit => {
            const activityCount = routeId === 'investigadores' ? unit.investigators.length : unit.builders.length
            return <Link className="topic-card" style={topicStyle(unit)} to={`/ruta/${routeId}/unidad/${unit.id}`} key={unit.id}>
              <span className="topic-number">{unit.number}</span>
              <UnitIllustration unit={unit} compact/>
              <div className="topic-card-copy">
                <h3 lang="en">{unit.name}</h3>
                <p>{unit.translation}</p>
                <span>{unit.vocabulary.length} palabras · {activityCount} actividades</span>
              </div>
              <span className="topic-arrow" aria-hidden="true">→</span>
            </Link>
          })}
        </div>
      </section>
    </div>
  </div>
}

function LegacyActivityRedirect() {
  const { routeId = '', unitId = '' } = useParams()
  return isRouteId(routeId) && units.some(unit => unit.id === unitId)
    ? <Navigate to={`/ruta/${routeId}/unidad/${unitId}`} replace/>
    : <Navigate to="/" replace/>
}

function TopicPage() {
  const { routeId = '', unitId = '' } = useParams()
  if (!isRouteId(routeId)) return <Navigate to="/" replace/>
  const unit = units.find(item => item.id === unitId)
  if (!unit) return <Navigate to={`/ruta/${routeId}`} replace/>

  const route = routeCopy[routeId]
  const activities = activitiesForUnit(routeId, unit.id)

  return <div className="topic-page" style={topicStyle(unit)}>
    <div className="content-width topic-page-inner">
      <Link className="back-link" to={`/ruta/${routeId}`}>← Temas de {route.label}</Link>

      <header className="topic-hero">
        <div className="topic-hero-copy">
          <span className="eyebrow">{route.label} · Tema {unit.number}</span>
          <h1 lang="en">{unit.name}</h1>
          <p className="topic-translation">{unit.translation}</p>
        </div>
        <div className="topic-hero-art"><UnitIllustration unit={unit}/></div>
      </header>

      <section className="vocabulary-section" aria-labelledby="vocabulary-title">
        <header className="section-heading">
          <span className="eyebrow">Vocabulario</span>
          <h2 id="vocabulary-title">Palabras de la guía</h2>
        </header>
        <div className="word-grid">
          {unit.vocabulary.map(word => <article className="word-card" key={word}>
            <div className="word-art"><VocabularyArt word={word} unitId={unit.id}/></div>
            <h3 lang="en">{word}</h3>
            <p>{vocabularyTranslations[word]}</p>
            <SpeechButton word={word}/>
          </article>)}
        </div>
      </section>

      <section className="activities-section" aria-labelledby="activities-title">
        <header className="section-heading">
          <span className="eyebrow">{route.label}</span>
          <h2 id="activities-title">Actividades sugeridas</h2>
          <p>Exploración sensorial, juego corporal, repetición natural.</p>
        </header>
        <ol className="suggested-activities">
          {activities.map((activity, index) => {
            const lesson = activity.lesson
            if (!lesson) return null
            const development = lesson.interactionCues
            return <li className="suggested-activity" key={activity.id}>
              <span className="activity-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="activity-copy">
                {activity.sourceLabel ? <span className="activity-source-label">{activity.sourceLabel}</span> : null}
                <h3 lang="en">{activity.name}</h3>
                <p className="activity-objective">{lesson.objective}</p>
                {development?.length ? <>
                  <h4>Desarrollo</h4>
                  <ul>{development.map(cue => <li key={cue}>{cue}</li>)}</ul>
                </> : null}
                {lesson.command ? <p className="activity-command"><strong>Consigna:</strong> <span lang="en">{lesson.command}</span></p> : null}
              </div>
            </li>
          })}
        </ol>
      </section>

      <nav className="next-topics" aria-label={`Otros temas de ${route.label}`}>
        <h2>Otro tema</h2>
        <div>{units.filter(item => item.id !== unit.id).map(item => <Link to={`/ruta/${routeId}/unidad/${item.id}`} key={item.id}><span lang="en">{item.name}</span><small>{item.translation}</small></Link>)}</div>
      </nav>
    </div>
  </div>
}

function SpeechButton({ word }: { word: string }) {
  const [speaking, setSpeaking] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const speak = () => {
    audioRef.current?.pause()
    const audio = new Audio(`/audio/vocabulary/${word.toLowerCase()}.m4a`)
    audioRef.current = audio
    audio.onplay = () => setSpeaking(true)
    audio.onended = () => setSpeaking(false)
    audio.onerror = () => setSpeaking(false)
    void audio.play().catch(() => {
      setSpeaking(false)
      if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      utterance.rate = 0.82
      window.speechSynthesis.speak(utterance)
    })
  }

  return <button className="audio-button" onClick={speak} aria-label={`Escuchar pronunciación de ${word}`}>
    <span aria-hidden="true">{speaking ? '◼' : '▶'}</span>{speaking ? 'Escuchando' : 'Escuchar'}
  </button>
}
