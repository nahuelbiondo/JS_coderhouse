//-------------DOM

//formas de pegarle a un nodo
/*
let titulo = document.getElementById("titulo");

console.log(titulo) //muestra el nodo h1 que estoy llamando
console.log(titulo.textContent) //muestra el contenido textual que contiene el nodo que llamé

titulo.innerText ="bienvenidos a la clase del pelado botón" //cambio el contenido del nodo

console.log(titulo.textContent)
*/
/*
let producto= {id:1,nombre:"arroz", precio:125}
let concatenado = "id: "+producto.id + " precio "+producto.precio+ " nombre "+producto.nombre

let container = document.getElementById("contenedor");


container.innerHTML=`

<h2>bienvenidos</h2>

<form action="">
        <h3>formulario de captura</h3>
        <input type="text" name="" id=""> 
        <button>enviar formulario</button>

    </form>

    <h4>nombre: ${producto.nombre}</h4>
    <h4>precio: ${producto.precio}</h4>
`
*/
// crear un elemento para mostrar informacion
/*
let productos = [

    {id:1,nombre:"arroz", precio:125},
    {id:1,nombre:"azucar", precio:750},
    {id:1,nombre:"fideos", precio:1100},
    {id:1,nombre:"huevos", precio:500},
    {id:1,nombre:"harina", precio:100}

]

for(const x of productos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML=`

    <h2>nombre: ${x.nombre}</h2>
    <h3>precio: ${x.precio}</h3>
    `

    document.body.appendChild(contenedor)
}

*/
/*
//CLASS name

let titulo = document.getElementsByClassName("contenedores");

//TAG name

const pochoclo = document.getElementsByTagName("p") //el tag es la etiqueta, si traigo una p y hay 17 parrafos, voy a traer los 17 y modificar los 17

//pochoclo.remove()// elimino todos los elementos

const query = document.querySelector(".contenedores")// trae clases. el query usa la misma sintaxis que CSS para llamar
const query2 = document.querySelector("#contenedor") //trae ID

*/

document.getElementById("nombre").value = "HOMERO"; //le estoy asignando el valor homero al imput

let nombre = document.getElementById("nombre").value //acá estoy trayendo y leyendo el dato

alert("bienvenido "+nombre) //quiero mostrar este dato pero necesito escuchar lo que se escriba en el input