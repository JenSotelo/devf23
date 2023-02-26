
// Multiplicamos por 3 para definir priedra papel o tijera
// Math.random() siempre devuelve un número entre 0 y 1
let respuestaCompu = Math.round(Math.random() *2);

let respuestaUsruario = prompt ("¿Piedra🪨, papel📄 o tijera✂️?")

if(respuestaUsruario == "piedra"){
    //Cambiar la variable por un número
    respuestaUsruario= 0
}else if(respuestaUsruario== "papel"){
    respuestaUsruario= 1
}else if(respuestaUsruario== "tijera"){
    respuestaUsruario= 2
}else{
    alert("Esta no es una opción válida")
    throw Error("User no eligió una opción válida"); //Acaba el ciclo
}

//0 es piedra
//1 es papel
//2 es tijera
if(respuestaCompu==respuestaUsruario){
    alert("Empate!")
}else if (respuestaCompu==0 && respuestaUsruario==1){
    alert("Ganaste contra piedra!")
}else if (respuestaCompu==0 && respuestaUsruario==2){
    alert("Perdiste contra piedra 😔")
}else if (respuestaCompu==1 && respuestaUsruario==2){
    alert("Ganaste contra papel!")
}else if (respuestaCompu==1 && respuestaUsruario==0){
    alert("Perdiste contra papel 😔")
}else if (respuestaCompu==2 && respuestaUsruario==0){
    alert("Ganaste contra tijera!")
}else if (respuestaCompu==2 && respuestaUsruario==1){
    alert("Perdiste contra tijera 😔")
}else{
    alert("La compu hizo trampa")
}