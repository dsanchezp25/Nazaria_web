# NazariaApp — Landing Page Design Specification

> **Objetivo**: que al leer este documento puedas generar una landing page con HTML/CSS que refleje fielmente la identidad visual de NazariaApp.
> 
> La app usa **Material 3 (Material You)** con un enfoque plano, limpio y moderno. Sin glassmorphism ni neumorphism. Sombras sutiles, bordes generosamente redondeados.

---

## 1. PALETA DE COLORES

### 1.1 Colores principales (Light Mode)

| Token | Hex | Uso |
|-------|-----|-----|
| **`primary`** | **`#45148A`** | Color de marca. Botones principales, headers, acentos clave, iconos activos |
| `onPrimary` | `#FFFFFF` | Texto/iconos sobre `primary` |
| `primaryContainer` | `#F3DAFF` | Contenedores con acento primario (tarjetas destacadas, badges) |
| `onPrimaryContainer` | `#2D0063` | Texto sobre `primaryContainer` |
| `secondary` | `#625B71` | Color secundario (menos protagonismo) |
| `secondaryContainer` | `#E8DEF8` | Contenedores secundarios |
| `tertiary` | `#7D5260` | Acento terciario |
| `error` | `#B3261E` | Errores, botón "Finalizar", estados negativos |
| **`background`** | **`#FFFBFE`** | Fondo principal de la app |
| **`surface`** | **`#FFFBFE`** | Fondo de tarjetas y superficies |
| `surfaceVariant` | `#E7E0EC` | Variante de superficie (tarjetas alternativas, wizard steps) |
| `onBackground` | `#1C1B1F` | Texto principal sobre fondo |
| `onSurface` | `#1C1B1F` | Texto principal sobre superficies |
| `onSurfaceVariant` | `#49454E` | Texto secundario / sutil |
| `outline` | `#79747E` | Bordes de inputs, divisores |

### 1.2 Colores principales (Dark Mode)

| Token | Hex | Uso |
|-------|-----|-----|
| **`primary`** | **`#E7B8FF`** | Color de marca en dark mode |
| `onPrimary` | `#45148A` | Texto/iconos sobre `primary` dark |
| `primaryContainer` | `#5F2CA6` | Contenedores con acento primario |
| `onPrimaryContainer` | `#F3DAFF` | Texto sobre contenedor |
| **`background`** | **`#1C1B1F`** | Fondo principal dark |
| **`surface`** | **`#1C1B1F`** | Tarjetas dark |
| `surfaceVariant` | `#49454E` | Variante de superficie dark |
| `onBackground` | `#E6E1E6` | Texto principal dark |
| `onSurface` | `#E6E1E6` | Texto sobre superficie dark |
| `onSurfaceVariant` | `#CAC7D0` | Texto secundario dark |
| `outline` | `#94919B` | Bordes dark |

### 1.3 Colores semánticos adicionales

| Token | Hex | Uso |
|-------|-----|-----|
| `BackgroundLight` | `#F7F6F8` | Fondo alternativo claro (pantallas de auth) |
| `BackgroundDark` | `#181121` | Fondo alternativo oscuro |
| `SubtleLight` | `#726487` | Texto muy sutil / placeholders |
| `SubtleDark` | `#A89CBF` | Texto sutil dark |
| `BorderLight` | `#E0DCE5` | Bordes sutiles claros |
| `BorderDark` | `#3A3147` | Bordes sutiles oscuros |
| `accentGold` | `#D4A017` | Acento dorado (histórico, usar con moderación) |

### 1.4 Colores de zonas (mapa)

| Zona | Hex |
|------|-----|
| Macarena | `#4CAF50` |
| Isla Cartuja | `#00BCD4` |
| Triana | `#FF9800` |
| Nervión | `#3F51B5` |
| El Porvenir | `#E91E63` |
| Centro | `#9E9E9E` |

### 1.5 Variables CSS recomendadas

