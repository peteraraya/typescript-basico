"use strict";
(() => {
    // Forma más optima
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    // Definción de una clase
    // Primera forma
    // class Avenger {
    //     nombre:string;
    //     equipo:string;
    //     nombreReal:string;
    //     puedePelear:boolean ;
    //     peleasGanadas:number;
    //    constructor(nombre:string,equipo:string,nombreReal:string,puedePelear:boolean,peleasGanadas:number){
    //     this.nombre= nombre;
    //     this.equipo=equipo;
    //     this.nombreReal=nombreReal;
    //     this.puedePelear=puedePelear;
    //     this.peleasGanadas=peleasGanadas;
    //    }
    // }
    // Instancia de objeto
    const antman = new Avenger('Antman', 'Capi');
    // antman.equipo= 'Ironman';
    console.log(antman);
})();
