Desarrollo de
sitio web estático
utilizando HTML5
y CSS3
Lectura
¡Bienvenido al curso Programación Front End! En esta primera unidad, abordaremos los
fundamentos para entender cómo funciona Internet, También exploraremos para qué sirven
HTML, JavaScript y CSS en el desarrollo web, profundizando en las etiquetas más comunes de
HTML, así como en las propiedades CSS. Por último, te introducirás en GitHub, una herramienta
poderosa para el control de versiones y la colaboración en proyectos de software. A través de
contenido y la presentación de ejemplos, se espera que aprenda a utilizar elementos del
lenguaje HTML5 y estilos CSS3 para desarrollar un sitio web estático de acuerdo a
requerimientos de desarrollo.
¡Adelante!
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
2
Introducción a Internet
¿Cómo funciona Internet?
Internet es una red global de computadoras interconectadas que se comunican entre sí a través
de un conjunto de protocolos estándar conocidos como TCP/IP (Transmission Control
Protocol/Internet Protocol). La comunicación en Internet se basa en el intercambio de datos a
través de paquetes, que viajan desde el origen hasta el destino a través de múltiples nodos y
redes.
Componentes clave
• Redes: Conjunto de dispositivos interconectados que pueden comunicarse entre sí.
• Protocolo TCP/IP: Conjunto de reglas que rigen cómo se transmiten los datos en Internet.
• Paquetes de Datos: Fragmentos de datos que se envían a través de la red.
Proveedores de Servicios de Internet (ISP)
Los ISPs son empresas que proporcionan acceso a Internet a los usuarios. Actúan como
intermediarios entre el usuario final y la infraestructura de Internet, permitiendo la conexión a
la red global.
Ejemplos de ISPs: MOVISTAR, VTR, Entel, AT&T
Servidores
Un servidor es una computadora que proporciona datos, recursos o servicios a otras
computadoras, conocidas como clientes, a través de una red. Los servidores pueden alojar sitios
web, manejar correos electrónicos, almacenar archivos y mucho más.
Estos son los tipos de servidores:
• Servidores web: Alojan sitios web y responden a solicitudes HTTP/HTTPS.
• Servidores de correo: Manejan el envío y recepción de correos electrónicos.
• Servidores de archivos: Almacenan y proporcionan acceso a archivos.
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
3
Sistema de Nombres de Dominio (DNS)
El DNS es un sistema que traduce nombres de dominio legibles por humanos (como
www.example.com) en direcciones IP numéricas (como 192.0.2.1) que las computadoras utilizan
para identificar cada dispositivo en la red. Funciona como una guía telefónica de Internet.
Funcionamiento del DNS:
1. Resolución de Nombre: El cliente envía una solicitud DNS para obtener la dirección IP del
nombre de dominio.
2. Servidor DNS: El servidor DNS responde con la dirección IP correspondiente.
3. Conexión: El cliente utiliza la dirección IP para conectarse al servidor deseado.
Modelo Cliente-Servidor
El modelo cliente-servidor describe la interacción entre dos programas: el cliente, que solicita
servicios o recursos, y el servidor, que los proporciona. Este modelo es fundamental para la
arquitectura de Internet.
Ejemplo de Modelo Cliente-Servidor:
• Cliente: Navegador web
• Servidor: Servidor web que aloja el sitio web
¿Para qué sirven HTML, JavaScript y CSS?
Estos tres lenguajes son fundamentales para el desarrollo web y tienen roles específicos:
• HTML (Lenguaje de Marcado de Hipertexto): Proporciona la estructura básica de una
página web. Utiliza etiquetas para definir elementos como títulos, párrafos, enlaces,
imágenes y formularios.
<h1>Título Principal</h1>
<p>Este es un párrafo.</p>
• JavaScript: Añade interactividad y comportamiento dinámico a las páginas web, como
validaciones de formularios, animaciones y actualizaciones de contenido sin recargar la
página.
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
4
document.getElementById("miBoton").addEventListener("click", function() {
 alert("¡Hola Mundo!");
});
• CSS (Hojas de Estilo en Cascada): Define la presentación y el diseño de una página web,
permitiendo aplicar estilos como colores, fuentes y distribuciones.
body {
 font-family: Arial, sans-serif;
}
h1 {
 color: blue;
}
HTML
HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear y estructurar
contenido en la web. Es un lenguaje de marcado utilizado para definir la estructura y el
contenido de una página web. Utiliza etiquetas para indicar diferentes elementos, como títulos,
párrafos, enlaces, imágenes y formularios.
Etiquetas comunes en HTML
1. Encabezados
Los encabezados (<h1> a <h6>) se utilizan para definir títulos y subtítulos en una página web,
donde <h1> es el más importante y <h6> el menos importante.
<h1>Encabezado de Nivel 1</h1>
<h2>Encabezado de Nivel 2</h2>
<h3>Encabezado de Nivel 3</h3>
2. Párrafos
La etiqueta <p> se utiliza para definir párrafos.
<p>Este es un párrafo de ejemplo.</p>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
5
3. Enlaces
Los enlaces se crean con la etiqueta <a> y el atributo href para especificar la URL del destino.
<a href="https://www.example.com">Visita Example</a>
4. Imágenes
La etiqueta <img> se utiliza para insertar imágenes, con los atributos src y alt para especificar la
fuente y el texto alternativo.
<img src="imagen.jpg" alt="Descripción de la imagen">
5. Listas
Las listas pueden ser ordenadas (<ol>) o no ordenadas (<ul>). Los elementos de la lista se
definen con <li>.
<ul>
 <li>Elemento de lista no ordenada 1</li>
 <li>Elemento de lista no ordenada 2</li>
