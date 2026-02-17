export const languages = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
} as const;

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    'hero.badge': 'Automatización inteligente para tu negocio',
    'hero.title': 'Automatiza tu negocio.',
    'hero.subtitle': 'mientras tú descansas.',
    'hero.subtitle.highlight': 'Hazlo crecer',
    'hero.description': 'Creamos sistemas que trabajan por ti: asistentes que reservan citas, flujos que automatizan tu día a día y webs que Google adora.',
    
    'letsTalk': '¡Hablemos!',
    'cta.whatsapp.long': 'Contáctanos por WhatsApp',
    
    'services.title': 'Soluciones a tu medida sin límites',
    'services.subtitle': 'No todos los negocios son iguales. Nosotros adaptamos la tecnología a ti.',
    
    'service.web-design.title': 'Diseño y Desarrollo Web',
    'service.web-design.description': 'Diseño web profesional y desarrollo a medida con las últimas tecnologías.',
    
    'service.ecommerce.title': 'Tienda Online',
    'service.ecommerce.description': 'Tiendas online completas y funcionales listas para vender desde el primer día.',
    
    'service.custom-dev.title': 'Desarrollo a Medida',
    'service.custom-dev.description': 'Desarrollo de aplicaciones web personalizadas según tus necesidades.',
    
    'service.seo.title': 'SEO y Posicionamiento',
    'service.seo.description': 'Optimización para motores de búsqueda y estrategias de posicionamiento web.',
    
    'service.consulting.title': 'Consultoría',
    'service.consulting.description': 'Asesoramiento estratégico para optimizar tu presencia digital y aumentar ventas.',
    
    'service.maintenance.title': 'Mantenimiento Web',
    'service.maintenance.description': 'Mantenimiento continuo, actualizaciones y soporte técnico para tu web.',
    
    'portfolio.title': 'Proyectos Destacados',
    'portfolio.subtitle': 'Casos de éxito que demuestran nuestro compromiso con la excelencia.',
    
    'blog.title': 'Blog',
    'blog.subtitle': 'Artículos, guías y recursos sobre automatización y desarrollo web.',
    
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Listo para transformar tu negocio? Hablemos.',
    
    'footer.rights': 'Todos los derechos reservados.',
  },
  ca: {
    'nav.home': 'Inici',
    'nav.services': 'Serveis',
    'nav.portfolio': 'Portafoli',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacte',
    
    'hero.badge': 'Automatització intel·ligent per al teu negoci',
    'hero.title': 'Automatitza el teu negoci.',
    'hero.subtitle': 'mentre tu descanses.',
    'hero.subtitle.highlight': 'Fes-lo créixer',
    'hero.description': 'Creem sistemes que treballen per tu: assistents que reserven cites, fluxos que automatitzen el teu dia a dia i webs que Google adora.',
    
    'letsTalk': 'Parlem!',
    'cta.whatsapp.long': 'Contacta\'ns per WhatsApp',
    
    'services.title': 'Solucions a la teva mida sense limits',
    'services.subtitle': 'No tots els negocis són iguals. Nosaltres adaptem la tecnologia a tu.',
    
    'service.web-design.title': 'Disseny i Desenvolupament Web',
    'service.web-design.description': 'Disseny web professional i desenvolupament a mida amb les últimes tecnologies.',
    
    'service.ecommerce.title': 'Botiga Online',
    'service.ecommerce.description': 'Botigues online completes i funcionals llestes per vendre des del primer dia.',
    
    'service.custom-dev.title': 'Desenvolupament a Mida',
    'service.custom-dev.description': 'Desenvolupament d\'aplicacions web personalitzades segons les teves necessitats.',
    
    'service.seo.title': 'SEO i Posicionament',
    'service.seo.description': 'Optimització per a motors de cerca i estratègies de posicionament web.',
    
    'service.consulting.title': 'Consultoria',
    'service.consulting.description': 'Assessorament estratègic per optimitzar la teva presència digital i augmentar vendes.',
    
    'service.maintenance.title': 'Manteniment Web',
    'service.maintenance.description': 'Manteniment continu, actualitzacions i suport tècnic per a la teva web.',
    
    'portfolio.title': 'Projectes Destacats',
    'portfolio.subtitle': 'Casos d\'èxit que demostren el nostre compromís amb l\'excel·lència.',
    
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles, guies i recursos sobre automatització i desenvolupament web.',
    
    'contact.title': 'Contacte',
    'contact.subtitle': 'Preparat per transformar el teu negoci? Parlem.',
    
    'footer.rights': 'Tots els drets reservats.',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    'hero.badge': 'Smart automation for your business',
    'hero.title': 'Automate your business.',
    'hero.subtitle': 'while you rest.',
    'hero.subtitle.highlight': 'Grow it',
    'hero.description': 'We create systems that work for you: assistants that book appointments, workflows that automate your daily tasks, and websites that Google loves.',
    
    'letsTalk': 'Let\'s talk!',
    'cta.whatsapp.long': 'Contact us on WhatsApp',
    
    'services.title': 'Tailored Solutions without Limits',
    'services.subtitle': 'Not all businesses are the same. We adapt technology to you.',
    
    'service.web-design.title': 'Web Design & Development',
    'service.web-design.description': 'Professional web design and custom development with the latest technologies.',
    
    'service.ecommerce.title': 'Online Store',
    'service.ecommerce.description': 'Complete and functional online stores ready to sell from day one.',
    
    'service.custom-dev.title': 'Custom Development',
    'service.custom-dev.description': 'Custom web application development tailored to your needs.',
    
    'service.seo.title': 'SEO & Positioning',
    'service.seo.description': 'Search engine optimization and web positioning strategies.',
    
    'service.consulting.title': 'Consulting',
    'service.consulting.description': 'Strategic consulting to optimize your digital presence and increase sales.',
    
    'service.maintenance.title': 'Web Maintenance',
    'service.maintenance.description': 'Continuous maintenance, updates and technical support for your website.',
    
    'portfolio.title': 'Featured Projects',
    'portfolio.subtitle': 'Success stories that demonstrate our commitment to excellence.',
    
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles, guides and resources about automation and web development.',
    
    'contact.title': 'Contact',
    'contact.subtitle': 'Ready to transform your business? Let\'s talk.',
    
    'footer.rights': 'All rights reserved.',
  },
} as const;

