# Proyecto: Sitio Web Lic. Mercedes Martin - Nutricionista

## 📋 Descripción General

Sitio web estático para **Lic. Mercedes Martin**, nutricionista especializada en:
- **Embarazo** (pre-parto y nutrición gestacional)
- **Fertilidad** (acompañamiento nutricional pre-concepción)
- **Postparto** (recuperación y lactancia)
- **Atención personalizada** (consultas y seguimiento)

**Dominio:** `mercedesmartin.com.ar`  
**Tipo:** Sitio estático HTML5 + CSS3 + JavaScript vanilla  
**Objetivo:** Presentar servicios, reservar turnos, captar clientes

---

## 🏗️ Estructura del Proyecto

```
Mercedes/
├── index.html                    # Página principal (hero, servicios, testimonios)
├── sesiones-individuales.html   # Detalles de sesiones individuales (ex atencionPersonalizada.html)
├── acompanamiento-integral.html # Servicios y contenido sobre embarazo (antes embarazo.html)
├── sobremi.html                 # Perfil profesional de Mercedes
├── dudas.html                   # Preguntas frecuentes y contacto (ex turnos.html)
├── gracias.html                 # Página de confirmación post-contacto
├── politica-de-privacidad.html  # Términos legales
├── 404.html                     # Página de error
│
├── Style.css                    # Estilos globales (responsive, temas)
├── script.js                    # Interactividad (menú, formularios, eventos)
│
├── robots.txt                   # SEO - Instrucciones para buscadores
├── sitemap.xml                  # SEO - Mapa del sitio
│
├── img/                         # Assets visuales
│   ├── Logo simple verde.png
│   ├── Logo simple violeta.png
│   ├── Logo 3 verde.png
│   ├── FotoSobreMi.webp
│   ├── Foto-Horizontal-Embarazada-SobreMi.png
│   ├── Video-Embarazo-1080p.mp4
│   ├── VideoFrutas.mp4
│   ├── Favicon files (ico, png)
│   └── Otros (EmbarazadaSobreMi.jpeg, FotoAbordajesTurnos.png, etc.)
│
├── Importante/                  # Documentación de diseño
│   ├── Colores.txt             # Paleta de colores del proyecto
│   ├── Documentacion.txt        # Notas sobre CSS/HTML especiales
│   ├── Pasos dominio NIC y reglas BDD.txt
│   ├── Logos y Tipografías.pdf
│   └── wetransfer_logos_*/     # Logos y assets de diseño
└── (Este archivo)              # Documentación del proyecto
```

---

## 🎨 Diseño & Branding

### Paleta de Colores
| Color | Código | Uso |
|-------|--------|-----|
| Violeta Primario | `#993479` | Buttons, accents, highlights |
| Verde Secundario | `#668367` | Enlaces, elementos secundarios |
| Violeta Oscuro | `#9a5c87` | Hover states, variaciones |
| Verde Claro | `#7f9d89` | Backgrounds suaves |
| Fondo Claro | `#ebe1ee` | Secciones de fondo |
| Gris Violeta | `#9d89a3` | Textos secundarios |
| Verde Pastel | `#9ebbab` | Decoraciones |
| Azul Verde | `#609895` | Accents alternos |

### Tipografía
- **Fuente:** Nunito (Google Fonts)
- **Pesos:** 400 (regular), 700 (bold)
- **Fallback:** System fonts

### Logos
- Logo simple verde (principal en header)
- Logo simple violeta (alternativo)
- Logo 3 versiones (completo)
- Logos con contorno para fondos oscuros
- Palta icon (símbolo recurrente)

---

## 📄 Páginas Principales

### 1. **index.html** (Inicio)
- Hero section con CTA principal
- Presentación de servicios (Embarazo, Fertilidad, Postparto)
- Testimonios/cases de clientes
- Llamada a acción: "Reserva tu turno"
- SEO optimizado con meta tags og:

### 2. **sesiones-individuales.html** (ex atencionPersonalizada.html)
- Descripción detallada del enfoque personalizado
- Beneficios del acompañamiento nutricional
- Testimonios
- CTA: "Agenda tu consulta"

### 3. **acompanamiento-integral.html** (antes embarazo.html)
- Contenido especializado en nutrición durante el embarazo
- Videos educativos (Video-Embarazo-1080p.mp4, mobile version)
- Thumbnails personalizadas (Miniatura-Video-Embarazo-1080p.png, etc.)
- También menciona frutas/nutrición post-parto (VideoFrutas.mp4)

### 4. **sobremi.html**
- Biografía profesional
- Credenciales y experiencia
- Foto profesional (FotoSobreMi.webp)
- Foto horizontal para banners (Foto-Horizontal-Embarazada-SobreMi.png)
- Valor/propuesta de valor

