# Proceso de Diseño y Desarrollo

## 1️ Investigación y Análisis Inicial

El proceso inició con una fase de investigación y análisis comparativo de distintas aplicaciones meteorológicas, tanto móviles como web.  

Se evaluaron aspectos como:

- Legibilidad de la información
- Jerarquía visual
- Uso del color
- Organización de los datos
- Experiencia de usuario (UX)

Durante este análisis se identificó que muchas aplicaciones presentan exceso de información, poca claridad visual o interfaces recargadas que dificultan la lectura rápida del clima.

A partir de esta observación, se decidió construir una interfaz moderna, minimalista y altamente legible, inspirada en el estilo **Liquid Glass de Apple**, priorizando claridad, profundidad visual y limpieza estética.

---

## 2️ Construcción de Identidad Visual

Posteriormente, se realizó un análisis de la marca **Favorcito**, con el objetivo de mantener coherencia visual y alineación estética.

Se desarrolló una paleta de colores basada en:

- Colores principales de la marca
- Tonos complementarios
- Transparencias y efectos glass
- Contraste adecuado para accesibilidad

Con la paleta definida, se diseñó una interfaz enfocada en:

- Minimalismo
- Información directa
- Funcionalidad prioritaria
- Reducción de distracciones visuales

La decisión central fue implementar una **card principal amplia**, que concentra la información más importante del clima actual, permitiendo una lectura inmediata y clara.

---

## 3️ Arquitectura y Modularización

Tras el diseño conceptual, se procedió a generar el proyecto en React con TypeScript, estructurando la aplicación desde el inicio bajo principios de modularidad y escalabilidad.

Se organizaron los directorios dentro de `src` siguiendo una arquitectura clara:

- `hooks/`
- `services/`
- `utils/`
- `pages/`
- `styles/`
- `assets/`

El objetivo fue mantener separación de responsabilidades y facilitar el mantenimiento futuro del proyecto.

---

## 4️ Uso de Bootstrap y Metodología BEM

Se utilizó **Bootstrap** como framework de apoyo para:

- Sistema de grid responsive
- Estructuración rápida de layouts
- Consistencia en espaciados
- Adaptabilidad móvil inmediata

Dado que el proyecto se desarrolló en un entorno ágil, Bootstrap permitió acelerar la implementación sin comprometer organización.

Paralelamente, se aplicó la metodología **BEM (Block, Element, Modifier)** para mantener un CSS estructurado, predecible y escalable.

Ejemplo:
- `home`
- `home__container`
- `weather-card__temperature`
- `home--sunny`

Esto permitió mantener claridad en la jerarquía visual y evitar conflictos de estilos.

---

## 5️ Sistema de Mappers

Se implementaron tres mappers independientes con responsabilidades específicas:

- **weatherMapper** → Determina el tipo de clima (sunny, cloudy, rainy, storm).
- **weatherIconMapper** → Selecciona el ícono correspondiente.
- **weatherLabelMapper** → Traduce el código meteorológico a una etiqueta legible.

Este enfoque desacoplado permite:

- Mayor mantenibilidad
- Fácil actualización de reglas
- Separación clara entre lógica y presentación

Además, se implementó un fondo dinámico único por condición climática, reforzando la experiencia visual y contextual.

---

## 6️ Flujo Funcional del Sistema

El flujo de la aplicación funciona de la siguiente manera:

1. El usuario escribe una ciudad en el buscador.
2. El sistema utiliza la API de geocodificación para obtener coincidencias.
3. Se muestran sugerencias dinámicas basadas en similitud.
4. Al seleccionar una ciudad, se obtiene:
   - Latitud
   - Longitud
   - Información adicional relevante
5. Con estas coordenadas se ejecuta el `weatherService`.
6. Finalmente, se renderiza:
   - Clima actual
   - Humedad sincronizada por hora
   - Probabilidad de precipitación
   - Pronóstico extendido

La aplicación utiliza exclusivamente la API oficial de **Open-Meteo** como fuente externa de datos.

---

## 7️ Responsividad y Experiencia de Usuario

Desde su concepción, la aplicación fue diseñada como completamente responsive.

Se puede observar el uso claro del sistema de grid de Bootstrap en la estructuración de bloques, lo que permite:

- Adaptación fluida a dispositivos móviles
- Escalabilidad en pantallas grandes
- Reorganización dinámica de contenido

La UI prioriza:

- Información clara
- Jerarquía visual fuerte
- Acceso inmediato a datos relevantes
- Interacción simple e intuitiva

---

## 8️ Enfoque General del Proyecto

Este proyecto no solo se centró en consumir una API, sino en:

- Aplicar arquitectura limpia en frontend
- Implementar tipado fuerte con TypeScript
- Separar responsabilidades correctamente
- Diseñar una experiencia visual coherente
- Construir una base escalable para futuras mejoras

El resultado es una aplicación moderna, modular y preparada para evolucionar hacia una solución de nivel productivo.