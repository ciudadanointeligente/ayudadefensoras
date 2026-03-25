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




### Sección Autoprotección

La sección de Autoprotección del sitio está formada por tres páginas:
- Autoprotección digital (autoproteccion.astro)(coincide con la sección principal de autoproteccion)
- Autoprotección física y comunitaria (autoproteccionfisica.astro)
- Autoprotección psicosocial (autoproteccionpsicosocial.astro)

Las tres páginas deben tener integrado el Layout del sitio.

En las tres páginas va este texto debajo de la barra principal:
<div class="w-96 h-14 text-center justify-start text-stone-600 text-5xl font-medium font-['Geologica'] leading-10">Herramientas de</div>
<div class="text-center justify-start text-amber-600 text-7xl font-extrabold font-['Geologica'] uppercase leading-[77.49px]">autoprotección</div>

Este es el contenido de cada página:

#### Autoprotección digital

Luego del texto principal vienen los 3 cuadros con Shields, como los que están en index.astro:
  <!-- Shields -->
  <section class="mt-12 md:mt-12 flex justify-center">
    <div class="container max-w-6xl mx-auto px-4">
      <div class="flex flex-col flex-wrap md:flex-row place-content-center gap-8">
        <div class="w-80 h-auto bg-amarillo rounded-xl relative mt-12">
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-amarillo rounded-full flex items-center justify-center">
            <img src={shieldIcon.src} alt="Shield" class="w-16 h-16" />
          </div>
          <div class="mt-12 px-4 text-center text-cafeoscuro">
            <h3 class="text-lg font-bold uppercase">APOYO ESTATAL</h3>
            <p class="text-md mt-2 mx-6 pb-10">Conoce los mecanismos institucionales y programas de protección disponibles en tu país.</p>
          </div>
        </div>
        <div class="w-80 h-auto bg-verde rounded-xl relative mt-12">
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-verde rounded-full flex items-center justify-center">
            <img src={shieldIcon.src} alt="Shield" class="w-16 h-16 invert brightness-20" />
          </div>
          <div class="mt-12 px-4 text-center text-white">
            <h3 class="text-lg font-bold uppercase">AUTOPROTECCIÓN</h3>
            <p class="text-md mt-2 mx-6 pb-10">Herramientas de autoprotección digital, física, comunitaria y psicosocial para prevenir riesgos.</p>
          </div>
        </div>
        <div class="w-80 h-auto bg-cafemedio rounded-xl relative mt-12">
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-cafemedio rounded-full flex items-center justify-center">
            <img src={shieldIcon.src} alt="Shield" class="w-16 h-16 invert brightness-20" />
          </div>
          <div class="mt-12 px-4 text-center text-white">
            <h3 class="text-lg font-bold uppercase">ACOMPAÑAMIENTO</h3>
            <p class="text-md mt-2 mx-6 pb-10">Organizaciones nacionales y regionales que acompañan a personas defensoras y pueden orientarte.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
Pero con el texto de las tres páginas: 
digital, física y comunitaria y psicosocial

El cuadro de la página que corresponde, en este caso Autoprotección digital, debe ser en --color-amarillo: #F7CB67; y el texto en x1, negrita y alta de   --color-cafeoscuro: #655846;

Los otros dos cuadros deben ser al revés.

#### Contenido que cambia en cada página

Luego viene la sección principal de cada página donde están los contenidos. Esta sección está dividida en dos columnas de aprox. 40% y 60%.

En la columna izquierda (40%) va el siguiente contenido:
<div class="w-32 h-4 text-center justify-center text-stone-600 text-xl font-black font-['Geologica'] leading-6">Seguridad</div>
<div class="w-96 h-24 justify-start text-amber-600 text-7xl font-black font-['Geologica'] uppercase leading-[77.49px]">digital</div>
<div class="w-[461px] justify-start text-stone-600 text-xl font-normal font-['Geologica'] leading-6">Acciones simples y efectivas para resguardar tus datos, comunicaciones y fortalecer tu seguridad digital.</div>
<div class="w-96 justify-start text-stone-600 text-xl font-black font-['Geologica'] uppercase leading-6">Recursos útiles:</div>
<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-9 justify-start text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Plataforma de Recursos de Seguridad Digital para la Sociedad Civil</div>

<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-11 justify-start text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Open Briefing – Protocolo de Seguridad Holística</div>

<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-10 justify-start text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Kit de Primeros Auxilios Digitales (Digital First Aid Kit)</div>

<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-10 justify-start"><span class="text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Manual de seguridad digital</span><span class="text-amber-600 text-lg font-bold font-['Geologica'] leading-6"> <br/>de Ciudadanía Inteligente</span></div>

<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-10 justify-start"><span class="text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Seguridad digital: Concepto y herramientas básicas</span><span class="text-amber-600 text-lg font-bold font-['Geologica'] leading-6"> (Conexo)</span></div>

<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-9 justify-start"><span class="text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Tip: Plataformas y aplicaciones más seguras para activistas</span><span class="text-amber-600 text-lg font-bold font-['Geologica'] leading-6"> (Ciudadanía Inteligente)</span></div>

