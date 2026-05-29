import { Step } from '@/types/steps';

export const STUDY_STEPS: Step[] = [
  {
    id: 1,
    title: 'Preparación del Proyecto: ExcelPro Academy',
    description: 'Estructura base y enlace de estilos.',
    academicContent: `¡Empecemos tu camino como desarrollador Frontend! 

Ya tienes el HTML listo (el que nos mandó el profe). Ahora tu misión es darle estilo. 

**Pasos a seguir:**
1. En el Explorador a la izquierda, pulsa el icono **"+" (Nuevo Archivo)**.
2. Crea una carpeta llamada **css** y dentro un archivo llamado **styles.css**.
3. Asegúrate de que en tu HTML (línea 7) esté este código: \`<link rel="stylesheet" href="css/styles.css">\`.

Una vez tengas el archivo creado, ¡escríbeme en el chat si tienes dudas de cómo empezar!`,
    template: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ExcelPro Academy - Cursos de Excel</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header>
  <nav>
    <div class="logo">ExcelPro Academy</div>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#cursos">Cursos</a></li>
      <li><a href="#beneficios">Beneficios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>

<section class="hero" id="inicio">
  <div class="hero-content">
    <h1>Aprende Excel de Cero a Avanzado</h1>
    <p>Capacítate con cursos prácticos de Excel y mejora tus habilidades laborales.</p>
    <a href="#cursos" class="btn">Ver Cursos</a>
  </div>
</section>

<section id="nosotros">
  <div class="section-title">
    <h2>¿Quiénes Somos?</h2>
    <p>Especialistas en formación tecnológica.</p>
  </div>
  <div class="about">
    <div class="about-img">
      <img src="/img/perro-waton/perro waton triste.jpg" alt="ExcelPro Academy Logo">
    </div>
    <div class="about-text">
      <h3>Formación práctica y profesional</h3>
      <p>Ayudamos a estudiantes y empresas a dominar Excel mediante cursos modernos.</p>
    </div>
  </div>
</section>

<footer id="contacto">
  <p>© 2026 ExcelPro Academy - Todos los derechos reservados</p>
</footer>

</body>
</html>`,
    additionalFiles: [
      {
        name: 'css/styles.css',
        language: 'css',
        content: `/* 
  ¡Bienvenido a tu primer archivo de estilos! 
  Aquí empezarás a escribir el código para darle vida a la página.
  
  Pista: Empieza por el reset con '*' para quitar los márgenes por defecto.
*/

`
      }
    ]
  },
  {
    id: 2,
    title: 'Domina la Sección Hero',
    description: 'Colores, Unidades y Degradados.',
    academicContent: `¡Excelente! Ahora vamos a trabajar en la sección **Hero** (la parte principal de la web).

**Tu misión en CSS:**
1. Crea un selector para \`.hero\` (línea 25 del HTML).
2. Dale un alto de \`80vh\` (para que ocupe casi toda la pantalla).
3. Usa \`display: flex\` para centrar el contenido.
4. Experimenta con \`background-color\` usando colores hexadecimales o \`rgba\`.

**Detalle Técnico:**
- \`vh\`: Es el porcentaje del alto de tu pantalla.
- \`flex\`: Es una herramienta mágica para alinear cosas.

¡Pregúntame cualquier duda!`,
    template: `<!-- HTML igual al paso anterior -->`,
    additionalFiles: [
      {
        name: 'css/styles.css',
        language: 'css',
        content: `/* Continúa con tus estilos aquí */
`
      }
    ]
  }
];
