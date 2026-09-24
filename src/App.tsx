import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { activitiesForRoute, activitiesForUnit, activityModeLabels, activitySequence, activitySource, findActivity, slugify } from './data/activities'
import { routeCopy, type RouteId, unitById, units, vocabularyTranslations } from './data/curriculum'
import { sourceLabel, type GuidedLesson, type InteractionPattern } from './data/lessons'
import { BrandLogo, BrandMark } from './components/BrandLogo'
import { Icon } from './components/Artwork'
import { VocabularyArt } from './components/VocabularyArt'

type Feedback = 'idle' | 'correct' | 'try-again'
const interactionLabels: Record<InteractionPattern, string> = {
  choice: 'Reconocimiento visual',
  hunt: 'Búsqueda guiada',
  sensory: 'Relación sensorial',
  rhythm: 'Secuencia rítmica',
  creation: 'Consigna de creación',
  story: 'Secuencia narrativa',
  commands: 'Palabra y movimiento',
  construction: 'Reto de construcción',
  expression: 'Gestos y expresiones',
  chance: 'Turno con dado',
  reflection: 'Elección personal',
  memory: 'Secuencia de memoria',
  symbolic: 'Juego simbólico',
  matching: 'Asociación visual',
}
const interactionActions: Record<InteractionPattern, string> = {
  choice: 'Interactuar',
  hunt: 'Preparar búsqueda',
  sensory: 'Explorar relación',
  rhythm: 'Seguir el ritmo',
  creation: 'Preparar creación',
  story: 'Abrir el cuento',
  commands: 'Leer consignas',
  construction: 'Revisar el reto',
  expression: 'Preparar expresión',
  chance: 'Preparar el turno',
  reflection: 'Explorar opciones',
  memory: 'Observar tarjetas',
  symbolic: 'Preparar el juego',
  matching: 'Preparar parejas',
}
const facilitationCopy: Record<InteractionPattern, string> = {
  choice: 'Utiliza la pantalla para presentar la consigna y acompaña la participación. La confirmación no califica el desempeño.',
  hunt: 'La pantalla fija el color objetivo. Acompaña la búsqueda en un entorno seguro y permite señalar en lugar de desplazarse.',
  sensory: 'La pantalla anticipa la relación entre palabra y material. La experiencia sensorial ocurre con objetos reales y siempre puede omitirse.',
  rhythm: 'Utiliza las líneas visibles para mantener el orden y el pulso. El audio no es necesario mientras llega la grabación aprobada.',
  creation: 'La pantalla aclara la consigna antes de crear. Acompaña el proceso sin convertir el resultado visual en una evaluación.',
  story: 'Conserva el orden del relato y señala cada relación. Se puede participar escuchando, señalando o repitiendo palabras clave.',
  commands: 'Presenta una consigna completa, separa la palabra objetivo y el movimiento, y aumenta la complejidad solo cuando el grupo comprenda la estructura.',
  construction: 'La pantalla presenta las condiciones de la construcción. La producción se realiza con materiales o mediante instrucciones a un acompañante.',
  expression: 'Modela la palabra y ofrece varias formas de participar. No califiques el gesto ni deduzcas el estado emocional de la persona.',
  chance: 'La pantalla prepara el vocabulario antes de usar el dado físico. La emoción obtenida propone una representación, no una declaración personal.',
  reflection: 'Ofrece las palabras como apoyo para una elección personal. Compartir, explicar o representar una emoción siempre es voluntario.',
  memory: 'Permite observar el grupo completo antes de ocultar o localizar una tarjeta. Recordar se practica con ayuda y no funciona como prueba de dominio.',
  symbolic: 'La pantalla prepara palabras y turnos. El juego continúa con tarjetas u objetos seguros, sin exigir comprar, comer o manipular alimentos reales.',
  matching: 'Presenta la tarjeta modelo y deja tiempo para compararla. La pareja se forma con dos imágenes iguales o con objetos seguros equivalentes.',
}
const routeIds: RouteId[] = ['investigadores', 'constructores']
const isRouteId = (value?: string): value is RouteId => !!value && routeIds.includes(value as RouteId)
const topicStyle = (id: string) => {
  const unit = unitById(id)
  return { '--topic-color': unit.color, '--topic-soft': unit.softColor } as CSSProperties
}

const unitIllustrations: Record<string, { src: string; alt: string }> = {
  colores: { src: '/illustrations/colors-flashcard.png', alt: 'Paleta ilustrada con manchas de colores' },
  dias: { src: '/illustrations/days-flashcard.png', alt: 'Calendario ilustrado con cinco días de colores' },
  emociones: { src: '/illustrations/feelings-flashcard.png', alt: 'Personaje ilustrado con tarjetas de emociones' },
  alimentos: { src: '/illustrations/food-flashcard.png', alt: 'Canasta ilustrada con alimentos para un picnic' },
  naturaleza: { src: '/illustrations/nature-flashcard.png', alt: 'Escena ilustrada con árbol, flor, sol, nube, lluvia y ave' },
}

const routeIllustrations: Record<RouteId, string> = {
  investigadores: '/illustrations/route-investigadores-v1.png',
  constructores: '/illustrations/route-constructores-v1.png',
}

