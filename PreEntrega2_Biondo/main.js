
let mueble;
let valor;
let muebleCorrecto = false;
const fechaActual = new Date();
const modelos = ["Mesa de pino","Recibidor de hierro","Perchero"]




Saludar();
alert("el valor es: $"+valor)









/******************************** FUNCIONES  ********************************************* */

//función principal para mostrar opciones
function mostrarOpciones(mueble){
    switch(mueble){
        
        case "1":
            muebleCorrecto=true;
            medidasCorrectas=false;
            let variedadMesa= ["Natural","Ocre","Blanco"]
            do{
                
                
                let opcionVariedad0= prompt(`tenemos: \n 1- ${variedadMesa[0]} \n 2- ${variedadMesa[1]} \n 3- ${variedadMesa[2]}`)
                 let largo = prompt("El costo se calcula según el área de la tabla, por favor ingresa el largo deseado en centimetros ");
                let ancho = prompt("Ingrese el ancho deseado en centimetros");
                if(parseInt(largo)){
                    if(parseInt(ancho)){
                      
                        const pedido = new Pedido (modelos[mueble-1],variedadMesa[opcionVariedad0-1],largo,ancho);
                        mostrarDatos(pedido)
                        medidasCorrectas=true;
                    } else{
                        alert("El ancho indicado no es válido, por favor intente solo con un valor numérico")
                    
                    }
            
                }else{
                    alert("El largo indicado no es válido, por favor intente solo con un valor numérico")
    
                }
                
            }while(!medidasCorrectas)
           
            break;

        case "2":
            muebleCorrecto=true;
            const variedadRecibidor= ["oxido", "negro","blanco"]
            const largos=[60,80]
            const anchos = [20,30]
            let opcionVariedad= prompt(`tenemos: \n  ${variedadRecibidor[0]} \n  ${variedadRecibidor[1]} \n  ${variedadRecibidor[2]} \n Escriba el nombre de la variedad que desea `)
            do{
            if(variedadRecibidor.includes(opcionVariedad)){
                let opcionLargo = prompt(`tenemos los siguientes largos disponibles: \n 1- ${largos[0]}cm \n 2- ${largos[1]}cm`)
                let opcionAncho = prompt(`tenemos los siguientes anchos disponibles: \n 1- ${anchos[0]}cm \n 2- ${anchos[1]}cm\n la altura es standar 90 cm`)
                const pedido1 = new Pedido (modelos[mueble-1],opcionVariedad,largos[opcionLargo-1],anchos[opcionAncho-1]);
                mostrarDatos(pedido1)
                console.log(pedido1);
                medidasCorrectas=true;
            }else{
                alert("El nombre es incorrecto")
            }
        }while(!medidasCorrectas)
            
            break;

        case "3":
            muebleCorrecto=true;
            const variedadPerchero = ["De pie","De pared"]
             const largosPerchero=[30,50]
             const anchosPerchero = [10,20]
             let opcionVariedad1= prompt(`tenemos: \n 1- ${variedadPerchero[0]} \n 2- ${variedadPerchero[1]}`)
              let opcionLargo1 = prompt(`tenemos los siguientes largos disponibles: \n 1- ${largosPerchero[0]}cm \n 2- ${largosPerchero[1]}cm`)
             let opcionAncho1 = prompt(`tenemos los siguientes anchos disponibles: \n 1- ${anchosPerchero[0]}cm \n 2- ${anchosPerchero[1]}cm \n la altura es standar 90 cm`)
             const pedido2 = new Pedido (modelos[mueble-1],variedadPerchero[opcionVariedad1-1],largosPerchero[opcionLargo1-1],anchosPerchero[opcionAncho1-1]);
             mostrarDatos(pedido2)
           console.log(pedido2);
               
                break;
        default: 
        alert("Por favor escriba un número válido de la lista")
        
        break;
    }
}


// constructor de pedido
function Pedido (mueble,variedad,largo,ancho){
    this.mueble = mueble;
    this.variedad = variedad;
    this.largo = largo;
    this.ancho = ancho;

}
//funcion mostrar recopilación de pedido
function mostrarDatos(pedido){
    let pedidoTraido = pedido;
    let mes = fechaActual.getMonth()+1;
    let dia = fechaActual.getDate();
   
let esCorrecto = prompt(`Recapitulemos tu pedido: Fecha: ${dia}/${mes}\n Modelo: ${pedidoTraido.mueble}\n Variedad: ${pedidoTraido.variedad}\n Largo: ${pedidoTraido.largo}\n Ancho: ${pedidoTraido.ancho}\n Si es correcto escriba si, caso contraro escriba no ` )

if(esCorrecto.toLowerCase() == "si"){
    area(pedido.largo,pedido.ancho);
}else{
    Saludar();
}
}
//funcion calcula el costo segun el area
function area(largo,ancho){
    
    valor = largo*ancho*0.7
    return valor;
}

//funcion saludar.
function Saludar(){
    alert(`Hola, Bienvenido a la mueblería`);
    do{
        let mueble = prompt(`A continuación le ofrecemos los modelos que puede elegir: \n 1 - ${modelos[0]}\n 2 - ${modelos[1]}\n 3 - ${modelos[2]}\n Para elegir el modelo que desea, escriba el número correspondiente.`);
        mostrarOpciones(mueble);
    
    }while(!muebleCorrecto)
}