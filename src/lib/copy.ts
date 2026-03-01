
export const copy = {
  hero: {
    title: "Modernizamos sistemas críticos sin detener tu negocio",
    subtitle: 
      "Creamos webs, plataformas y productos digitales de calidad, con foco en rendimiento y crecimiento.",
    brand: "Doscientos.",
    cta: "Contactar",
  },

  problem: {
    title: "Tu sistema funciona.",
    subtitle: "Pero cada año cuesta más mantenerlo.",
    points: [
      "Código legacy difícil de evolucionar",
      "Rendimiento degradado",
      "Integraciones frágiles",
      "Miedo a tocar producción",
      "Dependencia de tecnología obsoleta",
    ],
    conclusion: [
      "El negocio crece.",
      "La tecnología se convierte en freno.",
    ],
  },

  positioning: {
    title: "No reemplazamos sistemas.",
    subtitle: "Los transformamos.",
    description: [
      "En Doscientos intervenimos en plataformas reales, en producción, con usuarios activos y procesos críticos.",
      "",
      "No trabajamos con prototipos.",
      "Trabajamos donde no se puede fallar.",
    ],
  },

  whatWeDo: {
    title: "Qué hacemos",
    subtitle: "Modernización estructural de sistemas legacy",
    services: [
      "Migración progresiva de módulos críticos",
      "Refactorización de arquitectura",
      "Optimización de rendimiento",
      "Reducción de deuda técnica",
      "Preparación para escalabilidad futura",
      "Integraciones complejas con sistemas existentes",
    ],
    footer: "Intervenimos sin interrumpir la operación.",
    badge: "200.",
  },

  method: {
     steps: [
      {
        title: "Hablamos contigo",
        description: "Queremos conocer tu proyecto, entender qué necesitas y cómo podemos ayudarte.",
      },
      {
        title: "Te enviamos una propuesta",
        description: 'Analizamos lo que necesitas y te mandamos una propuesta clara con entregables y plazos.',
      },
      {
        title: "Nos ponemos manos a la obra",
        description: "Diseño, desarrollo o contenido. Hacemos lo que el proyecto requiere.",
      },
      {
        title: "Validación en entorno real",
        description: "Dividimos el trabajo en sprints. Vas viendo avances y ajustamos si hace falta.",
      },
      {
        title: "Lanzamos y seguimos contigo",
        description: "Publicamos, medimos y mejoramos lo necesario.",
      },
    ],
  },


  forWho: {
    title: "Para quién es",
    workWith: {
      title: "Trabajamos con:",
      items: [
        "Empresas que ya facturan y dependen de su sistema interno",
        "Organizaciones con software crítico en producción",
        "CTOs que necesitan evolucionar sin romper",
        "Equipos que heredaron tecnología que nadie quiere tocar",
      ],
    },
    notWorkWith: {
      title: "No trabajamos con:",
      items: [
        "Proyectos experimentales",
        "Ideas sin validar",
        "MVPs improvisados",
      ],
    },
  },

  whyUs: {
    title: "Por qué Doscientos",
    headline: [
      "Porque cuando un sistema debe responder,",
      "la única respuesta válida es correcta.",
    ],
    badge: "200.",
    points: [
      "Experiencia real en entornos críticos",
      "Modernización sin interrupción",
      "Arquitectura orientada a largo plazo",
      "Enfoque técnico estratégico",
    ],
    footer: [
      "No vendemos horas.",
      "Reducimos riesgo tecnológico.",
    ],
  },

  finalCta: {
    question: "¿Tu sistema está preparado para los próximos 5 años?",
    description: [
      "Solicita un diagnóstico técnico inicial.",
      "Analizamos tu arquitectura y definimos un plan claro de evolución.",
    ],
    cta: "Agendar reunión estratégica",
  },

  nav: {
    home: "Inicio",
    about: "Nosotros",
    projects: "Proyectos",
    blog: "Blog",
    contact: "Contacto",
  },

  footer: {
    tagline: "Modernización de sistemas críticos",
    copyright: "© 2025 Doscientos. Todos los derechos reservados.",
  },
} as const;

export type Copy = typeof copy;
