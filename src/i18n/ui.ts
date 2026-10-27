export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export type OtherLang = Exclude<Lang, "es"> | "es";

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "site.title": "Dreamer carfter",
    "site.description": "Bookmark this to keep an eye on my project updates!",

    "nav.home": "Inicio",
    "nav.blog": "Blog",

    "home.badge": "Backend developer",
    "home.hero.subtitle": "Escribo sobre APIs, arquitectura, bases de datos e infraestructura.",
    "home.cta.blog": "Leer blog",
    "home.about.title": "Quién soy",
    "home.about.body": "Desarrollador backend generalista. Trabajo principalmente en el lado del servidor: APIs, bases de datos, contenedores y todo lo necesario para que un servicio sea estable, claro y mantenible.",
    "home.about.link": "entrada de bienvenida",
    "home.stack.title": "Stack",
    "home.stack.items": ["Java", "Kotlin", "PHP", "BBDD", "NoSQL", "Arquitectura hexagonal", "JavaScript", "RabbitMQ", "Docker", "Kubernetes"],
    "home.contact.title": "Escríbeme",
    "home.contact.body": "Si quieres hablar de APIs, bases de datos o infraestructura, encuentra al equipo que mejor te convenga.",

    "blog.title": "Blog",
    "blog.subtitle": "Backend real, sin humo: decisiones, errores y aprendizajes que no verás en un tutorial.",
    "blog.empty": "Aún no hay entradas publicadas.",
    "blog.back": "← Volver al blog",
    "blog.readMore": "Leer más →",

    "error.404.title": "Registro no encontrado",
    "error.404.body": "El Adeptus Administratum no localiza este documento. La Inquisición ha sido informada de la consulta.",
    "error.404.cta": "Regresar a la base de datos principal",
  },
  en: {
    "site.title": "Dreamer carfter",
    "site.description": "Bookmark this to keep an eye on my project updates!",

    "nav.home": "Home",
    "nav.blog": "Blog",

    "home.badge": "Backend developer",
    "home.hero.subtitle": "I write about APIs, architecture, databases and infrastructure.",
    "home.cta.blog": "Read the blog",
    "home.about.title": "About me",
    "home.about.body": "Generalist backend developer. I work mostly on the server side: APIs, databases, containers and everything needed to make a service stable, clear and maintainable.",
    "home.about.link": "welcome post",
    "home.stack.title": "Stack",
    "home.stack.items": ["Java", "Kotlin", "PHP", "Databases", "NoSQL", "Hexagonal architecture", "JavaScript", "RabbitMQ", "Docker", "Kubernetes"],
    "home.contact.title": "Get in touch",
    "home.contact.body": "If you want to talk about APIs, databases or infrastructure, find the team that suits you best.",

    "blog.title": "Blog",
    "blog.subtitle": "Real backend, no fluff: decisions, mistakes and lessons you won't find in a tutorial.",
    "blog.empty": "No posts published yet.",
    "blog.back": "← Back to blog",
    "blog.readMore": "Read more →",

    "error.404.title": "Record not found",
    "error.404.body": "The Adeptus Administratum cannot locate this document. The Inquisition has been notified of the request.",
    "error.404.cta": "Return to the primary data archive",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

export function getUi(lang: Lang) {
  return ui[lang];
}
