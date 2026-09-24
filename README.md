# Weaving with teachers

Interfaz React/Vite para consultar vocabulario y actividades metodológicas de inglés dirigidas a agentes educativos de centros educativos del municipio de Envigado.

## Decisiones confirmadas

- El nombre oficial del producto es **Weaving with teachers**.
- Tejiendo Sueños es una referencia visual; no aparece como segunda marca ni como cobranding.
- La experiencia es abierta: no tiene registro, inicio de sesión, perfiles ni almacenamiento de datos personales.
- Las rutas principales son **Investigadores** y **Constructores**.
- Ambas rutas comparten exactamente el mismo vocabulario.
- Las actividades cambian por ruta y conservan su guía y diapositiva de origen.

## Arquitectura de la interfaz

- `/`: bienvenida y elección de ruta.
- `/ruta/:ruta`: mapa pedagógico de las cinco unidades y progresión orientativa de la ruta.
- `/ruta/:ruta/unidad/:tema`: unidad con vocabulario contextual y actividades en el orden de la guía.
- `/ruta/:ruta/vocabulario`: 44 palabras compartidas, organizadas en cinco temas, con apoyo visual y vista ampliada navegable.
- `/ruta/:ruta/actividades`: índice metodológico completo, agrupado por unidad.
- `/ruta/:ruta/actividad/:tema/:actividad`: ficha metodológica trazable.
- `/ruta/:ruta/actividad/:tema/:actividad/practica`: adaptación pedagógica virtual de cada actividad.

El mapa recomienda una secuencia sin bloquear unidades ni convertir las actividades en niveles obligatorios. Reúne 47 actividades con interacción en pantalla: 25 para Investigadores y 22 para Constructores. Cada práctica conserva la guía y diapositiva fuente, objetivo, materiales, vocabulario, facilitación, alternativa de acceso y cierre.

Cada ruta funciona además como una secuencia continua: las fichas permiten avanzar o retroceder entre actividades, el cierre de una unidad enlaza con la primera actividad de la siguiente y la última práctica identifica el final del recorrido. Esta navegación no implica seguimiento del participante ni progreso almacenado.

Las cinco unidades y sus 47 actividades cuentan con adaptación pedagógica detallada. El sistema distingue búsqueda, exploración sensorial, ritmo, creación, cuento, comandos, construcción, expresiones, memoria, juego simbólico, asociación visual, turnos con dado y elección personal. La interfaz prepara y acompaña la actividad; las acciones físicas, táctiles y creativas siguen ocurriendo con el agente educativo.

## Audio

Los controles de audio permanecen deshabilitados y rotulados como pendientes. Se habilitarán cuando el cliente entregue o apruebe las grabaciones y canciones definitivas.

## Identidad visual

La interfaz emplea un wordmark original de **Weaving with teachers**, con lettering manuscrito, nube protectora y la paleta extraída del manual visual compartido. No reutiliza el logotipo de Tejiendo Sueños.

Las fuentes actuales son Pacifico para el wordmark, Nunito para jerarquías y Source Sans 3 para lectura. Las tres se sirven localmente o desde dependencias del build con licencia abierta. Envigado Mix y Averta requieren archivos y licencia antes de incorporarse.

## Desarrollo

```bash
npm install
npm run dev -- --host 127.0.0.1
```

## Validación

```bash
npm run typecheck
npm run test:curriculum
npm run build
```

Las 45 pruebas verifican las fuentes, pertenencia de actividades a su ruta, orden por unidad, continuidad entre las 47 actividades, formas de participación, diapositivas, respuestas, diferencias entre rutas, memoria de cinco tarjetas, vocabulario compartido y cobertura visual de las 44 flashcards.

## Límites actuales

- No existe backend, CMS, analítica, sincronización, cuentas ni progreso persistente.
- La dirección de las ilustraciones generadas con IA está aprobada para uso transversal. Las 44 flashcards ya tienen apoyo visual y una vista ampliada accesible; esperan aprobación pedagógica final del cliente.
- Las voces del navegador no sustituyen grabaciones aprobadas.
- El personaje y los recursos institucionales definitivos necesitan sus archivos fuente autorizados; no se reconstruyeron desde capturas.
