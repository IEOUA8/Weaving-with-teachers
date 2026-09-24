export type RouteId = 'investigadores' | 'constructores'

export type Unit = {
  id: string
  number: string
  name: string
  translation: string
  color: string
  softColor: string
  icon: string
  vocabulary: string[]
  investigators: string[]
  builders: string[]
}

export const units: Unit[] = [
  {
    id: 'colores', number: '01', name: 'Colors', translation: 'Colores', color: '#ed1651', softColor: '#f9e4eb', icon: '◉',
    vocabulary: ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'black', 'white', 'brown'],
    investigators: ['Color Hunt Natural', 'Touch & Feel Colors', 'Color Song + Movement', 'Magic Color Painting', 'The Color Tree'],
    builders: ['Color Commands Game', 'Build With Colors', 'Color + Texture Lab', 'The Little Colors', 'Color + Object Creation'],
  },
  {
    id: 'dias', number: '02', name: 'Days', translation: 'Días de la semana', color: '#1a8c7d', softColor: '#d8eee9', icon: '✳',
    vocabulary: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    investigators: ['The Daily Color Hunt', 'Touch & Feel the Day', 'The Movement Song', 'Magic Day Painting', 'The Visitor'],
    builders: ['Daily Commands Game', 'Build the Week Tower', 'The Feel of the Day', "The Traveler's Week", 'Object Creation Lab'],
  },
  {
    id: 'emociones', number: '03', name: 'Feelings', translation: 'Emociones', color: '#f7941e', softColor: '#fde8cd', icon: '✦',
    vocabulary: ['happy', 'sad', 'angry', 'scared', 'excited', 'tired', 'sleepy', 'calm', 'surprised', 'proud'],
    investigators: ['Happy Train', 'Feel and Say', 'Mirror Feelings', 'Feelings Circle Time', 'Draw Your Feelings'],
    builders: ['Feeling Charades', 'Feeling Dice', 'Feelings Dance', 'My Feeling Today'],
  },
  {
    id: 'alimentos', number: '04', name: 'Food', translation: 'Alimentos', color: '#ffcb05', softColor: '#fff3be', icon: '●',
    vocabulary: ['apple', 'banana', 'orange', 'milk', 'water', 'bread', 'rice', 'egg', 'chicken', 'soup'],
    investigators: ["What's Missing?", 'Feed the Monster', 'Food Hunt', 'Picnic Time', 'Come and Eat with Me'],
    builders: ['Food Market', 'Food Memory Walk', 'Match the Picnic', 'Yummy Food Song'],
  },
  {
    id: 'naturaleza', number: '05', name: 'Nature', translation: 'Naturaleza', color: '#7a9948', softColor: '#e8edd7', icon: '⌁',
    vocabulary: ['flower', 'sun', 'cloud', 'rain', 'tree', 'animal', 'leaf', 'bird'],
    investigators: ['Nature Hunt', 'Nature Moves', 'My Nature Picture', 'Hello, Nature!', "Little Seed's Day"],
    builders: ['Nature Commands', 'Build a Nature Scene', 'What Is Missing?', 'Nature, Move With Me!'],
  },
]

export const routeCopy: Record<RouteId, { label: string; eyebrow: string; description: string; icon: string }> = {
  investigadores: { label: 'Investigadores', eyebrow: 'Explorar y reconocer', description: 'Observación, juego, movimiento y descubrimiento guiado.', icon: '⌕' },
  constructores: { label: 'Constructores', eyebrow: 'Recordar y crear', description: 'Secuencias, consignas y pequeñas producciones acompañadas.', icon: '▦' },
}

export const unitById = (id: string) => units.find((unit) => unit.id === id) ?? units[0]

export const vocabularyTranslations: Record<string, string> = {
  red: 'rojo', blue: 'azul', yellow: 'amarillo', green: 'verde', orange: 'naranja', purple: 'morado', pink: 'rosado', black: 'negro', white: 'blanco', brown: 'café',
  Monday: 'lunes', Tuesday: 'martes', Wednesday: 'miércoles', Thursday: 'jueves', Friday: 'viernes', Saturday: 'sábado',
  happy: 'feliz', sad: 'triste', angry: 'enojado', scared: 'asustado', excited: 'emocionado', tired: 'cansado', sleepy: 'con sueño', calm: 'en calma', surprised: 'sorprendido', proud: 'orgulloso',
  apple: 'manzana', banana: 'banano', milk: 'leche', water: 'agua', bread: 'pan', rice: 'arroz', egg: 'huevo', chicken: 'pollo', soup: 'sopa',
  flower: 'flor', sun: 'sol', cloud: 'nube', rain: 'lluvia', tree: 'árbol', animal: 'animal', leaf: 'hoja', bird: 'ave',
}
