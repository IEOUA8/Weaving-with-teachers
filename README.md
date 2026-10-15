# Weaving with teachers

Interfaz React/Vite para consultar vocabulario y actividades metodológicas de inglés dirigidas a agentes educativos de centros educativos del municipio de Envigado.

Versión técnica pública: [weaving-with-teachers.vercel.app](https://weaving-with-teachers.vercel.app). Esta URL permite revisión funcional, pero no representa todavía la aprobación pedagógica ni editorial final del cliente.

## Decisiones confirmadas

- El nombre oficial del producto es **Weaving with teachers**.
- Tejiendo Sueños es una referencia visual; no aparece como segunda marca ni como cobranding.
- La experiencia es abierta: no tiene registro, inicio de sesión, perfiles ni almacenamiento de datos personales.
- Desde la portada se elige una de las dos rutas definidas por las guías: **Investigadores** o **Constructores**.
- Cada ruta contiene los cinco temas: **Colors, Days, Feelings, Food y Nature**.
- El título de cada tema y cada palabra se presenta primero en inglés; la traducción en español funciona como apoyo secundario.
- Las 47 actividades conservan su ruta, guía y diapositiva de origen; no se convierten en niveles ni prácticas digitales separadas.

## Arquitectura de la interfaz

- `/`: bienvenida y elección entre Investigadores y Constructores.
- `/ruta/:ruta`: elección de uno de los cinco temas dentro de la ruta.
- `/ruta/:ruta/unidad/:tema`: título bilingüe, vocabulario visual, audio de pronunciación y únicamente las actividades sugeridas para la ruta elegida.
- Las URLs anteriores de actividades redirigen a la unidad correspondiente; la antigua URL sin ruta vuelve al inicio porque no permite determinar si corresponde a Investigadores o Constructores.

La revisión del cliente del 5 de octubre de 2026 pidió reducir la cantidad de decisiones y clics. Se retiraron la progresión Reconocer–Imitar–Asociar–Nombrar, la biblioteca separada, los filtros, las fichas intermedias y los cuestionarios digitales. Las rutas Investigadores y Constructores se mantienen porque sí estructuran las actividades en las cinco guías metodológicas.

Las actividades aparecen debajo del vocabulario con su nombre original, objetivo, desarrollo y consigna trazables a la guía. No se presentan materiales, pasos de pantalla, evaluaciones ni niveles añadidos por la aplicación.

## Audio

Cada una de las 44 entradas tiene un archivo local de pronunciación en inglés. Las canciones y piezas musicales de las actividades continúan pendientes de entrega o aprobación; no se confunden con el audio de vocabulario.

## Identidad visual

La interfaz emplea un wordmark original de **Weaving with teachers**, con lettering manuscrito, nube protectora y la paleta extraída del manual visual compartido. No reutiliza el logotipo de Tejiendo Sueños.

Las fuentes actuales son Pacifico para el wordmark, Nunito para jerarquías y Source Sans 3 para lectura. Las tres se sirven localmente o desde dependencias del build con licencia abierta. Envigado Mix y Averta requieren archivos y licencia antes de incorporarse.

## Desarrollo

```bash
npm install
npm run dev -- --host 127.0.0.1
```

## Despliegue

El proyecto está vinculado a Vercel como `weaving-with-teachers` y conectado con `IEOUA8/Weaving-with-teachers`. Cada actualización de `main` genera un despliegue de producción. `vercel.json` conserva el acceso directo a las rutas internas de React sin redirigir los recursos estáticos.

## Validación

```bash
npm run typecheck
npm run test:curriculum
npm run build
```

Las 47 pruebas verifican fuentes, pertenencia, orden independiente de las 47 actividades, diapositivas, vocabulario, categorías de actividad y cobertura visual. La revisión responsive vigente incluye 390 px sin desbordamiento horizontal, imágenes cargadas, audio reproducible y consola sin errores.

## Límites actuales

- No existe backend, CMS, analítica, sincronización, cuentas ni progreso persistente.
- La dirección de las ilustraciones generadas con IA está aprobada para uso transversal. Las 44 flashcards ya tienen apoyo visual y una vista ampliada accesible; esperan aprobación pedagógica final del cliente.
- Las pronunciaciones locales funcionan como recurso provisional y requieren aprobación lingüística y de voz antes de considerarse material definitivo.
- El personaje y los recursos institucionales definitivos necesitan sus archivos fuente autorizados; no se reconstruyeron desde capturas.
