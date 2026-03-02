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

- `top` - Desde arriba ↓
- `bottom` - Desde abajo ↑ (default)
- `left` - Desde la izquierda →
- `right` - Desde la derecha ←
- `scale` - Escala desde pequeño

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
```

### Data Attributes

| Attribute | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `data-reveal` | string | - | Dirección: top/bottom/left/right/scale |
| `data-duration` | number | 700 | Duración en ms |
| `data-delay` | number | 0 | Delay en ms |
| `data-easing` | string | ease-out | Función de easing CSS |
| `data-stagger` | number | - | Delay entre hijos (solo en parent) |

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

### Easings personalizados

```astro
<!-- Bounce -->
<Reveal easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)">
  Efecto bounce
</Reveal>

<!-- Elastic -->
<Reveal easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
  Efecto elástico
</Reveal>
```

