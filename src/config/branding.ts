export const branding = {
	// Información de marca
	name: "doscientos",
	slogan: "Modernizamos sistemas críticos sin detener tu negocio",
	domain: "doscientos.es",
	url: "https://doscientos.es",

	// Contacto
	contact: {
		whatsapp: {
			number: "34671171525",
			displayNumber: "+34 671 17 15 25",
			defaultMessage:
				"Hola, quiero saber más sobre las soluciones de automatización, IA y desarrollo web que ofrecéis.",
		},
		email: "hola@doscientos.es",
	},

	// Redes sociales
	social: {
		twitter: "https://twitter.com/doscientos.es",
		github: "https://github.com/doscientos",
		linkedin: "https://www.linkedin.com/company/doscientos",
		instagram: "https://instagram.com/doscientos.es",
	},

	// Ubicación
	location: {
		city: "Barcelona",
		country: "España",
	},

	// Assets
	assets: {
		logo: "/assets/branding/logo.png",
		thumbnail: "/assets/media/og-image.png",
	},
} as const;

// Tipo derivado para TypeScript
export type Branding = typeof branding;

