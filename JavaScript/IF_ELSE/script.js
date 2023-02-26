let number = 0

console.log(number >= 0)

//rangos
let edadMinima = 18
let edadMaxima = 65

let edad= 50

console.log("¿Es un candidato considerable para el puesto?")
console.log(edadMinima <= edad && edad <= edadMaxima)

//Formulario para que llene el usuario

let usuario = prompt("Escribe tu nombre:").toUpperCase()

let usuarioEnBaseDeDatos= "pablo".toUpperCase()

console.log(usuario + usuarioEnBaseDeDatos)

console.log("¿El usuario es el mismo?")
console.log(usuario== usuarioEnBaseDeDatos)

console.log("¿Si son diferentes debo de echarlo?")
//console.log(usuario != usuarioEnBaseDeDatos)

//Estructura de control IF

if ( usuario != usuarioEnBaseDeDatos){
    alert("¿Dónde esta Pablo y qué hiciste con él?")
}else{
    console.log("No")
    alert("Has sido hackiado! 010101010010101010")
}

//Estructura de JS 
//Variables

//Funciones

//Ejecución