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

//Sección Conteo Regresivo
const day = document.querySelector(".dias");
const hour = document.querySelector(".horas");
const minute = document.querySelector(".minutos");
const second = document.querySelector(".segundos");

const targetTime = new Date("June 01, 2025").getTime();

function countdown() {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;
    console.log(difference);

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(difference % (1000 * 60) / 1000);

    console.log(`${days} ${hours} ${minutes} ${seconds}`);

    day.innerText = days > 9 ? days : `0${days}`;
    hour.innerText = hours > 9 ? hours : `0${hours}`;
    minute.innerText = minutes > 9 ? minutes : `0${minutes}`;
    second.innerText = seconds > 9 ? seconds : `0${seconds}`;

}

setInterval(countdown, 1000);


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
