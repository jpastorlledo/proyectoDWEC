function calcularFCM(){
    let edad = parseInt(document.getElementById("edad").value);
    let sexo = parseInt(document.getElementById("sexo").value);
    let fcmH = document.getElementById("fcmH");    
    let mostrarFCM = document.getElementById("mostrarFCM");

        let maximaH = 220 - edad * 0.7;
        let maximaM = 220 - edad * 0.8;


        let recuperacionH = (maximaH * 0.6).toFixed(2);
        let aerobicaH = (maximaH * 0.7).toFixed(2);
        let anaerobicaH = (maximaH * 0.8).toFixed(2);
        let rojaH = (maximaH * 0.9).toFixed(2);

        let recuperacionM = (maximaM * 0.6).toFixed(2);
        let aerobicaM = (maximaM * 0.7).toFixed(2);
        let anaerobicaM = (maximaM * 0.8).toFixed(2);
        let rojaM = (maximaM * 0.9).toFixed(2);

        if (edad < 0 || edad > 120){
            alert("Edad incorrecta");
        } else if (sexo == 1){
            
            fcmH.innerHTML = maximaH.toFixed(2);

            fcmH.innerHTML = "Frecuencia cardiaca máxima: " + maximaH + "<br>";
            mostrarFCM.innerHTML = "Zona de recuperación: " + recuperacionH + "<br>" + "Zona aeróbica: " + aerobicaH + "<br>" + "Zona anaeróbica: " + anaerobicaH + "<br>" + "Línea roja:" + rojaH;
        } else if (sexo == 2){
           
            fcmH.innerHTML = maximaM.toFixed(2);

            fcmH.innerHTML = "Frecuencia cardiaca máxima: " + maximaM + "<br>"; 
            mostrarFCM.innerHTML = "Zona de recuperación: " + recuperacionM + "<br>" + "Zona aeróbica: " + aerobicaM + "<br>" + "Zona anaeróbica: " + anaerobicaM + "<br>" + "Línea roja: " + rojaM;
        } else {
            alert("Sexo incorrecto");
        }   
    }

