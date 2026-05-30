import { Step } from '@/types/steps';

const HTML_BASE = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ExcelPro Academy - Cursos de Excel</title>
  
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
      <img src="img/fondo.jpg" alt="ExcelPro">
    </div>
    <div class="about-text">
      <h3>Formación práctica y profesional</h3>
      <p>Ayudamos a estudiantes a dominar Excel.</p>
    </div>
  </div>
</section>

<section id="cursos" class="benefits">
  <div class="section-title">
    <h2>Cursos y Beneficios</h2>
  </div>
  <div class="course-grid">
    <div class="course-card">Nivel Básico</div>
    <div class="course-card">Macros y VBA</div>
  </div>
</section>

<section id="contacto">
  <div class="contact-form">
    <div class="form-group"><input type="text" placeholder="Nombre"></div>
    <div class="form-group"><textarea placeholder="Mensaje"></textarea></div>
    <button>Enviar</button>
  </div>
</section>

<footer>
  <p>© 2026 ExcelPro</p>
</footer>

</body>
</html>`;

export const STUDY_STEPS: Step[] = [
  {
    id: 1,
    title: 'Preparación y Reseteo Universal',
    description: 'Crear el CSS y aplicar el reset box-sizing.',
    academicContent: `¡Empecemos desde lo más básico! El navegador siempre trae márgenes invisibles por defecto que arruinan nuestros diseños.

**Pasos a seguir:**
1. En el Explorador, pulsa el icono **"+" (Nuevo Archivo)** y escribe exactamente \`css/styles.css\` para crear la carpeta y el archivo.
2. Abre \`index.html\` y agrega en la línea 7: \`<link rel="stylesheet" href="css/styles.css">\`
3. En tu nuevo archivo CSS, escribe el **Reset Universal**:
\`\`\`css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body { background-color: #f4f7fb; color: #333; }
\`\`\`
Cuando lo tengas, dale a **VERIFICAR CÓDIGO**.`,
    template: HTML_BASE
  },
  {
    id: 2,
    title: 'La Cabecera Fija',
    description: 'Uso de position fixed y padding.',
    academicContent: `¡Excelente! Ahora vamos a estilizar el \`<header>\` para que se quede pegado arriba.

**Tu misión en CSS:**
Añade este selector a tu \`styles.css\`:
\`\`\`css
header {
    background-color: #0f172a;
    padding: 20px 8%;
    position: fixed;
    width: 100%;
}
\`\`\`
El \`position: fixed\` asegura que la barra nunca desaparezca al hacer scroll, ¡pero fíjate que le dimos un ancho de 100% para que no se encoja!`,
    template: HTML_BASE
  },
  {
    id: 3,
    title: 'Navegación Flexible (Flexbox)',
    description: 'Alineación de elementos con display flex.',
    academicContent: `¡Magia con Flexbox! Vamos a hacer que el Logo y los links se separen a los extremos.

**Tu misión:**
Aplica \`display: flex\` al \`nav\` y separa sus elementos. 
\`\`\`css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo { color: green; font-size: 1.8em; font-weight: bold; }
\`\`\`
Y para quitar los puntos de la línea de la lista (\`ul\`), usa esto:
\`\`\`css
nav ul { display: flex; gap: 20px; list-style: none; }
nav a { color: white; text-decoration: none; }
\`\`\`
Pruébalo y verifica.`,
    template: HTML_BASE
  },
  {
    id: 4,
    title: 'Sección Hero y Gradientes',
    description: 'Fondo de pantalla completa con 100vh.',
    academicContent: `El Hero es la primera pantalla. Necesitamos que ocupe todo el alto del navegador usando la medida \`vh\` (Viewport Height).

**Misión:**
Añade los estilos de \`.hero\`:
\`\`\`css
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 0 8%;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('fondo.jpg') center/cover;
}
.hero-content h1 { font-size: 3rem; margin-bottom: 20px; }
\`\`\`
El gradiente oscuro ayuda a que las letras blancas resalten sobre la imagen.`,
    template: HTML_BASE
  },
  {
    id: 5,
    title: 'Botones Atractivos',
    description: 'Estilizar botones con inline-block.',
    academicContent: `¡Todo héroe necesita un llamado a la acción (Call to Action)! Un enlace \`<a>\` normal no tiene volumen, para darle volumen usamos \`inline-block\`.

**Escribe en CSS:**
\`\`\`css
.btn {
    display: inline-block;
    margin-top: 20px;
    background-color: #22c55e;
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 8px;
}
\`\`\`
Prueba pasar el ratón por encima. Verificamos tu avance.`,
    template: HTML_BASE
  },
  {
    id: 6,
    title: 'Diseño en Bloques con CSS Grid',
    description: 'Maquetar la sección Nosotros usando grid.',
    academicContent: `Ahora viene lo avanzado: **CSS Grid**. \`flex\` es bueno para una dimensión (filas), pero \`grid\` es excelente para organizar columnas estructurales perfectas.

Dale espaciado a todas las \`section\` y estructura el \`.about\`:
\`\`\`css
section { padding: 90px 8%; }
.section-title { text-align: center; margin-bottom: 40px; }

.about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}
.about img { width: 89%; border-radius: 12px; }
\`\`\`
¡Has partido la pantalla en dos mitades (\`1fr 1fr\`) perfectamente simétricas!`,
    template: HTML_BASE
  },
  {
    id: 7,
    title: 'Tarjetas de Cursos y Sombras',
    description: 'Cajas decorativas y sombras (box-shadow).',
    academicContent: `Vamos a diseñar las cajas de información que dan vida al proyecto.

Agrega estos selectores:
\`\`\`css
.benefits { background: #0f172a; color: white; }

.course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}
.course-card {
    background-color: rgb(158, 134, 221);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(170, 25, 25, 0.9);
}
\`\`\`
El truco \`auto-fit, minmax\` hace que sea responsivo en teléfonos automáticamente sin necesidad de Media Queries. ¡Magia moderna!`,
    template: HTML_BASE
  },
  {
    id: 8,
    title: 'Formularios Profesionales',
    description: 'Diseño de inputs y textarea.',
    academicContent: `¡Último paso! Un sitio web sin formulario de contacto no tiene vida. Los \`input\` por defecto se ven novatos, vamos a estilizarlos.

Anota esto en tu archivo CSS:
\`\`\`css
.contact-form { max-width: 700px; margin: auto; background: white; padding: 40px; border-radius: 12px; }
.form-group { margin-bottom: 20px; }

.form-group input, .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

button {
    width: 100%;
    padding: 15px;
    border: none;
    background: #22c55e;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
footer { background-color: #020617; color: white; text-align: center; padding: 20px; }
\`\`\`
¡Haz estirado los inputs al 100% de la caja!

¡Presiona VERIFICAR CÓDIGO por última vez para graduarte en esta landing page!`,
    template: HTML_BASE
  }
];
