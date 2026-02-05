# Landing Page — Chef Profesional

Landing de presentación para un chef profesional: portfolio, recetas y formulario de contacto para consultoría. Hecha en Next.js 14 (App Router), responsive y con estética minimalista de lujo.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Personalización

- **Nombre del chef:** En `components/Hero.tsx` cambia la constante `CHEF_NAME`.
- **Vídeo de fondo:** Coloca tu archivo `hero-cooking-video.mp4` en la carpeta `public/`. Si no existe, se muestra un fondo oscuro con degradado.
- **Recetas:** Edita el array `recipes` en `components/RecipeGrid.tsx` (títulos, descripciones e imágenes).
- **Formulario:** El envío está en modo demo. Para producción, conecta el `handleSubmit` de `components/ContactForm.tsx` a tu API o servicio (Formspree, Resend, etc.).

## Build para producción

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Fuentes: Playfair Display (títulos), Inter (cuerpo)