const unitFocus: Record<string, string> = {
  colores: 'Reconocimiento visual, asociación, creación y comandos.',
  dias: 'Secuencia temporal, rutinas, conteo y acciones.',
  emociones: 'Comprensión, expresión corporal y comunicación segura.',
  alimentos: 'Memoria, clasificación, instrucciones y juego simbólico.',
  naturaleza: 'Observación, movimiento, construcción de escenas y descripción.',
}

const routeProgression: Record<RouteId, string[]> = {
  investigadores: ['Reconocer', 'Imitar', 'Asociar', 'Nombrar'],
  constructores: ['Recordar', 'Combinar', 'Producir', 'Transferir'],
}

function viewName(pathname: string) {
  if (pathname === '/') return 'Inicio'
  const parts = pathname.split('/').filter(Boolean)
  const route = isRouteId(parts[1]) ? parts[1] : undefined
  if (!route) return 'Weaving with teachers'
  if (parts[2] === 'vocabulario') return `Biblioteca visual · ${routeCopy[route].label}`
  if (parts[2] === 'actividades') return `Índice de actividades · ${routeCopy[route].label}`
  if (parts[2] === 'unidad') {
    const unit = units.find(item => item.id === parts[3])
    return unit ? `${unit.translation} · ${routeCopy[route].label}` : routeCopy[route].label
  }
  if (parts[2] === 'actividad') {
    const activity = findActivity(route, parts[3] ?? '', parts[4] ?? '')
    if (activity) return `${parts[5] === 'practica' ? 'Práctica guiada' : 'Ficha metodológica'}: ${activity.name}`
  }
  return `Mapa · ${routeCopy[route].label}`
}

function UnitIllustration({ unitId, compact = false }: { unitId: string; compact?: boolean }) {
  const illustration = unitIllustrations[unitId]
  return <figure className={`unit-illustration ${compact ? 'unit-illustration-compact' : ''}`}>
    <img src={illustration.src} alt={illustration.alt}/>
  </figure>
}

