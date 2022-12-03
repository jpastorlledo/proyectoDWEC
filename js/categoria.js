function calcularCategoria(){
    let anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
    let mostrarCategoria = document.getElementById("mostrarCategoria");
    let anioActual = 2022;
    let anio = anioActual - anioNacimiento;
    let texto = "";
    // mostrarCategoria.innerHTML = anio;

    if(anio>=0 && anio<=5){
        texto += "<b>Micros</b><br>";
    } else{
        texto += "Micros<br>";
    }

    if(anio>=6 && anio<=7){
        texto += "<b>Prebenjamín</b><br>";
    } else{ 
        texto += "Prebenjamín<br>";
    }

    if(anio>=8 && anio<=9){
        texto += "<b>Benjamín</b><br>";
    } else{
        texto += "Benjamín<br>";
    }

    if(anio>=10 && anio<=11){
        texto += "<b>Alevín</b><br>";
    } else{
        texto += "Alevín<br>";
    }

    if(anio>=12 && anio<=13){
        texto += "<b>Infantil</b><br>";
    } else{
        texto += "Infantil<br>";
    }

    if(anio>=14 && anio<=15){
        texto += "<b>Cadete</b><br>";
    } else{
        texto += "Cadete<br>";
    }

    if(anio>=16 && anio<=18){
        texto += "<b>Juvenil</b><br>";
    } else{
        texto += "Juvenil<br>";
    }

    if(anio>=19){
        texto += "<b>Senior</b><br>";
    } else{
        texto += "Senior<br>";
    }

    mostrarCategoria.innerHTML = texto;

}