### 5. **dudas.html** (ex turnos.html)
- Preguntas frecuentes en formato acordeón (timeline)
- CTA WhatsApp con mensaje pre-cargado: "Hola Mer! Quisiera agendar un turno con vos"
- Foto descriptiva (FotoAbordajesTurnos.png)

### 6. **gracias.html**
- Confirmación post-envío de formulario
- **Nota:** Colores y fuentes en HTML (no CSS global)

### 7. **politica-de-privacidad.html**
- Términos legales, GDPR compliance
- **Nota:** Colores y fuentes en HTML (no CSS global)

### 8. **404.html**
- Página de error
- Enlace de vuelta a inicio

---

## 🛠️ Tecnologías

- **HTML5:** Estructura semántica
- **CSS3:** Responsive design, flexbox/grid
- **JavaScript:** Interactividad vanilla (sin frameworks)
  - Menú hamburguesa (mobile)
  - Validación de formularios
  - Manejo de eventos
- **Font Awesome 6:** Iconografía
- **Google Fonts:** Tipografía remota
- **Manifest:** PWA ready (site.webmanifest)

---

## 📱 Responsive Design

El sitio está diseñado para funcionar en:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

**Videos:** Versiones mobile optimizadas (Video-Embarazo-mobile.mp4, Miniatura-Video-Embarazo-mobile.png)

---

## 🔍 SEO

### Meta Tags (en index.html)
```
- title: "Lic. Mercedes Martin | Nutricionista Especializada en Fertilidad"
- description: "Acompañamiento nutricional en embarazo, fertilidad..."
- keywords: nutricionista, embarazo, fertilidad, postparto, etc.
- og:image: share-image.jpg (verificar que existe)
- robots: index, follow
```

### Archivos de SEO
- **robots.txt:** Instrucciones para web crawlers
- **sitemap.xml:** Mapa del sitio para buscadores
- **site.webmanifest:** PWA manifest

### Notas SEO
- ⚠️ Verificar que `og:image` en index apunte a un asset real
- ⚠️ Incluir share-image.jpg si no existe

---

## 📋 Versioning & Cache

- **CSS:** `Style.css?v=1.4` (versioning para invalidar caché)
- Considerar aplicar versioning también a `script.js`

---

## 🔄 Historial de Cambios Importantes

### v1.5 (2026-05-22)
- Reemplazo del fondo de video frutal del Hero en `index.html` por el fondo animado con degradados y esferas flotantes de sesiones individuales (`atencion-bg` con `shape-1` y `shape-2`).
- Documentado el código del video de frutas original en `Importante/Documentacion.txt` para fácil recuperación en el futuro.

### v1.4 (2026-05-22)
- `turnos.html` renombrado a `dudas.html` — nav muestra "¿Dudas?", página renombrada a "Preguntas frecuentes"
- `atencionPersonalizada.html` renombrado a `sesiones-individuales.html` — nav muestra "Sesiones Individuales"
- Newsletter integrado vía **Brevo** (Sendinblue) en index.html — formulario con doble opt-in
- Botón WhatsApp en dudas.html con mensaje pre-cargado

---

## 🚀 Próximos Pasos / Mejoras Sugeridas

### Corto Plazo
- [ ] Verificar todos los links internos funcionan
- [ ] Validar que imágenes OG (og:image) existen
- [ ] Revisar formulario de turnos (backend necesario?)
- [ ] Probar responsive en todos los breakpoints
- [ ] Revisar performance (lighthouse score)

### Mediano Plazo
- [ ] Implementar backend para manejo de turnos/formularios
- [ ] Añadir analytics (Google Analytics, etc.)
- [ ] Integración de calendario (Calendly, Acuity, etc.)
- [ ] Traducción a inglés (si se requiere)
- [ ] Blog/Contenido actualizable

### Largo Plazo
- [ ] Sistema de CMS (WordPress, Contentful, etc.) para facilitar updates
- [ ] Tienda de productos si aplica (suplementos, libros, etc.)
- [ ] Comunidad/Forum para clientes
- [ ] App móvil nativa
- [ ] Integración de pagos (MercadoPago, Stripe)

---

## 🔐 Notas de Desarrollo

- **Dominio:** NIC.ar (proveedor argentino) - Ver archivo "Pasos dominio NIC y reglas BDD.txt"
- **Host:** Requiere servidor web para servir estáticos + posible backend
- **Deployment:** Script de CI/CD sugerido
- **Git:** No inicializado en el directorio actual (considerar para versionado)

---

## 👤 Autor/Contacto

**Lic. Mercedes Martin**  
Nutricionista Especializada en Fertilidad, Embarazo y Postparto  
📧 (Revisar en sitio)  
📍 Mar del Plata, Argentina

---

**Última actualización:** 2026-05-22  
**Versión Proyecto:** 1.5
