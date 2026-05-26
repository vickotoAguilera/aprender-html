# 04 - BITÁCORA DE SESIONES

## [2026-05-24] - Inicialización del Proyecto
**Hora:** 10:00 AM (Aprox)
**Agente:** Trae Architect
**PC:** Trabajo

### Avances
- Inspección inicial del directorio (vacío).
- Creación de `.agent-rules.md` con las directivas de Verdad Absoluta.
- Creación de la carpeta `docs/` y archivos base de documentación.
- Configuración inicial para un Proyecto Nuevo Planificado.

### Notas
- El usuario ha confirmado que estamos en la PC de **Trabajo**.
- El proyecto es **Nuevo Planificado**.

## [2026-05-24] - Desarrollo del Módulo 1 (Fase 2 y 3)
**Hora:** 10:15 PM
**Agente:** Trae Architect
**PC:** Trabajo

### Avances
- **Andamiaje**: Inicialización de Next.js con Tailwind CSS 4.
- **Servicios**: Configuración de `groqClient.ts` para tutoría con Llama 3.3 70b.
- **UI/UX Premium**: Integración de componentes de `magicui`.
- **Lienzos Múltiples**: Implementación de `LiveEditor` (Monaco) y `LivePreview` (iframe).
- **Contenido Académico**: Configuración de los 4 pasos guiados.
- **Layout**: Estructura de tres paneles. ⚠️ Bug: panel del tutor se expandía infinitamente.

## [2026-05-24] - Reconstrucción Completa (Clean Rebuild)
**Hora:** 11:21 PM
**Agente:** Antigravity
**PC:** Trabajo

### Avances
- **Diagnóstico**: Layout anterior usaba cadenas `h-full` frágiles que se rompían. Browser subagent también corrompió archivos.
- **Nueva Arquitectura**: CSS Grid puro en el root (`gridTemplateRows: auto 1fr`, `height: 100vh`, `overflow: hidden`). Split con `gridTemplateColumns: 1fr 1fr`. Sin cadenas `h-full`.
- **TutorDrawer**: Reemplazado TutorPanel con un Drawer `position:fixed` — físicamente imposible que afecte el layout.
- **CSS Global**: Reset en CSS puro (`!important` en html/body), no dependiente de clases Tailwind.
- **TypeScript**: Compilación limpia — exit code 0.

### Archivos Nuevos/Modificados
- `src/app/globals.css` — Layout lock en CSS puro
- `src/app/layout.tsx` — Sin clases de altura
- `src/app/page.tsx` — CSS Grid root
- `src/types/steps.ts` — 4 pasos con templates completos
- `src/services/groqClient.ts` — max_tokens 600
- `src/components/StepNav.tsx` — Top bar 56px
- `src/components/CodePane.tsx` — Monaco confinado
- `src/components/PreviewPane.tsx` — iframe confinado
- `src/components/TutorDrawer.tsx` — position:fixed drawer

## [2026-05-25] - Refinamiento de Misiones del Tutor
**Hora:** 11:00 AM
**Agente:** Antigravity
**PC:** Casa

### Avances
- **Prompt Mejorado:** Se actualizó `groqClient.ts` para que el Tutor IA guíe al estudiante mediante **misiones secuenciales**. Ahora el AI no da el código completo resuelto, sino que pide primero la creación de la estructura HTML básica (header, main, footer) como una misión inicial.
- **Traspaso:** Se actualizó la sesión indicando inicio en PC Casa.
- **Corrección de Editor:** Se eliminó el archivo `index.html` precargado (`INITIAL_HTML`) en `page.tsx`. Ahora el IDE carga en blanco, para que el usuario cumpla correctamente la primera misión del Mentor.
- **Tutor con Consciencia de Líneas:** Se ajustaron las misiones en `FloatingMentor.tsx` indicando posiciones exactas de línea. Se actualizó `groqClient.ts` para inyectar un prefijo de número a cada línea de código (ej. `1: <!DOCTYPE html>`) y se instruyó al modelo a guiar al estudiante indicándole exactamente qué insertar o corregir en cada número de línea.