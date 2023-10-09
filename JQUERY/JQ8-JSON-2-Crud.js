var url = "https://apicruddepartamentoscore.azurewebsites.net/";
$(document).ready(function () {

    informar();

    $("#insertar").click(function () { 
        var numero = parseInt($("#numero").val());
        var nombre = $("#nombre").val();
        var localidad = $("#localidad").val();
        //Creamos un objeto
        var nuevo = new Object();
        //Asiganamos los valores a cada propiedad .
        nuevo.numero = numero;
        nuevo.nombre = nombre;
        nuevo.localidad = localidad;
        //Transformamos el objeto js a formato json
        var dataJSON = JSON.stringify(nuevo);
        var request = "api/Departamentos";
        //console.log(dataJSON);//Gracias a este console vimos que el dato enviado no era
        //compatible con la propiedad de json.
        $.ajax({
            type: "POST",
            url: url+request,
            data: dataJSON ,
            contentType: "application/json",
            success: function () {
                console.log("Registro enviado");
                informar();
            }
        });
    });


    $("#actualizar").click(function () { 
        var numero = parseInt($("#numero").val());
        var nombre = $("#nombre").val();
        var localidad = $("#localidad").val();
        var dataJSON = formatoJSON(numero,nombre,localidad);
        var request = "api/Departamentos";
        $.ajax({
            type: "PUT",
            url: url+request,
            data: dataJSON,
            contentType: "application/json",
            success: function () {
                console.log("Registro actualizado");
                informar();
            }
        }); 
    });


    $("#eliminar").click(function () { 
        var numero = $("#numero").val();
        var request = "api/Departamentos/"+numero;
        $.ajax({
            type: "DELETE",
            url: url+request,
            success: function () {
                console.log("Registro eliminado");
                informar()
            }
        });
        
    });

});

function informar(){
    var request = "api/Departamentos";
    $.getJSON(url+request, function (data) {
        var html = "";
        $.each(data, function (index, departamento) { 
            html += "<tr>";
            html += "<td>" + departamento.numero + "</td>";
            html += "<td>" + departamento.nombre + "</td>";
            html += "<td>" + departamento.localidad + "</td>";
            html += "</tr>";
        });
        $("#tabla tbody").html(html);
    });
};

function formatoJSON(numero,nombre,localidad){
    var nuevo = new Object();
    nuevo.numero = numero;
    nuevo.nombre = nombre;
    nuevo.localidad = localidad;
    var dataJSON = JSON.stringify(nuevo);
    return dataJSON;
};