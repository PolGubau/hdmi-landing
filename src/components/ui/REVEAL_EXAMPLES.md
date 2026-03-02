# 🎬 Sistema de Animaciones Reveal

Sistema moderno de scroll-reveal con configuración flexible mediante data attributes y componentes Astro.

## 📦 Componentes

### `<Reveal>` - Componente individual
Wrapper para animar un solo elemento.

### `<RevealList>` - Contenedor con stagger
Wrapper para animar múltiples elementos con efecto cascada.

---

## 🎯 Uso Básico

### 1. Con data attributes (HTML puro)

```astro
<!-- Animación simple desde abajo -->
<div data-reveal="bottom">
  Contenido animado
</div>

<!-- Con configuración personalizada -->
<div 
  data-reveal="top"
  data-duration="500"
  data-delay="200"
  data-easing="ease-in-out"
>
  Animación rápida con delay
</div>
```

### 2. Con componente `<Reveal>`

```astro
---
import Reveal from '~/components/ui/Reveal.astro';
---

<!-- Animación simple -->
<Reveal direction="left">
  <h1>Título desde la izquierda</h1>
</Reveal>

<!-- Con todas las opciones -->
<Reveal 
  direction="scale"
  duration={800}
  delay={300}
  easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
>
  <div class="card">Tarjeta con bounce</div>
</Reveal>
```

---

## 🎨 Direcciones Disponibles

### Básicas
- `top` - Desde arriba ↓
- `bottom` - Desde abajo ↑ (default)
- `left` - Desde la izquierda →
- `right` - Desde la derecha ←
- `scale` - Escala desde pequeño 🔍

### Diagonales (Nuevas!)
- `top-left` - Desde arriba-izquierda ↖️
- `top-right` - Desde arriba-derecha ↗️
- `bottom-left` - Desde abajo-izquierda ↙️
- `bottom-right` - Desde abajo-derecha ↘️

---

## ⚡ Stagger (Efecto Cascada)

### Con `<RevealList>`

```astro
---
import RevealList from '~/components/ui/RevealList.astro';
---

<RevealList stagger={100}>
  <div data-reveal="left">Item 1</div>
  <div data-reveal="left">Item 2</div>
  <div data-reveal="left">Item 3</div>
  <!-- Cada item tiene 100ms más de delay que el anterior -->
</RevealList>
```

### Con data-stagger (HTML puro)

```astro
<div data-stagger="150">
  <div data-reveal="bottom">Item 1 (0ms)</div>
  <div data-reveal="bottom">Item 2 (150ms)</div>
  <div data-reveal="bottom">Item 3 (300ms)</div>
</div>
```

---

## 🎛️ Configuración

### Variables CSS (Valores por defecto)

```css
--reveal-duration: 700ms;
--reveal-delay: 0ms;
--reveal-easing: cubic-bezier(0.4, 0, 0.2, 1);
--reveal-distance: 32px;
```

### Data Attributes

| Attribute | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `data-reveal` | string | - | Dirección (ver lista arriba) |
| `data-duration` | number | 700 | Duración en ms |
| `data-delay` | number | 0 | Delay en ms |
| `data-speed` | string | - | Preset: instant/fast/normal/slow |
| `data-easing` | string | smooth | Preset: smooth/bounce/elastic/sharp/soft |
| `data-distance` | string/number | medium | small/medium/large o px |
| `data-threshold` | number | 0.15 | Threshold del observer (0-1) |
| `data-root-margin` | string | 0px 0px -10% 0px | rootMargin del observer |
| `data-stagger` | number | - | Delay entre hijos (solo en parent) |

### Presets de Velocidad

| Speed | Duración |
|-------|----------|
| `instant` | 200ms |
| `fast` | 400ms |
| `normal` | 700ms |
| `slow` | 1000ms |

### Presets de Easing

| Easing | Curva | Uso |
|--------|-------|-----|
| `smooth` | cubic-bezier(0.4, 0, 0.2, 1) | General (default) |
| `bounce` | cubic-bezier(0.68, -0.55, 0.265, 1.55) | Efectos juguetones |
| `elastic` | cubic-bezier(0.34, 1.56, 0.64, 1) | Rebote elástico |
| `sharp` | cubic-bezier(0.4, 0, 0.6, 1) | Movimientos rápidos |
| `soft` | cubic-bezier(0.25, 0.1, 0.25, 1) | Suave y elegante |

### Presets de Distancia

| Distance | Píxeles |
|----------|---------|
| `small` | 16px |
| `medium` | 32px |
| `large` | 64px |

---

## 💡 Ejemplos Avanzados

### Grid con stagger

```astro
<RevealList stagger={80} class="grid grid-cols-3 gap-4">
  {items.map(item => (
    <div data-reveal="scale" class="card">
      {item.title}
    </div>
  ))}
</RevealList>
```

### Combinando delays

```astro
<!-- El stagger se suma al delay base -->
<div data-stagger="100">
  <div data-reveal="left" data-delay="500">
    <!-- Aparece a los 500ms -->
  </div>
  <div data-reveal="left" data-delay="500">
    <!-- Aparece a los 600ms (500 + 100) -->
  </div>
</div>
```

### Usando presets

```astro
<!-- Velocidad rápida con bounce -->
<Reveal direction="scale" speed="fast" easing="bounce">
  Aparece rápido con rebote
</Reveal>

<!-- Movimiento lento y suave -->
<Reveal direction="left" speed="slow" easing="soft" distance="large">
  Movimiento elegante desde lejos
</Reveal>

<!-- Animación instantánea -->
<Reveal direction="top" speed="instant" distance="small">
  Aparece casi inmediatamente
</Reveal>
```

### Callbacks con eventos

```astro
<div
  data-reveal="scale"
  id="my-element"
>
  Contenido
</div>

<script>
  document.getElementById('my-element')?.addEventListener('reveal', (e) => {
    console.log('Elemento revelado!', e.detail);
    // Ejecutar código cuando el elemento se revela
  });
</script>
```

### Threshold personalizado

```astro
<!-- Se activa cuando el 50% del elemento es visible -->
<Reveal direction="bottom" threshold={0.5}>
  Requiere más visibilidad
</Reveal>

<!-- Se activa inmediatamente al entrar en viewport -->
<Reveal direction="top" threshold={0} rootMargin="0px">
  Activación inmediata
</Reveal>
```

### Animaciones diagonales

```astro
<!-- Desde esquina superior izquierda -->
<Reveal direction="top-left" speed="fast" easing="elastic">
  Entrada diagonal elegante
</Reveal>

<!-- Grid con direcciones variadas -->
<div class="grid grid-cols-2 gap-4">
  <Reveal direction="top-left">Esquina 1</Reveal>
  <Reveal direction="top-right">Esquina 2</Reveal>
  <Reveal direction="bottom-left">Esquina 3</Reveal>
  <Reveal direction="bottom-right">Esquina 4</Reveal>
</div>
```