export default function App() {
  const [helpOpen, setHelpOpen] = useState(false)
  const helpRef = useRef<HTMLDialogElement>(null)
  const location = useLocation()
  const routeMatch = location.pathname.match(/^\/ruta\/(investigadores|constructores)/)
  const currentRoute = routeMatch?.[1] as RouteId | undefined
  const currentView = viewName(location.pathname)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  useEffect(() => { document.title = `${currentView} | Weaving with teachers` }, [currentView])
  useEffect(() => { if (helpOpen) helpRef.current?.showModal(); else helpRef.current?.close() }, [helpOpen])

  return <div className="app-shell">
    <a className="skip-link" href="#main-content">Ir al contenido</a>
    <p className="sr-only" role="status" aria-live="polite">{currentView}</p>
    <header className="site-header"><div className="header-inner">
      <Link className="brand-link" to="/" aria-label="Weaving with teachers, ir al inicio"><BrandLogo compact/></Link>
      {currentRoute && <nav className="main-nav" aria-label="Contenido de la ruta">
        <NavLink to={`/ruta/${currentRoute}`} end><Icon name="home"/> Mapa</NavLink>
        <NavLink to={`/ruta/${currentRoute}/vocabulario`}><Icon name="book"/> Biblioteca</NavLink>
        <NavLink to={`/ruta/${currentRoute}/actividades`}><Icon name="topics"/> Actividades</NavLink>
      </nav>}
      <button className="help-button" onClick={() => setHelpOpen(true)}><Icon name="help"/><span>Cómo usar</span></button>
    </div></header>
    <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/ruta/:routeId" element={<RouteMapPage/>}/>
        <Route path="/ruta/:routeId/unidad/:unitId" element={<UnitPage/>}/>
        <Route path="/ruta/:routeId/vocabulario" element={<VocabularyPage/>}/>
        <Route path="/ruta/:routeId/actividades" element={<ActivitiesPage/>}/>
        <Route path="/ruta/:routeId/actividad/:unitId/:activitySlug" element={<ActivityDetail/>}/>
        <Route path="/ruta/:routeId/actividad/:unitId/:activitySlug/practica" element={<GuidedActivity/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </main>
    <footer className="site-footer">
      <div className="footer-brand"><BrandMark/><div><strong>Weaving with teachers</strong><span>Guía metodológica para agentes educativos</span></div></div>
      <p>Acceso abierto, sin registro ni perfiles.</p>
      <button onClick={() => setHelpOpen(true)}>Ayuda y alcance</button>
    </footer>
    <dialog ref={helpRef} className="help-dialog" onCancel={() => setHelpOpen(false)} onClick={event => { if (event.target === event.currentTarget) setHelpOpen(false) }} aria-labelledby="help-title">
      <button className="icon-button dialog-close" onClick={() => setHelpOpen(false)} aria-label="Cerrar ayuda"><Icon name="close"/></button>
      <span className="eyebrow">Orientación rápida</span><h2 id="help-title">Una guía abierta para acompañar.</h2>
      <ol><li>Elige Investigadores o Constructores según la forma de participación que quieras acompañar.</li><li>Abre una de las cinco unidades en el mapa. Allí encontrarás su vocabulario y el recorrido sugerido de la guía.</li><li>Consulta la ficha antes de iniciar y utiliza sus cuatro momentos: observar, interactuar, acompañar y cerrar.</li></ol>
      <p>No necesitas una cuenta. La plataforma no identifica participantes ni guarda resultados personales.</p><button className="primary-button" onClick={() => setHelpOpen(false)}>Entendido <Icon name="check"/></button>
    </dialog>
  </div>
}

function Welcome() {
  return <div className="welcome-page">
    <section className="welcome-hero content-width"><div className="welcome-copy">
      <span className="eyebrow"><span className="spark-dot"/> Guía metodológica de inglés</span><BrandLogo/>
      <h1>Ideas para acompañar el aprendizaje desde el juego y la exploración.</h1>
      <p>Una herramienta para agentes educativos de centros educativos del municipio de Envigado. Elige una ruta para consultar vocabulario y propuestas metodológicas.</p>
    </div><WeavingScene/></section>
    <section className="route-section" aria-labelledby="route-title"><div className="content-width">
      <div className="section-intro"><span className="eyebrow">Elige una propuesta</span><h2 id="route-title">¿Cómo quieres comenzar?</h2><p>Las dos rutas comparten el vocabulario. Las actividades cambian según la forma de explorar y construir.</p></div>
      <div className="route-grid">{routeIds.map((route, index) => <Link className={`route-card route-card-${route}`} to={`/ruta/${route}`} key={route}>
        <img className="route-illustration" src={routeIllustrations[route]} alt="" aria-hidden="true"/><span className="route-number">0{index + 1}</span><span className="route-icon"><Icon name={route === 'investigadores' ? 'eye' : 'hand'}/></span><span className="eyebrow">{routeCopy[route].eyebrow}</span><h3>{routeCopy[route].label}</h3><p>{routeCopy[route].description}</p><span className="route-link">Entrar a la ruta <Icon name="arrow"/></span>
      </Link>)}</div>
      <div className="welcome-note"><BrandMark/><p><strong>Contenido abierto y acompañado.</strong> La plataforma no solicita registro, nombres, fotografías ni información de los participantes.</p></div>
    </div></section>
  </div>
}

function WeavingScene() {
  return <figure className="weaving-scene"><img src="/illustrations/hero-learning-v1.png" alt="Libro abierto del que emergen colores, emociones, alimentos y naturaleza conectados por un hilo"/><figcaption className="scene-label">observar · escuchar · crear</figcaption></figure>
}

function RouteHeader({ route, active, unitId }: { route: RouteId; active: 'mapa' | 'vocabulario' | 'actividades'; unitId?: string }) {
  const routeTarget = (id: RouteId) => unitId ? `/ruta/${id}/unidad/${unitId}` : active === 'mapa' ? `/ruta/${id}` : `/ruta/${id}/${active}`
  return <><section className={`route-banner route-banner-${route}`}><div className="content-width route-banner-inner"><div><span className="eyebrow">Ruta activa</span><h1>{routeCopy[route].label}</h1><p>{routeCopy[route].description}</p></div><div className="route-switcher" role="group" aria-label="Cambiar de ruta">{routeIds.map(id => <Link aria-current={id === route ? 'true' : undefined} to={routeTarget(id)} key={id}>{routeCopy[id].label}</Link>)}</div></div><svg className="banner-thread" viewBox="0 0 1440 42" preserveAspectRatio="none" aria-hidden="true"><path d="M0 22c155-42 262 39 415 1s289 28 447 0 343 35 578-3"/></svg></section>
    <nav className="content-tabs content-width" aria-label="Secciones de la ruta"><Link className={active === 'mapa' ? 'active' : ''} aria-current={active === 'mapa' ? 'page' : undefined} to={`/ruta/${route}`}><Icon name="home"/><span>Mapa de la ruta<small>Elegir una unidad</small></span></Link><Link className={active === 'vocabulario' ? 'active' : ''} aria-current={active === 'vocabulario' ? 'page' : undefined} to={`/ruta/${route}/vocabulario`}><Icon name="book"/><span>Biblioteca visual<small>Consultar palabras</small></span></Link><Link className={active === 'actividades' ? 'active' : ''} aria-current={active === 'actividades' ? 'page' : undefined} to={`/ruta/${route}/actividades`}><Icon name="topics"/><span>Índice completo<small>Ver todas las actividades</small></span></Link></nav></>
}

function RouteMapPage() {
  const { routeId } = useParams(); const route = isRouteId(routeId) ? routeId : null
  if (!route) return <Navigate to="/" replace/>
  const activities = activitiesForRoute(route)
  return <div className="hub-page"><RouteHeader route={route} active="mapa"/><div className="page content-width route-map-page">
    <PageHeading eyebrow="Mapa de la ruta" title="Cinco unidades para elegir con intención.">Cada unidad reúne su vocabulario y las actividades de la guía. El orden orienta la consulta, pero puedes abrir el tema que necesites facilitar.</PageHeading>
    <div className="route-principle" aria-label={`Progresión pedagógica de ${routeCopy[route].label}`}><span>Progresión de la ruta</span><ol>{routeProgression[route].map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</li>)}</ol></div>
    <ol className="route-map-list">{units.map(unit => { const unitActivities = activities.filter(activity => activity.unit.id === unit.id); return <li key={unit.id} style={topicStyle(unit.id)}><Link to={`/ruta/${route}/unidad/${unit.id}`}><span className="map-unit-number">{unit.number}</span><div className="map-unit-art"><UnitIllustration unitId={unit.id} compact/></div><div className="map-unit-copy"><span className="eyebrow">Guía {unit.number} · {unit.name}</span><h2>{unit.translation}</h2><p>{unitFocus[unit.id]}</p></div><div className="map-unit-meta"><span>{unit.vocabulary.length} palabras</span><span>{unitActivities.length} actividades</span><strong>Abrir unidad <Icon name="arrow"/></strong></div></Link></li> })}</ol>
    <div className="route-map-foot"><p><strong>¿Necesitas una palabra concreta?</strong> La biblioteca reúne las 44 flashcards sin convertirlas en un paso obligatorio.</p><Link className="text-button" to={`/ruta/${route}/vocabulario`}>Abrir biblioteca visual <Icon name="arrow"/></Link></div>
  </div></div>
}

