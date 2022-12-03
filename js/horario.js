function mostrarManana() {

    let valores = document.getElementById("tablaManana");

    let codigo = "";

    codigo += "<table border='2'>";

    codigo += "<tr><th></th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";

    for (let i = 9; i < 15; i+=2) {
        codigo += "<tr>";
        codigo += "<th>" + i + ":00-" + (i + 2) + ":00</th>";

        for (let j = 0; j < 5; j++) {
            codigo += "<td></td>";
        }
        codigo += "</tr>";
    }

    codigo += "</table>";

    valores.innerHTML = codigo;
}