</ul>
<ol>
 <li>Elemento de lista ordenada 1</li>
 <li>Elemento de lista ordenada 2</li>
</ol>
6. Tablas
Las tablas se crean con <table>, <tr> (fila de la tabla), <th> (encabezado de la tabla), y <td> (celda
de la tabla).
<table>
 <tr>
 <th>Encabezado 1</th>
 <th>Encabezado 2</th>
 </tr>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
6
 <tr>
 <td>Celda 1</td>
 <td>Celda 2</td>
 </tr>
</table>
7. Formularios
Los formularios se crean con <form> y pueden incluir varios elementos de entrada como
<input>, <textarea>, y <button>.
<form action="/submit" method="post">
 <label for="nombre">Nombre:</label>
 <input type="text" id="nombre" name="nombre">
 <button type="submit">Enviar</button>
</form>
8. Divisiones y Spans
Las etiquetas <div> y <span> se utilizan para agrupar elementos y aplicar estilos o scripts.
<div>
 <h2>Subtítulo</h2>
 <p>Texto dentro de un div.</p>
</div>
<span style="color: red;">Texto en línea con span.</span>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
7
Ejemplos prácticos:
• Ejemplo 1: Página Web Simple
<!DOCTYPE html>
<html>
<head>
 <title>Página Simple</title>
</head>
<body>
 <h1>Bienvenido a mi Página</h1>
 <p>Esta es una página web simple con varios elementos HTML.</p>
 <a href="https://www.example.com">Visita Example</a>
 <img src="imagen.jpg" alt="Descripción de la imagen">
 <ul>
 <li>Elemento 1</li>
 <li>Elemento 2</li>
 </ul>
 <table>
 <tr>
 <th>Encabezado 1</th>
 <th>Encabezado 2</th>
 </tr>
 <tr>
 <td>Celda 1</td>
 <td>Celda 2</td>
 </tr>
 </table>
 <form action="/submit" method="post">
 <label for="nombre">Nombre:</label>
 <input type="text" id="nombre" name="nombre">
 <button type="submit">Enviar</button>
 </form>
</body>
</html>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
8
• Ejemplo 2: Formulario de Contacto
<!DOCTYPE html>
<html>
<head>
 <title>Formulario de Contacto</title>
</head>
<body>
 <h1>Contáctanos</h1>
 <form action="/enviar" method="post">
 <label for="nombre">Nombre:</label>
 <input type="text" id="nombre" name="nombre"><br>
 <label for="email">Email:</label>
 <input type="email" id="email" name="email"><br>
 <label for="mensaje">Mensaje:</label>
 <textarea id="mensaje" name="mensaje"></textarea><br>
 <button type="submit">Enviar</button>
 </form>
</body>
</html>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
9
CSS
CSS (Cascading Style Sheets) es el lenguaje utilizado para describir la presentación de un
documento HTML. Es un lenguaje de estilo que permite controlar la apariencia de un
documento HTML. Con CSS, se pueden definir colores, fuentes, distribuciones de diseño y más
para crear una presentación visualmente atractiva.
Sintaxis ásica de CSS
Un bloque de estilo CSS tiene la siguiente estructura:
selector {
 propiedad: valor;
}
- Selector: Indica qué elementos HTML se aplicarán los estilos.
- Propiedad: Define la característica específica que deseas estilizar.
- Valor: Especifica el valor de la propiedad.
Ejemplo:
p {
 color: blue;
 font-size: 16px;
}
El modelo de cajas
El modelo de cajas es un concepto fundamental en CSS que describe cómo se disponen y
manipulan los elementos HTML. Cada elemento es una caja que consta de cuatro áreas
principales:
• Contenido: El área donde se muestra el contenido (texto, imágenes, etc.).
• Relleno (Padding): Espacio entre el contenido y el borde.
• Borde (Border): Envuelve el contenido y el relleno.
• Margen (Margin): Espacio entre el borde y otros elementos.
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
10
Figura 1: El modelo de cajas CSS.

