# Favorcito Weather  
### Intelligent Weather Forecast Platform

Favorcito Weather es una aplicación web moderna de pronóstico del tiempo desarrollada con **React + TypeScript**, diseñada con una arquitectura modular, tipado fuerte y una experiencia de usuario elegante basada en principios de diseño contemporáneo.

La plataforma permite buscar cualquier ciudad del mundo y visualizar información meteorológica actualizada en tiempo real, incluyendo condiciones actuales y pronóstico extendido.

---

## Visión del Proyecto

Construir una aplicación meteorológica ligera, moderna y escalable que utilice una única fuente oficial de datos, priorizando:

- Arquitectura limpia
- Separación de responsabilidades
- Tipado fuerte
- Buenas prácticas de desarrollo
- Experiencia de usuario moderna (Glass UI)

---

## Características Principales

### Búsqueda Inteligente de Ciudades
- Autocompletado dinámico
- Geocodificación mediante API oficial
- Debounce automático
- Manejo seguro de estado

### Clima Actual
- Temperatura actual
- Estado climático traducido
- Ícono dinámico
- Hora de actualización
- Velocidad del viento
- Humedad sincronizada por hora
- Probabilidad de precipitación

### Pronóstico Extendido (7 días)
- Nombre del día en español
- Temperatura máxima destacada
- Temperatura mínima secundaria
- Iconografía dinámica
- Carrusel responsive

### Interfaz Dinámica
- Fondo adaptable según condición climática
- Diseño estilo Glassmorphism
- Layout completamente responsive
- Transiciones suaves

---

## Arquitectura Técnica

La aplicación está estructurada bajo un enfoque modular:

```plaintext
src/
├── hooks/
│   └── useWeather.ts
│
├── services/
│   ├── weatherService.ts
│   └── geocodingService.ts
│
├── utils/
│   ├── weatherMapper.ts
│   ├── weatherIconMapper.ts
│   └── weatherLabelMapper.ts
│
├── pages/
│   └── Home.tsx
│
├── styles/
│   └── home.css
│
└── assets/
    ├── icons/
    └── background/
```

### Principios aplicados:

- ✔ Custom Hooks
- ✔ Separación Service Layer
- ✔ Tipado fuerte sin `any`
- ✔ Manejo robusto de errores
- ✔ Arquitectura escalable
- ✔ Código mantenible

---

## APIs Utilizadas

### Open-Meteo Forecast API
https://api.open-meteo.com/v1/forecast

Parámetros utilizados:
- current_weather
- hourly=relativehumidity_2m
- daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_max
- timezone=auto

---

### Open-Meteo Geocoding API
https://geocoding-api.open-meteo.com/v1/search

Permite convertir nombres de ciudades en coordenadas geográficas (latitud / longitud).

---

## 🛠️ Instalación y Ejecución

### 1️ Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/WhatWeather.git
cd WhatWeather
```

### 2️ Instalar dependencias

```bash
npm install
```

### 3️ Ejecutar en entorno de desarrollo

```bash
npm run dev
```

o si se utiliza Create React App:

```bash
npm start
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## Dependencias Principales (Importante)

El proyecto utiliza las siguientes librerías adicionales:

- Bootstrap
- Bootstrap Icons

Si por alguna razón no se instalan automáticamente, puedes agregarlas manualmente con:

```bash
npm install bootstrap
npm install bootstrap-icons

## Scripts Disponibles

```bash
npm run dev        # Desarrollo
npm run build      # Build de producción
npm run preview    # Previsualización de producción
```

---

## Manejo de Errores

La aplicación incluye:

- Validación de respuestas HTTP
- Manejo seguro de errores desconocidos
- Protección ante datos incompletos
- Control de estados de carga

---

## Escalabilidad

El proyecto está preparado para futuras mejoras como:

- Modo oscuro
- Historial de búsquedas
- Geolocalización automática
- PWA (Progressive Web App)
- Navegación por teclado en sugerencias
- Internacionalización (i18n)

---

## Objetivo Académico

Este proyecto fue desarrollado como ejercicio práctico para demostrar:

- Consumo correcto de APIs REST
- Manejo de coordenadas geográficas
- Integración de múltiples servicios externos
- Arquitectura frontend moderna
- Aplicación de buenas prácticas en React + TypeScript

---

## Autor

Daniel José Reque Mendoza  
Frontend Developer  

---

## Licencia

Proyecto de carácter educativo y demostrativo.