```css
:root {
  /* ===== Light Mode (default) ===== */
  --color-primary: #45148A;
  --color-on-primary: #FFFFFF;
  --color-primary-container: #F3DAFF;
  --color-on-primary-container: #2D0063;
  --color-secondary: #625B71;
  --color-secondary-container: #E8DEF8;
  --color-tertiary: #7D5260;
  --color-error: #B3261E;
  --color-background: #FFFBFE;
  --color-surface: #FFFBFE;
  --color-surface-variant: #E7E0EC;
  --color-on-background: #1C1B1F;
  --color-on-surface: #1C1B1F;
  --color-on-surface-variant: #49454E;
  --color-outline: #79747E;
  --color-subtle: #726487;
  --color-border: #E0DCE5;
  --color-accent-gold: #D4A017;

  /* ===== Spacing ===== */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* ===== Border Radius ===== */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* ===== Shadows ===== */
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-sheet: 0 -4px 16px rgba(0, 0, 0, 0.12);

  /* ===== Typography ===== */
  --font-display: 'Playfair Display', serif;
  --font-body: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ===== Dark Mode ===== */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #E7B8FF;
    --color-on-primary: #45148A;
    --color-primary-container: #5F2CA6;
    --color-on-primary-container: #F3DAFF;
    --color-background: #1C1B1F;
    --color-surface: #1C1B1F;
    --color-surface-variant: #49454E;
    --color-on-background: #E6E1E6;
    --color-on-surface: #E6E1E6;
    --color-on-surface-variant: #CAC7D0;
    --color-outline: #94919B;
    --color-subtle: #A89CBF;
    --color-border: #3A3147;
  }
}
```

---

## 2. TIPOGRAFÍA

### 2.1 Familias tipográficas

| Fuente | Familia CSS | Peso | Uso |
|--------|-------------|------|-----|
| **Playfair Display** | `'Playfair Display', serif` | ExtraBold (800), Bold (700), Black (900) | Títulos, "NAZARIA" wordmark, splash screen, diálogos |
| **System Default** | `'Roboto', -apple-system, sans-serif` | Regular (400), Medium (500), SemiBold (600), Bold (700) | Todo el texto de cuerpo, labels, botones, menús |

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 2.2 Escala tipográfica

| Nivel | Tamaño | Peso | Font Family | Uso |
|-------|--------|------|-------------|-----|
| `display` | **48px** | 800 (ExtraBold) | Playfair Display | Hero title "NAZARIA" |
| `h1` | **32px** | 700 (Bold) | Roboto | Page headings |
| `h2` | **28px** | 700 (Bold) | Roboto | Section headings |
| `h3` | **24px** | 600 (SemiBold) | Roboto | Subsection headings |
| `h4` | **22px** | 700 (Bold) | Playfair Display | Decorative section titles |
| `h5` | **20px** | 700 (Bold) | Roboto | Card titles, emphasis |
| `body-lg` | **20px** | 400 (Regular) | Roboto | Large body text |
| `body-md` | **18px** | 400 (Regular) | Roboto | Body text |
| `body-sm` | **16px** | 400 (Regular) | Roboto | Secondary body text |
| `label-lg` | **16px** | 600 (SemiBold) | Roboto | Button text, labels |
| `label-sm` | **14px** | 500 (Medium) | Roboto | Small labels, captions |
| `caption` | **12px** | 400 (Regular) | Roboto | Metadata, timestamps |

### 2.3 CSS de tipografía

```css
/* Títulos decorativos (NAZARIA wordmark) */
.font-display {
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: 0.05em;
}

/* Cuerpo de texto */
body {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 400;
  color: var(--color-on-background);
  line-height: 1.6;
}

/* Headings */
h1 { font-size: 32px; font-weight: 700; }
h2 { font-size: 28px; font-weight: 700; }
h3 { font-size: 24px; font-weight: 600; }
h4 { font-family: var(--font-display); font-size: 22px; font-weight: 700; }
h5 { font-size: 20px; font-weight: 700; }

/* Texto sutil / secundario */
.text-subtle {
  color: var(--color-on-surface-variant);
  font-size: 14px;
}
```

---

## 3. BOTONES

### 3.1 Botón primario

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: #FFFFFF;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 14px 32px;
  border: none;
  border-radius: var(--radius-md); /* 12px */
  cursor: pointer;
  min-height: 52px;
  width: 100%;
  max-width: 400px;
  transition: opacity 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variante grande (CTA principal) */
.btn-primary-lg {
  min-height: 72px;
  font-size: 18px;
}
```

### 3.2 Botón secundario (outlined)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--color-primary);
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 14px 32px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md); /* 12px */
  cursor: pointer;
  min-height: 52px;
  width: 100%;
  max-width: 400px;
  transition: background-color 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--color-primary-container);
}
```

### 3.3 Botón de error / peligro

```css
.btn-danger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--color-error);
  color: #FFFFFF;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  padding: 14px 32px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  min-height: 56px;
  width: 100%;
  max-width: 400px;
}
```