Fuente: Martínez, E. (n.d.).
.elemento {
 width: 200px;
 height: 100px;
 padding: 10px;
 border: 2px solid black;
 margin: 20px;
}
Propiedades básicas de CSS
1. Color
Define el color del texto de un elemento.
h1 {
 color: red;
}
2. Tamaño (Width y Height)
div {
 width: 300px;
 height: 150px;
}
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
11
3. Bordes (Border)
Establece el estilo, el grosor y el color del borde de un elemento.
p {
 border: 1px solid black;
}
4. Margen (Margin)
Espacio exterior que rodea el borde de un elemento.
p {
 margin: 20px;
}
5. Relleno (Padding)
Espacio interior entre el contenido y el borde de un elemento.
div {
 padding: 15px;
}
6. Posicionamiento
CSS ofrece diferentes métodos de posicionamiento para controlar la disposición de los
elementos en la página.
• Estático (Static): Posicionamiento por defecto. Los elementos siguen el flujo
normal del documento.
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
12
.div1 {
 position: static;
}
• Relativo (Relative): Posiciona el elemento relativo a su posición original.
.div2 {
 position: relative;
 top: 10px;
 left: 20px;
}
• Absoluto (Absolute): Posiciona el elemento relativo a su contenedor más cercano con
position: relative o absolute.
.div3 {
 position: absolute;
 top: 50px;
 left: 100px;
}
• Fijo (Fixed): El elemento se posiciona respecto a la ventana del navegador y no se
desplaza al hacer scroll.
.div4 {
 position: fixed;
 bottom: 0;
 right: 0;
}
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
13
Figura 2: Posicionamiento CSS.

Fuente: Pinterest.
7. Visibilidad
Controla la visibilidad de un elemento.
• visible: El elemento es visible.
• hidden: El elemento está oculto, pero ocupa espacio en el diseño.
• display: none: El elemento está oculto y no ocupa espacio.
p.visible {
 visibility: visible;
}
p.hidden {
 visibility: hidden;
}
p.none {
 display: none;
}
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
14
Figura 3: Visualización de elementos.

Fuente: López Quesada, J. (n.d.).
Ejemplos prácticos:
• Ejemplo 1: Estilo Básico de Texto y Color
<!DOCTYPE html>
<html>
<head>
 <style>
 h1 {
 color: blue;
 }
 p {
 font-size: 14px;
 color: gray;
 }
 </style>
</head>
<body>
 <h1>Bienvenidos</h1>
 <p>Este es un párrafo de ejemplo estilizado con CSS.</p>
</body>
</html>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
15
• Ejemplo 2: Caja con Bordes, Margen y Relleno
<!DOCTYPE html>
<html>
<head>
 <style>
 .caja {
 width: 200px;
 height: 100px;
 padding: 20px;
 border: 2px solid black;
 margin: 10px;
 }
 </style>
</head>
<body>
 <div class="caja">Contenido de la caja</div>
</body>
</html>
• Ejemplo 3: Posicionamiento de Elementos
<!DOCTYPE html>
<html>
<head>
 <style>
 .static {
 position: static;
 background-color: lightgray;
 }
 .relative {
 position: relative;
 top: 10px;
 left: 20px;
 background-color: lightblue;
 }
 .absolute {
 position: absolute;
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
16
 top: 30px;
 left: 50px;
 background-color: lightgreen;
 }
 .fixed {
 position: fixed;
 bottom: 0;
 right: 0;
 background-color: lightcoral;
 }
 </style>
</head>
<body>
 <div class="static">Posicionamiento Estático</div>
 <div class="relative">Posicionamiento Relativo</div>
 <div class="absolute">Posicionamiento Absoluto</div>
 <div class="fixed">Posicionamiento Fijo</div>
</body>
</html>
BOOTSTRAP
Bootstrap es un framework CSS muy popular que facilita el desarrollo de sitios web responsivos
y móviles. Esta semana, exploraremos los conceptos básicos de Bootstrap, cómo integrarlo en
una página web, y revisaremos algunos de sus componentes principales.
Bootstrap es un framework de código abierto que proporciona una colección de herramientas
de diseño y componentes predefinidos que facilitan la creación de sitios web atractivos y
responsivos. Fue desarrollado por Twitter y se basa en HTML, CSS y JavaScript.
Sitio oficial de Bootstrap: https://getbootstrap.com/
Integración de Bootstrap en una página web
Para integrar Bootstrap en una página web, puedes utilizar un CDN (Content Delivery Network)
o descargar los archivos y hospedarlos localmente.
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
17
Usando un CDN
Agrega las siguientes líneas dentro del <head> de tu documento HTML:
<!DOCTYPE html>
<html>
<head>
 <title>Mi Página con Bootstrap</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
 <!-- Contenido aquí -->
