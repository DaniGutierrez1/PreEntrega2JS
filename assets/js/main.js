let valorVehiculo = 0
let seguroContraTodo=0
let totalSeguro=0
let categoria=0
let total=0


const SERVICIO=12000


let ingreso=prompt("Desea solicitar asesoria para su seguro?SI o NO?")



while (ingreso == "SI"){


    const lista = []

    const n = Number(prompt("Cuantos autos desea cotizar?"))

    do{
        let autos ={};
        let marca = prompt("Marca del vehiculo")
        autos.marca= marca
        
        let modelo = prompt ("Modelo")
        autos.modelo = modelo
        
        let año = Number (prompt ("Año")) 
        autos.año = año

        let precio = Number(prompt("Valor aproximado"))
        autos.precio = precio
        
        lista.push(autos)
    }while (lista.length != n)
    
    console.log(lista)

    for (const autos of lista){
        
        do{
            if (autos.precio < 500000){
                categoria=autos.precio*0.01
                let seguroTotal = prompt("Quiere que su auto " + autos.marca + " " + autos.modelo + " este asegurado contra todo riesgo? SI o NO?")

                if (seguroTotal=="SI") {
                    seguroContraTodo=autos.precio*0.015

                    totalSeguro=seguroContraTodo + categoria + SERVICIO

                    console.log("Su total antes de impuestos es de " + totalSeguro )

                    total=totalSeguro

                }else if (seguroTotal=="NO"){
                    seguroContraTodo=0
                    totalSeguro=seguroContraTodo + categoria + SERVICIO

                    console.log("Su total antes de impuestos es de " + totalSeguro )
                    total=totalSeguro
                }

            }else if(autos.precio >500000){
                categoria=autos.precio*0.02
                let seguroTotal = prompt("Quiere que su auto " + autos.marca + " " + autos.modelo + " este asegurado contra todo riesgo? SI o NO?")
                
                if (seguroTotal=="SI") {
                    seguroContraTodo=autos.precio *0.018
                    totalSeguro=seguroContraTodo + categoria + SERVICIO

                    console.log("Su total antes de impuestos es de " + totalSeguro )
                    total=totalSeguro
                    
                }else if (seguroTotal=="NO"){
                    seguroContraTodo=0
                    totalSeguro=seguroContraTodo + categoria + SERVICIO

                    console.log("Su total antes de impuestos es de " + totalSeguro )
                    
                    total=totalSeguro
                }

            }else if(autos.precio>1000000){
                
                categoria=autos.precio*0.03

                let seguroTotal = prompt("Quiere que su auto " + autos.marca + " " + autos.modelo + " este asegurado contra todo riesgo? SI o NO?")

                if (seguroTotal=="SI") {
                    seguroContraTodo=autos.precio*0.025

                    totalSeguro=seguroContraTodo + categoria + SERVICIO

                    console.log("Su total antes de impuestos es de " + totalSeguro )
                    total=totalSeguro

                }else if (seguroTotal=="NO"){
                    seguroContraTodo=0
                    totalSeguro=seguroContraTodo + categoria + SERVICIO

                    console.log("Su total antes de impuestos es de " + totalSeguro )
                    total=totalSeguro

                }
            }
            const SEGURO=totalConImp(total)
            console.log(SEGURO)
            
        }while(lista.length =! n)
        
        

        document.write(autos)
        
        alert("Ingrese el auto que desea ver")


        let marca = prompt("Marca")
        let modelo = prompt("Modelo")
        let año = prompt("Año")

        const datosBusqueda= {
            marca: marca,
            modelo: modelo,
            año: año,
        }

    filtrarAuto()


    console.log("El valor total del seguro para su " + datosBusqueda.marca + " " + datosBusqueda.modelo +" es de "+ SEGURO)



        document.write("El seguro para su auto  " + datosBusqueda.marca +" "+ datosBusqueda.modelo + " es de " + SEGURO + "<br>")

        ingreso=prompt("Quiere volver a cotizar su seguro o cotizar algun auto mas? SI o NO?")

        if(ingreso == "SI"){
            console.log("Volveremos a calcular su seguro")
            console.log("-------")
            totalSeguro = 0 ;
        }
    }     
}


if(ingreso =="NO"){
    document.write("Esperamos vuelva pronto")
}

function totalConImp(total){
    return total*1.21
}

function mostrarAutos(autos){
    autos.forEach(auto => {
        console.log(auto)
        
        
    });
}

function filtrarPrecio(auto){
    if (datosBusqueda.precio){
        return auto.precio === datosBusqueda.precio
    }
    return auto;
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarModelo(auto){
    if(datosBusqueda.modelo){
        return auto.modelo === datosBusqueda.modelo
    }
    return auto;
}

function filtrarAño(auto){
    if(datosBusqueda.año){
        return auto.año === datosBusqueda.año
    }
    return auto;
}


function filtrarAuto(){
    let resultado = autos.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarAño);
    if(resultado.length) {
        mostrarAutos(resultado)
    }
} 