### 3.4 Comportamiento general de botones

- **Anchura**: `width: 100%` con `max-width: 400px` (full-width en móvil, contenido en desktop)
- **Altura estándar**: 52px (primario/secundario) o 56px (acciones importantes)
- **Altura CTA grande**: 72px
- **Loading state**: spinner blanco circular + texto oculto o atenuado
- **Border radius**: siempre 12px
- **Font**: 16px SemiBold (600) con 0.5px letter-spacing

---

## 4. TARJETAS (Cards)

### 4.1 Tarjeta estándar

```css
.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-md); /* 12px */
  padding: 16px;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-card-hover);
}
```

### 4.2 Tarjeta variante (wizard steps, secciones destacadas)

```css
.card-variant {
  background-color: var(--color-surface-variant);
  border-radius: var(--radius-lg); /* 16px */
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}
```

### 4.3 Tarjeta con acento primario

```css
.card-primary {
  background-color: var(--color-primary);
  color: #FFFFFF;
  border-radius: var(--radius-md); /* 12px */
  padding: 16px;
}

.card-primary-container {
  background-color: var(--color-primary-container);
  color: var(--color-on-primary-container);
  border-radius: var(--radius-md); /* 12px */
  padding: 16px;
}
```

### 4.4 Tarjeta de noticias / blog

```css
.card-news {
  background-color: var(--color-surface-variant);
  border-radius: var(--radius-md); /* 12px */
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### 4.5 Imagen de tarjeta

Las imágenes dentro de tarjetas (ej. hermandades) usan:
- **Tamaño**: 80px × 80px (avatar) o ocupando el ancho completo (header)
- **Border radius**: `CircleShape` para avatares (9999px), `16px` para headers
- **Overlay**: degradado `transparent → black 80%` en headers para legibilidad de texto

```css
.card-header-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.card-avatar {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  object-fit: cover;
}

/* Overlay degradado sobre imagen header */
.card-img-overlay {
  position: relative;
}
.card-img-overlay::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}
```

---

## 5. CAMPOS DE FORMULARIO (Inputs)

Estilo **OutlinedTextField** de Material 3.

```css
.input {
  display: block;
  width: 100%;
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-on-background);
  background-color: transparent;
  border: 2px solid var(--color-outline);
  border-radius: var(--radius-md); /* 12px */
  outline: none;
  transition: border-color 0.2s ease;
}

.input:focus {
  border-color: var(--color-primary);
}

.input::placeholder {
  color: var(--color-subtle);
}

.input-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-on-surface-variant);
  margin-bottom: 8px;
}
```

---

## 6. ESPACIADO Y LAYOUT

### 6.1 Escala de espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | 4px | Subtitle spacing, timeline lines |
| `sm` | 8px | Icon padding, list gaps, inline spacing |
| `md` | 16px | **Padding horizontal estándar**, inner card padding, gaps entre elementos |
| `lg` | 24px | Separación entre secciones, padding de bottom sheets |
| `xl` | 32px | Padding lateral de pantallas de auth |
| `2xl` | 48px | FAB size, spacing grande entre bloques |

### 6.2 Layout recomendado

```css
.container {
  width: 100%;
  max-width: 480px; /* móvil: max 480px como la app */
  margin: 0 auto;
  padding: 0 var(--space-md); /* 16px horizontal */
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

.section {
  padding: var(--space-lg) 0; /* 24px vertical entre secciones */
}

.section-title {
  margin-bottom: var(--space-md); /* 16px debajo de títulos */
}
```

---

## 7. BORDES REDONDEADOS (Border Radius)

| Valor | Clase | Uso |
|-------|-------|-----|
| `2px` | `radius-xs` | Indicadores de color, dots, scrollbar |
| `8px` | `radius-sm` | Icon containers pequeños |
| **`12px`** | **`radius-md`** | **Botones, tarjetas estándar, inputs, chips** |
| **`16px`** | **`radius-lg`** | **Tarjetas wizard, imágenes header, contenedores principales** |
| `20px` | `radius-xl` | Pills de zona en el mapa |
| `24px` (top only) | `radius-sheet` | Bottom sheets |
| `50%` / `9999px` | `radius-full` | Avatares, FABs, dots de timeline |

```css
.radius-xs { border-radius: 2px; }
.radius-sm { border-radius: var(--radius-sm); }
.radius-md { border-radius: var(--radius-md); }
.radius-lg { border-radius: var(--radius-lg); }
.radius-xl { border-radius: var(--radius-xl); }
.radius-full { border-radius: var(--radius-full); }
```

---

## 8. SOMBRAS Y ELEVACIONES

```css
.shadow-none { box-shadow: none; }
.shadow-card { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12); }
.shadow-card-hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
.shadow-elevated { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12); }
.shadow-sheet { box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.12); }

