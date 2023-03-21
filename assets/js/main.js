let seguros=0
let total=0

const SERVICIO=12000

let ingreso=prompt("Desea solicitar asesoria para su seguro?SI o NO?")


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
        const CATEGORIA= categoria_1(valor)

        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")

        if (seguroTotal=="SI") {
            const SEGUROCONTRATODO = seguroContraTodo(valor)
            const TOTALSEGURO= totalSeguro (SEGUROCONTRATODO, CATEGORIA , SERVICIO) 
            
            total=TOTALSEGURO

            console.log(total)

        }else if (seguroTotal=="NO"){
            const SEGUROCONTRATODO=0
            const TOTALSEGURO= totalSeguro (SEGUROCONTRATODO, CATEGORIA , SERVICIO) 
            
            total=TOTALSEGURO

            console.log(total)
        }

    }else if(auto.precio >500000){
        const CATEGORIA=categoria_2(valor)
        

        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        
        if (seguroTotal=="SI") {
            const SEGUROCONTRATODO = seguroContraTodo_2(valor)
            const TOTALSEGURO= totalSeguro (SEGUROCONTRATODO, CATEGORIA , SERVICIO)

            total=TOTALSEGURO

            console.log(total)

        }else if (seguroTotal=="NO"){
            const SEGUROCONTRATODO=0
            const TOTALSEGURO= totalSeguro (SEGUROCONTRATODO, CATEGORIA , SERVICIO) 
            
            total=TOTALSEGURO

            console.log(total)
        }

    }else if(auto.precio>1000000){
        const CATEGORIA=categoria_3(valor)
        

        let seguroTotal = prompt("Quisiera que su seguro sea contra todo riesgo? SI o NO?")
        if (seguroTotal=="SI") {

            const SEGUROCONTRATODO = seguroContraTodo_3(valor)
            const TOTALSEGURO= totalSeguro (SEGUROCONTRATODO, CATEGORIA , SERVICIO) 

            total=TOTALSEGURO

            console.log(total)
            
        }else if (seguroTotal=="NO"){
            const SEGUROCONTRATODO=0
            const TOTALSEGURO= totalSeguro (SEGUROCONTRATODO, CATEGORIA , SERVICIO) 

            
            total=TOTALSEGURO

            console.log(total)

        }
    }
    
    const SEGURO=totalConImp(total)
    console.log(SEGURO)

    document.write("Este es su seguro numero " + seguros + "<br>")
    document.write("Su auto "+ marca + " modelo " + modelo + " estara asegurado por " + SEGURO + " al mes." )
    ingreso=prompt("Quiere volver a cotizar su seguro o cotizar algun auto mas? SI o NO?")

    if(ingreso == "SI"){
        console.log("Volveremos a calcular su seguro")
        console.log("-------")
        total = 0 ;
    }
}


if(ingreso =="NO"){
    document.write("Esperamos vuelva pronto")
}

function categoria_1(valor){
    return valor*0.01
}

function categoria_2(valor){
    return valor*0.012
}

function categoria_3(valor){
    return valor*0.015
}

function seguroContraTodo(valor){
    return valor*0.015
}

function seguroContraTodo_2(valor){
    return valor*0.018
}

function seguroContraTodo_3(valor){
    return valor*0.025
}

function totalSeguro(SEGUROCONTRATODO, CATEGORIA, SERVICIO){
    return SEGUROCONTRATODO + CATEGORIA + SERVICIO
}
function totalConImp(total){
    return total*1.21
}
