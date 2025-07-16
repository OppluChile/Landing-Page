//Sección Saludo
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

//Año Actual
const anio = new Date();
let year = anio.getFullYear();
document.getElementById("anioActual").innerHTML = year;