</body>
</html>
Incorporación de Diseño Responsive con Bootstrap
Trabajar con Bootstrap facilita enormemente la creación de páginas web responsivas, las cuales
se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos. Bootstrap utiliza
un sistema de cuadrícula flexible y clases predefinidas que permiten a los desarrolladores
diseñar layouts que se ajustan y reorganizan según el tamaño de la ventana del navegador. Al
utilizar las clases de Bootstrap, como container, row y col, junto con utilidades de diseño
responsivo, como d-none y d-md-block, los desarrolladores pueden asegurarse de que sus
páginas web sean accesibles y atractivas en dispositivos móviles, tabletas y pantallas de
escritorio. La capacidad de crear fácilmente un diseño adaptable con Bootstrap no solo mejora
la experiencia del usuario, sino que también simplifica el proceso de desarrollo, reduciendo el
tiempo y el esfuerzo necesarios para garantizar que un sitio web funcione bien en todos los
dispositivos.
<!DOCTYPE html>
<html>
<head>
 <title>Página Responsive con Bootstrap</title>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
18
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <a class="navbar-brand" href="#">Navbar</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" ariacontrols="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNav">
 <ul class="navbar-nav">
 <li class="nav-item active">
 <a class="nav-link" href="#">Inicio <span class="sr-only">(actual)</span></a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">Características</a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">Precios</a>
 </li>
 </ul>
 </div>
 </nav>
 <div class="container mt-4">
 <div class="row">
 <div class="col-md-4">
 <div class="card">
 <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
 <div class="card-body">
 <h5 class="card-title">Tarjeta 1</h5>
 <p class="card-text">Descripción breve de la tarjeta 1.</p>
 <a href="#" class="btn btn-primary">Leer más</a>
 </div>
 </div>
 </div>
 <div class="col-md-4">
 <div class="card">
 <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
19
 <div class="card-body">
 <h5 class="card-title">Tarjeta 2</h5>
 <p class="card-text">Descripción breve de la tarjeta 2.</p>
 <a href="#" class="btn btn-primary">Leer más</a>
 </div>
 </div>
 </div>
 <div class="col-md-4">
 <div class="card">
 <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
 <div class="card-body">
 <h5 class="card-title">Tarjeta 3</h5>
 <p class="card-text">Descripción breve de la tarjeta 3.</p>
 <a href="#" class="btn btn-primary">Leer más</a>
 </div>
 </div>
 </div>
 </div>
 </div>
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
Sistema de Cuadrícula de Bootstrap
Bootstrap utiliza un sistema de cuadrícula flexible y responsivo que permite crear diseños
complejos de manera sencilla. El sistema de cuadrícula se basa en filas (<div class="row">) y
columnas (<div class="col">).
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
20
Ejemplo de Cuadrícula
<div class="container">
 <div class="row">
 <div class="col">
 Columna 1
 </div>
 <div class="col">
 Columna 2
 </div>
 <div class="col">
 Columna 3
 </div>
 </div>
</div>
Componentes principales de Bootstrap
1. Botones
Bootstrap ofrece una variedad de clases para estilizar botones de forma consistente.
<button class="btn btn-primary">Botón Primario</button>
<button class="btn btn-secondary">Botón Secundario</button>
<button class="btn btn-success">Botón de Éxito</button>
2. Barra de navegación (Navbar)
La barra de navegación es un componente clave para crear menús de navegación
responsivos.
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <a class="navbar-brand" href="#">Navbar</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" ariacontrols="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
21
 </button>
 <div class="collapse navbar-collapse" id="navbarNav">
 <ul class="navbar-nav">
 <li class="nav-item active">
 <a class="nav-link" href="#">Inicio <span class="sr-only">(actual)</span></a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">Características</a>
 </li>
 <li class="nav-item">
 <a class="nav-link" href="#">Precios</a>
 </li>
 </ul>
 </div>
</nav>
3. Tarjetas
Las tarjetas son contenedores flexibles y extensibles que incluyen opciones para encabezados,
pies de página, contenido, y más.
<div class="card" style="width: 18rem;">
 <img src="imagen.jpg" class="card-img-top" alt="...">
 <div class="card-body">
 <h5 class="card-title">Título de la Tarjeta</h5>
 <p class="card-text">Algún texto rápido sobre el contenido de la tarjeta.</p>
 <a href="#" class="btn btn-primary">Ir a algún lugar</a>
 </div>
</div>
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
22
4. Formularios
Bootstrap facilita la creación de formularios bien estructurados y estilizados.
<form>
 <div class="form-group">
 <label for="exampleInputEmail1">Dirección de correo</label>
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
placeholder="Ingresa email">
 <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie más.</small>
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Contraseña</label>
 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
 </div>
 <button type="submit" class="btn btn-primary">Enviar</button>
