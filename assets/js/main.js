let valorVehiculo = 0
let seguroContraTodo=0
let totalSeguro=0
let seguros=0
let categoria=0
let total=0


const SERVICIO=12000

let ingreso=prompt("Desea solicitar asesoria para su seguro?SI o NO?")



/* function categoria(valorVehiculo){
    valorVehiculo*0.01
}
 */



while (ingreso == "SI"){
    seguros+=1;

    let marca = prompt("Marca de su vehiculo")
    let año = prompt ("Año")
    let precio = prompt("Precio estimado")

    const auto = {
        marca: marca,
        año: año ,
        precio: precio ,
    }

    const valor = auto.map( auto => auto.precio )
    

    console.log(auto)
    console.log (valor)

    if (valor< 500000){
        categoria=valor*0.01
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")

        if (seguroTotal=="SI") {
            seguroContraTodo=valor*0.015
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }

    }else if(auto.precio >500000){
        categoria=auto.precio*0.02
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        
        if (seguroTotal=="SI") {
            seguroContraTodo=auto.precio *0.018
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
            
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }

    }else if(auto.precio>1000000){
        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        categoria=datosBusqueda.precio*0.3

        if (seguroTotal=="SI") {
            seguroContraTodo=auto.precio*0.025
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro
        }else if (seguroTotal=="NO"){
            seguroContraTodo=0
            totalSeguro=seguroContraTodo + categoria + SERVICIO
            console.log(totalSeguro)
            total=totalSeguro

        }
    }
    
    function totalConImp(total){
        return total*1.21
    }
    const SEGURO=totalConImp(total)
    console.log(SEGURO)

    document.write("El valor de su seguro numero " + seguros + " es de " + SEGURO + "<br>")
    ingreso=prompt("Quiere volver a cotizar su seguro o cotizar algun auto mas? SI o NO?")

    if(ingreso == "SI"){
        console.log("Volveremos a calcular su seguro")
        console.log("-------")
        totalSeguro = 0 ;
    }
}


if(ingreso =="NO"){
    document.write("Esperamos vuelva pronto")
}

