/* =====================================
   BOTÓN DE COMENZAR
===================================== */

const botonComenzar = document.getElementById("botonComenzar");

botonComenzar.addEventListener("click", () => {

    document.querySelectorAll(".oculto").forEach((elemento, index) => {

        setTimeout(() => {
            elemento.classList.add("visible");
        }, index * 250);

    });

    document.getElementById("mensaje").scrollIntoView({
        behavior: "smooth"
    });

    crearFlores();

});


/* =====================================
   BOTÓN DE SORPRESA
===================================== */

const botonSorpresa = document.getElementById("botonSorpresa");
const mensajeFinal = document.getElementById("mensajeFinal");

botonSorpresa.addEventListener("click", () => {

    mensajeFinal.classList.add("mostrar");

    lanzarCorazones();

});


/* =====================================
   FLORES / PARTÍCULAS
===================================== */

const simbolos = [
    "🌻",
    "💛",
    "🌼",
    "✨",
    "❤️"
];

function crearParticula() {

    const particula = document.createElement("div");

    particula.classList.add("particula");

    particula.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    particula.style.left = Math.random() * 100 + "vw";

    particula.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    const duracion =
        Math.random() * 5 + 5;

    particula.style.animationDuration =
        duracion + "s";

    document.getElementById("particles").appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, duracion * 1000);
}


function crearFlores() {

    setInterval(() => {
        crearParticula();
    }, 700);

}


/* =====================================
   CORAZONES
===================================== */

function lanzarCorazones() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const corazon = document.createElement("div");

            corazon.classList.add("particula");

            corazon.textContent = "❤️";

            corazon.style.left =
                (40 + Math.random() * 20) + "vw";

            corazon.style.fontSize =
                (Math.random() * 20 + 20) + "px";

            corazon.style.animationDuration =
                (Math.random() * 3 + 3) + "s";

            document.getElementById("particles")
                .appendChild(corazon);

            setTimeout(() => {
                corazon.remove();
            }, 6000);

        }, i * 100);

    }

}


/* =====================================
   CONTADOR
===================================== */

/*
    CAMBIA ESTA FECHA

    Ejemplo:
    "2026-01-15T00:00:00"

    Pon aquí el día en que comenzaron
    su relación o el día que se conocieron.
*/

const fechaInicio = new Date("2025-11-10T00:00:00");


function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        ahora - fechaInicio;

    const segundosTotales =
        Math.floor(diferencia / 1000);

    const dias =
        Math.floor(segundosTotales / 86400);

    const horas =
        Math.floor((segundosTotales % 86400) / 3600);

    const minutos =
        Math.floor((segundosTotales % 3600) / 60);

    const segundos =
        segundosTotales % 60;


    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;
}


actualizarContador();

setInterval(actualizarContador, 1000);


/* =====================================
   MOSTRAR SECCIONES AL HACER SCROLL
===================================== */

const elementos =
    document.querySelectorAll(".oculto");


const observer =
    new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });


elementos.forEach((elemento) => {
    observer.observe(elemento);
});