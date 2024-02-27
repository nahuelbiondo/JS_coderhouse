let boton = document.getElementById("btnComenzar");
let contenedor1 = document.getElementById("contenedor");
let contenedor2 = document.getElementById("contenedor2")
let pedidos={}
let btnEnviarMedidas;
let mesaResultado;
let pedidoJSON
let radioBtns;
let arrPedidos=[]
let precioFinal =0;
    let modalContainerCarrito=document.querySelector(".modalContainerCarrito");

let mueble;
let valor;
let numero =12;
let muebleCorrecto = false;
const fechaActual = new Date();
const modelos = ['Mesa de pino','Recibidor de hierro','Perchero']

boton.addEventListener("click", ()=>{
    contenedor1.innerHTML="<p>Elija una de las opciones:</p>"
    comenzarFormulario()
})



/************************************** FUNCIONES*********************************************************************** */

function comenzarFormulario (){
    contenedor2.innerHTML=""
    modalContainerCarrito.innerHTML=""
    contenedor1.innerHTML=""
    modelos.forEach((element) => contenedor1.innerHTML+=`<h5>${element}</h5>   <input type="button" value="Agregar" id="btnComenzar${modelos.indexOf(element)}">\n` )
   
   modelos.forEach((element) => window[`button${modelos.indexOf(element)}`]= element)
    escucharBotones()
                       
}

/////////////////////////////////////////////////////////

function escucharBotones(){
   
   modelos.forEach((element)=> {
    let botones=document.getElementById(`btnComenzar${modelos.indexOf(element)}`)
    botones.addEventListener("click",()=>{
       switch(window[`button${modelos.indexOf(element)}`]){
        case "Mesa de pino":
            dispararFlujoMesa()
            break;
        case "Recibidor de hierro":
            dispararFlujoRecibidor()
            break;
        case "Perchero":
            dispararFlujoPerchero()
            break;
        default:
            break;
       }
        
    })
   })
    
}

///////////////////////////////////////////////////////////////////////////

function dispararFlujoMesa(){
    contenedor1.innerHTML="<p> por favor elija la variante que le interesa</p>"
    contenedor1.innerHTML+= `<label for="variante"> Natural:  </label><input type="radio" class="variante" name="variante" id="natural"><label for="variante">  Ocre:  </label><input type="radio" class="variante" name="variante" id="ocre"> <label for="variante">  Blanco:  </label><input type="radio" class="variante" name="variante" id="blanco">\n`
    
    radioBtns = document.querySelectorAll('input[name="variante"]')
    
    radioBtns.forEach((e)=>{
        e.addEventListener("change",()=>{
            calcularCosto(modelos[0],e.id)
        })
    })
    
}

///////////////////////////

function dispararFlujoRecibidor(){
    contenedor1.innerHTML="<p> por favor elija la variante que le interesa</p>"
    contenedor1.innerHTML+= `<label for="variante"> Oxido:  </label><input type="radio" class="variante" name="variante" id="oxido"><label for="variante">  Negro:  </label><input type="radio" class="variante" name="variante" id="negro"> <label for="variante">  Blanco:  </label><input type="radio" class="variante" name="variante" id="blanco">\n`
    
    radioBtns = document.querySelectorAll('input[name="variante"]')
    
    radioBtns.forEach((e)=>{
        e.addEventListener("change",()=>{
            calcularCosto(modelos[1],e.id)
            console.log(e.id)
        })
    })
}
///////////////////////////////////

function dispararFlujoPerchero(){
    contenedor1.innerHTML="<p> por favor elija la variante que le interesa</p>"
    contenedor1.innerHTML+= `<label for="variante"> De pie:  </label><input type="radio" class="variante" name="variante" value="de pie" id="dePie"><label for="variante">  De pared:  </label><input type="radio" class="variante" value="de pared" name="variante" id="dePared">\n`
    
    radioBtns = document.querySelectorAll('input[name="variante"]')
    
    radioBtns.forEach((e)=>{
        e.addEventListener("change",()=>{
            calcularCosto(modelos[2],e.value)
            console.log(e.value)
        })
    })
}

///////////////////////////////////////////////////////////////////////

function calcularCosto(modelo,variante){
    variante = variante
    modelo =modelo
    
    contenedor1.innerHTML="<p> por favor ingrese las dimensiones en los campos</p>"
    contenedor1.innerHTML+= `<label for="largo"> Largo: </label><input type="text" class="dimensiones" name="largo" id="mesaLargo"><label for="ancho"> Ancho: </label><input type="text" class="dimensiones" name="ancho" id="mesaAncho">\n <label for="resultado"> Resultado: </label><input type="text" name="resultado" id="mesaResultado">\n`
    
    mesaResultado = document.getElementById("mesaResultado");
    btnEnviarMedidas = document.getElementById("btnEnviar");
let resultado ="";
    let mesa = document.querySelectorAll(".dimensiones")

    mesa.forEach((e)=>{
        e.addEventListener("keyup",()=>{
            if(parseFloat(mesaAncho.value)&&parseFloat(mesaLargo.value)){
                resultado = variante == "natural"? mesaAncho.value*mesaLargo.value*0.7 : mesaAncho.value*mesaLargo.value*1.5
            }

            
            
          mesaResultado.value ="$"+resultado
          if(resultado!="0" && resultado!=""){
           contenedor2.innerHTML=`<input type="button" value="Aceptar" id="aceptar">`
           const aceptar =document.getElementById("aceptar")
           
    aceptar.addEventListener("click",()=>{
        modalContainerCarrito.innerHTML=`<h5>Antes de avanzar, revisa los datos.</h5>`
        
        pedidos = new Pedido (modelo,variante,mesaLargo.value,mesaAncho.value,resultado); 
        
        modalContainerCarrito.innerHTML+=`<p>Mueble: ${pedidos.mueble}</p>`
        modalContainerCarrito.innerHTML+=`<p>Modelo: ${pedidos.variedad}</p>`
        modalContainerCarrito.innerHTML+=`<p>Largo: ${pedidos.largo}</p>`
        modalContainerCarrito.innerHTML+=`<p>Ancho: ${pedidos.ancho}</p>`
        modalContainerCarrito.innerHTML+=`<p>Total: ${pedidos.precio}</p>`
        modalContainerCarrito.innerHTML+=`<input type="button" value="Comprar" class="revisarDatos" id="comprar">`
        modalContainerCarrito.innerHTML+=`<input type="button" value="modificar" class="revisarDatos" id="modificar">`
        let revisar =document.querySelectorAll(".revisarDatos")
        revisar.forEach((e)=>{
             e.addEventListener("click",()=>{
                e.id=="comprar"? comprar(pedidos):comenzarFormulario()

            })

        })
        
        
        
    })
       }
       })
    })
    
}