</form>
5. Alertas
Las alertas proporcionan retroalimentación contextual para acciones de usuario.
<div class="alert alert-warning" role="alert">
 ¡Esto es una alerta de advertencia!
</div>
Ejemplos prácticos:
• Ejemplo 1: Página Básica con Bootstrap
<!DOCTYPE html>
<html>
<head>
 <title>Página con Bootstrap</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
 <div class="container">
 <h1 class="text-center">Bienvenidos a mi Página</h1>
 <p class="text-center">Esta es una página de ejemplo utilizando Bootstrap.</p>
 <div class="row">
 <div class="col-md-4">
 <div class="card">
 <img src="imagen.jpg" class="card-img-top" alt="...">
 <div class="card-body">
 <h5 class="card-title">Título de la Tarjeta</h5>
 <p class="card-text">Texto descriptivo de la tarjeta.</p>
 <a href="#" class="btn btn-primary">Leer más</a>
 </div>
 </div>
 </div>
 <div class="col-md-4">
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
23
 <div class="card">
 <img src="imagen.jpg" class="card-img-top" alt="...">
 <div class="card-body">
 <h5 class="card-title">Título de la Tarjeta</h5>
 <p class="card-text">Texto descriptivo de la tarjeta.</p>
 <a href="#" class="btn btn-primary">Leer más</a>
 </div>
 </div>
 </div>
 <div class="col-md-4">
 <div class="card">
 <img src="imagen.jpg" class="card-img-top" alt="...">
 <div class="card-body">
 <h5 class="card-title">Título de la Tarjeta</h5>
 <p class="card-text">Texto descriptivo de la tarjeta.</p>
 <a href="#" class="btn btn-primary">Leer más</a>
 </div>
 </div>
 </div>
 </div>
 </div>