/* Ejemplo de uso en navbar */
.navbar {
  background-color: var(--color-surface);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
```

---

## 9. GRADIENTES

Solo se usa **un tipo de gradiente** en toda la app:

```css
/* Overlay oscuro sobre imágenes para legibilidad de texto */
.gradient-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    transparent 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  pointer-events: none;
}

/* Versión más sutil */
.gradient-overlay-subtle {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3) 0%,
    transparent 100%
  );
}
```

---

## 10. ICONOGRAFÍA

- **Librería**: Material Icons (Google Fonts o SVG inline)
- **Estilo**: Outlined (preferido) o Filled

```html
<!-- Opción 1: Google Material Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

<!-- Uso -->
<span class="material-symbols-outlined" style="font-size: 24px; color: var(--color-on-surface-variant);">
  home
</span>
```

| Tamaño | Uso |
|--------|-----|
| 14px-16px | Íconos inline, badges |
| 20px | Íconos de tarjeta, acompañando texto |
| 24px | Íconos de navegación, estándar |
| 28px-32px | Íconos de encabezado |
| 40px-56px | Íconos destacados, hero |

**Íconos comunes en la app:** `home`, `list`, `person`, `edit`, `schedule`, `location_on`, `close`, `groups`, `chevron_right`, `arrow_back`, `warning`, `info`, `timeline`, `help_outline`, `keyboard_arrow_right`

---

## 11. NAVEGACIÓN Y HEADER

### 11.1 Header bar (NazariaHeader)

```css
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: #FFFFFF;
  height: 56px;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-title {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.header-back {
  position: absolute;
  left: 8px;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 8px;
}
```

### 11.2 Bottom Navigation Bar

```css
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  height: 64px;
  padding: 0 8px;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.08);
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--color-on-surface-variant);
  font-size: 12px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius-lg);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  background: none;
}

.bottom-nav-item.active {
  color: var(--color-on-primary);
  background-color: var(--color-primary);
}
```

---

## 12. EJEMPLO COMPLETO DE HERO SECTION

```html
<section class="hero" style="
  background-color: var(--color-primary);
  color: #FFFFFF;
  padding: 48px 16px 64px;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
">
  <img src="logo.png" alt="Nazaria" style="width: 180px; height: 180px;" />

  <h1 style="
    font-family: var(--font-display);
    font-size: 48px;
    font-weight: 800;
    letter-spacing: 0.05em;
    margin: 0;
  ">NAZARIA</h1>

  <p style="
    font-size: 20px;
    font-weight: 400;
    max-width: 400px;
    line-height: 1.5;
    opacity: 0.9;
  ">
    Tu acompañante para la Semana Santa de Sevilla.
    Encuentra tu hermandad y planifica tu recorrido perfecto.
  </p>

  <button class="btn-primary btn-primary-lg" style="margin-top: 16px;">
    Descargar App
  </button>

  <div style="display: flex; gap: 32px; margin-top: 16px; opacity: 0.8;">
    <span class="material-symbols-outlined" style="font-size: 40px;">map</span>
    <span class="material-symbols-outlined" style="font-size: 40px;">schedule</span>
    <span class="material-symbols-outlined" style="font-size: 40px;">location_on</span>
  </div>
