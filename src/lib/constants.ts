import path from "node:path";

export const paths = {
  projects: path.join(process.cwd(), "src", "content", "projects"),
};

// Get environment variables with fallbacks
const SITE_NAME = import.meta.env.PUBLIC_SITE_NAME || "Pol Gubau Amores";
const SITE_SLOGAN = import.meta.env.PUBLIC_SITE_SLOGAN || "Automatiza tu negocio, gana tiempo, crece sin esfuerzo";
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://hdmi.polgubau.com";
const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || "34671171525";
const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL || "gubaupol@gmail.com";
const TWITTER_URL = import.meta.env.PUBLIC_TWITTER_URL || "https://twitter.com/polgubau";
const GITHUB_URL = import.meta.env.PUBLIC_GITHUB_URL || "https://github.com/polgubau";
const LINKEDIN_URL = import.meta.env.PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/polgubauamores/";

export const baseUrl = SITE_URL;

export function getMetadata() {
  return {
    title: `${SITE_NAME} | Automatización, IA y Webs en España`,

    description:
      `${SITE_NAME} ayuda a empresas y profesionales a ahorrar tiempo y dinero con automatización de procesos, inteligencia artificial y desarrollo web. Soluciones rápidas, escalables y sin complicaciones.`,

    name: SITE_NAME,

    longName: `${SITE_NAME} | Automatización Digital en España`,

    slogan: SITE_SLOGAN,

    picture: "/assets/branding/logo.png",

    getInTouch: {
      label: "Contáctanos por WhatsApp",

      short_label: "¡Hablemos!",

      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20${encodeURIComponent(SITE_NAME)}`,
    },

    tags: [
      SITE_NAME,

      "Automatización de Procesos",

      "IA Empresarial",

      "Chatbots",

      "Páginas Web",

      "Automatización España",

      "Inteligencia Artificial",

      "Ahorro de Tiempo",

      "Productividad",

      "N8n",

      "SEO",

      "Transformación Digital",

      "Automatización Tareas",

      "Digitalización",

      "Webs Corporativas",

      "Landing Pages",

      "Barcelona",

      "España",
    ],

    links: {
      website: SITE_URL,

      twitter: TWITTER_URL,

      github: GITHUB_URL,

      linkedin: LINKEDIN_URL,

      email: `mailto:${CONTACT_EMAIL}`,
    },

    homeOgImage: "/assets/thumbnail.png",
  };
}

export const defaultLocale = "es";