</body>
</html>
GitHub
GitHub es una plataforma de desarrollo colaborativo de software que se utiliza para alojar
proyectos, controlar versiones y colaborar con otros programadores. Permite a los
desarrolladores trabajar juntos en un proyecto, realizar un seguimiento de los cambios
realizados en el código y coordinar sus esfuerzos a través de herramientas como solicitudes de
extracción y problemas. Además, GitHub también ofrece funciones de seguimiento de
problemas, gestión de proyectos, integración continua y despliegue automatizado. Es una
herramienta fundamental en el mundo del desarrollo de software moderno y es ampliamente
utilizada por desarrolladores de todo el mundo.
GitHub se ha convertido en una herramienta esencial para programadores y desarrolladores de
software. Permite a los equipos trabajar juntos en proyectos de forma más eficiente, facilitando
la gestión de versiones, la colaboración, y el seguimiento de cambios en el código.
Algunas de las ventajas de utilizar GitHub incluyen la posibilidad de crear repositorios públicos
o privados para almacenar y compartir código, la facilidad de realizar pull requests para sugerir
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
24
cambios, el control de versiones con Git, la integración con herramientas de desarrollo como
IDEs y sistemas de construcción, y la disponibilidad de una amplia gama de funciones y
herramientas para facilitar el trabajo en equipo.
En resumen, GitHub es una plataforma versátil y poderosa que brinda a los desarrolladores las
herramientas necesarias para colaborar de forma efectiva en proyectos de software, mejorar la
productividad y la calidad del código, y simplificar el proceso de desarrollo.
Guía paso a paso para utilizar GitHub y manejar el control de
versiones
GitHub es una plataforma de alojamiento de código que utiliza Git para el control de
versiones. Permite a los desarrolladores colaborar en proyectos de software de manera
eficiente.
1. Instalación de Git
Antes de utilizar GitHub, necesitas tener Git instalado en tu computadora.
• En Windows:
a) Descarga Git desde git-scm.com
b) Ejecuta el instalador y sigue las instrucciones.
• En macOS:
a) Abre la Terminal.
b) Escribe git --version y, si no está instalado, se te pedirá instalarlo.
• En Linux:
sudo apt-get update
sudo apt-get install git
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
25
2. Configuración Inicial de Git
Después de instalar Git, debes configurarlo con tu nombre de usuario y correo electrónico:
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
3. Creación de un repositorio en GitHub
a) Accede a GitHub y crea una cuenta si no tienes una.
b) Haz clic en el botón New repository.
c) Rellena el formulario:
• Repository name: Nombre del repositorio.
• Description: Descripción del proyecto (opcional)
• Elige la visibilidad: Public o Private
• Opcionalmente, puedes inicializar el repositorio con un README.md.
d) Haz clic en Create repository.
4. Clonar un repositorio
Para trabajar en un repositorio existente, debes clonarlo a tu máquina local:
git clone https://github.com/tuusuario/nombre-del-repositorio.git
5. Estructura de Git
• Working Directory: Tu directorio local con archivos del proyecto.
• Staging Area: Área donde se preparan los archivos para ser confirmados.
• Repository: Donde se almacenan las confirmaciones (commits) de los archivos.
6. Flujo de trabajo básico
a) Verificar el estado del repositorio:
git status
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
26
b) Agregar archivos al staging area:
git add nombre-del-archivo
O para agregar todos los archivos modificados:
git add.
3. Confirmar cambios:
git commit -m "Mensaje de commit"
4. Enviar cambios a GitHub
git push origin main
Manejo de ramas
En Git, una rama es una versión paralela del código en el repositorio. Se utiliza para trabajar en
nuevas funcionalidades, correcciones de errores o cualquier otra tarea de forma separada del
código principal (rama principal o "master"). Esto permite a los desarrolladores trabajar de forma
colaborativa sin interferir en el código principal y luego fusionar sus cambios de forma ordenada.
En GitHub, puedes crear, fusionar y eliminar ramas de forma sencilla a través de la plataforma
web o utilizando comandos en la línea de comandos. Esto facilita el trabajo en equipo y la
organización de las tareas en un proyecto de software. Cada rama en GitHub tiene su propio
historial de cambios y puede ser utilizada para trabajar en diferentes aspectos del proyecto de
forma independiente.
Crear una nueva rama
git checkout -b nombre-de-la-rama
Cambiar de rama
git checkout nombre-de-la-rama
Fusionar una rama en otra:
Primero cambia a la rama donde quieres fusionar:
git checkout main
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
27
Luego fusiona:
git merge nombre-de-la-rama
Colaboración en GitHub
La colaboración en GitHub consiste en permitir a múltiples desarrolladores trabajar juntos en un
proyecto de software de manera eficiente. Esto se logra gracias a las funcionalidades que ofrece
GitHub, como la posibilidad de clonar un repositorio, trabajar en ramas independientes, realizar
cambios, confirmarlos y enviarlos a GitHub para que otros colaboradores puedan revisarlos y
fusionarlos con el código principal. Los desarrolladores pueden colaborar en un proyecto
compartiendo su trabajo a través de GitHub, lo que permite una mayor transparencia,
seguimiento de cambios, revisiones de código, seguimiento de problemas y la posibilidad de
trabajar en paralelo en diferentes aspectos del proyecto. Además, GitHub ofrece herramientas de
notificación, comentarios y seguimiento de problemas que facilitan la comunicación entre los
colaboradores y ayudan a mantener un flujo de trabajo organizado y eficiente. En resumen, la
colaboración en GitHub facilita el trabajo en equipo en proyectos de software y mejora la
productividad de los desarrolladores.
• Fork: Crear una copia de un repositorio para trabajar de manera independiente.
• Pull Request: Solicitar que los cambios en tu fork sean fusionados en el repositorio
original.
Resolución de conflictos
Los conflictos pueden ocurrir cuando dos ramas modifican la misma parte de un archivo. Para
resolverlos:
1. Abre el archivo en conflicto y edita las secciones marcadas.
2. Después de resolver el conflicto, agrega el archivo al staging area:
git add nombre-del-archivo
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
28
3. Confirma los cambios:
git commit
Buenas prácticas
• Commits frecuentes: Haz commits pequeños y frecuentes.
• Mensajes de commit claros: Usa mensajes descriptivos para los commits.
• Uso de ramas: Utiliza ramas para nuevas funcionalidades y corrección de errores.
U1: Desarrollo de sitio web estático utilizando HTML5 y CSS3
29
En síntesis, entender cómo funciona Internet, desde la infraestructura básica hasta el uso de
tecnologías web como HTML, CSS y JavaScript, es crucial para cualquier desarrollador web.
HTML es el lenguaje de marcado esencial para crear y estructurar el contenido de las páginas
web. Comprender cómo utilizar sus etiquetas más comunes permite a los desarrolladores
construir páginas web efectivas y bien organizadas.
Por otro lado, conocer las propiedades CSS es esencial para diseñar y estilizar páginas web de
manera efectiva. Practicar con ejemplos ayuda a comprender mejor cómo aplicar estos
conceptos en proyectos reales.
Por último, GitHub es una herramienta poderosa para el control de versiones y la colaboración
en proyectos de software.


