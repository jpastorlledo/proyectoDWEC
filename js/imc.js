function calcularIMC(){

    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value)/100;
    let imc = document.getElementById("imc");
    let mostrarIMC = document.getElementById("mostrarIMC");
    
    let imc2 = peso / (altura * altura);
    imc.innerHTML=imc2.toFixed(2);

    if (imc2 < 16.00) {
        mostrarIMC.innerHTML = "<br>Infrapeso (delgadez severa)";
    } else if (imc2 >= 16.00 && imc2 <= 16.99) {
        mostrarIMC.innerHTML = "Infrapeso (delgadez moderada)";
    } else if (imc2 >= 17.00 && imc2 <= 18.49) {
        mostrarIMC.innerHTML = "Infrapeso (delgadez aceptable)";
    } else if (imc2 >= 18.50 && imc2 <= 24.99) {
        mostrarIMC.innerHTML = "Peso normal";
    } else if (imc2 >= 25.00 && imc2 <= 29.99) {
        mostrarIMC.innerHTML = "Sobrepeso";
    } else if (imc2 >= 30.00 && imc2 <= 34.99) {
        mostrarIMC.innerHTML = "Obeso (Tipo I)";
    } else if (imc2 >= 35.00 && imc2 <= 40.00) {
        mostrarIMC.innerHTML = "Obeso (Tipo II)";
    } else if (imc2 > 40.00) {
        mostrarIMC.innerHTML = "Obeso (Tipo III)";
    }  else {
        alert("Introduce un valor correcto");
    }
}



