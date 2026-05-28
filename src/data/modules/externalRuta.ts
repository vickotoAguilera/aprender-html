import { Step } from '@/types/steps';

export const EXTERNAL_STEPS: Step[] = [
    {
        id: 1,
        title: 'Reto: Etiquetas Formulario',
        description: 'Construye un formulario accesible usando las guías.',
        academicContent: 'Reglas de Formularios según la Cheatsheet:\\n- Usar <form> como contenedor principal.\\n- Usar <input> con los tipos correctos.\\n- Usar <label> para accesibilidad.\\n- <button type="submit"> para enviar.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reto Formulario</title>
</head>
<body>
    <!-- Crea tu formulario aquí -->
</body>
</html>`
    },
    {
        id: 2,
        title: 'Reto: Sintaxis CSS',
        description: 'El bloque básico de estilo CSS.',
        academicContent: 'Reglas de CSS según la Cheatsheet:\\n1. Selector (h1).\\n2. Llaves de apertura y cierre {}.\\n3. Declaración: Propiedad (color) + valor (blue) seguido de ;.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        /* Haz que el h1 sea de color red y mida 32px */
    </style>
</head>
<body>
    <h1>¡Hola CSS!</h1>
</body>
</html>`
    }
];
