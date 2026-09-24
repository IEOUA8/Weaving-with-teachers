import type { RouteId } from './curriculum'

export type InteractionPattern = 'choice' | 'hunt' | 'sensory' | 'rhythm' | 'creation' | 'story' | 'commands' | 'construction' | 'expression' | 'chance' | 'reflection' | 'memory' | 'symbolic' | 'matching'

export type GuidedLesson = {
  name: string
  slide: number
  target: string
  objective: string
  materials: string
  model: string
  modelItems: string[]
  question: string
  practice: string
  choices: string[]
  answer: string
  hint: string
  success: string
  command: string
  action: string
  actionSteps: string[]
  alternative: string
  close: string
  kind?: 'memory'
  resourceStatus?: 'client-pending'
  interaction?: InteractionPattern
  interactionCues?: string[]
}

export const guideSources: Record<string, { number: number; file: string; investigators: number[]; builders: number[] }> = {
  colores: { number: 1, file: 'Guía metodologica 1 Formacion 25-04-26.pptx', investigators: [8, 9, 10, 11, 12], builders: [14, 15, 16, 17, 18] },
  dias: { number: 2, file: 'Guía metodologica 2 Formacion 15-05-26.pptx', investigators: [7, 8, 9, 10, 11], builders: [13, 14, 15, 16, 17] },
  emociones: { number: 3, file: 'Guía metodologica 3 Formacion 18-06-2026.pptx', investigators: [7, 8, 9, 10, 11], builders: [13, 14, 15, 16] },
  alimentos: { number: 4, file: 'Guía metodologica 4 Formacion 18-06-2026 - copia.pptx', investigators: [7, 8, 9, 10, 11], builders: [13, 14, 15, 17] },
  naturaleza: { number: 5, file: 'Guía metodologica 5 Formacion 21-08-26.pptx', investigators: [7, 8, 9, 10, 11], builders: [13, 14, 15, 16] },
}

export const colorHex: Record<string, string> = {
  red: '#d77972',
  blue: '#6599d8',
  yellow: '#edcb68',
  green: '#62aa73',
  orange: '#ec9b4d',
  purple: '#9a78bf',
  pink: '#ed6b9a',
  black: '#20262b',
  white: '#fffaf0',
  brown: '#8b5a3c',
}

export const investigatorLessons: Record<string, GuidedLesson> = {
  colores: {
    name: 'Color Hunt Natural', slide: 8, target: 'green',
    interaction: 'hunt', interactionCues: ['Mira el color', 'Busca el mismo color', 'Muestra y repite'],
    objective: 'Reconoce colores en el entorno.',
    materials: 'Una hoja, una flor, una piedra u otro objeto cercano. Un acompañante puede mostrar y nombrar el color.',
    model: 'Mira el color y escucha a tu acompañante decir “Green”. Puedes repetirlo y señalarlo.',
    modelItems: ['green'], question: '¿Dónde está green?', practice: 'Señala el verde antes de salir a buscarlo.',
    choices: ['blue', 'green', 'orange', 'purple'], answer: 'green', hint: 'Mira otra vez el modelo verde antes de elegir.', success: 'Green significa verde. Ahora busca ese color cerca de ti.',
    command: 'Let’s find something green!', action: 'Busca algo verde y muéstralo.',
    actionSteps: ['Busca en el aula, en casa o en un espacio seguro acompañado.', 'Muestra el objeto que encontraste. Tu acompañante nombra el color y puedes repetir “Green”.'],
    alternative: 'Si no puedes desplazarte, señala un objeto cercano o pide que te acerquen varios para elegir.',
    close: 'Practicaste green al reconocer el color y buscarlo en tu entorno. Puedes volver a jugar con otro color de la guía.',
  },
  dias: {
    name: 'The Daily Color Hunt', slide: 7, target: 'Monday',
    interaction: 'hunt', interactionCues: ['Monday + blue', 'Tuesday + red', 'Wednesday + yellow', 'Thursday + green', 'Friday + orange'],
    objective: 'Reconoce un día asociado a un color del entorno.',
    materials: 'Objetos azules y una caja o cartulina azul, con ayuda de un acompañante.',
    model: 'La guía propone un color para cada día: Monday–blue, Tuesday–red, Wednesday–yellow, Thursday–green y Friday–orange. Es una asociación para jugar, no una propiedad de los días.',
    modelItems: ['Monday', 'blue'], question: '¿Qué color acompaña a Monday?', practice: 'Recuerda la pareja que acabas de observar: Monday y blue.',
    choices: ['red', 'yellow', 'blue', 'green'], answer: 'blue', hint: 'En esta búsqueda, Monday se relaciona con azul.', success: 'Monday y blue forman la pareja del lunes en esta actividad.',
    command: 'Today is Monday and it’s blue! Let’s find blue things!', action: 'Jugamos al lunes: busca objetos azules.',
    actionSteps: ['Tu acompañante presenta la caja o cartulina azul y lee la frase de la guía como parte del juego.', 'Busca un objeto azul, muéstralo y repite “Monday” y “Blue” con apoyo.'],
    alternative: 'Puedes señalar un objeto azul desde tu lugar o pedir que te acerquen varias opciones.',
    close: 'Practicaste la relación Monday–blue de The Daily Color Hunt. La guía propone otras parejas para continuar en días posteriores.',
  },
  emociones: {
    name: 'Mirror Feelings', slide: 9, target: 'happy',
    interaction: 'expression', interactionCues: ['Happy', 'Sad', 'Surprised', 'Proud'],
    objective: 'Identifica emociones observando y reproduciendo expresiones faciales.',
    materials: 'Un espejo plástico o de acrílico y un acompañante que modele las expresiones.',
    model: 'Presenta una emoción a la vez, nómbrala en inglés y permite observarla en el espejo. La persona puede imitarla, señalarla o solo mirar; la expresión practicada no describe necesariamente cómo se siente.',
    modelItems: ['happy', 'sad', 'surprised', 'proud'], question: '¿Qué expresión representa happy?', practice: 'Elige la cara alegre del ejemplo. La pregunta comprueba vocabulario, no pregunta cómo te sientes.',
    choices: ['sad', 'happy', 'surprised'], answer: 'happy', hint: 'Busca la expresión con una sonrisa.', success: 'Esta expresión representa happy. Puedes probarla frente al espejo.',
    command: 'Happy!', action: 'Juega con las expresiones en el espejo.',
    actionSteps: ['Observa tu reflejo y prueba la expresión “Happy” sin forzarla.', 'Continúa con Sad, Surprised y Proud. Puedes imitar, señalar o describir cada expresión mientras escuchas su nombre.'],
    alternative: 'Sin espejo, observa al acompañante o señala una expresión. Puedes pasar si prefieres no representarla.',
    close: 'Observaste y practicaste expresiones de Mirror Feelings. Imitar una emoción no significa sentirla ni sirve para calificar tu estado de ánimo.',
  },
  alimentos: {
    name: "What's Missing?", slide: 7, target: 'apple', kind: 'memory',
    interaction: 'memory', interactionCues: ['Observa 5 tarjetas', 'Nómbralas 3 veces', 'Cierra los ojos', 'Retira 1 y recuerda cuál falta'],
    objective: 'Recuerda cuál de los cinco alimentos desaparece.',
    materials: 'Cinco tarjetas: apple, banana, milk, bread y egg. En esta adaptación puedes usar las tarjetas de la pantalla.',
    model: 'Observa las cinco tarjetas. Nombra los alimentos tres veces con tu acompañante. Cuando estés listo, oculta una tarjeta y recuerda cuál falta.',
    modelItems: ['apple', 'banana', 'milk', 'bread', 'egg'], question: 'What’s missing?', practice: 'Una tarjeta ya no está. ¿Cuál falta? Puedes volver a mirar el grupo completo si necesitas ayuda.',
    choices: ['bread', 'milk', 'apple', 'egg', 'banana'], answer: 'apple', hint: 'Compara lo que recuerdas con las cuatro tarjetas que siguen visibles. También puedes volver a ver las cinco.', success: 'Falta apple: la tarjeta de la manzana.',
    command: 'What’s missing?', action: 'Ahora juega con las tarjetas fuera de pantalla.',
    actionSteps: ['Dibuja o prepara las mismas cinco tarjetas. Nómbralas tres veces junto a tu acompañante.', 'Cierra los ojos mientras el acompañante retira una tarjeta. Ábrelos y nombra la que falta. Pueden repetir cambiando la tarjeta retirada.'],
    alternative: 'Si no tienes tarjetas, repite el ejercicio de memoria en pantalla usando “Volver a observar”. No hace falta comer ni manipular alimentos reales.',
    close: 'Practicaste memoria visual con los cinco alimentos de la guía. Un acierto es una oportunidad de práctica, no una prueba de dominio.',
  },
  naturaleza: {
    name: 'Nature Hunt', slide: 7, target: 'tree',
    interaction: 'hunt', interactionCues: ['Find the flower', 'Find the sun', 'Find the cloud', 'Find the rain', 'Find the tree', 'Find an animal', 'Find a leaf'],
    objective: 'Reconoce elementos de la naturaleza a partir de imágenes.',
    materials: 'La fuente enumera cinco imágenes grandes: flower, sun, cloud, rain y tree. Sus consignas también incluyen animal y leaf.',
    model: 'Distribuye las imágenes por el espacio y presenta una consigna por vez. En esta actividad la guía utiliza animal; bird aparece después en las actividades de Constructores y se conserva como palabra distinta.',
    modelItems: ['flower', 'sun', 'cloud', 'rain', 'tree', 'animal', 'leaf'], question: 'Find the tree!', practice: 'Identifica Tree antes de iniciar la búsqueda.',
    choices: ['flower', 'sun', 'tree', 'cloud'], answer: 'tree', hint: 'El árbol tiene un tronco y ramas.', success: 'Tree significa árbol. Busca ahora su imagen o señala uno real.',
    command: 'Find the tree!', action: 'Busca el árbol y señala dónde está.',
    actionSteps: ['Tu acompañante distribuye las imágenes y dice “Find the tree!”. Acércate a la imagen o señálala.', 'Muestra Tree y nómbralo. Repite la dinámica con Flower, Sun, Cloud, Rain, Animal y Leaf.'],
    alternative: 'Señala la tarjeta desde tu lugar o pide que te acerquen opciones. Si la actividad ocurre al aire libre, observa acompañado y no toques animales ni plantas desconocidas.',
    close: 'Practicaste Tree dentro de Nature Hunt. Las siete consignas permanecen disponibles y animal conserva el término usado en esta diapositiva.',
  },
}

