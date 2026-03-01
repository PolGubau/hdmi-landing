/**
 * Contenido centralizado de la landing
 * Preparado para i18n futuro
 */

export const copy = {
  hero: {
    title: "Modernizamos sistemas críticos sin detener tu negocio",
    subtitle: 
      "Diseñamos y desarrollamos sitios, plataformas y productos digitales impulsados por IA, con foco en rendimiento y crecimiento.",
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
    title: "Método 200™",
    subtitle: "Un proceso diseñado para reducir riesgo y maximizar impacto.",
    steps: [
      {
        number: "1",
        title: "Diagnóstico técnico profundo",
        description: "Auditamos arquitectura, dependencias, rendimiento y riesgos ocultos.",
      },
      {
        number: "2",
        title: "Plan de modernización progresiva",
        description: 'Definimos fases seguras, sin "big bang".',
      },
      {
        number: "3",
        title: "Migración y refactorización controlada",
        description: "Actualizamos módulos estratégicos sin detener el negocio.",
      },
      {
        number: "4",
        title: "Validación en entorno real",
        description: "Pruebas, estabilidad, rendimiento.",
      },
      {
        number: "5",
        title: "Base preparada para crecer",
        description: "Sistema moderno, mantenible y escalable.",
      },
    ],
  },

  cases: {
    title: "Casos de intervención",
    items: [
      {
        client: "Generalitat de Catalunya",
        subtitle: "Dirección técnica en campaña institucional",
        description: "Responsabilidad técnica integral en entorno público de alto tráfico e integraciones múltiples.",
        results: [
          "Plataforma estable en campaña activa",
          "Integración con servicios institucionales complejos",
          "Cero interrupciones críticas",
        ],
      },
      {
        client: "IFCO",
        subtitle: "Modernización en entorno logístico internacional",
        description: "Migración de módulos legacy y optimización de rendimiento en sistema empresarial global.",
        results: [
          "Mejora sustancial en tiempos de respuesta",
          "Arquitectura preparada para crecimiento",
          "Reducción de riesgo tecnológico",
        ],
      },
      {
        client: "BitacoraERP",
        subtitle: "Evolución tecnológica de ERP empresarial",
        description: "Transformación de base tecnológica obsoleta hacia stack moderno.",
        results: [
          "Mayor estabilidad",
          "Mejor rendimiento",
          "Sistema preparado para nuevas funcionalidades",
        ],
      },
      {
        client: "CESNET (CESCE)",
        subtitle: "Plataforma de gestión de riesgo financiero",
        description: "Modernización de módulos críticos en entorno financiero sensible.",
        results: [
          "Plataforma más estable y rápida",
          "Mejor capacidad de escalabilidad",
          "Estructura preparada para evolución futura",
        ],
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
