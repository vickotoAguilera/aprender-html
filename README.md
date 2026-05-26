# Frontend Learning Platform (Aprender HTML)

Una plataforma educativa interactiva centrada en la construcción de un **Portfolio Personal**. El aprendizaje está diseñado de manera acumulativa, donde cada lección construye sobre la anterior, guiado por un Mentor de IA. Los estudiantes aprenden HTML, CSS y JavaScript estructuradamente mientras crean un proyecto real.

## Características Principales

- **Currículo Unificado**: Aprende fundamentos web construyendo tu portafolio paso a paso.
- **Aprendizaje Acumulativo**: El progreso del código se guarda y hereda entre lecciones, utilizando plantillas de estado.
- **Mentor IA (Llama 3)**: Feedback adaptativo integrado que verifica en tiempo real el progreso de las misiones y valida el código mediante regex y lógica predictiva.
- **IDE Integrado**: Experiencia premium similar a VS Code dentro del navegador con `@monaco-editor/react`.
- **Live Preview**: Visualización en vivo (estilo Vite) para ver los cambios instantáneamente utilizando `iframe` y `RetroGrid`.

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4 + Vanilla CSS con CSS Grid
- **Librerías principales**: React 19, @monaco-editor/react, Lucide React
- **IA**: Groq SDK alimentado por Llama 3 (70b)

## Primeros Pasos

### Requisitos Previos

- [Node.js](https://nodejs.org/es) instalado.

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/vickotoAguilera/aprender-html.git
   cd aprender-html
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto y agrega tu API key de Groq:
   ```env
   GROQ_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la plataforma.

---

*Read this in [English](README-en.md)*
