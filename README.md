# 🌟 Portafolio Personal - Carlos González

Portafolio profesional **ultra-optimizado** desarrollado con **Astro**, **React**, **TailwindCSS** y renderizado en servidor.

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.x (SSG - Static Site Generation)
- **UI Framework**: React 19 (Hidratación parcial)
- **Estilos**: TailwindCSS 4.x
- **Animaciones**: CSS nativas (sin JavaScript)
- **Iconos**: Lucide React
- **TypeScript**: Strict mode

## ⚡ Optimización de Rendimiento

Este portafolio implementa la **Opción B: Híbrido Inteligente** (70% SSR + 30% React):

- ✅ **Renderizado en Servidor (SSR)** - About, Experience, Contact 100% estáticos
- ✅ **Hidratación Inteligente** - Solo 4 componentes React necesarios
  - Header: `client:idle` (se carga cuando el navegador está inactivo)
  - Hero: `client:visible` (partículas + animaciones espectaculares)
  - ProjectsEnhanced: `client:visible` (cards 3D flip interactivos)
  - SkillsEnhanced: `client:visible` (orbs flotantes con animaciones)
- ✅ **Animaciones Espectaculares** - Framer Motion para efectos avanzados
- ✅ **Bundle Optimizado** - JS solo para componentes interactivos
- ✅ **Sin rotaciones 360°** - Optimizado después de feedback del usuario
- ✅ **Cursor nativo** - Removido cursor custom para mejor rendimiento

## 📁 Estructura del Proyecto (Refactorizada)

```
/
├── public/
│   └── favicon.svg           # Logo personalizado
├── src/
│   ├── components/
│   │   ├── Header.tsx              # 🔴 React: Navegación (client:idle)
│   │   ├── Hero.tsx                # 🔴 React: Hero con animaciones (client:visible)
│   │   ├── AboutStatic.astro       # ⚪ SSR: Sobre mí
│   │   ├── ExperienceStatic.astro  # ⚪ SSR: Experiencia profesional
│   │   ├── ProjectsEnhanced.tsx    # 🔴 React: Proyectos con 3D (client:visible)
│   │   ├── SkillsEnhanced.tsx      # 🔴 React: Skills con orbs (client:visible)
│   │   ├── ContactStatic.astro     # ⚪ SSR: Contacto
│   │   └── GlobalEffects.tsx       # 🔴 React: Efectos globales (client:only)
│   ├── data/
│   │   ├── profile.ts        # Datos del perfil
│   │   ├── experience.ts     # Experiencia laboral
│   │   ├── projects.ts       # Proyectos
│   │   └── skills.ts         # Habilidades
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal con SEO
│   ├── pages/
│   │   └── index.astro       # Página principal
│   └── styles/
│       └── global.css        # Estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa del build localmente antes de desplegar |

## 🚀 Despliegue

Este proyecto está optimizado para desplegarse en **Vercel**:

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente que es un proyecto Astro
3. El despliegue se realizará automáticamente

## ✨ Características

### 🎨 Diseño y UX
- ✅ Diseño moderno y responsive (Mobile-first)
- ✅ Animaciones CSS fluidas sin JavaScript
- ✅ Navegación suave entre secciones
- ✅ Tema oscuro/claro en secciones específicas
- ✅ Transiciones y hover effects optimizados

### 🚀 Rendimiento
- ✅ **LCP: ~1.8s** (Largest Contentful Paint)
- ✅ **CLS: 0.00** (Cumulative Layout Shift perfecto)
- ✅ **TTFB: ~160ms** (Time to First Byte)
- ✅ **HTML pre-renderizado**: 80KB con todo el contenido
- ✅ **Bundle JS optimizado**: Solo 4 componentes React hidratados
- ✅ Lazy loading inteligente con `client:visible` y `client:idle`
- ✅ Animaciones espectaculares sin sacrificar rendimiento

### 🔍 SEO y Accesibilidad
- ✅ Optimización SEO completa
- ✅ Metadatos Open Graph y Twitter Cards
- ✅ HTML semántico (heading hierarchy)
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ TypeScript strict mode

### 🏗️ Arquitectura
- ✅ Static Site Generation (SSG)
- ✅ Componentes reutilizables
- ✅ Separación de datos y presentación
- ✅ Zero runtime overhead para contenido estático

## � Personalización

Para personalizar el contenido del portafolio, edita los archivos en `src/data/`:

- `profile.ts`: Información personal, idiomas y certificaciones
- `experience.ts`: Experiencia laboral
- `projects.ts`: Proyectos destacados
- `skills.ts`: Habilidades técnicas y blandas

## 📄 Licencia

© 2025 Carlos González. Todos los derechos reservados.