export const builderLessons: Record<string, GuidedLesson> = {
  colores: {
    name: 'Build With Colors', slide: 15, target: 'red',
    interaction: 'construction', interactionCues: ['Red tower', 'Yellow house', 'Green tree'],
    objective: 'Identifica colores al construir.',
    materials: 'Bloques o plastilina, como propone la guía.',
    model: 'Observa red: rojo. Pide a tu acompañante que lea “Make a red tower” y muestre cómo empezar una torre.', modelItems: ['red'],
    question: '¿Qué color necesitas para una red tower?', practice: 'Elige el material rojo para preparar la construcción.', choices: ['green', 'yellow', 'red', 'blue'], answer: 'red', hint: 'Red significa rojo.', success: 'Elegiste red. Ahora usa ese color para construir la torre.',
    command: 'Make a red tower', action: 'Construye y muestra tu torre roja.',
    actionSteps: ['Con bloques o plastilina roja, construye una torre.', 'Muestra tu construcción al acompañante y señala el color mientras dice “Red”. Puedes repetir “Red tower”.'],
    alternative: 'Si no puedes manipular bloques, indica a tu acompañante dónde colocarlos. Un dibujo es una alternativa de acceso, no el material original.',
    close: 'Practicaste red siguiendo una consigna de construcción. La guía también propone una casa amarilla y un árbol verde.',
  },
  dias: {
    name: 'Build the Week Tower', slide: 14, target: 'Friday',
    interaction: 'construction', interactionCues: ['Monday · 1 bloque', 'Tuesday · 2 bloques', 'Wednesday · 3 bloques', 'Thursday · 4 bloques', 'Friday · 5 bloques'],
    objective: 'Construye la torre del viernes con cinco bloques.',
    materials: 'Cinco bloques de construcción.',
    model: 'En la guía, la torre crece con los días: Monday tiene 1 bloque; Tuesday, 2; Wednesday, 3; Thursday, 4; Friday, 5.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], question: '¿Cuántos bloques lleva Friday?', practice: 'Recuerda cómo crece la torre a lo largo de la semana.',
    choices: ['2', '3', '4', '5'], answer: '5', hint: 'Friday es el quinto día de la secuencia que muestra la guía.', success: 'Cinco bloques para Friday. Ahora construye la secuencia.',
    command: 'Build with 5 blocks. Friday tower!', action: 'Haz crecer la torre desde Monday hasta Friday.',
    actionSteps: ['Coloca un bloque y di “Monday”. Añade otro y di “Tuesday”.', 'Continúa con Wednesday, Thursday y Friday hasta tener cinco bloques. Muestra la torre del viernes.'],
    alternative: 'Puedes guiar a un acompañante para colocar los bloques o dibujar la secuencia de 1 a 5.',
    close: 'Practicaste los días de Monday a Friday mediante una construcción que crece de uno a cinco bloques.',
  },
  emociones: {
    name: 'Feeling Charades', slide: 13, target: 'happy',
    interaction: 'expression', interactionCues: ['Tarjeta privada', 'Representación sin hablar', 'What is it?', 'Respuesta en inglés'],
    objective: 'Representa una emoción para que otra persona la adivine.',
    materials: 'Tarjetas de emociones y al menos un acompañante para el juego de charadas.',
    model: 'En las charadas, solo quien actúa ve la tarjeta. Representa la emoción sin hablar y los demás intentan nombrarla en inglés.',
    modelItems: ['happy', 'sad', 'angry', 'excited'], question: '¿Cuál es la tarjeta happy?', practice: 'Reconoce la tarjeta antes del juego. Después solo la verá quien vaya a actuar.',
    choices: ['angry', 'happy', 'sad'], answer: 'happy', hint: 'Happy es la expresión alegre del ejemplo.', success: 'Reconociste happy. En el juego, los demás deberán adivinar a partir de los gestos.',
    command: 'What is it?', action: 'Representa la tarjeta sin decir su nombre.',
    actionSteps: ['Quien vaya a actuar elige en privado una tarjeta: happy, sad, angry o excited.', 'Representa la emoción con gestos. El acompañante pregunta “What is it?” y los demás intentan responder en inglés. Intercambien los papeles.'],
    alternative: 'Puedes señalar una tarjeta, elegir una pose o dibujar una expresión para que otra persona la nombre. También puedes pasar el turno.',
    close: 'Practicaste reconocimiento y representación para Feeling Charades. La plataforma no evalúa tus gestos ni cómo te sientes.',
  },
  alimentos: {
    name: 'Food Market', slide: 13, target: 'bread',
    interaction: 'symbolic', interactionCues: ['Buy the Bread', 'Buy the Milk', 'Buy the Banana', 'Muestra y nombra las compras'],
    objective: 'Sigue una lista de compras en un mercado de juego.',
    materials: 'Tarjetas de alimentos y dos canastas, según la guía. No necesitas comprar ni comer alimentos reales.',
    model: 'Tu acompañante dispone las tarjetas sobre una mesa. Escucha la primera instrucción: “Buy the Bread”. Bread significa pan.',
    modelItems: ['bread', 'milk', 'banana'], question: 'Buy the Bread.', practice: 'Señala la tarjeta que pondrías en la canasta.', choices: ['milk', 'apple', 'banana', 'bread'], answer: 'bread', hint: 'Bread es el pan.', success: 'Elegiste bread, el pan que pide la instrucción.',
    command: 'Buy the Bread. Buy the Milk. Buy the Banana.', action: 'Prepara las compras del mercado.',
    actionSteps: ['Tu acompañante dice “Buy the Bread”. Toma la tarjeta del pan y colócala en la canasta.', 'Continúa con “Buy the Milk” y “Buy the Banana”. Muestra las compras y nombra cada alimento con apoyo.'],
    alternative: 'Puedes señalar las tarjetas y pedir que el acompañante las coloque. Puedes usar dibujos si no tienes material impreso; no es necesario comprar ni manipular alimentos reales.',
    close: 'Practicaste instrucciones de Food Market con bread, milk y banana. Las compras son parte de un juego simbólico.',
  },
  naturaleza: {
    name: 'Nature Commands', slide: 13, target: 'tree',
    interaction: 'commands', interactionCues: ['Sun + clap', 'Tree + jump', 'Flower + turn around', 'Bird + sit down', 'Leaf + touch your head'],
    objective: 'Recuerda un elemento y una acción en una misma consigna.',
    materials: 'Las siete tarjetas de naturaleza y un espacio seguro para el movimiento.',
    model: 'Presenta un comando doble a la vez. Primero se identifica o señala la tarjeta; después se realiza o adapta la acción. Esta diapositiva usa bird, no animal.',
    modelItems: ['sun', 'tree', 'flower', 'bird', 'leaf'], question: '¿Qué tarjeta va primero en “Touch the tree and jump”?', practice: 'Separa la consigna en dos partes: palabra y acción.', choices: ['sun', 'flower', 'tree', 'leaf'], answer: 'tree', hint: 'Tree es el árbol: primero la tarjeta, después la acción.', success: 'Tree es la tarjeta indicada. Ahora completa o adapta jump.',
    command: 'Touch the tree and jump!', action: 'Haz las dos acciones en orden.',
    actionSteps: ['Escucha o lee una consigna completa. Toca o señala la tarjeta indicada.', 'Realiza o adapta la segunda acción. Continúa con Sun, Tree, Flower, Bird y Leaf respetando cada pareja.'],
    alternative: 'Puedes señalar la tarjeta y sustituir cualquier movimiento por una señal acordada. Conserva el orden: identificar la palabra y luego representar la acción.',
    close: 'Practicaste los cinco comandos dobles de Nature Commands. Bird conserva el término utilizado por la fuente en Constructores.',
  },
}

type LessonSeed = {
  unit: string
  name: string
  slide: number
  target: string
  objective: string
  materials: string
  modelItems: string[]
  question: string
  choices: string[]
  answer: string
  command: string
  action: string
  actionSteps: string[]
  model?: string
  practice?: string
  alternative?: string
  close?: string
  kind?: 'memory'
  resourceStatus?: 'client-pending'
  interaction?: InteractionPattern
  interactionCues?: string[]
}

