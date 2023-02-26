//poner una condición numérica
let index= 0;
while(index <11 ){
    console.log(index+"*"+2+"="+(index*2))
    index++;
}

//poner una condición con un string
let palabra; //si no pones nada, indefinida
let lista = [] //corchetes definen un arreglo
while(palabra != ""){
    palabra = prompt("¿Qué añado a la lista?") //para sacar el mensaje y entrada de texto
    lista.push(palabra) //define el array y manda las palabras del prompt a la consola
}

console.log("Mi lista:"+lista)

//CICLO DO-WHILE, cuando necesito que corra el código ANTES de comprobar la condición
let dinero=100 ;

do{
    console.log ("Probar idea. Gasto 100")
    dinero -= 100
    console.log ("Intento vender la idea")
// parseInt es para convertir un string a # enteros
//parseFloat para convertir a # reales (con decimales)
    let resultadoVenta = parseInt(prompt("¿Cuánto gané o perdí?"))
    dinero= dinero + resultadoVenta
    console.log("Dinero Final:" + dinero)
}
while (dinero >= 100);

console.log("Ya no puedo emprender, estoy endeudado 😔")

//Limitar # de intentos
let contraseña= "patito";
input= "";
intentos = 0;

do{
    if(intentos > 5) {
        throw Error ("Acceso denegado")
    }
    input = prompt ("contraseña")
    intentos++;
} while(input!= contraseña)

alert ("Bienvenido")

//contador

var contador = 0;

for(let i=1; i<= 10; i++){
    if(i%2 == 0){
        contador++;
    }
}
console.log("Numeros pares entre 1 y 10"+ contador)

//acumulador
var acumulador= 0;
for (var index= 0;index <= 4; index++){
    acumulador = acumulador + index;
    console.log(acumulador);
}

