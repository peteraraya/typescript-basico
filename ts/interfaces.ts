(()=>{
    
    interface Xmen {
        nombre:string,
        edad:number,
        poder?:string
    }



    const enviarMision =( xmen:Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a las misión`);
    } 

    const regresandoAlCuartel = (xmen: Xmen) => {
        console.log(`Regresando ${xmen.nombre} al cuartel`);
    } 




    const wolverine:Xmen = {
        nombre:'Logan',
        edad: 60
    }

    enviarMision(wolverine);
    regresandoAlCuartel(wolverine);

})();