# Weaving with teachers · dirección visual

Fuente de referencia: `MANUAL TEJIENDO SUEÑOS 2026.pdf`, revisado completo el 23 de septiembre de 2026.

## Relación con la referencia

**Weaving with teachers es la única marca del producto.** Tejiendo Sueños aporta dirección cromática, calidez, gestualidad, formas orgánicas y lenguaje educativo; su nombre y logotipo no aparecen como segunda marca.

El wordmark propio combina:

- `Weaving` en verde turquesa;
- `with teachers` en naranja;
- sonrisa y destellos magenta;
- nube rosa de protección;
- lettering manuscrito abierto y legible.

No se deforma, gira ni recolorea por pantalla. La versión compacta del encabezado prescinde de la nube para conservar legibilidad.

## Paleta digital

| Token | Hex | Uso |
| --- | --- | --- |
| Magenta | `#ed1651` | Estados activos y acentos |
| Naranja | `#f7941e` | Ruta Constructores y apoyos |
| Amarillo | `#ffcb05` | Resaltados y sombra de CTA |
| Verde oliva | `#7a9948` | Naturaleza y alternativas |
| Menta | `#68b4a5` | Superficies suaves |
| Turquesa | `#1a8c7d` | Identidad y recorridos |
| Verde profundo | `#003830` | Texto y acciones principales |
| Azul petróleo | `#174450` | Texto secundario de alto contraste |

Los colores vivos se usan como acentos y superficies. El texto ordinario utiliza verde profundo o azul petróleo; amarillo, naranja y menta siempre reciben texto oscuro.

## Tipografía

- Pacifico: wordmark solamente.
- Nunito: títulos, navegación y controles.
- Source Sans 3: lectura e instrucciones.

Envigado Mix y Averta se mantienen como pendientes hasta contar con archivos web y licencia. No se extraen ni redistribuyen desde el PDF.

## Sistema gráfico

Se utilizan nubes, recorridos punteados, destellos, manchas orgánicas, subrayados y geometrías expresivas. Su función es orientar jerarquía y recorrido, no decorar cada espacio.

La portada incorpora un libro abierto y formas geométricas originales dentro del lenguaje de la referencia. No reconstruye a Tonalli ni otros personajes desde capturas; su incorporación exacta requiere los archivos fuente autorizados.

## Dirección ilustrada generada con IA

El 23 de septiembre de 2026 se aprobó esta familia como dirección visual transversal de la plataforma. Las ilustraciones comparten contorno azul petróleo, textura impresa, formas orgánicas y la paleta del sistema. No contienen logotipos, textos ni reproducciones de Tonalli.

La aplicación actual incluye:

- una escena principal de aprendizaje para la portada;
- una ilustración de observación y descubrimiento para Investigadores;
- una ilustración de construcción y creación para Constructores;
- cinco ilustraciones temáticas para Colores, Días, Emociones, Alimentos y Naturaleza;
- 10 ilustraciones individuales para Emociones;
- 10 ilustraciones individuales para Alimentos;
- 8 ilustraciones individuales para Naturaleza;
- muestras cromáticas exactas para Colores y calendarios ordinales para Días, evitando imponer relaciones día-color que varían entre actividades.

Los archivos se encuentran en `public/illustrations/`, con las piezas individuales organizadas en `public/illustrations/vocabulary/`. Las 44 flashcards ya cuentan con apoyo visual y pueden abrirse en una vista ampliada con navegación anterior/siguiente. La información pedagógica nunca depende exclusivamente de las imágenes: cada recurso conserva su nombre visible y su traducción.

## Interacción y accesibilidad

- Controles principales de al menos 44 px.
- Las tarjetas de vocabulario reúnen imagen, palabra, traducción y audio en un solo bloque visible.
- Foco magenta visible.
- Contraste AA para texto y acciones.
- Navegación por teclado y URLs compartibles.
- Estados que no dependen solo del color.
- `prefers-reduced-motion` elimina transiciones.
- Diseño validado sin desbordamiento horizontal desde 320 px.

## Arquitectura visual

La portada conduce a Investigadores o Constructores. Cada ruta abre los cinco temas y cada tema reúne el vocabulario con sus actividades correspondientes en una sola página. No existen progresión, biblioteca separada, índice, filtros, fichas intermedias ni cuestionarios. La interfaz se dirige al agente educativo sin perder el carácter cálido del programa.

## Criterio anti-genérico

El barrido visual del 23 de septiembre de 2026 eliminó patrones frecuentes de interfaces generadas sin criterio editorial:

- no se usan gradientes, glassmorphism ni desenfoques como decoración estructural;
- no se presentan métricas, porcentajes o insignias de progreso sin datos reales;
- las unidades y actividades se ordenan mediante líneas, numeración y jerarquía tipográfica, no por una acumulación de tarjetas flotantes;
- los controles visibles se reservan para decisiones que sí cambian el contenido: ruta, tema y audio;
- las ilustraciones identifican temas, vocabulario o acciones; no rellenan espacios vacíos;
- los estados activos se comunican con texto, posición y contraste, no solo con color;
- el movimiento es corto, sobrio y compatible con `prefers-reduced-motion`.

Las formas orgánicas, bordes irregulares y sombras duras se mantienen únicamente cuando pertenecen al lenguaje gráfico de la marca. Los módulos de lectura y navegación usan una estructura editorial más contenida para que la identidad no compita con la guía pedagógica.
