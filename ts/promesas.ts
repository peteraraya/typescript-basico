(()=>{

// console.log('Inicio');

// const prom1 = new Promise( (resolve, reject)=>{
//     setTimeout(() => {
//             reject('Se terminó el timeout');
//     }, 1000);
// });


// // Ejecutamos promesa
// prom1
//  .then( mensaje => console.log(mensaje))
//  .catch(err => console.log(err));
 

// console.log('Final');



const retirarDinero = ( montoRetirar: number):Promise<number> =>{
    // Manejar cantidad de dinero
    let dineroActual = 1000;
    // console.log('hola mundo');
    
    // retirar dinero devolverá una promesa
    return new Promise((resolve,reject)=>{
    
        if (montoRetirar >= dineroActual ) {
            reject(' No hay suficiente dinero en tus fondos');
        }else{
            dineroActual -= montoRetirar
            resolve( dineroActual)
        }

    });


}

retirarDinero(1500)
    .then( montoActual => console.log(`Me quedan ${montoActual}`) )
    .catch( err => console.warn(err));
})();