const digitalLesson = (seed: LessonSeed): GuidedLesson => ({
  name: seed.name,
  slide: seed.slide,
  target: seed.target,
  objective: seed.objective,
  materials: seed.materials,
  modelItems: seed.modelItems,
  model: seed.model ?? `Presenta en pantalla ${seed.modelItems.join(', ')}. Lee la consigna y permite observar antes de responder.`,
  question: seed.question,
  practice: seed.practice ?? 'Observa las opciones y selecciona la que corresponde a la consigna de la guía.',
  choices: seed.choices,
  answer: seed.answer,
  hint: `Vuelve a observar el modelo y busca ${seed.answer}.`,
  success: `Encontraste ${seed.answer}. Continúa con la propuesta guiada.`,
  command: seed.command,
  action: seed.action,
  actionSteps: seed.actionSteps,
  alternative: seed.alternative ?? 'La consigna también puede resolverse señalando, eligiendo en pantalla o dando instrucciones a otra persona.',
  close: seed.close ?? `La pantalla permitió practicar ${seed.target}. El cierre reconoce la participación y no reemplaza la observación pedagógica.`,
  kind: seed.kind,
  resourceStatus: seed.resourceStatus,
  interaction: seed.interaction ?? 'choice',
  interactionCues: seed.interactionCues,
})

