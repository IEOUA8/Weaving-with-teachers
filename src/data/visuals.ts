const generatedIllustrations: Record<string, Record<string, string>> = {
  alimentos: {
    apple: '/illustrations/vocabulary/food/apple.png',
    banana: '/illustrations/vocabulary/food/banana.png',
    orange: '/illustrations/vocabulary/food/orange.png',
    milk: '/illustrations/vocabulary/food/milk.png',
    water: '/illustrations/vocabulary/food/water.png',
    bread: '/illustrations/vocabulary/food/bread.png',
    rice: '/illustrations/vocabulary/food/rice.png',
    egg: '/illustrations/vocabulary/food/egg.png',
    chicken: '/illustrations/vocabulary/food/chicken.png',
    soup: '/illustrations/vocabulary/food/soup.png',
  },
  naturaleza: {
    flower: '/illustrations/vocabulary/nature/flower.png',
    sun: '/illustrations/vocabulary/nature/sun.png',
    cloud: '/illustrations/vocabulary/nature/cloud.png',
    rain: '/illustrations/vocabulary/nature/rain.png',
    tree: '/illustrations/vocabulary/nature/tree.png',
    animal: '/illustrations/vocabulary/nature/animal.png',
    leaf: '/illustrations/vocabulary/nature/leaf.png',
    bird: '/illustrations/vocabulary/nature/bird.png',
  },
  emociones: {
    happy: '/illustrations/vocabulary/feelings/happy.png',
    sad: '/illustrations/vocabulary/feelings/sad.png',
    angry: '/illustrations/vocabulary/feelings/angry.png',
    scared: '/illustrations/vocabulary/feelings/scared.png',
    excited: '/illustrations/vocabulary/feelings/excited.png',
    tired: '/illustrations/vocabulary/feelings/tired.png',
    sleepy: '/illustrations/vocabulary/feelings/sleepy.png',
    calm: '/illustrations/vocabulary/feelings/calm.png',
    surprised: '/illustrations/vocabulary/feelings/surprised.png',
    proud: '/illustrations/vocabulary/feelings/proud.png',
  },
}

export const dayOrder: Record<string, number> = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}

export const generatedVocabularyIllustration = (unitId: string | undefined, word: string) => unitId ? generatedIllustrations[unitId]?.[word] : undefined

export const dayNumber = (unitId: string | undefined, word: string) => {
  if (unitId !== 'dias') return undefined
  const dayName = Object.keys(dayOrder).find(day => word.startsWith(day))
  return dayName ? dayOrder[dayName] : undefined
}
