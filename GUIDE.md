# 📖 Guía de Uso y Personalización

## 🎨 Personalizar el Contenido

### 1. Información Personal (`src/data/profile.ts`)

Edita los siguientes campos con tu información:

```typescript
export const profileData = {
  name: "Tu Nombre",              // Tu nombre completo
  title: "Tu Título",             // Ej: "Ingeniero en Software"
  subtitle: "Tu Especialidad",    // Ej: "Frontend Developer"
  location: "Tu Ciudad, País",
  email: "tu@email.com",
  phone: "+56 9 XXXX XXXX",
  linkedin: "linkedin.com/in/tu-perfil",
  github: "github.com/tu-usuario",
  description: "Tu descripción profesional...",
  // ... resto de la configuración
};
```

### 2. Experiencia Laboral (`src/data/experience.ts`)

Añade o edita tus experiencias:

```typescript
{
  id: 1,
  title: "Tu Cargo",
  company: "Nombre de la Empresa",
  location: "Ciudad, País",
  period: "Mes Año – Mes Año",
  description: [
    "Logro o responsabilidad 1",
    "Logro o responsabilidad 2",
    "Logro o responsabilidad 3"
  ]
}
```

### 3. Proyectos (`src/data/projects.ts`)

Agrega tus proyectos destacados:

```typescript
{
  id: 1,
  title: "Nombre del Proyecto",
  institution: "Empresa o Institución",
  period: "Mes Año – Mes Año",
  description: "Descripción breve del proyecto...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  highlights: [
    "Característica destacada 1",
    "Característica destacada 2"
  ]
}
```

### 4. Habilidades (`src/data/skills.ts`)

Actualiza tus habilidades técnicas:

```typescript
export const technicalSkills = {
  languages: ["Python", "JavaScript", ...],
  frameworks: ["React", "Angular", ...],
  databases: ["MySQL", "PostgreSQL", ...],
  // ... resto de categorías
};
```

## 🎨 Personalizar Colores

Los colores principales están definidos en las clases de TailwindCSS. Los tonos púrpura predominantes se pueden cambiar modificando las clases:

- `purple-600`, `purple-700`, `purple-800` → Color principal
- `slate-900`, `slate-800` → Fondos oscuros
- `slate-50`, `slate-100` → Fondos claros

Puedes buscar y reemplazar estos colores en todos los componentes.

## 🖼️ Agregar Imágenes

1. Coloca tus imágenes en la carpeta `public/`
2. Referéncialas en los componentes: `/nombre-imagen.jpg`

Ejemplo para agregar foto de perfil en `Hero.tsx`:

```tsx
<img 
  src="/profile-photo.jpg" 
  alt="Tu nombre"
  className="rounded-full w-48 h-48 mx-auto mb-6"
/>
```

## 🚀 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview

# Ver errores de TypeScript
npm run astro check
```

## 📱 Hacer Responsive

El portafolio ya es responsive, pero puedes ajustar los breakpoints:

- `md:` → Tablets (768px+)
- `lg:` → Desktop (1024px+)
- `xl:` → Desktop grande (1280px+)

## 🎭 Personalizar Animaciones

Las animaciones están controladas por Framer Motion. Puedes ajustar:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}    // Estado inicial
  animate={{ opacity: 1, y: 0 }}     // Estado final
  transition={{ duration: 0.6 }}     // Duración
>
```

Propiedades comunes:
- `duration`: Duración de la animación
- `delay`: Retraso antes de iniciar
- `ease`: Tipo de suavizado

## 📊 Analytics (Opcional)

Para agregar Google Analytics u otras herramientas:

1. Instala el paquete correspondiente
2. Agrega el script en `src/layouts/Layout.astro`

## 🌐 Desplegar en Vercel

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Vercel detectará automáticamente Astro
5. ¡Despliega!

## 🔧 Solución de Problemas

### El servidor no inicia
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Errores de TypeScript
```bash
npm run astro check
```

### Estilos no se aplican
Verifica que `global.css` esté importado en `Layout.astro`

## 💡 Tips

1. **SEO**: Actualiza los metadatos en `Layout.astro`
2. **Performance**: Optimiza imágenes antes de subirlas
3. **Accesibilidad**: Usa etiquetas semánticas y atributos ARIA
4. **Testing**: Prueba en diferentes navegadores y dispositivos

## 📝 Checklist de Personalización

### ✅ Ya Configurado (No requiere acción)
- [x] ✅ Información personal en `profile.ts` - **COMPLETO** (con tus datos de los MD)
- [x] ✅ Experiencias laborales en `experience.ts` - **COMPLETO** (Inversiones Last Don + Ofertas Imperdibles)
- [x] ✅ Proyectos en `projects.ts` - **COMPLETO** (E-commerce + Portafolio)
- [x] ✅ Habilidades en `skills.ts` - **COMPLETO** (Técnicas y blandas)
- [x] ✅ Metadatos SEO - **CONFIGURADO** (Open Graph, Twitter Cards)
- [x] ✅ Diseño responsive - **IMPLEMENTADO** (Mobile, Tablet, Desktop)
- [x] ✅ Animaciones - **FUNCIONANDO** (Framer Motion)
- [x] ✅ Navegación - **OPERATIVA** (Header con menú móvil)

### 🎨 Personalización Opcional (A tu gusto)
- [ ] **Actualizar URLs reales** de LinkedIn y GitHub en `profile.ts` (actualmente son placeholders)
- [ ] **Agregar foto de perfil** en la sección Hero (opcional pero recomendado)
- [ ] **Cambiar colores** si prefieres otro esquema (actualmente púrpura/slate)
- [ ] **Añadir más proyectos** conforme los desarrolles
- [ ] **Incluir imágenes** de tus proyectos en las tarjetas

### 🚀 Siguiente Paso (Cuando estés listo)
- [ ] **Probar en diferentes dispositivos** - Abre en móvil, tablet y desktop
- [ ] **Desplegar en Vercel** - Conecta tu repo y despliega en minutos
- [ ] **Compartir tu portafolio** - ¡Muestra tu trabajo al mundo! 🎉

### 📌 Ajustes Prioritarios Recomendados:
1. **Actualizar URLs de redes sociales** → `src/data/profile.ts` líneas 8-9
2. **Agregar foto personal** (opcional) → Ver sección "Agregar Imágenes" arriba
3. **Probar el sitio** → Ya está corriendo en http://localhost:4321
