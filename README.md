# Secret Flowers

Una aplicación web interactiva de invitación secreta con temática floral. Un recorrido guiado de múltiples pasos con animaciones suaves y un diseño elegante.

## Stack Tecnológico

- **Framework:** React 19 + Vite 8
- **Enrutamiento:** React Router DOM 7
- **Estilos:** Tailwind CSS 4 + Material UI 9
- **Animaciones:** Framer Motion 12
- **Tipografía:** Manrope (Google Fonts)

## Estructura del Proyecto

```
secret-flowers/
├── public/
│   └── Clavel.webp          # Icono/favicon
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── FadeUp.jsx
│   │   ├── FloralPattern.jsx
│   │   ├── ProgressIndicator.jsx
│   │   └── Text.jsx
│   ├── pages/                # Páginas del flujo
│   │   ├── Login.jsx         # Inicio (respuesta secreta)
│   │   ├── Welcome.jsx
│   │   ├── Invitation.jsx
│   │   ├── Reason.jsx
│   │   ├── Curiosity.jsx
│   │   ├── Status.jsx
│   │   ├── Tonight.jsx
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   ├── Surrender.jsx
│   │   ├── Message.jsx
│   │   └── GoodBye.jsx
│   ├── assets/
│   ├── App.jsx               # Router principal
│   ├── main.jsx              # Entry point
│   └── style.css             # Tema global y animaciones
├── index.html
├── vite.config.js
└── package.json
```

## Flujo de la Aplicación

1. **Login** — Pregunta secreta: "¿Qué recibiste hoy?" (respuesta: flores, claveles, etc.)
2. **Welcome** — Mensaje de bienvenida
3. **Invitation** — Invitación formal
4. **Reason** — Razón del encuentro
5. **Curiosity** — Dato curioso
6. **Status** — Estado actual
7. **Tonight** — Planes para la noche
8. **Loading** — Pantalla de carga
9. **Error** — Manejo de errores
10. **Surrender** — Rendirse
11. **Message** — Mensaje final
12. **GoodBye** — Despedida

## Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Warm White | `#FDF9F7` | Fondo principal |
| Sage Green | `#E8C3CC` | Acentos suaves |
| Mist Gray | `#EEDFE2` | Bordes e inputs |
| Forest Green | `#B56B7B` | Botones y elementos principales |
| Error Red | `#8E3A50` | Mensajes de error |

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build optimizado para producción |
| `npm run lint` | Análisis de código con ESLint |
| `npm run preview` | Vista previa del build local |
