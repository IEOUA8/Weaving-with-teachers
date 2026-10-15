import { routeCopy, type RouteId, type Unit, units } from './curriculum.ts'
import { getLesson, guideSources, sourceLabel, type GuidedLesson } from './lessons.ts'

export type ActivityStatus = 'interactive' | 'methodology'

export type ActivityMode = 'exploracion' | 'sensorial' | 'movimiento' | 'memoria' | 'creacion' | 'historia' | 'expresion' | 'juego'

export const activityModeLabels: Record<ActivityMode, string> = {
  exploracion: 'Observación y búsqueda',
  sensorial: 'Exploración sensorial',
  movimiento: 'Movimiento y ritmo',
  memoria: 'Memoria y secuencia',
  creacion: 'Construcción y creación',
  historia: 'Historia y lenguaje',
  expresion: 'Expresión acompañada',
  juego: 'Juego simbólico',
}

const activityModes: Record<string, ActivityMode> = {
  'Color Hunt Natural': 'exploracion',
  'Touch & Feel Colors': 'sensorial',
  'Color Song + Movement': 'movimiento',
  'Magic Color Painting': 'creacion',
  'The Color Tree': 'historia',
  'Color Commands Game': 'movimiento',
  'Build With Colors': 'creacion',
  'Color + Texture Lab': 'sensorial',
  'The Little Colors': 'historia',
  'Color + Object Creation': 'creacion',
  'The Daily Color Hunt': 'exploracion',
  'Touch & Feel the Day': 'sensorial',
  'The Movement Song': 'movimiento',
  'Magic Day Painting': 'creacion',
  'The Visitor': 'historia',
  'Daily Commands Game': 'movimiento',
  'Build the Week Tower': 'memoria',
  'The Feel of the Day': 'sensorial',
  "The Traveler's Week": 'historia',
  'Object Creation Lab': 'creacion',
  'Happy Train': 'movimiento',
  'Feel and Say': 'sensorial',
  'Mirror Feelings': 'expresion',
  'Feelings Circle Time': 'movimiento',
  'Draw Your Feelings': 'creacion',
  'Feeling Charades': 'expresion',
  'Feeling Dice': 'expresion',
  'Feelings Dance': 'movimiento',
  'My Feeling Today': 'creacion',
  "What's Missing?": 'memoria',
  'Feed the Monster': 'juego',
  'Food Hunt': 'exploracion',
  'Picnic Time': 'juego',
  'Come and Eat with Me': 'movimiento',
  'Food Market': 'juego',
  'Food Memory Walk': 'memoria',
  'Match the Picnic': 'memoria',
  'Yummy Food Song': 'movimiento',
  'Nature Hunt': 'exploracion',
  'Nature Moves': 'movimiento',
  'My Nature Picture': 'creacion',
  'Hello, Nature!': 'movimiento',
  "Little Seed's Day": 'historia',
  'Nature Commands': 'movimiento',
  'Build a Nature Scene': 'creacion',
  'What Is Missing?': 'memoria',
  'Nature, Move With Me!': 'movimiento',
}

export const activitySourceLabels: Partial<Record<string, string>> = {
  'The Color Tree': 'Mini cuento',
  'The Little Colors': 'Mini cuento',
  'The Visitor': 'Mini cuento',
  'The Feel of the Day': 'Texture Lab',
  "The Traveler's Week": 'Mini cuento',
  'Come and Eat with Me': 'Song',
  'Yummy Food Song': 'Canción',
  'Hello, Nature!': 'Canción para Investigadores',
  "Little Seed's Day": 'Mini cuento',
  'Nature, Move With Me!': 'Canción para Constructores',
}

export type ActivitySummary = {
  id: string
  name: string
  route: RouteId
  unit: Unit
  slide: number
  status: ActivityStatus
  mode: ActivityMode
  sourceLabel?: string
  position: number
  totalInUnit: number
  lesson?: GuidedLesson
}

export const slugify = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

export function activitiesForRoute(route: RouteId): ActivitySummary[] {
  return units.flatMap(unit => {
    const names = route === 'constructores' ? unit.builders : unit.investigators
    const slides = route === 'constructores' ? guideSources[unit.id].builders : guideSources[unit.id].investigators
    return names.map((name, index) => ({
      id: `${unit.id}-${route}-${slugify(name)}`,
      name,
      route,
      unit,
      slide: slides[index],
      status: 'interactive',
      mode: activityModes[name],
      sourceLabel: activitySourceLabels[name],
      position: index + 1,
      totalInUnit: names.length,
      lesson: getLesson(unit.id, route, name),
    }))
  })
}

export function activitiesForUnit(route: RouteId, unitId: string) {
  return activitiesForRoute(route).filter(activity => activity.unit.id === unitId)
}

export function findActivity(route: RouteId, unitId: string, activitySlug: string) {
  return activitiesForRoute(route).find(activity => activity.unit.id === unitId && slugify(activity.name) === activitySlug)
}

export function activitySequence(route: RouteId, activityId: string) {
  const activities = activitiesForRoute(route)
  const index = activities.findIndex(activity => activity.id === activityId)
  const current = index >= 0 ? activities[index] : undefined
  const previous = index > 0 ? activities[index - 1] : undefined
  const next = index >= 0 ? activities[index + 1] : undefined

  return {
    current,
    previous,
    next,
    position: index >= 0 ? index + 1 : 0,
    total: activities.length,
    changesUnit: !!current && !!next && current.unit.id !== next.unit.id,
  }
}

export function activitySource(activity: ActivitySummary) {
  return `${sourceLabel(activity.unit.id, activity.slide)} · ${routeCopy[activity.route].label}`
}
