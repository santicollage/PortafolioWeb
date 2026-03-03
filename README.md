# Portfolio Web — Professional Developer Portfolio

SPA estatica para portfolio profesional como Web Developer / Fullstack. Diseno dark mode moderno con gradiente naranja to morado, grilla asimetrica y animaciones fluidas.

## Stack

- **React 19 + TypeScript** - UI y tipado estricto
- **Vite 7** - bundler y dev server
- **TailwindCSS v4** - estilos utility-first con tokens personalizados
- **Framer Motion** - animaciones declarativas
- **Lucide React** - iconos
- **React Router v6** - navegacion SPA

## Estructura

```
 src/
  assets/              # imagenes estaticas
  components/
    ui/                # Button, Badge, Modal, SectionHeader
    layout/            # Navbar, Footer
    sections/          # Hero, Skills, Projects, Experience, About, Services
  config/theme.ts      # tokens de color, tipografia y animacion
  data/                # *.json - toda la info del portfolio
  hooks/               # useModal, useScrollSpy
  pages/               # ServicesPage
  types/               # interfaces TypeScript
```

## Personalizacion rapida

| Archivo | Contiene |
|---------|----------|
| src/data/personal.json | Nombre, bio, foto, links, CV |
| src/data/projects.json | Proyectos (titulo, tech, URL, repo, detalles) |
| src/data/skills.json | Habilidades agrupadas por categoria |
| src/data/experience.json | Experiencia laboral y educacion |
| src/data/services.json | Servicios freelance, proceso y FAQ |

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # dev server en http://localhost:5173
npm run build      # build de produccion
npm run preview    # preview del build
```

## Personalizar perfil

1. Reemplaza /public/profile.jpg con tu foto
2. Coloca tu CV como /public/cv.pdf
3. Edita src/data/personal.json con tus datos reales
4. Actualiza los proyectos en src/data/projects.json
5. Ajusta habilidades en src/data/skills.json

