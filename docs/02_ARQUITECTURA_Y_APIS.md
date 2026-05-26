# 02 - ARQUITECTURA Y APIS

## Stack Tecnológico
- **Framework**: Next.js 16.2.6 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Vanilla CSS + CSS Grid + Tailwind 4.3.0
- **Editor**: @monaco-editor/react (Vite-like live preview)
- **IA**: Groq SDK (Llama 3.3 70b)
- **UI Components**: Lucide React

## Arquitectura del Aprendizaje
- **Cumulative Templates**: El estado del editor se hereda entre pasos académicos.
- **Load Base Feature**: Función `handleLoadTemplate` que sincroniza el editor con el estado inicial de cualquier lección.
- **Mentor Interactive Loop**: Sistema de verificación basado en Regex para validación de código en tiempo real.
- **Step Selector Grid**: Navegación no lineal integrada en el `TutorialPane`.