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


### Sección Apoyo estatal


#### Argentina

¿Cuenta con mecanismos de protección?
✅ Mecanismo de recepción de denuncias y asistencia a víctimas de violaciones de DD.HH
¿Cómo activar el mecanismo?
A través de la Secretaría de Derechos Humanos de la Nación. 
📩 dngv@derhuman.jus.gov.ar
📞 (+54) (11) 5300-4000  Interno 76840.


##### Otras entidades de apoyo:

* Centro de denuncias: ⬇️
La subsecretaría brinda asesoramiento jurídico, acompañamiento psico-social, y ayuda a realizar la denuncia penal correspondiente.
Atención telefónica al 0-800-122-5878
Vía Whatsapp al (+54) (11) 4091-7352
Correo electrónico a denuncias@jus.gob.ar

* Defensoría del pueblo:⬇️
Formulario de ayuda ante violaciones a los derechos humanos, violencia institucional, ambiente y salud.
Link al formulario (https://www.defensor.gob.ar/contactoAreas.php?idS=4)

##### Sobre el Acuerdo de Escazú:

Firmado el 27 de septiembre de 2018.
Ratificado el 22 de enero de 2021
Más información (https://www.argentina.gob.ar/interior/ambiente/articulacion-ambiental/acuerdo-de-escazu)


#### Brasil

¿Cuenta con mecanismos de protección?
✅ Programa de Proteção aos Defensores de Direitos Humanos, Comunicadores e Ambientalistas (PPDDH)
¿Cómo activar el mecanismo?
Ingresar en Gov.br (http://Gov.br) (es necesario tener cuenta)
Enviar la solicitud escrita por correo: defensores@mdh.gov.br
Enviar una postal a la Secretaría Nacional de Derechos Humanos (Sector Comercial Sur - B, Bloque 9, Lote C Edifício Corporativo Parque Cidade, Torre A, 9º piso Brasilia, Distrito Federal, 70308-200)

##### Otras entidades de apoyo:

* Bahia ⬇️
Secretaría de Justicia, Derechos Humanos y Desarrollo Social
Teléfono:
(71) 3115-6577
(71) 3115-0315
(71) 3115-6674
(71) 3115-6184
Correo: cabinet@sjdhds.ba.gov.br 

* Maranhão ⬇️
Secretaria de Estado dos Direitos Humanos e Participação Popular.
Dirección: Edificio Clodomir Milet, 2.º Piso, Bloque A. Avenida Jerônimo de Albuquerque, S/N. Calhau- São -Luís/MA Código Postal: 65074-220
Teléfono:
(98) 3210-5330
Correo: gabinete.sedihpop@gmail.com 

* Minas Gerais⬇️
Secretaría de Estado de Desarrollo Social (Sedese)
Teléfono:
(31) 3916-8207
(31) 3916-8210
(31) 3916-8338
Correo: cabinetsec@social.mg.gov.br 

* Paraíba 
Secretaría de Estado de Desarrollo Humano - SEDH
Teléfono:
(83) 3133 4064
(83) 3133 4085
(83) 3133 4081
(83) 3133 4072
Correo:
asesoriadegabinete@sedh.pb.gov.br
ppddh.pb@gmail.com
derechoshumanos.sedh@gmail.com 

* Río de Janeiro
Secretaría de Estado de Desarrollo Social y Derechos Humanos – SEDSDH
Teléfono:
(21) 2334-5540
Correo:
coordenacaoprotecao.dhrj@gmail.com
gabinete.socialrj@sedsdh.rj.gov.br 

* Ceará:⬇️
Secretaría de Protección Social, Justicia, Ciudadanía, Mujer y Derechos Humanos
Teléfono:
 (85) 3101-4557
Chat en línea: Más información aquí (https://www.sps.ce.gov.br/2020/07/08/sps-cria-chat-para-facilitar-atendimento-do-cidadao/)

* Mato Grosso⬇️
Secretaría de Estado de Asistencia Social y Ciudadanía de Mato Grosso.
Dirección: R. C, S/N - Centro Político Administrativo. Cuiabá - MT, 78050-970
Teléfono:
(65) 9 9339-9735
Correo: ppddh@setasc.mt.gov.br 

* Amazonas⬇️
Secretaría de Estado de Justicia y Derechos Humanos
Teléfono:
(91) 4009-2722
(91) 4009-2723
(91) 4009-2744
(91) 4009-2700
Correo: cabinet@sejudh.pa.gov.br 

* Pernambuco⬇️
Secretaría de Justicia y Derechos Humanos del Estado de Pernambuco - SJDH/PE
Teléfono:
(81) 3182-7625 
Contacto:
http://www.sjdh.pe.gov.br/faleconosco  

* Río Grande do Sul
Secretaría de Justicia y Sistemas Penales y Socioeducativos
Dirección: Avenida Borges de Medeiros, 1501. Código Postal: 90119-900 / Porto Alegre - RS
Correo: ppddh@calabria.com.br 

##### Sobre el Acuerdo de Escazú:

Se firmó el acuerdo el 27 de septiembre de 2018 , pero no ha sido ratificado. 
Más información aquí (https://escazubrasil.org.br/)


#### Chile

¿Cuenta con mecanismos de protección?
✅ Protocolo de Protección a Personas Defensoras de Derechos Humanos.
¿Cómo activar el mecanismo?
Si existe un delito, se derivará al Ministerio público, si no, se adoptarán medidas de derivación y seguimiento.
Para activar el protocolo descarga el formulario de solicitud (link) y envíala al correo: protocolodefensores@minjusticia.cl

##### Sobre el Acuerdo de Escazú:

Ratificado el 13 junio de 2022
Chile es Estado parte del tratado desde el 11 de septiembre de 2022. 
Más información aquí (https://escazu.mma.gob.cl/acuerdo-de-escazu/que-es-el-acuerdo-de-escazu/)


#### Colombia

¿Cuenta con mecanismos de protección?
✅ Protocolo de protección de la Unidad de Protección Nacional
¿Cómo activar el mecanismo?
Activar el protocolo de protección a través de una solicitud
Solicitud de protección individual o colectiva (https://www.unp.gov.co/atencion-y-servicios-a-la-ciudadania/)

##### Otras entidades de apoyo:

* Ministerio de Ambiente y desarrollo Sostenible: ⬇️
Medidas de protección para liderazgos ambientales.
Más información (https://www.minambiente.gov.co/lideres-ambientales/identificacion-y-proteccion/)

* Defensoría del pueblo:⬇️
Protege y promociona los derechos humanos en Colombia.
Sitio web (https://www.defensoria.gov.co/en/web/guest)
Directorio (https://www.defensoria.gov.co/en/directorio-de-dependencias)

##### Sobre el Acuerdo de Escazú:

Firmado el 11 de diciembre de 2019 y ratificado el 25 de septiembre de 2024.
Más información (https://escazuahora.com.co/home/escazucolombia/)


#### México

¿Cuenta con mecanismos de protección?
✅ Protección para personas defensoras de derechos humanos y periodistas.
¿Cómo activar el mecanismo?
Dirección: Calle Dinamarca número 84, piso 7, colonia Juárez, Delegación Cuauhtémoc, Ciudad de México. C. P. 06600.
Teléfono: 01 800 800 40 50 llamada sin costo - 01 55 5209 88 00 ext. 30863
Correo: mecanismo@segob.gob.mx

##### Otras entidades de apoyo:

* Aguascalientes: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Perú 502, Fracc. Jardines de Santa Elena, Col. República de Perú # 502 C.P: 20236, Ags. México.
Teléfono:
01(449) 1407855
01(449) 140 7860
01(449) 804 0165
Correo: correo@dhags.org 

* Baja california sur: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Blvd. Constituyentes de 1975 e/ Calle Cabrilla y Calle Tiburón, Fraccionamiento Fidepaz, C. P. 23090, La Paz, Baja California Sur.
Teléfono:
 01 (612) 123 14 04
Correo:
quejas@derechoshumanosbcs.org.mx 

* Coahuila: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Hidalgo 303 esquina con Aldama Zona Centro C.P. 25000. Saltillo, Coahuila. 
Teléfono:
01(844) 416 21 10
01(844) 416 20 50
Correo:
cdhec@org.mx;
saltillo@cdhec.org.mx 

* Chiapas: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Boulevard Andrés Serra Rojas # 1090 Torre Chiapas Piso 17, Colonia Paso Limón C.P. 29045 Tuxtla Gutiérrez, Chiapas.
Teléfono:
01 (961) 602 89 80
01 (961) 602 89 81
01 800 55 282 42 
Correo:
presidencia@cedhchiapas.org
juan.trinidad@cedhchiapas.org 

* Durango: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Cerro Gordo No. 32 Int. 13, Col. Fracc. Lomas del Parque. Durango, C,P. 34100
Teléfono:
800 170 55 55 
Correo:
primeravisitaduria@cedhdurango.org.mx

* Guanajuato: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Avenida Guty Cárdenas, No.1444, Puerta San Rafael, C.P.37480 León, Gto.
Teléfono:
01 (477) 770 08 45
01 800 470 44 00
Correo:
gahva@hotmail.com
centroestatal@derechoshumanosgto.org.mx 

* Jalisco: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Pedro Moreno 1616, Americana, 44160 Guadalajara, Jal.
Teléfono:
33 3669 1100
Correo: cedhjalisco@cedhj.org.mx  

* Michoacán: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Fernando Montes de Oca #108, Col Chapultepec Norte, CP 58260 Morelia Michoacán.39000, Chilpancingo.
Teléfono:
(443)11 33 500;
(443) 46 50 330
Correo: contacto@cedhmichoacan.org 

* Nayarit: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Calle Encino #18, entre calle paraíso y Av. Jacarandas, Colonia San Juan Tepic, Nayarit
Teléfono:
311 217 8988
311 213 8986
Correo: cedhnayarit@gmail.com

* Oaxaca: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Calle de los Derechos Humanos número 210, Colonia América, Oaxaca de Juárez, Oaxaca. C.P. 68104.
Teléfono:
(951) 503 0215
(951) 503 0220
(951) 513 5185
(951) 513 5191
(951) 513 5197
Correo: contactanos@ddhpo.org 

* Querétaro: ⬇️
Defensoría de los Derechos Humanos
Dirección: Av. Luis Vega Monrroy 1101, zona dos extendida, Plazas del Sol 1ra Secc, 76099 Santiago de Querétaro, Qro., México
Teléfono:
44 21 09 54 00
Correo: quejas@ddhqro.org

* San Luis de Potosí: ⬇️
Comisión Estatal de Derechos Humanos
Dirección:  Mariano Otero 685, Col. de Tequisquiapan, C.P. 78250. San Luis Potosí, S.L.P.
Teléfono:
444 198 5000
Correo: presidencia@derechoshumanosslp.org 

* Sonora: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Blvd. Luis Encinas y Periférico Poniente. Hermosillo Sonora. 
Teléfono:
800 200 0152
Correo: contacto@cedhsonora.org.mx 

* Tamaulipas: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Río Guayalejo no. 223 Esq. Río Bravo Fracc. Zozya, CP 88070
Teléfono:
800 703 23 48
Correo: codhet@prodigy.net.mx 

* Veracruz: ⬇️
Comisión Estatal de Derechos Humanos
Dirección: Pico De Orizaba No. 5, Col. Sipeh Ánimas. Cp 91067
Teléfono:
+52 2281414300
800 2602200
Correo: comentarios@cedhveracruz.org.mx 

* Zacatecas: ⬇️
Comisión Estatal de Derechos Humanos
Dirección:  Circuito Cerro Gato S/N; Ciudad Gobierno; Zacatecas; Zac., C.P. 98160 
Teléfono:
800 624 27 27
Correo: comentarios@cedhzac.org.mx 

* Baja california:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Diego Rivera No. 2532 entre Av. Paseo de los Héroes y Blvd. Sánchez Taboada Zona Río Tijuana. 
Teléfono:
01 (664) 973 2373
01 (664) 973 2374
01 800 026 7342 
Correo:
transparencia.cedh@derechoshumanosbc.org 
tijuana@pdhbc.org 

* Campeche:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Prolongación de la 59 # 6, centro, C.P. 24000, San Francisco de Campeche
Teléfono:
(981) 811 45 63 
Correo: cdhec@inedh.edu.mx 

* Colima:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Aniceto Castellanos no. 410-A, Colonia San Pablo C.P. 28060 Colima.
Teléfono:
312 31 49084
312 31 47186
312 31 22994
312 31 47795
Correo:
cdhcolima@cdhcolima.org.mx
codehucol@cdhcolima.org.mx 

* Chihuahua:⬇️
Comisión Estatal de Derechos Humanos
Avenida Universidad 1449, Colonia Pueblo Axotla, Del. Álvaro Obregón, 01030 Ciudad de México 
Teléfono:
01 (55)52 29 56 00 Ext. 1102 
Correo: cdhdf@cdhdf.org.mx 

* Guerrero:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Edificio Morelos Av. Benito Juárez, Esq. Con Galo Soberon Y Parra, Sin Número. C.P. 39000, Chilpancingo.
Teléfono:
01 800 710 66 00
01 800 716 26 98
01 800 710 66 18
Correo: coddehum@prodigy.net.mx 

* Hidalgo:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Av. Juárez s/n esquina José María Iglesias, Colonia Centro, Pachuca de Soto, 42000
Teléfono:
800 71 765 96
Correo:
vis_gral_pachuca@cehhgo.org 
presidencia@cdhh.org 

* Estado de México:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Av. Nicolás San Juan 113, Col. Ex rancho Cuauhtémoc, Toluca, Edo. de México, C.P.50010
Teléfono:
800 999 4000
800 999 4002
Correo: codhem@netspace.com.mx  

* Morelos:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Av. San Diego 1404, Jardines las Delicias, 62343 Cuernavaca, Mor.
Correo: contacto@cdhmorelos.org.mx  

* Nuevo León:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Cuauhtémoc 335 Norte entre MM de Llano y Espinosa, Col. Centro, Monterrey, N.L.
Teléfono:
800 822 9113 
Correo: cedhnl@cedhnl.org.mx 

* Puebla:⬇️
Comisión Estatal de Derechos Humanos
Dirección: 5 poniente #339 Col. Centro, C.P. 72000, Puebla, Pue.
Teléfono:
2223094700
Correo: informes@cdhpuebla.org.mx

* Quintana Roo:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Av. Adolfo López Mateos 424, Campestre, 77030 Chetumal, Q.R., México.
Teléfono:
(52) 983 832 7090
Correo: cdheqroo@cdheqroo.org.mx

* Sinaloa:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Ruperto L. Paliza Sur 566, Av Dr Ruperto Paliza 566, Miguel Alemán, 80200 Culiacán Rosales, Sin., México
Teléfono:
(662) 31 38 101 ext. 104
Correo: memsinaloa@cedhsinaloa.org.mx 

* Tabasco:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Boulevard Adolfo Ruiz Cortines Esquina Con Francisco Javier Mina No. 503 Colonia Casa Blanca, Villahermosa, Tabasco. C.P. 86060
Teléfono:
993 315 3545
993 315 3467
800 000 2334
Correo: dirquejas@cedhtabasco.org.mx 

* Tlaxcala:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Arquitectos 27, Loma Bonita, Tlacomulco, 90090 Tlaxcala de Xicohténcatl, Tlax., México
Teléfono:
(246) 46 21630
(246) 46 29160
(246) 46 27595
(246) 4625184
Correo: cedhtlax@prodigy.net.mx 

* Yucatán:⬇️
Comisión Estatal de Derechos Humanos
Dirección: Calle 27 No. 72 entre 8 y 10 Colonia México. C.P. 97125.
Teléfono:
(999) 927-92-75
(999) 927-85-96
(999) 688-67-54
800-2263439
Correo: codhey@prodigy.net.mx 

##### Acuerdo de Escazú:
Firmado el 27 de septiembre de 2018. Ratificado 22 de enero de 2021
Más información (https://www.gob.mx/semarnat/acciones-y-programas/el-acuerdo-de-escazu#:~:text=Es%20el%20primer%20acuerdo%20ambiental,derechos%20humanos%20en%20asuntos%20ambientales.)


#### Perú

¿Cuenta con mecanismos de protección?
✅ Procedimiento de alerta temprana frente agresiones sufridas por personas defensoras de Derechos Humanos
¿Cómo activar el mecanismo?
Ante el Viceministerio de derechos humanos y acceso a la justicia MINJUSDH.
Teléfono: 948447562
Correo:mecanismodefensoresddhh@minjus.gob.pe
Solicitud virtual: Disponible aquí (https://www.gob.pe/20416-acceder-a-mesa-de-partes?child=11211)

##### Otras entidades de apoyo:

* Ministerio de Justicia y Derechos Humanos: ⬇️
Guía práctica para la protección de personas defensoras ambientales. (aquí) (https://cdn.www.gob.pe/uploads/document/file/3265462/Gu%C3%ADa%20pr%C3%A1ctica%20protecci%C3%B3n%20personas%20defensoras%20ambientales.pdf)

##### Acuerdo de Escazú:

Firma el acuerdo el 27 de septiembre de 2018
No se ha ratificado el acuerdo.


#### Uruguay

¿Cuenta con mecanismos de protección?
✅ la Institución de Derechos Humanos y Defensoría del Pueblo posee mecanismos de recepción de denuncias para víctimas de violacion de los derechos humanos.
¿Cómo activar el mecanismo?
Correo electrónico: denuncias@inddhh.gub.uy
Dirección: Bulevar Artigas 1532, Montevideo.  
Horario de atención: de lunes a viernes de 10:00 a 17:00 horas. ( Se recomienda agendar previamente por vía telefónica marcando al 1948, opción 2)
Vía telefónica: 1948, opción 2. 

##### Acuerdo de Escazú:

Firmó el acuerdo el 27 de septiembre de 2018.
Ratificado el 26 de septiembre de 2019.
Más información. (https://www.gub.uy/ministerio-ambiente/politicas-y-gestion/acuerdo-regional-sobre-acceso-informacion-participacion-publica-acceso-justicia)


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


### Sección de Acompañamiento

- Está inserta en el layout general de la página.
- Luego de la barra principal está el texto "Organizaciones que trabajan a nivel regional o global"
- Luego viene una franja horizontal con 4 cajas, cada una es:

Front Line Defenders
Organización internacional de Derechos Humanos, enfocada en proteger a personas defensoras en riesgo. Cuenta con una línea de contacto para emergencias.

Global Witness
Dedicados a exponer a las industrias que se benefician de la emergencia climática y apoyan  a las personas que luchan para defender sus comunidades y sus derechos.

Protection International
Se especializa en trabajo preventivo, acompañando a personas defensoras de Derechos Humanos a crear sus estrategias de protección.

Fondo de Acción Urgente
Fondo para América Latina y el Caribe hispanohablante, apoyando el trabajo de personas defensoras y sus movimientos desde una perspectiva feminista.


#### Sección de países