/////////////////////////////////////////////////////////////

function comprar(pedido){
pedido=pedido;
arrPedidos.push(pedido)

if(sessionStorage.pedidoJSON){
 let pedidoGuardadoJSON=sessionStorage.getItem("pedidoJSON")
  let pedidoGuardadoArr=JSON.parse(pedidoGuardadoJSON)
  
    arrPedidos = arrPedidos.concat(pedidoGuardadoArr)
    pedidoJSON=JSON.stringify(arrPedidos)
    sessionStorage.setItem("pedidoJSON",pedidoJSON)
    arrPedidos=[]
}else{
    pedidoJSON =JSON.stringify(arrPedidos)
    sessionStorage.setItem("pedidoJSON",pedidoJSON)
    arrPedidos=[]
}

Swal.fire({
    title: "Felicitaciones enviaremos tus datos al vendedor, para limpiar el carrito oprime cancel ",
    showDenyButton: true,
    showCancelButton: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: "volver al inicio",
    denyButtonText: `mostrar carrito`
    
  }).then((result) => {
    if (result.isConfirmed) {
        comenzarFormulario()

    } else if (result.isDenied) {
        let verCarrito= "";
        carrito = sessionStorage.getItem("pedidoJSON")
        arrayCarrito = JSON.parse(carrito)
        
        arrayCarrito.forEach((e)=>{
           
            verCarrito+=` <p>Producto: ${e.mueble} Modelo: ${e.variedad} Largo: ${e.largo} Ancho: ${e.ancho} Precio: ${e.precio}</p>`
            precioFinal+=e.precio
        })
        
      Swal.fire({
        title: "Este es el resumen de tu carrito ",
        html: `<div>${verCarrito} y el precio total es: ${precioFinal.toFixed(2)}</div>\n <p>Tambien si desea puede abonar con otra moneda, haga click en "Ver cambio" para ver las converciones </p>`,
        
    showDenyButton: true,
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    confirmButtonText: "Ver cambio",
    denyButtonText: `Volver al inicio`
      }).then(result=>{
        
        result.isConfirmed?convertirPrecioFinal(precioFinal):comenzarFormulario()

        
      })
    }else if(result.isDismissed){
        sessionStorage.removeItem("pedidoJSON")
        precioFinal=0;
    comenzarFormulario()
    }
  });

}

/////////////////////////////////////////////////////////////////////////////
//constructor de pedido
function Pedido (mueble,variedad,largo,ancho,precio){
    this.mueble = mueble;
    this.variedad = variedad;
    this.largo = largo;
    this.ancho = ancho;
    this.precio = precio;

}

//////////////////////////

function convertirPrecioFinal(precioFinal){
    //GET https://v6.exchangerate-api.com/v6/ac04a8d7076a6aa3ebaf55e6/pair/EUR/GBP/AMOUNT
let urlConversion = `https://v6.exchangerate-api.com/v6/ac04a8d7076a6aa3ebaf55e6/pair/ARS/` //conversión
let precio = precioFinal;
contenedor2.innerHTML=""
modalContainerCarrito.innerHTML=""
contenedor1.innerHTML=""

contenedor1.innerHTML=` <p>Precio en pesos: ${precio.toFixed(2)}</p>
                        <label for="moneda">Elija la moneda a la que desea convertir:</label>
                        <select name="moneda" id="moneda">
                            <option value="0">Elija una opcion</option>
                            <option value="USD">Dolares Estadounidenses</option>
                            <option value="EUR">Euros</option>
                            <option value="BOB">Boliviano</option>
                            <option value="BRL">Real Brasilero</option>
                            <option value="CLP">Peso Chileno</option>
                            <option value="PYG">Guarani</option>
                            <option value="UYU">Peso Uruguayo</option>
                        </select>`


let moneda = document.getElementById("moneda")
moneda.addEventListener("change",(e)=>{
    let tipoMoneda ="";
    let texto = moneda.options[moneda.selectedIndex].textContent;
     tipoMoneda = moneda.value
     if(tipoMoneda!="0"){
        fetch(`${urlConversion}${tipoMoneda}/${precio}`)
        .then(response=> response.json())
        .then( data=>{
           
           Swal.fire("",`El precio en ${texto} es: ${data.conversion_result.toFixed(2)} y el tipo de cambio es 1 peso Argentino = ${data.conversion_rate}  ${texto}`,"info")
       })
       .catch()
        
     }
  
})

}

