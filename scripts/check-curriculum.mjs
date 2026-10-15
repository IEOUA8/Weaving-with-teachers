import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { units, vocabularyTranslations } from '../src/data/curriculum.ts'
import { investigatorLessons, builderLessons, getLesson, guideSources } from '../src/data/lessons.ts'
import { colorHex } from '../src/data/lessons.ts'
import { activitiesForRoute, activityModeLabels, activitySequence, activitySourceLabels } from '../src/data/activities.ts'
import { dayNumber, generatedVocabularyIllustration } from '../src/data/visuals.ts'

const sourceActivityOrder = {
  investigadores: {
    colores: [
      [8, 'Color Hunt Natural'], [9, 'Touch & Feel Colors'], [10, 'Color Song + Movement'], [11, 'Magic Color Painting'], [12, 'The Color Tree'],
    ],
    dias: [
      [7, 'The Daily Color Hunt'], [8, 'Touch & Feel the Day'], [9, 'The Movement Song'], [10, 'Magic Day Painting'], [11, 'The Visitor'],
    ],
    emociones: [
      [7, 'Happy Train'], [8, 'Feel and Say'], [9, 'Mirror Feelings'], [10, 'Feelings Circle Time'], [11, 'Draw Your Feelings'],
    ],
    alimentos: [
      [7, "What's Missing?"], [8, 'Feed the Monster'], [9, 'Food Hunt'], [10, 'Picnic Time'], [11, 'Come and Eat with Me'],
    ],
    naturaleza: [
      [7, 'Nature Hunt'], [8, 'Nature Moves'], [9, 'My Nature Picture'], [10, 'Hello, Nature!'], [11, "Little Seed's Day"],
    ],
  },
  constructores: {
    colores: [
      [14, 'Color Commands Game'], [15, 'Build With Colors'], [16, 'Color + Texture Lab'], [17, 'The Little Colors'], [18, 'Color + Object Creation'],
    ],
    dias: [
      [13, 'Daily Commands Game'], [14, 'Build the Week Tower'], [15, 'The Feel of the Day'], [16, "The Traveler's Week"], [17, 'Object Creation Lab'],
    ],
    emociones: [
      [13, 'Feeling Charades'], [14, 'Feeling Dice'], [15, 'Feelings Dance'], [16, 'My Feeling Today'],
    ],
    alimentos: [
      [13, 'Food Market'], [14, 'Food Memory Walk'], [15, 'Match the Picnic'], [17, 'Yummy Food Song'],
    ],
    naturaleza: [
      [13, 'Nature Commands'], [14, 'Build a Nature Scene'], [15, 'What Is Missing?'], [16, 'Nature, Move With Me!'],
    ],
  },
}

for (const unit of units) {
  test(`${unit.name}: fuente existente y catálogo trazable`, () => {
    const source = guideSources[unit.id]
    assert.ok(existsSync(new URL(`../${source.file}`, import.meta.url)))
    assert.equal(source.investigators.length, unit.investigators.length)
    assert.equal(source.builders.length, unit.builders.length)
    assert.ok(source.investigators.every(Number.isInteger))
    assert.ok(source.builders.every(Number.isInteger))
  })
  for (const route of ['investigadores', 'constructores']) {
    test(`${unit.name} / ${route}: consigna, respuesta y fuente coherentes`, () => {
      const lesson = getLesson(unit.id, route)
      const names = route === 'constructores' ? unit.builders : unit.investigators
      const slides = route === 'constructores' ? guideSources[unit.id].builders : guideSources[unit.id].investigators
      const index = names.indexOf(lesson.name)
      assert.ok(index >= 0, 'La actividad debe figurar en el catálogo de su ruta')
      assert.equal(lesson.slide, slides[index])
      assert.ok(lesson.choices.includes(lesson.answer))
      assert.equal(new Set(lesson.choices).size, lesson.choices.length)
      assert.ok(unit.vocabulary.includes(lesson.target))
      for (const field of ['objective', 'materials', 'model', 'question', 'practice', 'hint', 'success', 'command', 'action', 'alternative', 'close']) {
        assert.ok(lesson[field]?.trim(), `Falta ${field}`)
      }
      assert.ok(lesson.actionSteps.length >= 2)
    })

    test(`${unit.name} / ${route}: todas las actividades tienen adaptación digital`, () => {
      const names = route === 'constructores' ? unit.builders : unit.investigators
      const slides = route === 'constructores' ? guideSources[unit.id].builders : guideSources[unit.id].investigators
      names.forEach((name, index) => {
        const lesson = getLesson(unit.id, route, name)
        assert.equal(lesson.name, name)
        assert.equal(lesson.slide, slides[index])
        assert.ok(lesson.choices.includes(lesson.answer))
        assert.ok(unit.vocabulary.includes(lesson.target), `${name} usa un objetivo fuera del vocabulario de ${unit.name}`)
        assert.ok(lesson.actionSteps.length >= 2)
      })
    })
  }
  test(`${unit.name}: rutas con propuestas diferentes`, () => {
    assert.notEqual(investigatorLessons[unit.id].name, builderLessons[unit.id].name)
    assert.notDeepEqual(investigatorLessons[unit.id].actionSteps, builderLessons[unit.id].actionSteps)
  })
}

