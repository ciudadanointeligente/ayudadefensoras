# AGENTS.md - Guía para Agentes de Código

## Descripción del Proyecto

Este proyecto es un sitio web Astro con Tailwind CSS y Alpine.js que proporciona recursos y apoyo para defensores ambientales en América Latina. Soporta internacionalización (español y portugués) y utiliza una arquitectura basada en componentes.

## Requisitos del Sistema

- Node.js >= 22.12.0
- npm

## Comandos de Construcción y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build localmente
npm run preview

# Ejecutar comandos CLI de Astro
npm run astro <comando>
npm run astro -- --help
```

### Comandos Útiles de Astro

```bash
# Verificar tipos y errores
npm run astro check

# Añadir integraciones
npm run astro add <paquete>
```

**Nota:** Este proyecto no tiene tests configurados ni linting (ESLint/Prettier). No hay comandos para ejecutar tests individuales.

## Estructura del Proyecto

```
/
├── src/
│   ├── components/     # Componentes Astro reutilizables
│   ├── layouts/        # Plantillas de página (Layout.astro)
│   ├── pages/          # Rutas del sitio (incluye API routes)
│   ├── i18n/           # Utilidades y archivos de traducción
│   ├── styles/         # CSS global y configuraciones Tailwind
│   ├── assets/         # Imágenes y recursos estáticos
│   └── entrypoint.ts   # Punto de entrada Alpine.js
├── public/             # Archivos públicos (favicon, scripts)
├── astro.config.mjs    # Configuración de Astro
└── tsconfig.json       # Configuración de TypeScript
```

## Convenciones de Código

### Archivos Astro (`.astro`)

- Frontmatter (fence `---`) al inicio del archivo
- Props con tipo definido usando TypeScript
- Orden de imports: primero stdlib, luegorelative paths
- Componentes en PascalCase
- Utilidades importadas desde `../i18n/utils`

### TypeScript

- Usar strict mode (heredado de `astro/tsconfigs/strict`)
- Definir tipos explícitamente cuando sea posible
- Usar type inference para casos obvios

### Imports

```typescript
// Primero: imports de librerías externas
import { getRelativeLocaleUrl } from 'astro:i18n';

// Segundo: imports de relative paths
import Banner from '../components/Banner.astro';
import { getLocaleFromUrl, t } from '../i18n/utils';
```

### Naming Conventions

- **Componentes Astro**: PascalCase (ej: `Navbar.astro`, `Footer.astro`)
- **Funciones utilities**: camelCase (ej: `getLocaleFromUrl`, `t`)
- **Constantes/Types**: PascalCase para tipos, UPPER_CASE para constantes
- **Archivos JSON de i18n**: código de idioma (`es.json`, `pt.json`)

### Estilos con Tailwind CSS v4

- Usar `@theme` en `global.css` para definir colores personalizados
- Colores disponibles: `cafeoscuro`, `cafemedio`, `verde`, `amarillo`, `azul`, `cafeclaro`
- Utilizar clases utility de Tailwind en componentes
- DaisyUI disponible para componentes adicionales

### Alpine.js

- Usar directivas `x-data`, `x-show`, `x-transition` en componentes
- Componentes interactivos definidos en el header del archivo `.astro`
- Integración con htmx para cargado dinámico de contenido

### Manejo de Errores

- API Routes: retornar `new Response()` con headers apropiados
- Funciones utils: retornar valores por defecto o el key original si no se encuentra traducción
- Usar `// @ts-ignore` sparingly para tipos externos (ej: Alpine desde CDN)

### Patrones de i18n

```typescript
// Obtener locale desde URL
const locale = getLocaleFromUrl(Astro.url);

// Traducir texto
const translated = t('nav.inicio', locale);

// Generar URLs localizadas
const url = getLocaleUrl('/ruta', locale);
```

### SEO y Metadatos

- Incluir meta description en cada página
- Usar `<ClientRouter />` para transiciones suaves
- Establecer lang attribute dinámicamente según locale

### Assets

- Imágenes en `src/assets/` usar `astro:assets` (`<Image />`)
- Assets públicos en `public/`
- Usar formatos optimizados (webp, avif)

## Notas Adicionales

- Las páginas usan rutas dinámicas `[lang]` para soportar español y portugués
- Redirección `/` -> `/es/` configurada en `astro.config.mjs`
- No hay tests configurados actualmente
- Configuración de VSCode disponible en `.vscode/`