Cápsula
interactiva
Introducción al uso de IA en el desarrollo web
(GitHub Copilot).
Introducción
Bienvenido a esta cápsula interactiva. Hoy descubrirás cómo la inteligencia artificial puede
ser tu aliada en el desarrollo web. ¿Sabías que GitHub Copilot puede ayudarte a escribir
código HTML5 y CSS3 más rápido y con mejores prácticas? Pero no se trata solo de
velocidad: también aprenderás a aplicar principios de accesibilidad (A11y) para que tu sitio
sea inclusivo y fácil de usar para todas las personas. Prepárate para experimentar, crear y
reflexionar. ¡Comencemos este viaje hacia un desarrollo más inteligente y responsable!
Fuente: https://sl.bing.net/byyRa53Dc16
Cápsula interactiva
2
1. Preparamos lo necesario para utilizar la IA
• Instalación/uso dentro de VS Code:
o Debes tener actualizado VS Code.
o Copilot + Copilot Chat habilitados.
En VS Code, Copilot se usa con inline suggestions (ghost text) y Inline Chat (⌘I /
Ctrl+I) para generar/editar código directamente en el editor, como se presenta en
la Figura 1:
Figura 1. Interactuando con IA en VS Code. Fuente: Elaboración propia (2026).
Prompt: “Crea estructura semántica con
header, nav, main, section y footer”.
Cápsula interactiva
3
Resultado:
Figura 2. HTML semántico en VS Code. Fuente: Elaboración propia (2026).
2. Checklist A11y integrado en el flujo con Copilot
2.1. ¿Por qué es importante la accesibilidad
La accesibilidad (A11y) garantiza que tu sitio web sea usable por todas las personas,
incluyendo quienes utilizan lectores de pantalla o navegan solo con teclado.
Checklist A11y que debes aplicar:
✓ Semántica correcta: Usa etiquetas HTML5 (<header>, <main>, <footer>,
encabezados jerárquicos).
✓ Contraste AA: Verifica con herramientas como WebAIM Contrast Checker.
✓ Foco visible: Usa :focus-visible y evita que el foco quede oculto.
✓ Navegación por teclado: Todo debe ser operable con Tab/Shift+Tab.
Cápsula interactiva
4
2.1.1 Semántica HTML (estructura correcta)
• Usa elementos semánticos: <header>, <nav>, <main>, <section>, <article>,
<footer>. Benefician accesibilidad y SEO (Optimización para Motores de Búsqueda).
• Evita el uso excesivo e innecesario de etiquetas <div> (“divitis”).
• Usa encabezados <h1>…<h6> con jerarquía lógica.
Sugiero el Prompt (Inline Chat en index.html), como se presenta en la Figura 3:
Figura 3. Generando estructura semántica. Fuente: Elaboración propia (2026).
Resultado:
Figura 4. Estructura semántica generada por IA en VS Code. Fuente: Elaboración propia (2026).
Cápsula interactiva
5
2.1.2 Contraste de color
• Cumple WCAG AA: ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande; prueba con
WebAIM Contrast Checker.
• Para foco y UI, WCAG 2.1/2.2 pide ≥ 3:1 para componentes y foco visible.
Sugiero el Prompt (Inline Chat en estilo.css), como se presenta en la Figura 5:
Figura 5. Prompt para paleta colores AA. Fuente: Elaboración propia(2026).
Ahora podemos pedir a Copilot que aplique los
cambios al archivo index.html como lo indica la
figura 6:
Figura 6. Interacción con Copilot a través de la ventana de Chat de VS Code. Fuente: Elaboración propia (2026).
Figura 7. Proceso de generación de respuesta de Copilot. Fuente: Elaboración propia (2026).
Cápsula interactiva
6
2.1.3 Foco visible
• Asegura foco visible con: focus/ :focus-visible y contraste mínimo 3:1; evitar que el
foco quede obstruido por cabeceras pegajosas u overlays.
Tip: Si usas sticky header (cabecera fija), añade scroll-padding-top en html para que el foco
no quede oculto al navegar con anclas/skip-links.
Snippet objetivo (para que
Copilot lo genere/edite), como
se presenta en la Figura 8:
Figura 8. Regla de estilo CSS. Fuente: Elaboración propia (2026).
2.1.4 Navegación por teclado
• Todo el sitio debe ser operable solo con teclado (Tab/Shift+Tab/Enter/Espacio).
Evita tabindex>0, mantén orden lógico y haz clicables/focusables los elementos
interactivos.
Sugiero el Prompt (Inline Chat en index.html), como se presenta en la Figura 9:
Figura 9. Prompt para agregar skip link. Fuente: Elaboración propia (2026).
Cápsula interactiva
7
3. Desarrollando con ayuda de GitHub Copilot: “Landing con IA”
3.1. Contexto
Si construimos una landing page responsive, usando GitHub Copilot (inline suggestions +
Inline Chat) para acelerar el HTML5/CSS3, manteniendo la accesibilidad, bajo los siguientes
requisitos:
Requisitos funcionales
1. Estructura semántica: header/nav/main/section/footer; un <h1> único.
2. Hero con título, subtítulo y botón “Inscríbete”.
3. Beneficios (3–6 items) con iconos/figuras y texto alternativo.
4. Formulario de contacto con etiquetas <label> asociadas y mensajes de error claros.
5. Footer con redes y datos de contacto.
Requisitos A11y
• Contraste AA (usa WebAIM para validar).
• Foco visible en links, botones y campos.
• Navegación por teclado sin trampas de foco; orden lógico.
• Texto alternativo descriptivo para imágenes e iconos. (Refuerzo semántico MDN).
Prompts guía (puedes adaptarlos):
1. “Crea el layout semántico de una landing responsive (mobile-first) con
header/nav/main/sections/footer.”
2. “Genera estilos CSS3 en styles.css con grid/flex para el layout, tipografías accesibles
(≥16px), y variables de color con contraste AA.”
3. “Agrega un skip link visible al foco, y reglas :focus-visible con contraste mínimo 3:1.”
4. “Inserta un formulario accesible (labels asociadas, ayuda, errores), y asegura orden
de tabulación natural (sin tabindex>0).”
Cápsula interactiva
8
5. “Optimiza los encabezados: un <h1> en hero y subtítulos <h2>/<h3> en secciones.”
3.2. Ejemplo de flujo de trabajo en VS Code con Copilot:
1. Crear los archivos index.html y styles.css.
2. Abrir Inline Chat (⌘I/Ctrl+I) en index.html y pedir la estructura semántica (Prompt
#1). Aceptar/editar los cambios generados.
3. Abrir Inline Chat en styles.css y pedir layout + foco visible (Prompt #2 y #3).
4. Validar contraste con WebAIM y ajustar variables de color hasta que pase AA/AAA.
5. Probar Tab, Shift+Tab y activar elementos con Enter/Espacio; corregir tabindex si
es necesario.
6. Revisar que el foco no quede oculto (sticky header/modales). Si ocurre, aplicar
scroll-padding-top y/o gestionar z-index/overlay.
Cápsula interactiva
9
Figura 10. Resultados generados por prompts tamaño. Fuente: Elaboración propia (2026).
Cápsula interactiva
10
4. Consejos Claves para Usar IA (GitHub Copilot) en Desarrollo
Web
1. Sé específico en tus prompts
• Indica estructura y requisitos: “Genera una landing responsive con
HTML5 semántico y estilos accesibles (contraste AA, foco visible)”.
• Cuanto más claro y detallado sea el prompt, mejores serán las
sugerencias.
2. No aceptes código sin revisión
• Copilot acelera el trabajo, pero no garantiza accesibilidad ni seguridad.
• Valida siempre semántica, contraste, foco y navegación por teclado.
3. Combina IA con buenas prácticas A11y
• Usa el checklist: semántica correcta, contraste AA, foco visible,
navegación por teclado.
• Ajusta manualmente lo que Copilot no cubra.
4. Prueba tu código como usuario real
• Navega con Tab y Shift+Tab.
• Comprueba que el foco no quede oculto y que los enlaces y botones sean
accesibles.
5. Documenta tu proceso
• Guarda los prompts utilizados y explica por qué los elegiste.
• Incluye validaciones (capturas de contraste, pruebas de foco) y cita
fuentes en formato APA.
6. Usa herramientas complementarias
• Existen sitios como WEBAIM para validar colores.
• DevTools para inspeccionar semántica y accesibilidad.
7. Aprende iterando
• Ajusta tus prompts si el resultado no es el esperado.
• Experimenta con diferentes enfoques y observa cómo cambia la calidad
del código.
Cápsula interactiva
11
Recursos complementarios
A continuación, encontrarás recursos para complementar lo aprendido sobre las
Introducción al uso de IA en el desarrollo web (GitHub Copilot)
Firdaus, Thoriq, Ben Frain, and Benjamin LaGrone. HTML5 and CSS3 : Building
Responsive Websites : Design Robust, Powerful, and above All, Modern Websites
across All Manner of Devices with Ease Using HTML5 and CSS3 : A Course in Three
Modules. 1st edition. Birmingham, England: Packt Publishing, 2016. Print.
Recuperado de URL:
https://inacap.primo.exlibrisgroup.com/permalink/56INACAP_INST/it4brd/alma991
000617648506726
Referencias bibliográficas
Fregly, Chris, Antje Barth, y Shelbee Eigenbrode. IA Generativa en AWS : Creación de
Aplicaciones Multimodales. 1st ed. Barcelona: Marcombo, S.A., 2024. Print.
https://inacap.primo.exlibrisgroup.com/permalink/56INACAP_INST/it4brd/alma991
000725515006726
Cápsula interactiva
12
Cierre
Has dado el primer paso hacia una nueva forma de desarrollar: más rápida, más
inteligente e inclusiva. GitHub Copilot no reemplaza tu creatividad, la potencia.
Ahora sabes cómo guiar a la IA con prompts claros y cómo aplicar principios de
accesibilidad para que tu código no solo funcione, sino que sea útil para todos.
Cada línea que escribas con conciencia A11y es una oportunidad para construir un
web más justo y universal. ¡Atrévete a seguir explorando, experimenta con Copilot
y convierte cada proyecto en una experiencia accesible y memorable!