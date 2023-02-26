let ingredientes= [
    [1, "kg", "Espagueti"],
    [4, "lt", "Agua"],
    "500, ml, Crema Acida".split(","), //separa los elementos que encuentre entre comas para crear la lista
    [300, "gr", "Queso"],
    [2, "cda", "Mantequilla"],
    [2, "cda", "Aceite"],
    ["Al gusto", "Sal"],
    ["Al gusto", "Pimienta"],
    [500, "gr", "Tocino"],
];

let utensiliosDeCocina = [
    "Olla",
    "Sarten",
    "Rallador",
    "Palita de madera",
    "Colador",
];

let receta = [
    "En una olla, vierte 4 lt de agua, sal y el aceite. Deja hervir",
    "Una vez que esté hirviendo, agrega el espagueti",
    "Deja cocer por 15 mins",
    "Retira del agua, cuela el agua y prepara tu salsa",
    "Para la salsa, derrite la mantequilla en el sarten, cocina el tocino en esa mantequilla",
    "Agrega la crema ácida, revuelve con la palita de madera",
    "Incorpora el espagueti y revuelve por 3 minutos más",
    "Sal pimenta al gusto y sirve rallando un poco de queso hasta arriba",
];

//para cambiar dinámicamente mi página HTML alimentando datos desde el JS
//document.querySelector("#ingredientes").innerHTML += ingredientes
//document.querySelector("#utensilios").innerHTML += utensiliosDeCocina
//document.querySelector("#receta").innerHTML += receta



//Para ponerlo separado como lista desde JS, INGREDIENTES
for(let index = 0; index < ingredientes.length ; index++){
    let ingredientesBonito = ""
    for(let x = 0; x < ingredientes[index].length; x++){
        ingredientesBonito += ingredientes[index][x]
        ingredientesBonito += " "
    }
    document.querySelector("#ingredientes").innerHTML += "<li>"+ ingredientesBonito + "</li>"
}

for(let index = 0; index < utensiliosDeCocina.length ; index++){
    console.group("Iteracion " + index)

    console.log("index < utenciliosDeCocina.length = " + index + " < " 
    + utensiliosDeCocina.length + " = " + (index < utensiliosDeCocina.length))

    console.log("Imprimiendo en pantalla... Datos: " + "<li>" + utensiliosDeCocina[index] + "</li>")

    document.querySelector("#utensilios").innerHTML += "<li>" + utensiliosDeCocina [index] + "</li>"
    
    console.log("Terminó iteración y mi nuevo index tiene el valor: " + (index+1))
    console.groupEnd() 
}

for(let index = 0; index < receta.length ; index++){

    document.querySelector("#receta").innerHTML += "<li>" + receta[index] + "</li>"
}

// Tarea: Imprimir en conosola un cuadro con ********** utilizando ciclo For

for
// Tarea 2: Imprimir en consola un cuadro alternado ****** lado=6