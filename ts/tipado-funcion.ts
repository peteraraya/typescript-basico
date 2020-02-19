(function(){


    const sumar =( (a:number, b:number) : number => a+b);


    const nombre = ():string => 'Hola Mundo';


    // Donde typescript no pueda inferir en el tipo
    // Espesificamos e tipo en las funciones
    const obtenerSalario = ():Promise<string> =>{
        return new Promise((resolve,reject)=>{
            resolve('Pedro');
        });
    }

    obtenerSalario().then( a =>console.log(a.toUpperCase));



})();



