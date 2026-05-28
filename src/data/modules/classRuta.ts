import { Step } from '@/types/steps';

export const ACADEMIC_STEPS: Step[] = [
    {
        id: 1,
        title: 'La Base del Proyecto',
        description: 'Estructura HTML básica para tu Portfolio.',
        academicContent: 'Todo gran proyecto web comienza con la estructura base: <!DOCTYPE html>, <html>, <head> (para configuración) y <body> (donde vive el contenido visible). Usaremos UTF-8 para que los acentos se vean bien.',
        template: '',
    },
    {
        id: 2,
        title: 'Cabecera y Hero Section',
        description: 'Presentándote al mundo con H1 y P.',
        academicContent: 'La sección Hero es lo primero que ven tus usuarios. Usaremos <header> para la cabecera, un <h1> para tu nombre y un <p> para tu especialidad.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Portfolio</title>
</head>
<body>
    <header>
        <h1>Soy [Tu Nombre]</h1>
        <p>Desarrollador Web Fullstack en formación</p>
    </header>
    
    <main>
        <!-- Próxima sección: Proyectos -->
    </main>
</body>
</html>`,
    },
    {
        id: 3,
        title: 'Sección de Proyectos (Listas)',
        description: 'Organiza tus trabajos usando listas <ul> y <li>.',
        academicContent: 'Usa una <section> dentro de <main> para tus proyectos. Las listas no ordenadas (ul) son perfectas para enumerar tus habilidades o trabajos previos de forma clara.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Portfolio</title>
</head>
<body>
    <header>
        <h1>Soy [Tu Nombre]</h1>
        <p>Desarrollador Web Fullstack en formación</p>
    </header>
    
    <main>
        <section id="proyectos">
            <h2>Mis Proyectos</h2>
            <ul>
                <li>Calculadora en JS</li>
                <li>Landing Page de Instrumentos</li>
                <li>E-commerce de Música</li>
            </ul>
        </section>
    </main>
</body>
</html>`,
    },
    {
        id: 4,
        title: 'Imágenes y Accesibilidad',
        description: 'Agrega tu foto con etiquetas <img> y alt.',
        academicContent: 'Las imágenes dan vida al sitio. Recuerda siempre el atributo <alt> para que las personas con lectores de pantalla sepan qué hay en la imagen. ¡A11y es fundamental!',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Portfolio</title>
</head>
<body>
    <header>
        <img src="https://via.placeholder.com/100" alt="Foto de perfil de [Tu Nombre]">
        <h1>Soy [Tu Nombre]</h1>
        <p>Desarrollador Web Fullstack en formación</p>
    </header>
    
    <main>
        <section id="proyectos">
            <h2>Mis Proyectos</h2>
            <ul>
                <li>Calculadora en JS</li>
                <li>Landing Page de Instrumentos</li>
                <li>E-commerce de Música</li>
            </ul>
        </section>
    </main>
</body>
</html>`,
    },
    {
        id: 5,
        title: 'Formulario de Contacto',
        description: 'Permite que te escriban con <form> y <input>.',
        academicContent: 'Los formularios permiten que los usuarios te envíen mensajes. Usaremos <label> para que sea accesible y el atributo <required> para validar que no envíen el formulario vacío.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Portfolio</title>
</head>
<body>
    <header>
        <img src="https://via.placeholder.com/100" alt="Foto de perfil de [Tu Nombre]">
        <h1>Soy [Tu Nombre]</h1>
        <p>Desarrollador Web Fullstack en formación</p>
    </header>
    
    <main>
        <section id="proyectos">
            <h2>Mis Proyectos</h2>
            <ul>
                <li>Calculadora en JS</li>
                <li>Landing Page de Instrumentos</li>
                <li>E-commerce de Música</li>
            </ul>
        </section>

        <section id="contacto">
            <h2>Contáctame</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required>
                
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje"></textarea>
                
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
</body>
</html>`,
    },
    {
        id: 6,
        title: 'Colores y Fuentes CSS',
        description: 'Dale estilo a tu Portfolio con CSS.',
        academicContent: 'En CSS, selector { propiedad: valor; }. Vamos a cambiar el color de fondo y la fuente para que se vea profesional. Usaremos el archivo estilo.css para que nuestro HTML sea más limpio.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Portfolio</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <header>
        <img src="https://via.placeholder.com/100" alt="Foto de perfil">
        <h1>Mi Portfolio Profesional</h1>
    </header>
    <main>
        <section id="proyectos">
            <h2>Habilidades</h2>
            <ul>
                <li>HTML5 / CSS3</li>
                <li>JavaScript</li>
                <li>React / Next.js</li>
            </ul>
        </section>
    </main>
</body>
</html>`,
        additionalFiles: [
            {
                name: 'estilo.css',
                language: 'css',
                content: `body {
    background-color: #f4f4f9;
    color: #333;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}
header { background: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px; }
h1 { margin: 0; }
#proyectos { background: white; padding: 20px; margin-top: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }`
            }
        ]
    },
    {
        id: 7,
        title: 'El Modelo de Cajas',
        description: 'Padding, Margin y Borders.',
        academicContent: 'Cada elemento es una caja. El padding es el espacio interno, el margin es el externo. Aprender a separarlos es la clave del diseño limpio. Editaremos estilo.css.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="caja-proyecto">
        <h3>E-commerce App</h3>
        <p>Una tienda online completa.</p>
    </div>
    <div class="caja-proyecto">
        <h3>Weather Dashboard</h3>
        <p>Consulta el clima en tiempo real.</p>
    </div>
</body>
</html>`,
        additionalFiles: [
            {
                name: 'estilo.css',
                language: 'css',
                content: `.caja-proyecto {
    padding: 20px;
    margin-bottom: 15px;
    border: 2px solid #3498db;
    border-radius: 12px;
    background: #ecf0f1;
    transition: transform 0.2s;
}
.caja-proyecto:hover { transform: scale(1.02); }`
            }
        ]
    },
    {
        id: 8,
        title: 'Layout con Flexbox',
        description: 'Flexbox para tu grid de proyectos.',
        academicContent: 'Flexbox es la herramienta más poderosa para alinear cosas. Usando display: flex en el contenedor, podemos ordenar nuestros proyectos en una fila o columna fácilmente.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        .grid-proyectos {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            padding: 20px;
        }
        .proyecto {
            flex: 1;
            min-width: 200px;
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-proyectos">
        <div class="proyecto">Proyecto A</div>
        <div class="proyecto">Proyecto B</div>
        <div class="proyecto">Proyecto C</div>
    </div>
</body>
</html>`,
    },
    {
        id: 9,
        title: 'Interactividad con JS',
        description: 'Cambia el tema con un botón.',
        academicContent: 'Con document.body.style podemos cambiar el diseño en tiempo real. Esto es manipular el DOM. ¡Vamos a crear un modo oscuro!',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Portfolio Interactivo</title>
    <style>
        body { transition: background 0.5s, color 0.5s; padding: 40px; font-family: sans-serif; }
        .controles { margin-bottom: 30px; }
        button { padding: 10px 20px; cursor: pointer; border-radius: 5px; border: 1px solid #ccc; }
    </style>
</head>
<body>
    <div class="controles">
        <button onclick="document.body.style.backgroundColor = '#1a1a2e'; document.body.style.color = '#fff'">Luna (Noche)</button>
        <button onclick="document.body.style.backgroundColor = '#fff'; document.body.style.color = '#333'">Sol (Día)</button>
    </div>
    <h1>Bienvenido a mi sitio dinámico</h1>
    <p>Haz clic en los botones para cambiar el ambiente.</p>
</body>
</html>`,
    },
    {
        id: 10,
        title: 'Filtro Dinámico Profesional',
        description: 'Buscador en tiempo real con JavaScript.',
        academicContent: 'Usando keyup y includes, podemos filtrar la lista de proyectos mientras el usuario escribe. Es lo mismo que hiciste en tu "Página Pequeña". Todo el JS irá en app.js.',
        template: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Buscador de Proyectos</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <input type="text" id="filtro" placeholder="Escribe para filtrar proyectos (ej: E-commerce)...">
    
    <ul class="lista-proyectos">
        <li class="proyecto">E-commerce de Instrumentos</li>
        <li class="proyecto">Dashboard Administrativo</li>
        <li class="proyecto">Página de Criptomonedas</li>
        <li class="proyecto">Chat en tiempo real</li>
    </ul>

    <script src="app.js"></script>
</body>
</html>`,
        additionalFiles: [
            {
                name: 'estilo.css',
                language: 'css',
                content: `body { font-family: sans-serif; padding: 30px; background: #f0f2f5; }
#filtro { width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 8px; border: 1px solid #ddd; }
.lista-proyectos { list-style: none; padding: 0; }
.proyecto { background: white; padding: 15px; margin-bottom: 10px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }`
            },
            {
                name: 'app.js',
                language: 'javascript',
                content: `const input = document.getElementById('filtro');
const items = document.querySelectorAll('.proyecto');

input.addEventListener('keyup', () => {
    const query = input.value.toLowerCase();
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
});`
            }
        ]
    },
];