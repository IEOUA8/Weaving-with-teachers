# Control transversal de entrega

Revisión local: 24 de septiembre de 2026. Este control separa lo implementado y verificable de las aprobaciones que todavía corresponden al cliente. No acredita publicación ni aprobación pedagógica final.

## Estado funcional

| Frente | Estado local | Evidencia |
| --- | --- | --- |
| Identidad | Implementado | Weaving with teachers es la única marca visible; Tejiendo Sueños se conserva solo como referencia visual |
| Arquitectura | Implementado | Inicio, dos rutas, cinco unidades, biblioteca, índice, fichas y prácticas guiadas |
| Cobertura | Implementado | 47 actividades: 25 de Investigadores y 22 de Constructores |
| Vocabulario | Implementado | 44 entradas compartidas con traducción y apoyo visual |
| Navegación | Implementado | Anterior/siguiente en fichas, continuidad entre unidades y cierre de cada ruta |
| Acceso | Implementado | Sin registro, inicio de sesión, perfil ni almacenamiento de resultados personales |
| Audio | Pendiente del cliente | Controles deshabilitados y alternativas visuales o rítmicas disponibles |
| Publicación | No realizada | Falta definir infraestructura, responsables y autorización de salida |

## Criterios de experiencia verificados

- El mapa permite entrar a cualquier unidad sin prerrequisitos artificiales.
- La unidad muestra vocabulario antes del recorrido metodológico.
- Cada ficha conserva objetivo, preparación, modelado, acción, alternativa de acceso y fuente.
- Cada práctica usa cuatro momentos constantes: observar, interactuar, acompañar y cerrar.
- La última actividad de una unidad enlaza con la siguiente unidad sin perder la posibilidad de volver al mapa.
- La última actividad de la ruta informa que el recorrido terminó y no promete progreso almacenado.
- Los filtros exponen su estado seleccionado y anuncian cuántas actividades quedan visibles.
- Los cambios de pantalla actualizan el título del documento y cuentan con anuncio accesible.
- La vista de 320 px no presenta desplazamiento horizontal en el cierre de ruta revisado.
- La consola del navegador no reportó errores durante el recorrido comprobado.

## Verificación técnica ejecutada

```bash
npm run typecheck
npm run test:curriculum
npm run build
```

Resultado: compilación correcta y 45 pruebas superadas. Las pruebas incluyen trazabilidad, cobertura de las 47 actividades, integridad de las 44 flashcards y continuidad completa de ambas rutas.

## Aprobaciones necesarias antes de publicar

1. Aprobación pedagógica de las 47 adaptaciones y de sus alternativas de acceso.
2. Revisión lingüística de vocabulario, instrucciones en inglés y traducciones.
3. Aprobación pedagógica y de derechos de las 44 flashcards e ilustraciones.
4. Entrega o aprobación de audios, canciones, locución, acento y derechos de uso.
5. Resolución escrita de las discrepancias registradas en `TRAZABILIDAD_PEDAGOGICA.md`.
6. Definición de autoría, créditos, privacidad, términos, analítica y jurisdicción.
7. Definición de dominio, hosting, navegadores objetivo y necesidad de funcionamiento sin conexión.
8. Autorización explícita de publicación y responsables de aprobación final.

## Protocolo recomendado de aceptación

1. El responsable pedagógico revisa una actividad de cada dinámica y después el inventario completo.
2. El responsable de inglés valida palabras, consignas, ayudas y cierres.
3. El responsable visual revisa identidad, 44 flashcards y uso transversal de ilustraciones.
4. El equipo técnico incorpora únicamente las correcciones aprobadas y repite las pruebas automáticas y responsive.
5. El cliente firma o confirma por escrito la versión que puede publicarse.
