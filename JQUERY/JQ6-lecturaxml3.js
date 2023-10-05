$(document).ready(function () {
    $("#buscarid").click(function () { 
        var id = $("#cajaid").val();
        var html = "";
        $("#lista").text("");
        $("#mostrar").text("");
        $.get("documentos/departamentos.xml", function (data) {
            console.log("Leyendo");
            var filtro = "DEPT[DEPT_NO=" + id + "]";
            
            var nododept = $(data).find(filtro).first();
            var nombre = $(nododept).find("DNOMBRE").text();
            var localidad = $(nododept).find("LOC").text();
            html = "<li>"+ nombre + " , " + localidad + "</li>";
            $("#lista").html(html);
        });
    });
    
    //Al dar click en el id indicado.
    $("#buscarloc").click(function () {
        //Guardamos en la variable el valor del id indicado.
        var localidad = $("#cajaloc").val();
        var html = "";
        //Borramos el contenido del id indicado.
        $("#lista").text("");
        $("#mostrar").text("");
        //Guardamos en data el documento xml.
        $.get("documentos/departamentos.xml", function (data) {
            //Guardamo en la variable un filtro , en este caso es el siguiente: LOC:contains(localidad).
            // constains selecciona todos los que contegan el siguiente valor.
            var filtro = "LOC:contains("+localidad+")";
            //Condicion donde comprobamos si la longitud del objeto encontrado es igual a 0.
            if($(data).find(filtro).length == 0){
                //Si es tru, muestra el mensjae
                $("#mostrar").text("No hay resspuesta");
            }
            //Buscamos dentro del documento todos elementos del filtro.
            $(data).find(filtro).each(function(){
                var padre = $(this).parent();
                var contenido = $(padre).find("DNOMBRE").text();
                console.log(this);
                html += "<li>"+contenido+"</li>";
            });
            $("#lista").html(html);
        });
    });
});