const investigatorSeeds: LessonSeed[] = [
  {
    unit: 'colores', name: 'Touch & Feel Colors', slide: 9, target: 'red', interaction: 'sensory', interactionCues: ['Color', 'Material', 'Sensación'],
    objective: 'Asocia un color con una textura.', materials: 'Plastilina, pintura y papeles de distintas texturas. La pantalla prepara la asociación antes de explorar los materiales.',
    modelItems: ['red', 'blue', 'yellow'], model: 'Presenta un material a la vez y nombra su color. La pantalla anticipa la pareja; la exploración táctil ocurre con el material real.',
    question: '¿Qué color aparece en “Red paint”?', practice: 'Relaciona la frase con su muestra de color antes de tocar, aplastar o sentir el material.', choices: ['blue', 'red', 'yellow', 'green'], answer: 'red',
    command: 'Red paint. Touch and feel.', action: 'Relaciona el color con una textura.', actionSteps: ['Selecciona red en pantalla y nómbralo.', 'Explora pintura, plastilina o papel disponible mientras el acompañante repite el color.'],
    alternative: 'Puedes observar, señalar o describir el material sin tocarlo. Evita cualquier textura que cause molestia.', close: 'Relacionaste red con un material y una sensación. La pantalla apoya el vocabulario; la experiencia táctil depende de materiales seguros y disponibles.',
  },
  {
    unit: 'colores', name: 'Color Song + Movement', slide: 10, target: 'blue', interaction: 'rhythm', interactionCues: ['Red, red, touch your head', 'Blue, blue, touch your shoe', 'Yellow, yellow, a marshmallow'],
    objective: 'Recuerda colores mediante repetición rítmica.', materials: 'No requiere materiales. El audio musical definitivo está pendiente del cliente; la letra y los movimientos permanecen visibles.',
    modelItems: ['red', 'blue', 'yellow'], model: 'Lee las tres líneas con un pulso estable. Marca cada color y permite imitar el movimiento asociado sin acelerar la secuencia.',
    question: '¿Qué color acompaña la frase “touch your shoe”?', practice: 'Sigue la secuencia visual y elige el color de la segunda línea.', choices: ['yellow', 'green', 'blue', 'red'], answer: 'blue',
    command: 'Blue, blue, touch your shoe.', action: 'Sigue la rima visual con un movimiento.', actionSteps: ['Recita la línea de blue siguiendo el pulso visual.', 'Toca o señala el zapato; también puedes indicar el movimiento con las manos.'],
    alternative: 'El movimiento puede señalarse, describirse o realizarse con otra parte del cuerpo. No es necesario reproducir audio para facilitar la actividad.', close: 'Seguiste una relación entre color, rima y movimiento. La canción completa queda pendiente de la grabación aprobada por el cliente.', resourceStatus: 'client-pending',
  },
  {
    unit: 'colores', name: 'Magic Color Painting', slide: 11, target: 'red', interaction: 'creation', interactionCues: ['Escucha la consigna', 'Elige red', 'Pinta libremente'],
    objective: 'Reconoce colores mientras crea.', materials: 'Pintura, pinceles y hojas. En pantalla se elige el color antes de pintar.',
    modelItems: ['red', 'blue', 'green'], model: 'Muestra red y di “Let’s paint red!”. La consigna fija el color; la composición permanece libre.',
    question: '“Let’s paint red!” ¿Qué color debes elegir?', practice: 'Selecciona el color de la consigna antes de comenzar la creación.', choices: ['green', 'yellow', 'red', 'blue'], answer: 'red',
    command: 'Let’s paint red!', action: 'Elige y aplica el color de la consigna.', actionSteps: ['Selecciona red en la tarjeta digital.', 'Pinta libremente con ese color o indica dónde aplicarlo.'],
    alternative: 'Puedes usar crayón, plastilina, recortes o señalar dónde otra persona aplicará el color.', close: 'Reconociste red y lo utilizaste en una creación propia. El resultado visual no se califica.',
  },
  {
    unit: 'colores', name: 'The Color Tree', slide: 12, target: 'green', interaction: 'story', interactionCues: ['The tree is green', 'A red bird comes', 'A yellow sun shines', 'The tree is happy'],
    objective: 'Asocia colores con una historia.', materials: 'Ilustraciones del árbol, el ave y el sol. La pantalla presenta la secuencia del cuento.',
    modelItems: ['green', 'red', 'yellow'], model: 'Narra el cuento en orden, señala cada imagen y repite las palabras de color. La pantalla conserva la secuencia para apoyar la memoria.',
    question: '¿De qué color es el árbol del cuento?', practice: 'Recuerda la primera relación del cuento: tree y su color.', choices: ['red', 'green', 'blue', 'yellow'], answer: 'green',
    command: 'The tree is green.', action: 'Reconstruye el cuento con sus colores.', actionSteps: ['Observa el árbol verde, el ave roja y el sol amarillo.', 'Vuelve a narrar la secuencia con gestos e imita las palabras clave.'],
    alternative: 'Puedes señalar las imágenes, ordenar tarjetas o escuchar el cuento sin repetirlo oralmente.', close: 'Relacionaste green, red y yellow con los elementos de The Color Tree. La actividad observa comprensión de la secuencia, no memorización literal.',
  },
  {
    unit: 'dias', name: 'Touch & Feel the Day', slide: 8, target: 'Monday', interaction: 'sensory', interactionCues: ['Monday is soft', 'Tuesday is rough', 'Wednesday is bumpy', 'Thursday is fuzzy', 'Friday is sticky'],
    objective: 'Asocia el nombre del día con una textura.', materials: 'Algodón, lija, arroz, lana y pintura o slime. La pantalla presenta las parejas día-textura.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Presenta una pareja cada vez. Nombra el día, permite observar el material y después ofrece la exploración táctil sin mezclar las relaciones.',
    question: '¿Qué día se relaciona con soft?', practice: 'Recuerda la primera pareja de la actividad: algodón suave y su día.', choices: ['Tuesday', 'Friday', 'Monday', 'Thursday'], answer: 'Monday',
    command: 'Monday is soft.', action: 'Explora la pareja Monday-soft.', actionSteps: ['Selecciona Monday en pantalla.', 'Toca algodón o identifícalo visualmente mientras el acompañante repite “Monday is soft”.'],
    alternative: 'Puedes observar, señalar o describir los materiales sin tocarlos. Evita pintura, slime o cualquier textura que cause molestia.', close: 'Relacionaste Monday con soft dentro de Touch & Feel the Day. Cada pareja pertenece a esta actividad sensorial.',
  },
  {
    unit: 'dias', name: 'The Movement Song', slide: 9, target: 'Tuesday', interaction: 'rhythm', interactionCues: ['Monday, touch your nose', 'Tuesday, touch your toes', 'Wednesday, jump so high', 'Thursday, wave goodbye', 'Friday, clap your hands'],
    objective: 'Recuerda el nombre del día con un movimiento.', materials: 'No requiere materiales. El audio definitivo está pendiente del cliente; las rimas se presentan como guía visual.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Lee las cinco rimas con el mismo pulso. Presenta un día por vez y deja tiempo para realizar, señalar o adaptar el movimiento.',
    question: '¿Qué día acompaña “touch your toes”?', practice: 'Sigue el orden visual y elige el día de la segunda rima.', choices: ['Friday', 'Tuesday', 'Monday', 'Thursday'], answer: 'Tuesday',
    command: 'Tuesday, Tuesday, touch your toes!', action: 'Sigue una rima visual de la semana.', actionSteps: ['Selecciona Tuesday cuando aparezca la acción correspondiente.', 'Toca o señala los pies. Después continúa con las demás rimas según el ritmo del grupo.'],
    alternative: 'Cada movimiento puede señalarse, describirse o sustituirse por una señal acordada.', close: 'Relacionaste Tuesday con “touch your toes” dentro de la secuencia semanal. El audio definitivo continúa pendiente del cliente.', resourceStatus: 'client-pending',
  },
  {
    unit: 'dias', name: 'Magic Day Painting', slide: 10, target: 'Wednesday', interaction: 'creation', interactionCues: ['Monday · blue circle', 'Tuesday · red line', 'Wednesday · yellow sun', 'Thursday · green leaf', 'Friday · orange star'],
    objective: 'Representa el día de la semana mediante el arte.', materials: 'Pintura, papel y crayolas. La pantalla muestra las relaciones propuestas por la actividad.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Presenta cada consigna como una pareja cerrada de día y creación. Las relaciones de esta actividad no forman una tabla universal para toda la unidad.',
    question: '¿Qué día corresponde al sol amarillo?', practice: 'Busca la pareja yellow sun dentro de la secuencia de pintura.', choices: ['Monday', 'Wednesday', 'Thursday', 'Friday'], answer: 'Wednesday',
    command: 'Let’s paint a yellow sun for Wednesday!', action: 'Crea el símbolo visual del día.', actionSteps: ['Selecciona Wednesday en pantalla.', 'Dibuja o pinta un sol amarillo; también puedes indicar su forma y color.'],
    alternative: 'Puedes usar crayones, recortes, plastilina o dirigir a otra persona para construir la imagen.', close: 'Representaste Wednesday mediante el yellow sun definido por Magic Day Painting. El resultado artístico no se califica.',
  },
  {
    unit: 'dias', name: 'The Visitor', slide: 11, target: 'Thursday', interaction: 'story', interactionCues: ['Monday · blue Teddy', 'Tuesday · red Teddy', 'Wednesday · yellow Teddy', 'Thursday · green Teddy', 'Friday · purple and happy Teddy'],
    objective: 'Sigue una secuencia narrativa de lunes a viernes.', materials: 'Un títere o peluche, por ejemplo Teddy Bear, con accesorios de color. La pantalla organiza la secuencia Monday-Friday.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Presenta al personaje en el orden de la semana y cambia su accesorio según el relato. Friday usa purple en esta actividad, aunque otras propuestas asignan otro color al viernes.',
    question: '¿Qué día visita Teddy con el accesorio verde?', practice: 'Recuerda la visita donde Teddy aparece en green.', choices: ['Tuesday', 'Thursday', 'Friday', 'Monday'], answer: 'Thursday',
    command: 'Hello, Thursday Teddy!', action: 'Relaciona la visita, el día y el color.', actionSteps: ['Selecciona Thursday al observar el accesorio verde.', 'Muestra el personaje con su accesorio y salúdalo con la frase de la guía.'],
    alternative: 'Puedes señalar el día y el color, ordenar tarjetas o escuchar el cuento sin saludar oralmente.', close: 'Ubicaste Thursday dentro de la secuencia de The Visitor y relacionaste esa visita con green.',
  },
  {
    unit: 'emociones', name: 'Happy Train', slide: 7, target: 'happy', interaction: 'rhythm', interactionCues: ['El tren avanza con la música', 'La música se detiene', 'Aparece una tarjeta', 'El grupo representa la emoción'],
    objective: 'Reconoce y expresa emociones básicas mediante movimiento e imitación.', materials: 'Tarjetas de emociones y espacio seguro para formar el tren. La música infantil definitiva está pendiente del cliente.',
    modelItems: ['happy', 'sad', 'angry', 'scared'], model: 'Organiza el recorrido como un tren. Cuando la música se detenga, muestra una tarjeta, nombra la emoción y deja tiempo para representarla con el rostro, el cuerpo o una alternativa acordada.',
    question: '¿Cuál tarjeta muestra happy?', practice: 'Identifica la emoción antes de incorporarla al recorrido del tren.', choices: ['sad', 'angry', 'happy', 'scared'], answer: 'happy',
    command: 'Happy!', action: 'Avanza, detente y representa la tarjeta.', actionSteps: ['Avanza con el tren mientras el acompañante marca un pulso o utiliza música aprobada.', 'Al detenerse, observa la tarjeta y representa, señala o describe la emoción. Repite con Sad, Angry y Scared.'],
    alternative: 'Puedes participar desde tu lugar, mover solo las manos, señalar la tarjeta o pasar el turno.', close: 'Practicaste Happy, Sad, Angry y Scared dentro de la secuencia de Happy Train. La representación no indica necesariamente cómo se siente cada persona.', resourceStatus: 'client-pending',
  },
  {
    unit: 'emociones', name: 'Feel and Say', slide: 8, target: 'calm', interaction: 'sensory', interactionCues: ['Explora una textura', 'Escucha Happy, Calm o Excited', 'How do you feel?', 'Elige una palabra como modelo'],
    objective: 'Explora texturas mientras practica vocabulario emocional en inglés.', materials: 'Algodón, plumas, telas suaves, esponjas o pompones. La exploración táctil siempre es opcional.',
    modelItems: ['happy', 'calm', 'excited'], model: 'Presenta un material para observar o tocar y pronuncia Happy, Calm y Excited como vocabulario de práctica. La guía no fija una emoción correcta para cada textura ni permite inferir cómo se siente la persona.',
    question: '¿Qué palabra representa estar en calma?', practice: 'Reconoce calm como palabra de vocabulario antes de explorar el material.', choices: ['excited', 'angry', 'calm', 'surprised'], answer: 'calm',
    command: 'How do you feel?', action: 'Explora una textura y practica una palabra.', actionSteps: ['Selecciona calm como respuesta de vocabulario en pantalla.', 'Observa o toca un material y elige Happy, Calm o Excited como modelo de expresión. No hay una respuesta personal obligatoria.'],
    alternative: 'Puedes observar el material, describirlo, usar una herramienta para tocarlo o evitar cualquier textura que genere incomodidad.', close: 'Exploraste una textura y practicaste vocabulario emocional. La actividad no establece una relación universal entre materiales y emociones.',
  },
  {
    unit: 'emociones', name: 'Feelings Circle Time', slide: 10, target: 'tired', interaction: 'rhythm', interactionCues: ["Happy · clap your hands", 'Excited · jump', 'Tired · yawn', 'Calm · breathe slowly'],
    objective: 'Practica emociones mediante ritmo, música y movimiento.', materials: 'Maracas, tambor o música infantil. El audio definitivo está pendiente del cliente; las cuatro frases permanecen visibles.',
    modelItems: ['happy', 'excited', 'tired', 'calm'], model: 'Presenta una frase a la vez con un pulso estable. Nombra la emoción, modela la acción y ofrece tiempo para realizarla o señalarla.',
    question: '¿Qué emoción acompaña la acción de bostezar?', practice: 'Busca la línea que relaciona la emoción con yawn.', choices: ['calm', 'happy', 'tired', 'excited'], answer: 'tired',
    command: "If you're tired, yawn!", action: 'Relaciona cada emoción con su acción.', actionSteps: ['Selecciona tired en la ronda digital.', 'Sigue las cuatro frases con palmas, salto, bostezo y respiración lenta, o utiliza una alternativa para cada movimiento.'],
    alternative: 'Puedes señalar la acción, hacer un gesto pequeño o escuchar la secuencia sin realizar movimientos.', close: 'Relacionaste cuatro palabras con las acciones propuestas por Feelings Circle Time. El audio final continúa pendiente de aprobación.', resourceStatus: 'client-pending',
  },
  {
    unit: 'emociones', name: 'Draw Your Feelings', slide: 11, target: 'excited', interaction: 'creation', interactionCues: ['How are you today?', 'Elige una emoción', 'Dibuja una expresión o situación', 'Compartir es opcional'],
    objective: 'Representa una emoción mediante dibujo y vocabulario en inglés.', materials: 'Hojas, crayones, colores o marcadores.',
    modelItems: ['happy', 'sad', 'angry', 'scared', 'excited', 'proud'], model: 'Repasa las seis tarjetas y formula “How are you today?”. Cada persona puede elegir una emoción para dibujar, usar una emoción ficticia o no compartir información personal.',
    question: '¿Cuál tarjeta corresponde a excited?', practice: 'Reconoce excited antes de iniciar una creación libre.', choices: ['sad', 'calm', 'excited', 'tired'], answer: 'excited',
    command: 'How are you today?', action: 'Crea una representación emocional.', actionSteps: ['Elige una palabra en pantalla; puedes usar Excited como modelo o escoger otra de la guía.', 'Dibuja una expresión, una situación o un personaje. Mostrar y explicar el dibujo es voluntario.'],
    alternative: 'Puedes crear un personaje ficticio, usar recortes, seleccionar una tarjeta o indicar a otra persona qué dibujar.', close: 'Utilizaste vocabulario emocional dentro de una creación. La plataforma no guarda la elección ni califica el dibujo.',
  },
  {
    unit: 'alimentos', name: 'Feed the Monster', slide: 8, target: 'apple', interaction: 'symbolic', interactionCues: ['The monster is hungry!', 'Muestra y nombra una tarjeta', 'Busca el alimento', 'Alimenta al monstruo', 'Repite la palabra 3 veces'],
    objective: 'Reconoce y nombra alimentos mediante asociación imagen-palabra y juego corporal.', materials: 'Caja decorada como monstruo con una boca grande y tarjetas o alimentos de juguete. La pantalla prepara cada turno.',
    modelItems: ['apple', 'banana', 'bread', 'milk', 'soup', 'chicken'], model: 'Presenta al monstruo con la frase de la guía. Muestra una tarjeta, nombra el alimento y permite buscar la misma imagen antes de introducirla en la caja.',
    question: 'The monster wants an apple. ¿Qué eliges?', practice: 'Identifica Apple antes de comenzar el turno del monstruo.', choices: ['bread', 'banana', 'apple', 'milk'], answer: 'apple',
    command: 'The monster is hungry! Apple!', action: 'Alimenta al personaje con la tarjeta correcta.', actionSteps: ['Selecciona Apple en pantalla y busca la misma tarjeta entre los materiales.', 'Introduce la tarjeta en la caja o pide ayuda para hacerlo. El grupo puede repetir “Apple” tres veces y continuar con los otros alimentos.'],
    alternative: 'Puedes señalar la tarjeta, dirigir a otra persona o usar una caja sin introducir objetos. No es necesario usar ni consumir alimentos reales.', close: 'Relacionaste Apple con su imagen y completaste un turno de Feed the Monster. La actividad puede repetirse con Banana, Bread, Milk, Soup y Chicken.',
  },
  {
    unit: 'alimentos', name: 'Food Hunt', slide: 9, target: 'orange', interaction: 'hunt', interactionCues: ['Escucha Find the Orange!', 'Busca solo esa tarjeta', 'Muéstrala al grupo', 'Todos responden Orange'],
    objective: 'Identifica alimentos en inglés mediante una búsqueda guiada.', materials: 'Flashcards distribuidas en lugares visibles y seguros del espacio. La pantalla presenta la imagen objetivo.',
    modelItems: ['apple', 'banana', 'orange', 'milk', 'bread'], model: 'Antes del recorrido, muestra Orange como objetivo. Solo una o dos personas buscan por turno mientras el resto conserva la referencia visual.',
    question: 'Find the Orange! ¿Qué tarjeta buscas?', practice: 'Selecciona la imagen objetivo antes de iniciar la búsqueda.', choices: ['milk', 'orange', 'apple', 'bread'], answer: 'orange',
    command: 'Find the Orange!', action: 'Busca la tarjeta del alimento indicado.', actionSteps: ['Selecciona Orange en pantalla y observa sus rasgos.', 'Encuentra la tarjeta en el espacio, muéstrala y permite que el grupo responda “Orange”. Después puede cambiarse el alimento.'],
    alternative: 'Puedes señalar la tarjeta desde tu lugar, elegirla entre varias opciones o indicar a otra persona dónde buscar.', close: 'Encontraste Orange mediante una búsqueda guiada. La actividad puede repetirse con otras tarjetas sin convertir la velocidad en competencia.',
  },
  {
    unit: 'alimentos', name: 'Picnic Time', slide: 10, target: 'banana', interaction: 'symbolic', interactionCues: ["Let's have a picnic!", 'Escucha el alimento', 'Toma la tarjeta u objeto', 'Muestra, repite y responde Yummy!'],
    objective: 'Reconoce y nombra alimentos mediante juego simbólico e interacción.', materials: 'Manta, cesta y tarjetas u objetos de juguete de Apple, Banana, Orange, Bread, Milk y Water.',
    modelItems: ['apple', 'banana', 'orange', 'bread', 'milk', 'water'], model: 'Prepara la manta y la cesta como escenario simbólico. Nombra un alimento por turno; quien participa toma la tarjeta u objeto correspondiente y lo muestra al grupo.',
    question: '¿Cuál alimento es banana?', practice: 'Identifica Banana antes de llevarla a la manta del picnic.', choices: ['apple', 'bread', 'banana', 'milk'], answer: 'banana',
    command: "Let's have a picnic! Banana!", action: 'Prepara una selección para el picnic.', actionSteps: ['Selecciona Banana en pantalla y encuentra la misma tarjeta en la cesta.', 'Llévala a la manta, muéstrala y repite “Banana”. El grupo puede responder “Yummy!”.'],
    alternative: 'Puedes señalar el alimento, dirigir a otra persona o usar imágenes. No se requiere comer, probar ni compartir alimentos reales.', close: 'Participaste en Picnic Time relacionando Banana con su imagen y su nombre dentro del juego simbólico.',
  },
  {
    unit: 'alimentos', name: 'Come and Eat with Me', slide: 11, target: 'orange', interaction: 'rhythm', interactionCues: ['Apple, apple, in my hand', 'Banana is so great!', 'Orange, orange, nice to see', 'Come and eat with me!'],
    objective: 'Practica vocabulario de alimentos mediante una letra repetitiva y movimientos.', materials: 'La letra permanece visible. La grabación musical definitiva está pendiente del cliente; puede marcarse el pulso sin audio.',
    modelItems: ['apple', 'banana', 'orange'], model: 'Presenta las cuatro líneas en orden y marca un pulso estable. Señala cada alimento cuando aparezca y acompaña la frase con un gesto sencillo.',
    question: '¿Qué alimento aparece en “nice to see”?', practice: 'Localiza la tercera línea de la canción.', choices: ['banana', 'orange', 'bread', 'apple'], answer: 'orange',
    command: 'Orange, orange, nice to see.', action: 'Sigue la canción como secuencia visual.', actionSteps: ['Selecciona Orange al llegar a la tercera línea.', 'Recita la letra, marca el pulso o acompaña cada alimento con un gesto mientras se produce el audio final.'],
    alternative: 'Puedes señalar las tarjetas, seguir el ritmo con la mirada o escuchar la lectura sin cantar ni realizar movimientos.', close: 'Seguiste las cuatro líneas de Come and Eat with Me y reconociste Orange. El audio definitivo continúa pendiente del cliente.', resourceStatus: 'client-pending',
  },
  {
    unit: 'naturaleza', name: 'Nature Moves', slide: 8, target: 'sun', interaction: 'commands', interactionCues: ['Flower · open arms', 'Sun · circle overhead', 'Cloud · move arms slowly', 'Rain · fingers down', 'Tree · stand with branch arms'],
    objective: 'Asocia cada elemento natural con un movimiento corporal.', materials: 'No requiere materiales; necesita espacio suficiente para realizar o adaptar los movimientos.',
    modelItems: ['flower', 'sun', 'cloud', 'rain', 'tree'], model: 'Presenta una palabra y su movimiento antes de aumentar la velocidad. Cada gesto puede realizarse, señalarse o describirse sin perder la relación con el vocabulario.',
    question: '¿Qué elemento se representa formando un círculo sobre la cabeza?', practice: 'Busca la pareja entre palabra y movimiento.', choices: ['cloud', 'tree', 'sun', 'flower'], answer: 'sun',
    command: 'Sun!', action: 'Relaciona el elemento con su movimiento.', actionSteps: ['Selecciona Sun en pantalla y forma un círculo con los brazos o señala el gesto.', 'Continúa con Flower, Cloud, Rain y Tree. Aumenta la velocidad solo cuando el grupo comprenda las cinco relaciones.'],
    alternative: 'Puedes realizar movimientos pequeños, señalar una tarjeta, describir el gesto o dirigir a otra persona.', close: 'Relacionaste Sun con su movimiento y recorriste las cinco parejas de Nature Moves.',
  },
  {
    unit: 'naturaleza', name: 'My Nature Picture', slide: 9, target: 'cloud', interaction: 'creation', interactionCues: ['Draw a sun', 'Draw a tree', 'Draw a flower', 'Draw a cloud', 'Draw rain'],
    objective: 'Relaciona vocabulario de naturaleza con una creación visual.', materials: 'Papel y crayolas. La pantalla organiza las cinco instrucciones de dibujo.',
    modelItems: ['sun', 'tree', 'flower', 'cloud', 'rain'], model: 'Lee una instrucción a la vez y muestra la imagen correspondiente. La persona incorpora cada elemento a su propio dibujo; la composición no necesita copiar un modelo único.',
    question: '“Draw a cloud.” ¿Qué elemento debes dibujar?', practice: 'Identifica Cloud antes de incorporarlo a la escena.', choices: ['rain', 'sun', 'cloud', 'tree'], answer: 'cloud',
    command: 'Draw a cloud.', action: 'Construye una escena natural paso a paso.', actionSteps: ['Selecciona Cloud en pantalla y dibuja una nube.', 'Continúa con Sun, Tree, Flower y Rain. Al finalizar, el acompañante puede señalar un elemento y preguntar “What is it?”.'],
    alternative: 'Puedes usar recortes, sellos, plastilina o indicar a otra persona dónde ubicar cada elemento.', close: 'Completaste las cinco instrucciones de My Nature Picture. La actividad refuerza vocabulario y no califica el resultado artístico.',
  },
  {
    unit: 'naturaleza', name: 'Hello, Nature!', slide: 10, target: 'flower', interaction: 'rhythm', interactionCues: ['Hello, flower · open hands', 'Hello, sun · circle overhead', 'Hello, cloud · move arms', 'Hello, rain · fingers down', 'Hello, tree · branch arms', 'Flower, sun, cloud and rain · tree again'],
    objective: 'Reconoce y repite cinco elementos de la naturaleza mediante música y movimiento.', materials: 'La letra y los gestos permanecen visibles. El audio definitivo está pendiente del cliente.',
    modelItems: ['flower', 'sun', 'cloud', 'rain', 'tree'], model: 'Recorre lentamente las seis partes de la letra. Señala la imagen, pronuncia la palabra y modela el gesto; en una segunda ronda puede omitirse la última palabra para que el grupo la complete.',
    question: '¿Qué elemento aparece primero en la canción?', practice: 'Busca la primera línea de la secuencia visual.', choices: ['tree', 'sun', 'flower', 'rain'], answer: 'flower',
    command: 'Hello, flower, flower, flower!', action: 'Sigue la secuencia visual de la canción.', actionSteps: ['Selecciona Flower al comenzar la letra y abre las manos como una flor.', 'Continúa con Sun, Cloud, Rain y Tree. En otra ronda, completa la última palabra si deseas hacerlo.'],
    alternative: 'Puedes señalar las imágenes, seguir el gesto con la mirada o escuchar la lectura rítmica sin cantar.', close: 'Seguiste la secuencia completa de Hello, Nature! y reconociste Flower como la primera palabra. El audio final continúa pendiente.', resourceStatus: 'client-pending',
  },
  {
    unit: 'naturaleza', name: "Little Seed's Day", slide: 11, target: 'rain', interaction: 'story', interactionCues: ['Look! The sun', 'Look! A cloud', 'Oh! Rain', 'Look! A flower', 'Look! A tree', 'What a beautiful day!'],
    objective: 'Reconoce y repite elementos de la naturaleza dentro de una historia sencilla.', materials: 'Imágenes grandes o tarjetas de Sun, Cloud, Rain, Flower y Tree.',
    modelItems: ['sun', 'cloud', 'rain', 'flower', 'tree'], model: 'Narra lentamente y muestra la tarjeta correspondiente cada vez que aparece una palabra clave. Conserva el orden del cuento para apoyar la asociación visual y la memoria.',
    question: '¿Qué aparece después de cloud en la historia?', practice: 'Reconstruye el orden Sun, Cloud y la palabra siguiente.', choices: ['tree', 'sun', 'rain', 'flower'], answer: 'rain',
    command: 'Oh! Rain!', action: 'Reconstruye la secuencia del cuento.', actionSteps: ['Selecciona Rain después de Cloud.', 'Ordena o narra Sun, Cloud, Rain, Flower y Tree. Cierra con los tres saludos y “What a beautiful day!”.'],
    alternative: 'Puedes señalar u ordenar las tarjetas, escuchar el relato o repetir solo las palabras clave.', close: 'Reconstruiste la secuencia de Little Seed’s Day y ubicaste Rain después de Cloud.',
  },
]

