const prompt = require('prompt-sync')();
let solucion
let valor1 = parseInt(prompt("Ingrese un valor: ")) 
let operacion = prompt("Ingrese una operacion (+,*,-,/,~) ")
if (operacion != "+"
    && operacion != "-"
    && operacion != "~"
    && operacion != "*"
    && operacion != "/"
){
    console.log("Ingresar sólo operaciones (+,*,-,/,~)")
    return
}

let valor2 = parseInt(prompt("Ingrese un segundo valor: ")) 

if (operacion == "~"){
    solucion = valor1
    for (let i = 1 ; i < valor2 ; i++){
        solucion = solucion * valor1
    }
}

if (operacion == "+"){
    solucion = valor1+valor2
}
if (operacion == "-"){
    solucion = valor1-valor2
}
if (operacion == "*"){
    solucion = valor1*valor2
} 
if (operacion == "/"){
    if(valor2 == 0){
        console.log("No se puede dividir por 0")
        return
    }else {
        solucion = valor1/valor2
    }
}
 
console.log("La respuesta es: " + solucion)



