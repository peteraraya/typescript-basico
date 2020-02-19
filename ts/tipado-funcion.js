"use strict";
(function () {
    const sumar = ((a, b) => a + b);
    const nombre = () => 'Hola Mundo';
    // Donde typescript no pueda inferir en el tipo
    // Espesificamos e tipo en las funciones
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Pedro');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase));
})();
