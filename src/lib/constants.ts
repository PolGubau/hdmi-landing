import path from "node:path";

export const paths = {
  projects: path.join(process.cwd(), "src", "content", "projects"),

};

export const baseUrl = "https://tactil.digital";

export function getMetadata(locale: string = "en") {

  if (locale === "es") {
    return {
      title: "Tactil | Estudio Web y UX",
      description:
        "Tactil.digital es un estudio de diseño y desarrollo web centrado en experiencias digitales elegantes, rápidas y escalables. Construido con código real, no plantillas o CMS genéricos.",
      name: "Tactil",
      longName: "Tactil | Estudio Digital",
      slogan: "Sitios web hechos a mano, construidos con código",
      picture: "/assets/branding/logo.png",
      getInTouchLink: "https://forms.gle/J5xpGDUCiVSRS8Pc7",
      tags: [
        "Tactil Digital",
        "Tactil",
        "Estudio Web",
        "UX Design",
        "Frontend Development",
        "React",
        "Astro",
        "TailwindCSS",
        "Custom Web Design",
        "UI/UX",
        "Barcelona",
        "Germany",
        "Landing Pages",
        "Corporate Websites",
        "Dashboards",
        "Accessible Design",
        "SEO Optimization",
      ],
      links: {
        website: "https://tactil.digital",
        twitter: "https://twitter.com/PolGubau",
        github: "https://github.com/polgubau",
        linkedin: "https://www.linkedin.com/in/polgubauamores/",
        email: "mailto:gubaupol@gmail.com",
      },
      homeOgImage: "/assets/thumbnail.png",
    }
  }
  return {
    title: "Tactil | Web & UX Studio",
    description:
      "Tactil.digital is a web design and development studio focused on elegant, fast, and scalable digital experiences. Built with real code, not templates or generic CMSs.",
    name: "Tactil",
    longName: "Tactil Digital Studio",
    slogan: "Hand-crafted websites, built with code",
    picture: "/assets/branding/logo.png",
    getInTouchLink: "https://forms.gle/J5xpGDUCiVSRS8Pc7",

    tags: [
      "Tactil Digital",
      "Tactil",
      "Web Studio",
      "UX Design",
      "Frontend Development",
      "React",
      "Astro",
      "TailwindCSS",
      "Custom Web Design",
      "UI/UX",
      "Barcelona",
      "Germany",
      "Landing Pages",
      "Corporate Websites",
      "Dashboards",
      "Accessible Design",
      "SEO Optimization",
    ],
    links: {
      website: "https://tactil.digital",
      twitter: "https://twitter.com/PolGubau",
      github: "https://github.com/polgubau",
      linkedin: "https://www.linkedin.com/in/polgubauamores/",
      email: "mailto:gubaupol@gmail.com",
    },
    homeOgImage: "/assets/thumbnail.png",
  }
}
export const defaultLocale = "en";