function UnitPage() {
  const { routeId, unitId = '' } = useParams(); const route = isRouteId(routeId) ? routeId : null; const unit = units.find(item => item.id === unitId)
  const [mode, setMode] = useState('all')
  if (!route || !unit) return <Navigate to={route ? `/ruta/${route}` : '/'} replace/>
  const activities = activitiesForUnit(route, unit.id)
  const modes = [...new Set(activities.map(activity => activity.mode))]
  const visibleActivities = mode === 'all' ? activities : activities.filter(activity => activity.mode === mode)
  const otherRoute: RouteId = route === 'investigadores' ? 'constructores' : 'investigadores'
  return <div className="hub-page"><RouteHeader route={route} active="mapa" unitId={unit.id}/><div className="page content-width unit-page" style={topicStyle(unit.id)}>
    <nav className="breadcrumbs" aria-label="Ubicación"><Link to="/">Inicio</Link><span>/</span><Link to={`/ruta/${route}`}>{routeCopy[route].label}</Link><span>/</span><span aria-current="page">{unit.translation}</span></nav>
    <header className="unit-lead"><div className="unit-lead-copy"><span className="eyebrow">Unidad {unit.number} · Guía {unit.number}</span><h1>{unit.translation}</h1><p>{unitFocus[unit.id]}</p><div className="unit-lead-actions"><Link className="primary-button" to={`/ruta/${route}/actividad/${unit.id}/${slugify(activities[0].name)}`}>Comenzar recorrido <Icon name="arrow"/></Link><span>{activities.length} actividades en esta ruta</span></div></div><div className="unit-lead-art"><UnitIllustration unitId={unit.id}/></div></header>
    <section className="unit-vocabulary" aria-labelledby="unit-vocabulary-title"><header><div><span className="eyebrow">Vocabulario de la unidad</span><h2 id="unit-vocabulary-title">Palabras para presentar y acompañar</h2></div><Link className="text-button" to={`/ruta/${route}/vocabulario`}>Biblioteca completa <Icon name="arrow"/></Link></header><div className="unit-vocabulary-list">{unit.vocabulary.map(word => <div key={word}><VocabularyArt word={word} unitId={unit.id}/><strong lang="en">{word}</strong><span>{vocabularyTranslations[word]}</span></div>)}</div></section>
    <section className="unit-journey" aria-labelledby="unit-journey-title"><header><span className="eyebrow">Recorrido sugerido</span><h2 id="unit-journey-title">Actividades en el orden de la guía</h2><p>Puedes seguir la secuencia o elegir una actividad según la intención de la sesión.</p></header><div className="mode-filter" role="group" aria-label="Filtrar por forma de participación"><button className={mode === 'all' ? 'active' : ''} aria-pressed={mode === 'all'} onClick={() => setMode('all')}>Todas</button>{modes.map(item => <button className={mode === item ? 'active' : ''} aria-pressed={mode === item} onClick={() => setMode(item)} key={item}>{activityModeLabels[item]}</button>)}</div><p className="filter-summary" role="status">{visibleActivities.length} {visibleActivities.length === 1 ? 'actividad visible' : 'actividades visibles'}</p><ol className="journey-list">{visibleActivities.map(activity => <li key={activity.id}><Link to={`/ruta/${route}/actividad/${unit.id}/${slugify(activity.name)}`}><span className="journey-number">{String(activity.position).padStart(2, '0')}</span><div><span className="journey-mode">{activityModeLabels[activity.mode]}</span><h3>{activity.name}</h3><p>{activity.lesson?.objective}</p></div><div className="journey-source"><span>{activitySource(activity)}</span><strong>Abrir ficha <Icon name="arrow"/></strong></div></Link></li>)}</ol></section>
    <aside className="parallel-route"><div><span className="eyebrow">Mismo tema, otra forma de acompañar</span><h2>{routeCopy[otherRoute].label}</h2><p>{routeCopy[otherRoute].description}</p></div><Link className="secondary-button" to={`/ruta/${otherRoute}/unidad/${unit.id}`}>Ver {unit.translation.toLowerCase()} en {routeCopy[otherRoute].label} <Icon name="arrow"/></Link></aside>
  </div></div>
}

function PageHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <div className="page-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{children}</p></div>
}

function VocabularyPage() {
  const { routeId } = useParams(); const route = isRouteId(routeId) ? routeId : null
  const [query, setQuery] = useState(''); const [topic, setTopic] = useState('all')
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const flashcardRef = useRef<HTMLDialogElement>(null)
  const normalized = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()
  const entries = units.filter(unit => topic === 'all' || unit.id === topic).flatMap(unit => unit.vocabulary.filter(word => `${word} ${vocabularyTranslations[word] ?? ''} ${unit.translation}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(normalized)).map(word => ({ word, unit, translation: vocabularyTranslations[word] ?? '' })))
  const selectedIndex = entries.findIndex(entry => `${entry.unit.id}:${entry.word}` === selectedCard)
  const selectedEntry = selectedIndex >= 0 ? entries[selectedIndex] : undefined
  useEffect(() => {
    const dialog = flashcardRef.current
    if (selectedEntry && dialog && !dialog.open) dialog.showModal()
    if (!selectedEntry && dialog?.open) dialog.close()
  }, [selectedEntry])
  if (!route) return <Navigate to="/" replace/>
  const selectEntry = (index: number) => { const entry = entries[index]; if (entry) setSelectedCard(`${entry.unit.id}:${entry.word}`) }
  return <div className="hub-page"><RouteHeader route={route} active="vocabulario"/><div className="page content-width">
    <PageHeading eyebrow="Vocabulario compartido" title="Palabras para mirar, escuchar y acompañar.">El vocabulario es el mismo para Investigadores y Constructores. Puedes filtrarlo por tema o buscar una palabra en inglés o español.</PageHeading>
    <div className="resource-note"><Icon name="people"/><p><strong>Audio pendiente del cliente.</strong> Las palabras, traducciones y apoyos visuales ya están disponibles. La pronunciación se habilitará cuando el cliente entregue o apruebe las grabaciones.</p></div>
    <section className="visual-library-preview" aria-labelledby="visual-library-title"><div className="visual-library-copy"><span className="eyebrow">Biblioteca visual</span><h3 id="visual-library-title">Una dirección común para las 44 flashcards</h3><p>Cada palabra cuenta con un apoyo visual coherente con su tema. Selecciona una familia para explorarla.</p></div><div className="visual-library-grid">{units.map(unit => <button key={unit.id} className={topic === unit.id ? 'selected' : ''} style={topicStyle(unit.id)} onClick={() => setTopic(unit.id)} aria-pressed={topic === unit.id}><UnitIllustration unitId={unit.id} compact/><span>{unit.translation}</span></button>)}</div></section>
    <div className="library-toolbar"><label className="search-field"><Icon name="search"/><span className="sr-only">Buscar vocabulario</span><input type="search" placeholder="Busca: green, árbol, emociones…" value={query} onChange={event => setQuery(event.target.value)}/></label><label className="topic-filter"><span>Tema</span><select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">Todos</option>{units.map(unit => <option key={unit.id} value={unit.id}>{unit.translation}</option>)}</select></label></div>
    <p className="results-count" role="status">{entries.length} {entries.length === 1 ? 'palabra disponible' : 'palabras disponibles'}</p>
    {entries.length ? <div className="vocabulary-grid">{entries.map(({ word, unit, translation }) => <article className="vocabulary-card" style={topicStyle(unit.id)} key={`${unit.id}-${word}`}><span className="topic-chip">{unit.translation}</span><button className="flashcard-open" onClick={() => setSelectedCard(`${unit.id}:${word}`)} aria-label={`Ampliar flashcard ${word}, ${translation}`}><div className="vocabulary-visual"><VocabularyArt word={word} unitId={unit.id}/></div><h3 lang="en">{word}</h3><p>{translation}</p><span className="flashcard-open-hint"><Icon name="eye"/> Ampliar</span></button><SpeechButton word={word}/></article>)}</div> : <div className="empty-state"><BrandMark/><h3>No encontramos esa palabra.</h3><p>Prueba otro término o vuelve a mostrar todos los temas.</p><button className="secondary-button" onClick={() => { setQuery(''); setTopic('all') }}>Ver todo el vocabulario</button></div>}
    {selectedEntry && <dialog ref={flashcardRef} className="flashcard-dialog" style={topicStyle(selectedEntry.unit.id)} onCancel={() => setSelectedCard(null)} onClose={() => setSelectedCard(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedCard(null) }} aria-labelledby="flashcard-title"><button className="icon-button dialog-close" onClick={() => setSelectedCard(null)} aria-label="Cerrar flashcard"><Icon name="close"/></button><span className="topic-chip">{selectedEntry.unit.translation}</span><div className="flashcard-dialog-art"><VocabularyArt word={selectedEntry.word} unitId={selectedEntry.unit.id}/></div><h2 id="flashcard-title" lang="en">{selectedEntry.word}</h2><p>{selectedEntry.translation}</p><div className="flashcard-dialog-nav"><button className="secondary-button" disabled={selectedIndex <= 0} onClick={() => selectEntry(selectedIndex - 1)}><Icon name="back"/> Anterior</button><span>{selectedIndex + 1} de {entries.length}</span><button className="secondary-button" disabled={selectedIndex >= entries.length - 1} onClick={() => selectEntry(selectedIndex + 1)}>Siguiente <Icon name="arrow"/></button></div></dialog>}
  </div></div>
}

function SpeechButton({ word }: { word: string }) {
  return <button className="audio-button" disabled aria-label={`Audio de ${word} pendiente de entrega por el cliente`}><span className="audio-icon" aria-hidden="true">♪</span>Audio pendiente</button>
}

function LessonModel({ lesson, unitId }: { lesson: GuidedLesson; unitId: string }) {
  const pattern = lesson.interaction ?? 'choice'
  if (pattern === 'choice' || !lesson.interactionCues?.length) return <div className="model-cards">{lesson.modelItems.map(word => <div className="model-card" key={word}><VocabularyArt word={word} unitId={unitId}/><strong lang="en">{word}</strong></div>)}</div>
  return <div className={`interaction-model interaction-model-${pattern}`} aria-label={interactionLabels[pattern]}>
    <div className="interaction-model-heading"><span>{interactionLabels[pattern]}</span><strong>{lesson.interactionCues.length} momentos</strong></div>
    <ol className="interaction-cues">{lesson.interactionCues.map((cue, index) => <li key={cue}><span>{String(index + 1).padStart(2, '0')}</span><strong lang="en">{cue}</strong></li>)}</ol>
    <div className="interaction-vocabulary" aria-label="Palabras de apoyo">{lesson.modelItems.map(word => <div key={word}><VocabularyArt word={word} unitId={unitId}/><span lang="en">{word}</span></div>)}</div>
  </div>
}

function ActivitiesPage() {
  const { routeId } = useParams(); const route = isRouteId(routeId) ? routeId : null
  const [topic, setTopic] = useState('all')
  if (!route) return <Navigate to="/" replace/>
  const allActivities = activitiesForRoute(route)
  const activities = allActivities.filter(activity => topic === 'all' || activity.unit.id === topic)
  return <div className="hub-page"><RouteHeader route={route} active="actividades"/><div className="page content-width">
    <PageHeading eyebrow={`${allActivities.length} propuestas en cinco unidades`} title="Índice metodológico de la ruta.">Consulta todas las actividades o vuelve al mapa para recorrerlas por unidad. Cada ficha conserva su objetivo, preparación, práctica y fuente original.</PageHeading>
    <div className="activity-filters"><label className="topic-filter"><span>Tema</span><select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">Todos</option>{units.map(unit => <option key={unit.id} value={unit.id}>{unit.translation}</option>)}</select></label></div>
    <div className="activity-groups">{units.filter(unit => topic === 'all' || unit.id === topic).map(unit => { const group = activities.filter(activity => activity.unit.id === unit.id); if (!group.length) return null; return <section className="activity-group" key={unit.id} style={topicStyle(unit.id)}><header><div className="group-art"><UnitIllustration unitId={unit.id} compact/></div><div><span className="eyebrow">Guía {unit.number} · {unit.name}</span><h3>{unit.translation}</h3><p>{unitFocus[unit.id]}</p><Link className="text-button" to={`/ruta/${route}/unidad/${unit.id}`}>Ver recorrido de la unidad <Icon name="arrow"/></Link></div></header><ol className="activity-list">{group.map(activity => <li key={activity.id}><Link className="activity-card" to={`/ruta/${route}/actividad/${unit.id}/${slugify(activity.name)}`}><span className="activity-card-position">{String(activity.position).padStart(2, '0')}</span><span className="activity-card-content"><span className="journey-mode">{activityModeLabels[activity.mode]}</span><h4>{activity.name}</h4><small>{activitySource(activity)}</small></span><span className="card-arrow"><Icon name="arrow"/></span></Link></li>)}</ol></section> })}</div>
  </div></div>
}

function ActivityDetail() {
  const { routeId, unitId = '', activitySlug = '' } = useParams(); const route = isRouteId(routeId) ? routeId : null; const activity = route ? findActivity(route, unitId, activitySlug) : undefined
  if (!route || !activity?.lesson) return <Navigate to={route ? `/ruta/${route}` : '/'} replace/>
  const lesson = activity.lesson
  const sequence = activitySequence(route, activity.id)
  return <div className="detail-page content-width" style={topicStyle(activity.unit.id)}><nav className="breadcrumbs" aria-label="Ubicación"><Link to="/">Inicio</Link><span>/</span><Link to={`/ruta/${route}`}>{routeCopy[route].label}</Link><span>/</span><Link to={`/ruta/${route}/unidad/${activity.unit.id}`}>{activity.unit.translation}</Link><span>/</span><span aria-current="page">{activity.name}</span></nav>
    <Link className="back-link" to={`/ruta/${route}/unidad/${activity.unit.id}`}><Icon name="back"/> Volver a {activity.unit.translation.toLowerCase()}</Link>
    <header className="activity-detail-header"><div><span className="eyebrow">Actividad {activity.position} de {activity.totalInUnit} · {activityModeLabels[activity.mode]}</span><h1>{activity.name}</h1><p>{lesson.objective}</p><p className="detail-source">{activitySource(activity)}</p>{lesson.resourceStatus === 'client-pending' && <p className="resource-pending"><strong>Recurso pendiente:</strong> el cliente debe entregar o aprobar el audio. La secuencia visual ya puede utilizarse sin sonido.</p>}</div><div className="detail-art detail-art-ai"><UnitIllustration unitId={activity.unit.id}/><span>{activity.unit.translation}</span></div></header>
    <div className="method-grid"><section><h2>Preparación</h2><p>{lesson.materials}</p><h2>Cómo modelarla</h2><p>{lesson.model}</p></section><section><h2>Acción acompañada</h2><ol>{lesson.actionSteps.map(step => <li key={step}>{step}</li>)}</ol><div className="access-note"><strong>Alternativa de acceso</strong><p>{lesson.alternative}</p></div></section></div>
    <div className="detail-actions"><Link className="primary-button" to={`/ruta/${route}/actividad/${activity.unit.id}/${slugify(activity.name)}/practica`}>Abrir práctica guiada <Icon name="arrow"/></Link><Link className="secondary-button" to={`/ruta/${route}/unidad/${activity.unit.id}`}>Volver al recorrido de la unidad</Link></div>
    <nav className="activity-sequence-nav" aria-label="Navegación entre fichas"><div>{sequence.previous && <Link to={`/ruta/${route}/actividad/${sequence.previous.unit.id}/${slugify(sequence.previous.name)}`}><Icon name="back"/><span><small>Actividad anterior</small><strong>{sequence.previous.name}</strong></span></Link>}</div><p>{sequence.position} de {sequence.total} en {routeCopy[route].label}</p><div>{sequence.next && <Link to={`/ruta/${route}/actividad/${sequence.next.unit.id}/${slugify(sequence.next.name)}`}><span><small>{sequence.changesUnit ? `Siguiente unidad · ${sequence.next.unit.translation}` : 'Siguiente actividad'}</small><strong>{sequence.next.name}</strong></span><Icon name="arrow"/></Link>}</div></nav>
  </div>
}

function GuidedActivity() {
  const { routeId, unitId = '', activitySlug = '' } = useParams(); const route = isRouteId(routeId) ? routeId : null; const activity = route ? findActivity(route, unitId, activitySlug) : undefined
  const [step, setStep] = useState(0); const [selectedChoice, setSelectedChoice] = useState<string | null>(null); const [feedback, setFeedback] = useState<Feedback>('idle'); const [actionDone, setActionDone] = useState(false); const titleRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => { titleRef.current?.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: 'instant' }) }, [step])
  useEffect(() => { setStep(0); setSelectedChoice(null); setFeedback('idle'); setActionDone(false) }, [activity?.id])
  if (!route || !activity?.lesson) return <Navigate to={route ? `/ruta/${route}` : '/'} replace/>
  const sequence = activitySequence(route, activity.id); const nextActivity = sequence.next
  const lesson = activity.lesson; const pattern = lesson.interaction ?? 'choice'; const labels = ['Observa', 'Interactúa', 'Acompaña', 'Cierra']
  const copy = [{ label: 'Modelo y preparación', title: lesson.objective, body: lesson.model, cta: lesson.kind === 'memory' ? 'Ocultar una tarjeta' : interactionActions[pattern] }, { label: 'Práctica en pantalla', title: lesson.question, body: lesson.practice, cta: 'Continuar' }, { label: 'Acción acompañada', title: lesson.action, body: facilitationCopy[pattern], cta: 'Cerrar actividad' }, { label: 'Cierre pedagógico', title: 'Actividad finalizada.', body: lesson.close, cta: 'Volver a la unidad' }][step]
  const next = () => { if ((step === 1 && feedback !== 'correct') || (step === 2 && !actionDone)) return; setStep(value => value + 1); setSelectedChoice(null); setFeedback('idle') }
  const restart = () => { setStep(0); setSelectedChoice(null); setFeedback('idle'); setActionDone(false) }
  return <div className="guided-page content-width" style={topicStyle(activity.unit.id)}><nav className="breadcrumbs" aria-label="Ubicación"><Link to={`/ruta/${route}`}>{routeCopy[route].label}</Link><span>/</span><Link to={`/ruta/${route}/unidad/${activity.unit.id}`}>{activity.unit.translation}</Link><span>/</span><span aria-current="page">Actividad {activity.position} de {activity.totalInUnit}</span></nav><div className="guided-toolbar"><Link className="back-link" to={`/ruta/${route}/actividad/${activity.unit.id}/${activitySlug}`}><Icon name="back"/> Volver a la ficha</Link><span>{activity.unit.translation} · {lesson.name}</span></div>
    <ol className="lesson-steps" aria-label="Pasos de la actividad">{labels.map((label, index) => <li key={label} className={index <= step ? 'reached' : ''} aria-current={index === step ? 'step' : undefined}><span>{index < step ? <Icon name="check"/> : index + 1}</span>{label}</li>)}</ol>
    <section className="lesson-stage" key={step}><div className="lesson-copy"><span className="eyebrow">Paso {step + 1} de 4 · {copy.label}</span><h1 ref={titleRef} tabIndex={-1}>{copy.title}</h1><p>{copy.body}</p>
      {step === 0 && <><p className="lesson-support"><strong>Antes de empezar:</strong> {lesson.materials}</p>{lesson.resourceStatus === 'client-pending' && <p className="lesson-support resource-pending"><strong>Audio pendiente del cliente:</strong> facilita esta versión mediante lectura, ritmo visual y movimientos.</p>}</>}{step === 2 && <><div className="word-model"><span>Consigna</span><strong lang="en">{lesson.command}</strong></div><ol className="action-instructions">{lesson.actionSteps.map(action => <li key={action}>{action}</li>)}</ol><p className="lesson-support"><strong>Otra forma de participar:</strong> {lesson.alternative}</p><label className="action-check"><input type="checkbox" checked={actionDone} onChange={event => setActionDone(event.target.checked)}/><span>La persona participó o probó una alternativa</span></label></>}{step === 3 && <div className="completion-note"><Icon name="check"/><span>El cierre reconoce la participación; no guarda resultados ni realiza una evaluación automática.</span></div>}
    </div><div className="lesson-visual">{step === 0 && <LessonModel lesson={lesson} unitId={activity.unit.id}/>} {step === 1 && <>{lesson.kind === 'memory' && <div className="memory-scene">{lesson.modelItems.filter(word => word !== lesson.answer).map(word => <div className="model-card" key={word}><VocabularyArt word={word} unitId={activity.unit.id}/><strong lang="en">{word}</strong></div>)}</div>}<span className="practice-pattern">{interactionLabels[pattern]}</span><div className={`choice-grid choice-grid-${pattern}`} role="group" aria-label="Elige una respuesta">{lesson.choices.map(choice => { const numericChoice = /^\d+$/.test(choice); return <button className={`choice ${selectedChoice === choice ? feedback : ''}`} aria-label={numericChoice ? `Opción ${choice}` : undefined} aria-pressed={selectedChoice === choice} key={choice} onClick={() => { setSelectedChoice(choice); setFeedback(choice === lesson.answer ? 'correct' : 'try-again') }}>{numericChoice ? <span className="choice-number" aria-hidden="true">{choice}</span> : <><VocabularyArt word={choice} unitId={activity.unit.id}/><span lang="en">{choice}{selectedChoice === choice && feedback === 'correct' && <Icon name="check"/>}</span></>}</button> })}</div></>}{step > 1 && <div className="completion-art"><VocabularyArt word={lesson.target} unitId={activity.unit.id}/><strong lang="en">{lesson.target}</strong><span>{step === 2 ? interactionLabels[pattern] : 'Gracias por acompañar'}</span></div>}</div>
    <div className="lesson-controls"><div className="lesson-feedback" aria-live="polite">{step === 1 && feedback === 'try-again' && <p className="feedback retry">Prueba otra vez. {lesson.hint}</p>}{step === 1 && feedback === 'correct' && <p className="feedback success"><Icon name="check"/> {lesson.success}</p>}</div>{lesson.kind === 'memory' && step > 0 && step < 3 && <button className="text-button" onClick={restart}><Icon name="repeat"/> Volver a observar</button>}{step < 3 ? <button className="primary-button" disabled={(step === 1 && feedback !== 'correct') || (step === 2 && !actionDone)} onClick={next}>{copy.cta}<Icon name="arrow"/></button> : <div className="completion-actions">{nextActivity ? <Link className="primary-button next-activity-button" to={`/ruta/${route}/actividad/${nextActivity.unit.id}/${slugify(nextActivity.name)}`}><span><small>{sequence.changesUnit ? `Siguiente unidad · ${nextActivity.unit.translation}` : 'Continuar el recorrido'}</small>{nextActivity.name}</span><Icon name="arrow"/></Link> : <div className="route-complete-message"><strong>Recorrido completo</strong><span>Consultaste la última actividad de {routeCopy[route].label}. La plataforma no guarda resultados personales.</span></div>}<Link className="secondary-button" to={nextActivity ? `/ruta/${route}/unidad/${activity.unit.id}` : `/ruta/${route}`}>{nextActivity ? 'Volver a la unidad' : 'Volver al mapa'}</Link>{!nextActivity && <Link className="text-button" to={`/ruta/${route}/actividades`}>Abrir índice completo <Icon name="arrow"/></Link>}</div>}</div></section>
    <details className="source-details"><summary>Fuente y alcance</summary><p>{sourceLabel(activity.unit.id, lesson.slide)}. Adaptación pedagógica virtual con interacción en pantalla, guía de facilitación y alternativa de acceso.</p></details>
  </div>
}
