// ESTRUCTURA DE CONTROL CONDICIONAL 
let condicion = true

if (condicion){
    console.log("la condicion es Verdadera")
    //este es el bloque de codigo que se ejecuta
    //si la condicion es Verdadera (true)
} else {  //opcional 
    console.log("la condicion es Falsa")
    //este es el bloque de codigo que se ejecuta
    //si la condicion es Falsa (false)
}


//ESTRUCTURA DE CONTROL REPETICION

// FOR -----------------------------------------------

//Se usa cuando se quiere repetir un bloque de codigo x cantidad de veces

//syntaxis 

//el for recibe 3 parametros separados por ;
//el primer parametro es la variable indice que va a llevar el loop
//el segundo parametro recibe la condicion que se debe cumplir para que el loop termine
//el tercer parametro recibe el "paso" cada cuanto va a crecer el indice

let finalLoop = 5

for (let i = 0; i < finalLoop; i++){
    console.log("Esto es un loop: " + i)
}