<div class="size-9 relative">
    <div class="w-3.5 h-4 left-[11.08px] top-[21.58px] absolute origin-top-left -rotate-90 border-[3.25px] border-amber-600"></div>
    <div class="w-6 h-1 left-[7.92px] top-[24.67px] absolute rounded-sm border-[3.25px] border-amber-600"></div>
</div>
<div class="w-96 h-10 justify-start"><span class="text-amber-600 text-lg font-bold font-['Geologica'] underline leading-6">Manual de activismo digital</span><span class="text-amber-600 text-lg font-bold font-['Geologica'] leading-6"> (Ciudadanía Inteligente)</span></div>


En la columna derecha (70%) va el siguiente contenido:
<div class="w-96 h-14 justify-start text-stone-600 text-2xl font-medium font-['Geologica'] leading-7">Recomendaciones</div>
<div class="text-center justify-start text-stone-500 text-4xl font-extrabold font-['Geologica'] uppercase leading-10">principales</div>
<div class="w-[689px] h-[532px] bg-lime-200/30 rounded-[19.83px]">
<div class="w-[626px] justify-start"><span class="text-stone-600 text-lg font-normal font-['Geologica'] leading-6"><br/></span><span class="text-stone-600 text-lg font-normal font-['Geologica'] leading-6">Usa contraseñas seguras y únicas; activa la verificación en dos pasos.<br/></span><span class="text-stone-600 text-lg font-normal font-['Geologica'] leading-6"><br/></span><span class="text-stone-600 text-lg font-normal font-['Geologica'] leading-6">Cambia tus claves de forma periódica. <br/>Evita redes WiFi públicas; conéctate solo a redes de confianza. <br/>Mantén bloqueados tus dispositivos cuando no estén en uso. <br/>Sé cuidadosa/o con lo que compartes en redes; evita publicar tu ubicación. <br/>Define reglas internas para el manejo de información sensible. <br/>Controla quién tiene acceso a ciertos archivos o plataformas; revisa permisos regularmente. <br/>Usa plataformas seguras para coordinar y compartir información. <br/>Mantén copias de seguridad con acceso restringido. <br/>Define pasos claros frente a robos, hackeos o pérdida de información.</span></div>
</div>



#### Autoprotección física y comunitaria

Este es el contenido de la página Autoprotección física y comunitaria:
Autoprotección física y
Comunitaria

Acciones simples y efectivas para resguardar tus datos, comunicaciones y fortalecer tu seguridad digital.

Recursos útiles:
-(ícono download) Manual de Seguridad para Defensores/as en Riesgo – Front Line Defenders
-(ícono download) Guía Práctica de Seguridad Comunitaria para Mujeres Defensoras de Derechos Económicos, Sociales y Culturales (proDESC)
-(ícono download) Protección integral, seguridad y estrategias de autocuidado (Ciudadanía Inteligente y Amnistía Internacional México)


Recomendaciones
principales

Prevención personal:

Analiza tu entorno: zonas de riesgo, actores locales, conflictos.

Observa patrones: horarios, actividades o personas que se repiten en contextos riesgosos.

Alterna tus rutas; elige caminos más seguros.

Lleva identificación y contactos de emergencia.

Informa a alguien de confianza sobre tu agenda y ubicación.

Prevención comunitaria:

Identifiquen colectivamente amenazas, actores de riesgo y situaciones vulnerables.

Establezcan protocolos de emergencia con roles claros.

Definan contactos confiables y rutas seguras.

Usen canales seguros para coordinarse. Prefiere servicios de mensajería seguros como signal, y el servicio de correo de Proton Mail, que tiene opciones gratuitas.

Generen alianzas con organizaciones, medios y otras comunidades defensoras.

Distribuyan tareas de cuidado, acompañamiento y vigilancia.


#### Autoprotección psicosocial

Este es el contenido de Autoprotección psicosocial:

Bienestar
psicosocial
La defensa del territorio no solo implica riesgos físicos: también puede generar desgaste emocional.
Recursos útiles:
Guía de Autocuidado y Cuidado Colectivo – ONU DDHH México / Spotlight
Compendio de Herramientas de Autocuidado y Sanación – IM-Defensoras


principales
Recomendaciones

<b>Manejo del estrés</b>

Identifica señales tempranas: agotamiento, irritabilidad, insomnio, sensación constante de alerta.

Realiza pausas activas durante el día: respiración, estiramientos, caminatas cortas.

Practica técnicas breves de meditación.

<b>Salud mental</b>

Establece límites entre trabajo y vida personal.

Realiza actividades placenteras para desconectarte.

Busca acompañamiento profesional si lo necesitas.

<b>Redes de apoyo</b>

Comparte tus preocupaciones con personas cercanas.

Crea apoyo mutuo con compañeros/as que viven situaciones similares.

<b>Cuidado colectivo</b>

Organicen reuniones periódicas para compartir experiencias y apoyo mutuo.

Distribuyan responsabilidades para evitar la sobrecarga.

Definan protocolos comunitarios de cuidado (acompañamiento, contacto en emergencias).

Realicen actividades recreativas para fortalecer la cohesión del grupo.




