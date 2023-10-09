$(document).ready(function () {
    
    $.getJSON("documentos/jugadores.json", function (data) {
        $.each(data.jugadores, function(index,jugador){
            var name = jugador.nombre;
            var option = $("<option>", {
                "text": name
            });
            $("#barra").append(option);
        });
    });
    
    $("#barra").change(function () { 
        //1 Forma. Un poco mas larga pero se obtiene el indice.
        var indice;
        $("#barra option:selected").each(function(){
            var puesto = $(this).index();
            //console.log(puesto);
            indice = puesto;
        });
        //2 Forma. Mas rapida y menos codigo.
        //var index = $(this).prop("selectedIndex");

        $.ajax({
            type: "GET",
            url: "documentos/jugadores.json",
            dataType: "json",
            success: function (data) {
                var player = data.jugadores[indice];
                var html = "<h1>" + player.nombre + "</h1>";
                html += "<h2>Posicion: " + player.posicion + "</h2>";
                html += "<h2>Numero: " + player.numero + "</h2>";
                html += "<h2>Edad: " + player.edad + "</h2>";
                html += "<img src=" + player.imagen + "></img>";

                $("#datosjugadores").html(html);
            }
        });
        
    });



});