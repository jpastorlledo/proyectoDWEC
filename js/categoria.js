function calcularCategoria(){
    let anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
    let mostrarCategoria = document.getElementById("mostrarCategoria");
    let anioActual = 2022;
    let anio = anioActual - anioNacimiento;
    let texto = "";
    // mostrarCategoria.innerHTML = anio;

    if(anio<=5 && anio>=0){
        texto += "<b>Micros</b>";
    } else{
        texto += "Micros";
    }

    if(anio>=6 && anio<=7){
        texto += "<b>Prebenjamín</b>";
    } else{ 
        texto += "Prebenjamín";
    }

    if(anio>=8 && anio<=9){
        texto += "<b>Benjamín</b>";
    } else{
        texto += "Benjamín";
    }

    if(anio>=10 && anio<=11){
        texto += "<b>Alevín</b>";
    } else{
        texto += "Alevín";
    }

    if(anio>=12 && anio<=13){
        texto += "<b>Infantil</b>";
    } else{
        texto += "Infantil";
    }

    if(anio>=14 && anio<=15){
        texto += "<b>Cadete</b>";
    } else{
        texto += "Cadete";
    }

    if(anio>=16 && anio<=18){
        texto += "<b>Juvenil</b>";
    } else{
        texto += "Juvenil";
    }

    if(anio>=19){
        texto += "<b>Senior</b>";
    } else{
        texto += "Senior";
    }

    mostrarCategoria.innerHTML = texto;

}




