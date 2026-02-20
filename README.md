# Landing Page Multi-tenant

Una landing page moderna y minimalista construida con Astro 5, diseñada para ser fácilmente personalizable mediante variables de entorno.

## 🚀 Características

- ✅ **Multi-idioma** (Español, Catalán, Inglés)
- ✅ **Dark/Light Mode** con persistencia
- ✅ **Diseño Moderno** y minimalista
- ✅ **SEO Optimizado** con hreflang
- ✅ **Totalmente Personalizable** mediante variables de entorno
- ✅ **Componentes React** con Radix UI
- ✅ **Tailwind CSS 4**

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Editar .env con tus datos
```

## 🔧 Configuración

### Variables de Entorno

Edita el archivo `.env` con la información de tu negocio:

```env
# Branding
PUBLIC_SITE_NAME=TuNegocio
PUBLIC_SITE_SLOGAN=Tu slogan aquí
PUBLIC_SITE_URL=https://tudominio.com

# Contacto
PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX
PUBLIC_CONTACT_EMAIL=contacto@tudominio.com

# Redes Sociales
PUBLIC_TWITTER_URL=https://twitter.com/TuHandle
PUBLIC_GITHUB_URL=https://github.com/tuusuario
PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/tuperfil/
```

### Personalización por Deployment

Puedes tener diferentes configuraciones para diferentes deployments:

1. **Desarrollo**: Usa `.env` (no se sube a git)
2. **Producción**: Configura las variables en tu plataforma de hosting (Vercel, Netlify, etc.)

Ejemplo para Vercel:
```bash
vercel env add PUBLIC_SITE_NAME
vercel env add PUBLIC_SITE_URL
# ... etc
```

## 🛠️ Comandos

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Preview
pnpm preview

# Lint
pnpm lint
```

## 📁 Estructura

```
├── src/
│   ├── components/     # Componentes Astro y React
│   ├── i18n/          # Traducciones
│   ├── layouts/       # Layouts principales
│   ├── lib/           # Utilidades y constantes
│   ├── pages/         # Páginas (es, ca, en)
│   └── styles/        # Estilos globales
├── .env               # Variables de entorno (no en git)
├── .env.example       # Ejemplo de variables
└── astro.config.mjs   # Configuración de Astro
```

## 🌍 Multi-idioma

El sitio soporta 3 idiomas:
- Español (es) - Por defecto
- Catalán (ca) - `/ca/*`
- Inglés (en) - `/en/*`

Las traducciones están en `src/i18n/ui.ts`.

## 🎨 Personalización de Estilos

Los estilos usan Tailwind CSS 4 con variables CSS personalizadas. Puedes modificar:

- `src/styles/global.css` - Variables de color y estilos globales
- `tailwind.config.mjs` - Configuración de Tailwind

## 📝 Secciones

- **Hero** - Presentación principal
- **Services** - Servicios ofrecidos
- **Portfolio** - Proyectos destacados
- **FAQ** - Preguntas frecuentes
- **Contact** - Formulario de contacto

## 🚢 Deployment

### Vercel

```bash
vercel --prod
```

### Netlify

```bash
netlify deploy --prod
```

Recuerda configurar las variables de entorno en tu plataforma de hosting.

## 👀 Más información

Consulta la [documentación de Astro](https://docs.astro.build) para más detalles.