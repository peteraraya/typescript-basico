"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a las misión`);
    };
    const regresandoAlCuartel = (xmen) => {
        console.log(`Regresando ${xmen.nombre} al cuartel`);
    };
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresandoAlCuartel(wolverine);
})();
