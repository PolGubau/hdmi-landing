export const copy = {
	hero: {
		title: "De idea a producto en 6 semanas. Sin quemar presupuesto.",
		subtitle:
			"Lanzamos MVPs validados con usuarios reales. Automatizamos procesos que generan ROI en meses. Modernizamos sistemas críticos sin detener tu negocio.",
		brand: "doscientos.",
		cta: "Agendar llamada gratuita",
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
