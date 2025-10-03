import path from "node:path";

export const paths = {
  projects: path.join(process.cwd(), "src", "content", "projects"),
};

export const baseUrl = "https://hdmi.polgubau.com";

export function getMetadata() {
  return {
    title: "AutomatizaHoy | Automatización, IA y Webs en España",

    description:
      "AutomatizaHoy.es ayuda a empresas y profesionales a ahorrar tiempo y dinero con automatización de procesos, inteligencia artificial y desarrollo web. Soluciones rápidas, escalables y sin complicaciones.",

    name: "AutomatizaHoy",

    longName: "AutomatizaHoy | Automatización Digital en España",

    slogan: "Automatiza tu negocio, gana tiempo, crece sin esfuerzo",

    picture: "/assets/branding/logo.png",

    getInTouch: {
      label: "Contáctanos por WhatsApp",

      short_label: "¡Hablemos!",

      href: "https://wa.me/34685282020?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20AutomatizaHoy",
    },

    tags: [
      "AutomatizaHoy",

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
      website: "https://automatizahoy.es",

      twitter: "https://twitter.com/AutomatizaHoy",

      github: "https://github.com/polgubau",

      linkedin: "https://www.linkedin.com/in/polgubauamores/",

      email: "mailto:gubaupol@gmail.com",
    },

    homeOgImage: "/assets/thumbnail.png",
  };
}

export const defaultLocale = "es";
