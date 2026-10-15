# Control transversal de entrega

Revisión local: 6 de octubre de 2026. Este control incorpora el feedback de revisión recibido el 5 de octubre y separa lo implementado de las aprobaciones que todavía corresponden al cliente. No acredita despliegue ni aprobación pedagógica final.

## Estado funcional

| Frente | Estado local | Evidencia |
| --- | --- | --- |
| Identidad | Implementado | Weaving with teachers es la única marca visible; Tejiendo Sueños se conserva solo como referencia visual |
| Arquitectura | Implementado | Inicio con elección entre Investigadores y Constructores; después, acceso a cinco temas por ruta |
| Cobertura | Implementado | 47 actividades: 25 de Investigadores y 22 de Constructores |
| Vocabulario | Implementado | 44 entradas con inglés principal, traducción pequeña, imagen y pronunciación local |
| Navegación | Implementado | Dos decisiones explícitas: ruta y tema; sin progresiones, filtros, fichas ni cuestionarios intermedios |
| Acceso | Implementado | Sin registro, inicio de sesión, perfil ni almacenamiento de resultados personales |
| Audio de palabras | Implementado, pendiente de aprobación | 43 archivos locales cubren las 44 entradas; `orange` se reutiliza en Colors y Food |
| Canciones | Pendiente del cliente | No se inventó música; las actividades conservan la indicación de recurso pendiente |
| Publicación técnica | Disponible para revisión | `https://weaving-with-teachers.vercel.app`; no equivale a aprobación pedagógica o editorial final |
| Integración continua | Configurada | Los cambios enviados a `main` en GitHub generan un despliegue de producción en Vercel |

## Criterios de experiencia verificados

- La portada muestra las dos rutas presentes en las guías: Investigadores y Constructores.
- Cada ruta muestra los cinco temas y únicamente sus actividades correspondientes.
- Cada tema usa el título en inglés como jerarquía principal y la traducción en español como apoyo secundario.
- El vocabulario aparece antes de las actividades, con imagen, texto y audio en la misma tarjeta.
- Las actividades aparecen completas en la página; no requieren abrir ficha, práctica o pasos adicionales.
- Se eliminaron de la experiencia visible las progresiones, filtros, cuestionarios y métricas de avance que no hacen parte de las guías.
- Las actividades conservan los nombres de las guías y muestran objetivo, desarrollo y consigna; no muestran materiales ni pasos añadidos para una práctica digital.
- Mini cuentos, canciones y Texture Lab conservan una etiqueta visible con la categoría utilizada por la fuente.
- El orden se contrasta con una matriz independiente de guía, ruta, diapositiva y título; no depende únicamente de los arreglos que renderiza la interfaz.
- Las URLs antiguas de actividad redirigen a la unidad y la antigua URL de tema vuelve al inicio para solicitar la ruta.
- La vista de 390 px presenta dos tarjetas de vocabulario por fila y no tiene desplazamiento horizontal (`clientWidth` y `scrollWidth`: 390 px).
- Las imágenes cargaron sin fallos y la consola no reportó errores ni advertencias en el recorrido comprobado.
- El control de pronunciación cambió visualmente a `Escuchando` al reproducir el archivo local.

## Verificación técnica ejecutada

```bash
npm run typecheck
npm run test:curriculum
npm run build
```

Resultado: tipado correcto, compilación de producción correcta, 47 pruebas superadas y `npm audit --omit=dev --audit-level=high` sin vulnerabilidades.

## Aprobaciones necesarias antes de publicar

1. Aprobación pedagógica de las 47 adaptaciones y de sus alternativas de acceso.
2. Revisión lingüística de vocabulario, instrucciones en inglés y traducciones.
3. Aprobación pedagógica y de derechos de las 44 flashcards e ilustraciones.
4. Aprobación de la voz provisional de pronunciación y entrega o aprobación independiente de canciones, locución, acento y derechos de uso.
5. Resolución escrita de las discrepancias registradas en `TRAZABILIDAD_PEDAGOGICA.md`.
6. Definición de autoría, créditos, privacidad, términos, analítica y jurisdicción.
7. Definición del dominio definitivo, navegadores objetivo y necesidad de funcionamiento sin conexión. Vercel funciona como hosting técnico provisional.
8. Autorización explícita para presentar la versión como publicación final y responsables de aprobación.

## Protocolo recomendado de aceptación

1. El responsable pedagógico revisa una actividad de cada dinámica y después el inventario completo.
2. El responsable de inglés valida palabras, consignas, ayudas y cierres.
3. El responsable visual revisa identidad, 44 flashcards y uso transversal de ilustraciones.
4. El equipo técnico incorpora únicamente las correcciones aprobadas y repite las pruebas automáticas y responsive.
5. El cliente firma o confirma por escrito la versión que puede publicarse.
