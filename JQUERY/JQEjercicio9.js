$(document).ready(function () {
    
    $.get("documentos/coches.xml",function (data) {
        console.log("cargado");
        var html = "";
        $(data).find("coche").each(function(){
            var marca = $(this).find("marca").text();
            var idcoche = $(this).attr("idcoche");
            var mostrarselect = $("<option>" , {
                "text" : marca ,
                "value" : idcoche
            });
            $("#listacoches").append(mostrarselect);
        });
    });

    $("#cargar").click(function () { 
        var html = "";
        var seleccionado = $("#listacoches").val();
        //OKconsole.log(seleccionado);
        $.get("documentos/coches.xml",function (data) {
            var filtro = "coche[idcoche=" + seleccionado + "]";
            //console.log(filtro);
            var nodo = $(data).find(filtro).first();
            //console.log(nodo);
            var marca = $(nodo).find("marca").text();
            var modelo = $(nodo).find("modelo").text();
            var imagen = $(nodo).find("imagen").text();
            //console.log(imagen);
            html += "<tr>";
            html += "<td>" + marca + "</td>";
            html += "<td>" + modelo + "</td>";
            html += "<td><img src=" + imagen + " width=100px height=100px></td>";
            html += "</tr>";
            $("table tbody").append(html);
        });
    });

});