test('What’s Missing conserva las cinco tarjetas fuente y retira solo una', () => {
  const lesson = investigatorLessons.alimentos
  assert.equal(lesson.kind, 'memory')
  assert.deepEqual(lesson.modelItems, ['apple', 'banana', 'milk', 'bread', 'egg'])
  assert.equal(lesson.modelItems.filter(word => word !== lesson.answer).length, 4)
  assert.equal(lesson.answer, 'apple')
  assert.ok(!lesson.question.includes(lesson.answer), 'La pregunta no revela la respuesta')
  assert.ok(!lesson.practice.includes(lesson.answer), 'La instrucción no revela la respuesta')
})

test('Días conserva el vocabulario fuente y relaciones de las actividades', () => {
  assert.deepEqual(units.find(unit => unit.id === 'dias').vocabulary, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
  assert.equal(investigatorLessons.dias.target, 'Monday')
  assert.equal(investigatorLessons.dias.answer, 'blue')
  assert.equal(builderLessons.dias.target, 'Friday')
  assert.equal(builderLessons.dias.answer, '5')
})

test('Naturaleza no elimina animal ni confunde su uso con bird', () => {
  const vocabulary = units.find(unit => unit.id === 'naturaleza').vocabulary
  assert.ok(vocabulary.includes('animal'))
  assert.ok(vocabulary.includes('bird'))
})

test('Las 47 propuestas de las guías tienen adaptación digital', () => {
  assert.equal(units.reduce((count, unit) => count + unit.investigators.length + unit.builders.length, 0), 47)
})

test('El catálogo expone las 47 actividades como guías interactivas', () => {
  const investigators = activitiesForRoute('investigadores')
  const builders = activitiesForRoute('constructores')
  assert.equal(investigators.length, 25)
  assert.equal(builders.length, 22)
  assert.equal(investigators.filter(activity => activity.status === 'interactive').length, 25)
  assert.equal(builders.filter(activity => activity.status === 'interactive').length, 22)
  assert.ok([...investigators, ...builders].every(activity => activity.lesson))
})

test('El mapa conserva el orden de cada guía y clasifica la forma de participación', () => {
  for (const route of ['investigadores', 'constructores']) {
    const activities = activitiesForRoute(route)
    for (const unit of units) {
      const unitActivities = activities.filter(activity => activity.unit.id === unit.id)
      const sourceNames = route === 'constructores' ? unit.builders : unit.investigators
      assert.deepEqual(unitActivities.map(activity => activity.name), sourceNames)
      unitActivities.forEach((activity, index) => {
        assert.equal(activity.position, index + 1)
        assert.equal(activity.totalInUnit, sourceNames.length)
        assert.ok(activityModeLabels[activity.mode], `Falta forma de participación para ${activity.name}`)
      })
    }
  }
})

test('El orden visible coincide con una matriz independiente extraída de las diapositivas', () => {
  for (const route of ['investigadores', 'constructores']) {
    for (const unit of units) {
      const actual = activitiesForRoute(route)
        .filter(activity => activity.unit.id === unit.id)
        .map(activity => [activity.slide, activity.name])
      assert.deepEqual(actual, sourceActivityOrder[route][unit.id])
    }
  }
})

test('Los títulos conservan las categorías explícitas de cuentos, canciones y laboratorios', () => {
  assert.equal(activitySourceLabels['The Color Tree'], 'Mini cuento')
  assert.equal(activitySourceLabels['The Feel of the Day'], 'Texture Lab')
  assert.equal(activitySourceLabels['Come and Eat with Me'], 'Song')
  assert.equal(activitySourceLabels['Hello, Nature!'], 'Canción para Investigadores')
  assert.equal(activitySourceLabels['Nature, Move With Me!'], 'Canción para Constructores')
})

test('La navegación enlaza todas las actividades de cada ruta sin cortes entre unidades', () => {
  for (const route of ['investigadores', 'constructores']) {
    const activities = activitiesForRoute(route)
    activities.forEach((activity, index) => {
      const sequence = activitySequence(route, activity.id)
      assert.equal(sequence.position, index + 1)
      assert.equal(sequence.total, activities.length)
      assert.equal(sequence.previous?.id, activities[index - 1]?.id)
      assert.equal(sequence.next?.id, activities[index + 1]?.id)
      assert.equal(sequence.changesUnit, !!activities[index + 1] && activities[index + 1].unit.id !== activity.unit.id)
    })
    assert.equal(activitySequence(route, activities.at(-1).id).next, undefined)
  }
})

test('Colores utiliza dinámicas digitales diferenciadas en ambas rutas', () => {
  const investigatorPatterns = activitiesForRoute('investigadores').filter(activity => activity.unit.id === 'colores').map(activity => activity.lesson?.interaction)
  const builderPatterns = activitiesForRoute('constructores').filter(activity => activity.unit.id === 'colores').map(activity => activity.lesson?.interaction)
  assert.deepEqual(investigatorPatterns, ['hunt', 'sensory', 'rhythm', 'creation', 'story'])
  assert.deepEqual(builderPatterns, ['commands', 'construction', 'sensory', 'story', 'creation'])
  const colorLessons = [...activitiesForRoute('investigadores'), ...activitiesForRoute('constructores')].filter(activity => activity.unit.id === 'colores').map(activity => activity.lesson)
  assert.ok(colorLessons.every(lesson => lesson?.interactionCues?.length >= 3), 'Cada actividad de Colores debe exponer su secuencia propia')
  assert.deepEqual(getLesson('colores', 'investigadores', 'Touch & Feel Colors').interactionCues, ['La docente presenta un material: “Red paint”', 'Los niños tocan, aplastan y sienten', 'Se repite el color mientras manipulan'])
  assert.deepEqual(getLesson('colores', 'constructores', 'Color + Texture Lab').interactionCues, ['La docente muestra una hoja: “This is green”', 'Los niños tocan y comparan los materiales', 'Se refuerza color + sensación'])
  assert.equal(getLesson('colores', 'investigadores', 'Color Song + Movement').resourceStatus, 'client-pending')
})

test('Días conserva sus secuencias y asociaciones específicas por actividad', () => {
  const investigatorPatterns = activitiesForRoute('investigadores').filter(activity => activity.unit.id === 'dias').map(activity => activity.lesson?.interaction)
  const builderPatterns = activitiesForRoute('constructores').filter(activity => activity.unit.id === 'dias').map(activity => activity.lesson?.interaction)
  assert.deepEqual(investigatorPatterns, ['hunt', 'sensory', 'rhythm', 'creation', 'story'])
  assert.deepEqual(builderPatterns, ['commands', 'construction', 'sensory', 'story', 'creation'])
  const dayLessons = [...activitiesForRoute('investigadores'), ...activitiesForRoute('constructores')].filter(activity => activity.unit.id === 'dias').map(activity => activity.lesson)
  assert.ok(dayLessons.every(lesson => lesson?.interactionCues?.length === 5), 'Cada actividad de Días debe conservar sus cinco relaciones')
  assert.ok(getLesson('dias', 'investigadores', 'The Daily Color Hunt').interactionCues.includes('Friday + orange'))
  assert.ok(getLesson('dias', 'investigadores', 'The Visitor').interactionCues.includes('Friday · purple and happy Teddy'))
  assert.ok(getLesson('dias', 'constructores', 'Object Creation Lab').interactionCues.includes('Friday · purple star'))
  assert.equal(getLesson('dias', 'investigadores', 'The Movement Song').resourceStatus, 'client-pending')
})

test('Emociones distingue vocabulario, expresión y elección personal', () => {
  const investigatorPatterns = activitiesForRoute('investigadores').filter(activity => activity.unit.id === 'emociones').map(activity => activity.lesson?.interaction)
  const builderPatterns = activitiesForRoute('constructores').filter(activity => activity.unit.id === 'emociones').map(activity => activity.lesson?.interaction)
  assert.deepEqual(investigatorPatterns, ['rhythm', 'sensory', 'expression', 'rhythm', 'creation'])
  assert.deepEqual(builderPatterns, ['expression', 'chance', 'rhythm', 'reflection'])
  const feelingLessons = [...activitiesForRoute('investigadores'), ...activitiesForRoute('constructores')].filter(activity => activity.unit.id === 'emociones').map(activity => activity.lesson)
  assert.ok(feelingLessons.every(lesson => lesson?.interactionCues?.length >= 4), 'Cada actividad de Emociones debe exponer la secuencia indicada en su diapositiva')
  assert.equal(getLesson('emociones', 'investigadores', 'Happy Train').resourceStatus, 'client-pending')
  assert.equal(getLesson('emociones', 'investigadores', 'Feelings Circle Time').resourceStatus, 'client-pending')
  assert.equal(getLesson('emociones', 'constructores', 'Feelings Dance').resourceStatus, 'client-pending')
  assert.match(getLesson('emociones', 'investigadores', 'Feel and Say').model, /no fija una emoción correcta/)
  assert.equal(getLesson('emociones', 'constructores', 'My Feeling Today').modelItems.length, 10)
  assert.ok(getLesson('emociones', 'investigadores', 'Feel and Say').interactionCues.includes('Repite las palabras mientras toca el objeto'))
  assert.ok(getLesson('emociones', 'investigadores', 'Draw Your Feelings').interactionCues.includes('Muestra el dibujo al grupo'))
  assert.ok(getLesson('emociones', 'constructores', 'My Feeling Today').interactionCues.includes('Quienes deseen compartir muestran su dibujo'))
  assert.match(getLesson('emociones', 'constructores', 'My Feeling Today').close, /no se almacena/)
})

test('Alimentos conserva memoria, juego simbólico y la variante duplicada', () => {
  const investigatorPatterns = activitiesForRoute('investigadores').filter(activity => activity.unit.id === 'alimentos').map(activity => activity.lesson?.interaction)
  const builderPatterns = activitiesForRoute('constructores').filter(activity => activity.unit.id === 'alimentos').map(activity => activity.lesson?.interaction)
  assert.deepEqual(investigatorPatterns, ['memory', 'symbolic', 'hunt', 'symbolic', 'rhythm'])
  assert.deepEqual(builderPatterns, ['symbolic', 'memory', 'matching', 'rhythm'])
  const foodLessons = [...activitiesForRoute('investigadores'), ...activitiesForRoute('constructores')].filter(activity => activity.unit.id === 'alimentos').map(activity => activity.lesson)
  assert.ok(foodLessons.every(lesson => lesson?.interactionCues?.length >= 4), 'Cada actividad de Alimentos debe exponer su secuencia propia')
  const missing = getLesson('alimentos', 'investigadores', "What's Missing?")
  assert.equal(missing.kind, 'memory')
  assert.equal(missing.modelItems.length, 5)
  assert.equal(getLesson('alimentos', 'investigadores', 'Come and Eat with Me').resourceStatus, 'client-pending')
  const match = getLesson('alimentos', 'constructores', 'Match the Picnic')
  assert.match(match.materials, /diapositiva 16/)
  assert.match(match.close, /no crea una actividad adicional/)
  assert.ok(match.interactionCues.includes('También se puede realizar con elementos reales'))
  const song = getLesson('alimentos', 'constructores', 'Yummy Food Song')
  assert.equal(song.modelItems.length, 10)
  assert.equal(song.resourceStatus, 'client-pending')
})

test('Naturaleza conserva animal y bird según la actividad fuente', () => {
  const investigatorPatterns = activitiesForRoute('investigadores').filter(activity => activity.unit.id === 'naturaleza').map(activity => activity.lesson?.interaction)
  const builderPatterns = activitiesForRoute('constructores').filter(activity => activity.unit.id === 'naturaleza').map(activity => activity.lesson?.interaction)
  assert.deepEqual(investigatorPatterns, ['hunt', 'commands', 'creation', 'rhythm', 'story'])
  assert.deepEqual(builderPatterns, ['commands', 'construction', 'memory', 'rhythm'])
  const natureLessons = [...activitiesForRoute('investigadores'), ...activitiesForRoute('constructores')].filter(activity => activity.unit.id === 'naturaleza').map(activity => activity.lesson)
  assert.ok(natureLessons.every(lesson => lesson?.interactionCues?.length >= 4), 'Cada actividad de Naturaleza debe exponer su secuencia propia')
  const hunt = getLesson('naturaleza', 'investigadores', 'Nature Hunt')
  assert.ok(hunt.modelItems.includes('animal'))
  assert.ok(!hunt.modelItems.includes('bird'))
  const commands = getLesson('naturaleza', 'constructores', 'Nature Commands')
  assert.ok(commands.modelItems.includes('bird'))
  assert.ok(!commands.modelItems.includes('animal'))
  const missing = getLesson('naturaleza', 'constructores', 'What Is Missing?')
  assert.equal(missing.kind, 'memory')
  assert.deepEqual(missing.modelItems, ['sun', 'tree', 'bird'])
  assert.equal(getLesson('naturaleza', 'investigadores', 'Hello, Nature!').resourceStatus, 'client-pending')
  assert.equal(getLesson('naturaleza', 'constructores', 'Nature, Move With Me!').resourceStatus, 'client-pending')
})

test('Las 47 actividades tienen una dinámica digital específica', () => {
  const activities = [...activitiesForRoute('investigadores'), ...activitiesForRoute('constructores')]
  assert.equal(activities.length, 47)
  assert.ok(activities.every(activity => activity.lesson?.interaction && activity.lesson.interaction !== 'choice'))
  assert.ok(activities.every(activity => activity.lesson?.interactionCues?.length >= 3))
})

test('Investigadores y Constructores comparten exactamente el mismo vocabulario', () => {
  const vocabulary = units.flatMap(unit => unit.vocabulary)
  assert.equal(vocabulary.length, 44)
  assert.ok(vocabulary.every(word => vocabularyTranslations[word]), 'Cada palabra debe conservar una traducción visible')
})

test('Las 44 flashcards conservan un apoyo visual verificable', () => {
  let visualCount = 0
  for (const unit of units) {
    for (const word of unit.vocabulary) {
      if (unit.id === 'colores') {
        assert.ok(colorHex[word], `Falta muestra cromática para ${word}`)
      } else if (unit.id === 'dias') {
        assert.ok(dayNumber(unit.id, word), `Falta calendario ordinal para ${word}`)
      } else {
        const illustration = generatedVocabularyIllustration(unit.id, word)
        assert.ok(illustration, `Falta ilustración individual para ${unit.id}/${word}`)
        assert.ok(existsSync(new URL(`../public${illustration}`, import.meta.url)), `No existe el archivo ${illustration}`)
      }
      visualCount += 1
    }
  }
  assert.equal(visualCount, 44)
})
