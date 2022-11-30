//Crea un programa que solicite al usuario sus centı́metros y el peso en kg y devuelva el Indice de Masa Corporal escrito en la pantalla (en el cuerpo de la página).
//Nota: el usuario puede introducir la altura en metros o en centı́metros. Si introduce la altura en metros, no hay que hacer nada. Si introduce la altura en centı́metros, hay que dividirla por 100 para convertirla a metros.

let peso = prompt("Introduce tu peso en kg");
let altura = prompt("Introduce tu altura en centímetros");
let alturaMetros = altura / 100;0
let imc = peso / (alturaMetros * alturaMetros);

//El IMC se calcula como el peso dividido entre la altura al cuadrado.
//El IMC se puede calcular con la siguiente formula: peso / (altura * altura)

// Además de mostrar el resultado,mostrará la siguiente escala y marcará de alguna forma (negrita, cursiva, subrayado, color...) la clasiCicación:
// <16.00: Infrapeso (delgadez severa)
// 16.00 16.99: Infrapeso (delgadez moderada)
// 17.00 -18.49: Infrapeso (delgadez aceptable)
// 18.50 -24.99: Peso normal
// 25.00 -29.99: Sobrepeso
// 30.00 -34.99: Obeso (Tipo I)
// 35.00 -40.00: Obeso (Tipo II)
// >40.00: Obeso (Tipo III)
//Además, comprobará que no se meta ningún valor incorrecto de peso ni altura, y en caso de que ası́ sea, volverá a solicitar los datos.


if (imc < 16.00) {
    document.write("Infrapeso (delgadez severa)");
} else if (imc >= 16.00 && imc <= 16.99) {
    document.write("Infrapeso (delgadez moderada)");
} else if (imc >= 17.00 && imc <= 18.49) {
    document.write("Infrapeso (delgadez aceptable)");
} else if (imc >= 18.50 && imc <= 24.99) {
    document.write("Peso normal");
} else if (imc >= 25.00 && imc <= 29.99) {
    document.write("Sobrepeso");
} else if (imc >= 30.00 && imc <= 34.99) {
    document.write("Obeso (Tipo I)");
} else if (imc >= 35.00 && imc <= 40.00) {
    document.write("Obeso (Tipo II)");
} else if (imc > 40.00) {
    document.write("Obeso (Tipo III)");
}   else {
    document.write("Introduce un valor correcto");
}






// Path: imc.js