const builderSeeds: LessonSeed[] = [
  {
    unit: 'colores', name: 'Color Commands Game', slide: 14, target: 'blue', interaction: 'commands', interactionCues: ['Touch something blue and jump', 'Touch something yellow and dance', 'Touch something yellow and applaud'],
    objective: 'Sigue instrucciones con colores.', materials: 'Bloques u objetos de colores y un espacio seguro.',
    modelItems: ['blue', 'yellow', 'red'], model: 'Presenta una consigna completa. Primero se identifica el color; después se realiza o adapta el movimiento. Aumenta la complejidad solo cuando el grupo comprenda la estructura.',
    question: '¿Qué color debes tocar antes de saltar?', practice: 'Separa la primera consigna en dos partes: color y acción.', choices: ['yellow', 'blue', 'green', 'red'], answer: 'blue',
    command: 'Touch something blue and jump!', action: 'Completa la consigna en dos pasos.', actionSteps: ['Selecciona blue y localiza un objeto de ese color.', 'Señala o toca el objeto y después realiza o adapta el salto. Continúa con las consignas de yellow.'],
    alternative: 'Puedes señalar el objeto y sustituir el movimiento por una señal acordada. Conserva siempre el orden color y acción.', close: 'Seguiste una instrucción que combina color y movimiento. La docente decide cuándo aumentar la complejidad.',
  },
  {
    unit: 'colores', name: 'Color + Texture Lab', slide: 16, target: 'green', interaction: 'sensory', interactionCues: ['Hoja + green', 'Arena', 'Plastilina', 'Tela'],
    objective: 'Diferencia colores mediante texturas.', materials: 'Arena, hojas, plastilina y tela.',
    modelItems: ['green', 'yellow', 'red'], model: 'Muestra una hoja y di “This is green”. Luego presenta materiales con sensaciones diferentes para comparar sin imponer una única asociación.',
    question: '¿Qué color nombra la docente al mostrar una hoja?', practice: 'Identifica el color del ejemplo antes de comparar las texturas reales.', choices: ['yellow', 'red', 'green', 'blue'], answer: 'green',
    command: 'This is green.', action: 'Compara color y sensación.', actionSteps: ['Selecciona green en pantalla.', 'Explora una hoja o una textura disponible y compárala con otra mientras escuchas el nombre del color.'],
    alternative: 'Puedes observar o describir los materiales sin tocarlos. Retira arena, pintura o cualquier textura que genere incomodidad.', close: 'Comparaste materiales mientras practicabas green. Las sensaciones son personales y no tienen una respuesta correcta.',
  },
  {
    unit: 'colores', name: 'The Little Colors', slide: 17, target: 'red', interaction: 'story', interactionCues: ['Red is strong', 'Blue is calm', 'Yellow is happy', 'They make a rainbow'],
    objective: 'Relaciona colores dentro de un cuento breve.', materials: 'Tarjetas de red, blue, yellow y rainbow.',
    modelItems: ['red', 'blue', 'yellow'], model: 'Narra las cuatro relaciones en orden y muestra cada tarjeta. Las cualidades pertenecen al cuento; no definen universalmente a los colores ni a las personas.',
    question: '¿Qué color es strong en el cuento?', practice: 'Responde según la primera línea del relato.', choices: ['blue', 'yellow', 'red', 'green'], answer: 'red',
    command: 'Red is strong.', action: 'Reconstruye el cuento de los colores.', actionSteps: ['Selecciona red para iniciar la secuencia.', 'Continúa con blue is calm y yellow is happy hasta formar el rainbow.'],
    alternative: 'Puedes señalar, ordenar las tarjetas o escuchar el relato. No es obligatorio representar las cualidades.', close: 'Reconstruiste las relaciones de The Little Colors y su cierre con el rainbow.',
  },
  {
    unit: 'colores', name: 'Color + Object Creation', slide: 18, target: 'red', interaction: 'creation', interactionCues: ['Color', 'Objeto', 'Presentación'],
    objective: 'Combina un color y un objeto.', materials: 'Plastilina o pintura.',
    modelItems: ['red', 'green', 'yellow'], model: 'Presenta la estructura color + objeto con el ejemplo “red apple”. La consigna define ambos elementos y deja libre la forma de construirlos.',
    question: '¿Qué color necesita la red apple?', practice: 'Identifica primero el color de la creación solicitada.', choices: ['yellow', 'red', 'blue', 'green'], answer: 'red',
    command: 'Make a red apple.', action: 'Crea un objeto siguiendo color y nombre.', actionSteps: ['Selecciona red en pantalla.', 'Modela o pinta una manzana roja y preséntala con “Red apple”.'],
    alternative: 'Puedes dibujar, usar recortes o indicar a otra persona cómo construir el objeto.', close: 'Combinaste red y apple en una creación y utilizaste la expresión “Red apple”.',
  },
  {
    unit: 'dias', name: 'Daily Commands Game', slide: 13, target: 'Tuesday', interaction: 'commands', interactionCues: ['Monday · head + jump', 'Tuesday · shoes + clap', 'Wednesday · floor + spin', 'Thursday · nose + freeze', 'Friday · friend + dance'],
    objective: 'Sigue comandos dobles asociados a los días.', materials: 'No requiere materiales; necesita un espacio seguro para el movimiento.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Cada consigna combina un día y dos acciones. Lee la frase completa, separa las acciones y permite ensayarlas antes de unirlas.',
    question: '¿Qué día corresponde a “touch your shoes and clap”?', practice: 'Identifica primero el día de la consigna y conserva el orden de las dos acciones.', choices: ['Wednesday', 'Friday', 'Tuesday', 'Monday'], answer: 'Tuesday',
    command: 'Touch your shoes and clap!', action: 'Completa dos acciones en orden.', actionSteps: ['Selecciona Tuesday en pantalla.', 'Toca o señala los zapatos y después aplaude o utiliza una señal acordada.'],
    alternative: 'Puedes señalar las partes del cuerpo y sustituir cada movimiento por una señal. En Friday, señala o saluda a otra persona sin exigir contacto físico.', close: 'Relacionaste Tuesday con un comando doble y conservaste el orden shoes y clap.',
  },
  {
    unit: 'dias', name: 'The Feel of the Day', slide: 15, target: 'Wednesday', interaction: 'sensory', interactionCues: ['Monday · cotton · soft', 'Tuesday · sandpaper · rough', 'Wednesday · water · wet', 'Thursday · leaves · crunchy', 'Friday · playdough · squishy'],
    objective: 'Relaciona cada día con un material y una sensación.', materials: 'Algodón, lija, agua, hojas secas y plastilina.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Presenta el frasco o caja de un día a la vez. Nombra el día, el material y la sensación antes de ofrecer la exploración.',
    question: '¿Qué día se relaciona con water y wet?', practice: 'Busca la pareja de agua y wet en la secuencia del laboratorio.', choices: ['Monday', 'Wednesday', 'Friday', 'Thursday'], answer: 'Wednesday',
    command: 'Wednesday is wet.', action: 'Explora la relación día, material y sensación.', actionSteps: ['Selecciona Wednesday en pantalla.', 'Observa o toca agua de forma segura y utiliza la frase “Wednesday is wet”.'],
    alternative: 'Puedes observar el recipiente cerrado, señalar la pareja o describirla sin tocar el material.', close: 'Relacionaste Wednesday, water y wet dentro de The Feel of the Day. Las sensaciones pueden describirse de otra manera sin invalidar la participación.',
  },
  {
    unit: 'dias', name: "The Traveler's Week", slide: 16, target: 'Thursday', interaction: 'story', interactionCues: ['Monday · park', 'Tuesday · beach', 'Wednesday · farm', 'Thursday · zoo', 'Friday · home'],
    objective: 'Relaciona cada día con un lugar dentro de una secuencia.', materials: 'Imágenes de park, beach, farm, zoo y home.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Recorre el itinerario de Monday a Friday y conserva la estructura “On [day], I go to…”. La pantalla funciona como mapa narrativo.',
    question: '¿Qué día viaja el personaje al zoo?', practice: 'Ubica zoo dentro del itinerario semanal.', choices: ['Friday', 'Thursday', 'Tuesday', 'Monday'], answer: 'Thursday',
    command: 'On Thursday, I go to the Zoo.', action: 'Reconstruye el itinerario semanal.', actionSteps: ['Selecciona Thursday para la visita al zoo.', 'Ordena o narra Monday-park, Tuesday-beach, Wednesday-farm, Thursday-zoo y Friday-home.'],
    alternative: 'Puedes señalar las imágenes, ordenarlas o escuchar el recorrido sin repetirlo oralmente.', close: 'Ubicaste Thursday y zoo dentro del itinerario de The Traveler’s Week.',
  },
  {
    unit: 'dias', name: 'Object Creation Lab', slide: 17, target: 'Friday', interaction: 'creation', interactionCues: ['Monday · yellow sun', 'Tuesday · red heart', 'Wednesday · blue cloud', 'Thursday · green tree', 'Friday · purple star'],
    objective: 'Crea un objeto específico para un día de la semana.', materials: 'Plastilina o papel y colores.',
    modelItems: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], model: 'Presenta cada encargo como una combinación de día, color y objeto. Estas asociaciones pertenecen a Object Creation Lab y difieren de otras actividades de la unidad.',
    question: '¿Qué día corresponde a la purple star?', practice: 'Identifica la pareja de Friday antes de comenzar la creación.', choices: ['Tuesday', 'Friday', 'Thursday', 'Wednesday'], answer: 'Friday',
    command: 'Make a Purple Star for Friday.', action: 'Construye el objeto del día.', actionSteps: ['Selecciona Friday en pantalla.', 'Modela o dibuja una estrella morada y presenta “Purple star for Friday”.'],
    alternative: 'Puedes usar recortes, dibujar o dirigir a otra persona para construir el objeto.', close: 'Combinaste Friday, purple y star dentro de la consigna de Object Creation Lab.',
  },
  {
    unit: 'emociones', name: 'Feeling Dice', slide: 14, target: 'surprised', interaction: 'chance', interactionCues: ['Lanza el dado', 'Observa la emoción', 'How do you feel?', 'Representa una acción relacionada'],
    objective: 'Reconoce emociones y relaciónalas con acciones cotidianas.', materials: 'Dado grande con imágenes de emociones; la pantalla prepara el vocabulario antes del turno físico.',
    modelItems: ['happy', 'tired', 'surprised'], model: 'Explica la secuencia antes de lanzar: observar la cara, nombrar la palabra y proponer una acción. La emoción del dado es una consigna de representación, no una afirmación sobre el estado personal.',
    question: '¿Cuál tarjeta corresponde a surprised?', practice: 'Reconoce Surprised entre las emociones que aparecen en el dado.', choices: ['tired', 'happy', 'surprised', 'calm'], answer: 'surprised',
    command: 'How do you feel?', action: 'Interpreta la emoción obtenida.', actionSteps: ['Lanza el dado físico u observa la tarjeta que muestre el acompañante.', 'Nombra, señala o representa la emoción obtenida con una acción cotidiana.'],
    alternative: 'Puedes elegir entre dos tarjetas, indicar la acción a otra persona o pasar el turno.', close: 'Practicaste el reconocimiento de Happy, Tired y Surprised mediante un turno con dado. La plataforma no registra estados emocionales.',
  },
  {
    unit: 'emociones', name: 'Feelings Dance', slide: 15, target: 'scared', interaction: 'rhythm', interactionCues: ['Baila libremente', 'La música se detiene', 'Escucha una emoción', 'Cambia el movimiento'],
    objective: 'Asocia emociones con movimiento, ritmo y expresión corporal.', materials: 'Espacio seguro para moverse. La música infantil está pendiente de entrega y aprobación por el cliente.',
    modelItems: ['scared', 'excited', 'calm', 'proud'], model: 'Mientras el grupo se mueve, detén el pulso y nombra una emoción. Cada palabra propone una cualidad de movimiento para explorar; no debe convertirse en una caricatura obligatoria.',
    question: '¿Cuál tarjeta corresponde a scared?', practice: 'Reconoce Scared antes de incorporarlo a la secuencia de movimiento.', choices: ['calm', 'proud', 'scared', 'excited'], answer: 'scared',
    command: 'Scared!', action: 'Explora cómo cambia el movimiento según la palabra.', actionSteps: ['Muévete mientras el acompañante marca el ritmo o utiliza música aprobada.', 'Al detenerse, escucha Scared, Excited, Calm o Proud y cambia el movimiento, señálalo o descríbelo.'],
    alternative: 'Puedes mover una sola parte del cuerpo, usar una tarjeta, describir el cambio o pasar el turno.', close: 'Exploraste cuatro palabras mediante cambios de movimiento. La participación corporal es adaptable y el audio final sigue pendiente.', resourceStatus: 'client-pending',
  },
  {
    unit: 'emociones', name: 'My Feeling Today', slide: 16, target: 'calm', interaction: 'reflection', interactionCues: ['Repasa las diez emociones', 'How do you feel today?', 'Dibuja una emoción', 'Compartir es voluntario'],
    objective: 'Identifica y comunica una emoción con apoyo visual y dibujo.', materials: 'Hojas, colores, crayones y lápices.',
    modelItems: ['happy', 'sad', 'angry', 'scared', 'excited', 'tired', 'sleepy', 'calm', 'surprised', 'proud'], model: 'Repasa las diez palabras mediante gestos y expresiones. Después formula la pregunta de la guía sin exigir una respuesta pública ni conservar información personal.',
    question: '¿Cuál tarjeta representa calm?', practice: 'Reconoce Calm como vocabulario antes de realizar una elección personal.', choices: ['angry', 'calm', 'excited', 'sad'], answer: 'calm',
    command: 'How do you feel today?', action: 'Elige una palabra y crea una representación.', actionSteps: ['Observa las tarjetas y elige una palabra, una emoción ficticia o la opción de no responder.', 'Dibuja una situación o una cara. Quien desee compartir puede decir la palabra con apoyo del acompañante.'],
    alternative: 'Puedes dibujar un personaje ficticio, señalar una tarjeta, crear sin explicar el dibujo o no compartirlo.', close: 'Utilizaste el vocabulario completo de la unidad para crear una representación. La elección permanece en la actividad y no se almacena.',
  },
  {
    unit: 'alimentos', name: 'Food Memory Walk', slide: 14, target: 'orange', interaction: 'memory', interactionCues: ['Camina y observa las imágenes', 'Regresa al centro', 'Where is the Orange?', 'Recuerda, busca y señala'],
    objective: 'Fortalece la memoria visual recordando la ubicación de los alimentos.', materials: 'Flashcards con imágenes distribuidas en lugares visibles y seguros del espacio.',
    modelItems: ['apple', 'banana', 'orange', 'milk', 'bread'], model: 'Antes de caminar, explica que deberán observar la ubicación de cada tarjeta. Al volver al centro, formula una pregunta por vez y permite reconstruir el recorrido.',
    question: 'Where is the Orange? ¿Qué tarjeta debes recordar?', practice: 'Fija la imagen de Orange antes de observar dónde se encuentra.', choices: ['bread', 'orange', 'milk', 'banana'], answer: 'orange',
    command: 'Where is the Orange?', action: 'Recuerda y localiza el alimento.', actionSteps: ['Camina observando las tarjetas y regresa al punto de inicio.', 'Recuerda dónde estaba Orange, acércate o señala su ubicación y permite que el grupo nombre la palabra.'],
    alternative: 'Puedes observar desde un punto fijo, indicar la dirección o elegir entre dos ubicaciones. La rapidez no se utiliza como criterio.', close: 'Recordaste la ubicación de Orange dentro de Food Memory Walk. La actividad puede repetirse con otras tarjetas y con apoyo gradual.',
  },
  {
    unit: 'alimentos', name: 'Match the Picnic', slide: 15, target: 'egg', interaction: 'matching', interactionCues: ['Recibe una tarjeta', 'Escucha Egg', 'Busca la imagen igual', 'Forma la pareja y nombra'],
    objective: 'Asocia imágenes iguales fortaleciendo la discriminación visual.', materials: 'Dos juegos de flashcards con imágenes realistas. La diapositiva 16 permite usar objetos reales seguros como variante.',
    modelItems: ['egg', 'apple', 'bread', 'milk'], model: 'Coloca un juego de imágenes sobre la manta y distribuye el otro. Compara forma, color y detalles de la tarjeta modelo antes de buscar su pareja idéntica.',
    question: 'Escuchas “Egg”. ¿Qué pareja debes formar?', practice: 'Identifica Egg como la tarjeta modelo antes de buscar la imagen igual.', choices: ['milk', 'egg', 'bread', 'apple'], answer: 'egg',
    command: 'Match the Egg.', action: 'Encuentra y reúne dos imágenes iguales.', actionSteps: ['Selecciona Egg en pantalla y observa la tarjeta que recibiste.', 'Busca la segunda imagen igual, colócala junto a la primera y nombra “Egg” antes de regresar.'],
    alternative: 'Puedes elegir la pareja entre varias tarjetas cercanas, señalarla o pedir a otra persona que la acerque. Si se usan objetos reales, deben ser seguros y no requieren consumo.', close: 'Formaste una pareja visual de Egg. La variante con objetos reales pertenece a la diapositiva duplicada y no crea una actividad adicional.',
  },
  {
    unit: 'alimentos', name: 'Yummy Food Song', slide: 17, target: 'soup', interaction: 'rhythm', interactionCues: ['Apple · Yummy, yum', 'Banana + Orange · Eat with me', 'Milk + Water · Drink', 'Bread + Chicken · Yummy food', 'Rice + Egg · Soup is hot', 'Yummy · We love food'],
    objective: 'Recuerda alimentos mediante una canción acumulativa.', materials: 'La letra y la secuencia visual están disponibles. El audio con ritmo de Frère Jacques está pendiente de entrega y aprobación por el cliente.',
    modelItems: ['apple', 'banana', 'orange', 'milk', 'water', 'bread', 'chicken', 'rice', 'egg', 'soup'], model: 'Divide la letra en seis bloques y recórrelos en orden. Señala cada alimento al nombrarlo y conserva la repetición indicada en la fuente sin producir una grabación provisional.',
    question: '¿Qué alimento aparece en la frase “is hot”?', practice: 'Busca la quinta parte de la secuencia visual.', choices: ['bread', 'soup', 'milk', 'rice'], answer: 'soup',
    command: 'Soup is hot!', action: 'Sigue la canción como recorrido visual.', actionSteps: ['Selecciona Soup al llegar a la quinta parte de la letra.', 'Recita, señala o marca el ritmo de los seis bloques mientras el cliente entrega la grabación definitiva.'],
    alternative: 'Puedes seguir las imágenes en silencio, marcar el pulso con una señal o escuchar la lectura rítmica sin cantar.', close: 'Recorriste la letra completa y reconociste Soup dentro de “Soup is hot”. La música definitiva continúa pendiente del cliente.', resourceStatus: 'client-pending',
  },
  {
    unit: 'naturaleza', name: 'Build a Nature Scene', slide: 14, target: 'bird', interaction: 'construction', interactionCues: ['Put the sun', 'Put the tree', 'Put the bird', 'Put the flower'],
    objective: 'Construye una escena siguiendo instrucciones sencillas.', materials: 'Figuras o imágenes recortadas de los siete elementos. La fuente desarrolla cuatro instrucciones explícitas.',
    modelItems: ['sun', 'tree', 'bird', 'flower'], model: 'Presenta una instrucción por vez y permite ubicar cada figura antes de continuar. El paisaje se construye progresivamente con Sun, Tree, Bird y Flower.',
    question: '“Put the bird.” ¿Qué elemento debes añadir?', practice: 'Identifica Bird antes de incorporarlo al paisaje.', choices: ['flower', 'bird', 'sun', 'tree'], answer: 'bird',
    command: 'Put the bird.', action: 'Construye el paisaje por capas.', actionSteps: ['Selecciona Bird en pantalla y coloca o señala su figura.', 'Añade Sun, Tree, Bird y Flower siguiendo el orden. Después responde “What is it?” con apoyo.'],
    alternative: 'Puedes señalar dónde ubicar cada figura, usar un tablero magnético, dibujar o dirigir a otra persona.', close: 'Construiste una escena con las cuatro instrucciones explícitas de la guía y utilizaste Bird como vocabulario de Constructores.',
  },
  {
    unit: 'naturaleza', name: 'What Is Missing?', slide: 15, target: 'bird', kind: 'memory', interaction: 'memory', interactionCues: ['Observa Sun, Tree y Bird', 'Close your eyes', 'Retira 1 tarjeta', 'Open your eyes · What is missing?'],
    objective: 'Recuerda y nombra el elemento natural que desaparece.', materials: 'Tres tarjetas iniciales: Sun, Tree y Bird. La fuente permite aumentar progresivamente hasta cinco.',
    modelItems: ['sun', 'tree', 'bird'], model: 'Muestra las tres tarjetas y nómbralas antes de ocultar una. La ronda digital retira Bird para reproducir el ejemplo de la diapositiva; en la actividad acompañada puede variar la tarjeta.',
    question: 'What is missing?', practice: 'Una de las tres tarjetas ya no está. Compara las dos visibles con el grupo que observaste.', choices: ['leaf', 'flower', 'bird', 'rain'], answer: 'bird',
    command: 'Open your eyes! What is missing?', action: 'Compara el grupo y encuentra la ausencia.', actionSteps: ['Observa Sun, Tree y Bird y nómbralas con apoyo.', 'Cierra los ojos mientras el acompañante retira una tarjeta. Ábrelos y nombra o señala la que falta. Aumenta el grupo solo cuando resulte adecuado.'],
    alternative: 'Puedes volver a observar las tres tarjetas, elegir entre dos opciones o responder señalando.', close: 'Recordaste Bird como la tarjeta ausente del ejemplo. Un acierto practica memoria visual y no prueba dominio.',
  },
  {
    unit: 'naturaleza', name: 'Nature, Move With Me!', slide: 16, target: 'leaf', interaction: 'rhythm', interactionCues: ['Flower · open up', 'Sun · hands up high', 'Cloud · move so slow', 'Rain · fingers down', 'Tree · stand up tall', 'Bird · flap your wings', 'Leaf · turn around'],
    objective: 'Recuerda vocabulario de naturaleza asociándolo con acciones sencillas.', materials: 'La letra y los siete gestos permanecen visibles. El audio definitivo está pendiente del cliente.',
    modelItems: ['flower', 'sun', 'cloud', 'rain', 'tree', 'bird', 'leaf'], model: 'Presenta las siete líneas en orden. Nombra el elemento, modela la acción y deja tiempo para repetirla o adaptarla antes de avanzar.',
    question: '¿Qué elemento acompaña “turn around”?', practice: 'Busca la última línea de la secuencia visual.', choices: ['bird', 'leaf', 'rain', 'tree'], answer: 'leaf',
    command: 'Leaf, leaf, turn around!', action: 'Sigue la secuencia de palabra y movimiento.', actionSteps: ['Selecciona Leaf en pantalla y realiza o señala turn around.', 'Recorre Flower, Sun, Cloud, Rain, Tree, Bird y Leaf conservando cada acción.'],
    alternative: 'Puedes usar movimientos pequeños, señalar las tarjetas, describir cada acción o seguir la secuencia sin moverte.', close: 'Relacionaste las siete palabras con sus acciones y reconociste Leaf en la última línea. El audio definitivo continúa pendiente.', resourceStatus: 'client-pending',
  },
]

