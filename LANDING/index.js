//Nav

let navbar = document.querySelector(".navbar");
let contadordeclicksnav = 0;
function contadordeclicks() {
    contadordeclicksnav++;
    console.log("Has pulsado el navbar", contadordeclicksnav, "veces");
}


//Secciones
let primeraseccion = document.getElementById("mainsection");
let contadorprimeraseccion = 0;
let intervaloprimeraseccion;

function iniciarContadorPrimeraseccion() {
    intervaloprimeraseccion = setInterval(() => {
        contadorprimeraseccion++;
        console.log("Tiempo en la primer seccion:", contadorprimeraseccion, "segundos");
    }, 1000);
}

function detenerContadorPrimeraseccion() {
    clearInterval(intervaloprimeraseccion);
}

primeraseccion.addEventListener("mouseover", iniciarContadorPrimeraseccion);
primeraseccion.addEventListener("mouseout", detenerContadorPrimeraseccion);

// Repite el proceso para la segunda sección
let segundaseccion = document.getElementById("nuevapepsi");
let contadorsegundaseccion = 0;
let intervalosegundaseccion;

function iniciarContadorSegundaseccion() {
    intervalosegundaseccion = setInterval(() => {
        contadorsegundaseccion++;
        console.log("Tiempo en la segunda seccion:", contadorsegundaseccion, "segundos");
    }, 1000);
}

function detenerContadorSegundaseccion() {
    clearInterval(intervalosegundaseccion);
}

segundaseccion.addEventListener("mouseover", iniciarContadorSegundaseccion);
segundaseccion.addEventListener("mouseout", detenerContadorSegundaseccion);
