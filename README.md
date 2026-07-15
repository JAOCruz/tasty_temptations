# Tasty Temptations

Landing page de Tasty Temptations — tentaciones horneadas frescas en Santo Domingo.

## Tecnologías

- Next.js 16 + React + TypeScript
- Tailwind CSS
- shadcn/ui
- Netlify (deploy manual desde `dist/`)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build y deploy

```bash
npm run build
netlify deploy --prod --dir=dist --no-build
```

## Estructura

- `app/` — páginas y layout de Next.js
- `components/` — componentes de UI y secciones
- `lib/` — utilidades, datos del menú y tipos
- `public/` — imágenes, ilustraciones y assets estáticos
