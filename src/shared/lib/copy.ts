export const copy = {
	hero: {
		title: "Modernizamos sistemas críticos sin detener tu negocio",
		subtitle:
			"Creamos webs, plataformas y productos digitales de calidad, con foco en rendimiento y crecimiento.",
		brand: "Doscientos.",
		cta: "Contactar",
	},

	method: {
		steps: [
			{
				title: "Hablamos contigo",
				description:
					"Queremos conocer tu proyecto, entender qué necesitas y cómo podemos ayudarte.",
			},
			{
				title: "Te enviamos una propuesta",
				description:
					"Analizamos lo que necesitas y te mandamos una propuesta clara con entregables y plazos.",
			},
			{
				title: "Nos ponemos manos a la obra",
				description:
					"Diseño, desarrollo o contenido. Hacemos lo que el proyecto requiere.",
			},
			{
				title: "Validación en entorno real",
				description:
					"Dividimos el trabajo en sprints. Vas viendo avances y ajustamos si hace falta.",
			},
			{
				title: "Lanzamos y seguimos contigo",
				description: "Publicamos, medimos y mejoramos lo necesario.",
			},
		],
	},

	finalCta: {
		question: "¿Tu sistema está preparado para los próximos 5 años?",
		description:
			"Agenda una llamada gratuita de 15 minutos para hablar sobre tu proyecto, tus objetivos y cómo podemos ayudarte.",
		cta: "Reservar llamada 15min",
	},

	nav: {
		home: "Inicio",
		projects: "Proyectos",
		blog: "Blog",
		contact: "Contacto",
	},

	footer: {
		tagline: "Modernización de sistemas críticos",
		copyright: "© 2026 Doscientos",
	},
} as const;

export type Copy = typeof copy;
