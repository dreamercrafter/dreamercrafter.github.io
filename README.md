# dreamercrafter.github.io

Web personal construida con **Astro** y desplegada a GitHub Pages.
Puedes ver la versión en producción cuando GitHub Pages esté configurado.

## Stack
- Astro 7 + Tailwind CSS 4
- Despliegue con GitHub Actions (`withastro/action`)

## Desarrollo (Docker, sin npm en host)
```sh
docker compose up        # levanta dev server en http://localhost:4321
docker compose down      # para el contenedor
```

Para correr comandos dentro del contenedor:

```sh
docker compose run --rm astro npm run build
docker compose run --rm astro npm run preview
```

## Estructura
```text
/
├── compose.yaml
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
├── public/
├── src/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   └── styles/
└── content.config.ts