const seedCatalog = (seeds: LessonSeed[]) => seeds.reduce<Record<string, Record<string, GuidedLesson>>>((catalog, seed) => {
  catalog[seed.unit] ??= {}
  catalog[seed.unit][seed.name] = digitalLesson(seed)
  return catalog
}, {})

const mergeOriginalLessons = (routeLessons: Record<string, GuidedLesson>, seeds: LessonSeed[]) => {
  const catalog = seedCatalog(seeds)
  Object.entries(routeLessons).forEach(([unit, lesson]) => {
    catalog[unit] ??= {}
    catalog[unit][lesson.name] = lesson
  })
  return catalog
}

export const lessonCatalog: Record<RouteId, Record<string, Record<string, GuidedLesson>>> = {
  investigadores: mergeOriginalLessons(investigatorLessons, investigatorSeeds),
  constructores: mergeOriginalLessons(builderLessons, builderSeeds),
}

export function getLesson(unitId: string, route: RouteId, activityName?: string): GuidedLesson {
  const unitCatalog = lessonCatalog[route][unitId] ?? lessonCatalog[route].colores
  if (activityName && unitCatalog[activityName]) return unitCatalog[activityName]
  return Object.values(unitCatalog)[0]
}

export function sourceLabel(unitId: string, slide: number) {
  return `Guía ${guideSources[unitId].number} · diapositiva ${slide}`
}
