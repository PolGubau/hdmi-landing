export const copy = {
	hero: {
		title: "El equipo técnico que contratan cuando el software es crítico.",
		subtitle:
			"Construimos sistemas internos, plataformas y MVPs para empresas que necesitan velocidad de startup con calidad de ingeniería senior.",
		brand: "doscientos.",
		cta: "Solicitar propuesta",
	},

	method: {
		steps: [
			{
				title: "Semana 1 - Discovery",
				description:
					"Llamada de 60 min para entender tu negocio, usuarios y objetivos. Definimos el alcance exacto, las funcionalidades del MVP y los criterios de éxito. Salimos con un plan claro.",
			},
			{
				title: "Semana 2 - Propuesta y arquitectura",
				description:
					"Te enviamos propuesta detallada con entregables, plazos y precio fijo. Sin sorpresas. Definimos la arquitectura técnica y el stack más adecuado para tu caso.",
			},
			{
				title: "Semanas 3-4 - Diseño y desarrollo",
				description:
					"Diseñamos las pantallas clave y empezamos a desarrollar. Cada viernes recibes una demo funcional para dar feedback. Iteramos rápido, sin burocracia.",
			},
			{
				title: "Semana 5 - Testing y ajustes",
				description:
					"Pruebas con usuarios reales, corrección de bugs y ajustes de UX. Tu feedback se implementa en 24-48h. El producto se afina hasta que esté listo para lanzar.",
			},
			{
				title: "Semana 6 - Lanzamiento",
				description:
					"Deploy a producción, configuración de analytics y monitorización. Te entregamos el código, la documentación y 30 días de soporte post-lanzamiento incluidos.",
			},
		],
	},

	finalCta: {
		question:
			"¿Tienes un proceso que el software debería estar haciendo por ti?",
		description:
			"Cuéntanos el problema. En 24 horas te decimos si podemos ayudarte y cómo lo haríamos.",
		cta: "Hablar con el equipo",
	},

	nav: {
		home: "Inicio",
		projects: "Proyectos",
		blog: "Blog",
		contact: "Contacto",
	},

	footer: {
		tagline: "Software de negocio que funciona en producción.",
		copyright: "© 2026 Doscientos",
	},
} as const;

export type Copy = typeof copy;
