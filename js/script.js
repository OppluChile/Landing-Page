//Saludo
const saludo = new Date().getHours();
let saludar;
if (saludo < 12) {
    saludar = "¡Buenos días!";
} else if (saludo < 20) {
    saludar = "¡Buenas tardes!";
} else {
    saludar = "¡Buenas noches!";
}
document.getElementById("textoSaludo").innerHTML = saludar;

//Botón Subir
let mybutton = document.getElementById("botonSubir");

//Al usuario hacer click en el boton, volver arriba de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Google Chrome, Firefox, IE y Opera
}

//Año Actual
const anio = new Date();
let year = anio.getFullYear();
document.getElementById("anioActual").innerHTML = year;