</section>
```

---

## 13. EJEMPLO COMPLETO DE SECCIÓN DE FEATURES

```html
<section class="section container" style="padding: 64px 0;">
  <h2 style="
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 8px;
  ">¿Qué ofrece Nazaria?</h2>

  <p style="
    color: var(--color-on-surface-variant);
    text-align: center;
    margin-bottom: 32px;
    font-size: 16px;
  ">Todo lo que necesitas para vivir la Semana Santa</p>

  <div style="
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  ">
    <!-- Feature Card -->
    <div class="card-variant" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      padding: 24px;
    ">
      <div style="
        width: 56px;
        height: 56px;
        border-radius: var(--radius-full);
        background-color: var(--color-primary-container);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span class="material-symbols-outlined" style="font-size: 32px; color: var(--color-primary);">map</span>
      </div>
      <h3 style="font-size: 20px; font-weight: 700; margin: 0;">Planificador de rutas</h3>
      <p style="color: var(--color-on-surface-variant); font-size: 16px; margin: 0;">
        Crea rutas personalizadas para ver múltiples hermandades en un mismo día
      </p>
    </div>

    <div class="card-variant" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      padding: 24px;
    ">
      <div style="
        width: 56px;
        height: 56px;
        border-radius: var(--radius-full);
        background-color: var(--color-primary-container);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span class="material-symbols-outlined" style="font-size: 32px; color: var(--color-primary);">schedule</span>
      </div>
      <h3 style="font-size: 20px; font-weight: 700; margin: 0;">Horarios en tiempo real</h3>
      <p style="color: var(--color-on-surface-variant); font-size: 16px; margin: 0;">
        Consulta horarios de salida, paso por Carrera Oficial y recogida
      </p>
    </div>

    <div class="card-variant" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      padding: 24px;
    ">
      <div style="
        width: 56px;
        height: 56px;
        border-radius: var(--radius-full);
        background-color: var(--color-primary-container);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span class="material-symbols-outlined" style="font-size: 32px; color: var(--color-primary);">church</span>
      </div>
      <h3 style="font-size: 20px; font-weight: 700; margin: 0;">Directorio completo</h3>
      <p style="color: var(--color-on-surface-variant); font-size: 16px; margin: 0;">
        Información detallada de todas las hermandades de Sevilla
      </p>
    </div>
  </div>
</section>
```

---

## 14. EJEMPLO DE FOOTER

```html
<footer style="
  background-color: var(--color-primary);
  color: #FFFFFF;
  padding: 48px 16px 32px;
  text-align: center;
">
  <h4 style="
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 16px 0;
  ">NAZARIA</h4>

  <p style="font-size: 14px; opacity: 0.8; max-width: 400px; margin: 0 auto 24px;">
    Disponible en Google Play Store. Descarga gratuita.
  </p>

  <button class="btn-secondary" style="
    color: #FFFFFF;
    border-color: rgba(255, 255, 255, 0.5);
    max-width: 200px;
    margin: 0 auto;
  ">
    <span class="material-symbols-outlined" style="font-size: 20px; margin-right: 8px;">download</span>
    Google Play
  </button>

  <p style="font-size: 12px; opacity: 0.6; margin-top: 32px;">
    © 2024 Nazaria. Todos los derechos reservados.
  </p>
</footer>
```

---

## 15. RESUMEN RÁPIDO PARA IMPLEMENTACIÓN

| Elemento | Propiedad clave | Valor |
|----------|----------------|-------|
| **Color principal** | `background`, `color` | `#45148A` |
| **Fondo página** | `background` | `#FFFBFE` |
| **Texto principal** | `color` | `#1C1B1F` |
| **Texto secundario** | `color` | `#49454E` |
| **Títulos decorativos** | `font-family` | `'Playfair Display', serif` (ExtraBold 800) |
| **Texto cuerpo** | `font-family` | `'Roboto', sans-serif` (Regular 400, 16-18px) |
| **Botones** | `border-radius`, `font-weight` | `12px`, `600` (SemiBold) |
| **Tarjetas** | `border-radius`, `background` | `12px-16px`, `#E7E0EC` o `#FFFBFE` |
| **Inputs** | `border`, `border-radius` | `2px solid #79747E`, `12px` |
| **Sombras** | `box-shadow` | `0 1-4px 3-12px rgba(0,0,0,0.06-0.15)` |
| **Bordes redondos** | — | Predominan 12px, 16px, 9999px (avatares) |
| **Iconos** | Librería | Material Symbols Outlined |

---

## 16. NOTAS IMPORTANTES

1. **No usar glassmorphism ni neumorphism** — la app es completamente plana (flat design).
2. **No usar gradientes decorativos** — solo el overlay negro sobre imágenes.
3. **Siempre poner `max-width` en botones y contenedores** — la app es mobile-first (max ~480px en contenido principal), aunque en desktop se puede ampliar.
4. **El wordmark "NAZARIA" SIEMPRE va en Playfair Display ExtraBold (800)** con letter-spacing de ~0.05em. Es la firma visual de la marca.
5. **Mantener consistencia en border-radius**: si un elemento es 12px, todos los del mismo tipo deben ser 12px.
6. **Dark mode**: la app soporta tema oscuro. Implementar con `prefers-color-scheme: dark` y las variables CSS correspondientes.
