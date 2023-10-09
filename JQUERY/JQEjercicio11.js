//Variable donde almacena la dirrecion url del documento a consumir.
var url = "https://apicruddoctoresxml.azurewebsites.net/";

$(document).ready(function () {
    //Mostramos la informacion del recurso a consumir.
    informacion();
    //Boton insertar registro.
    $("#insertar").click(function () { 
        var apellido = $("#apellido").val();
        var especialidad = $("#especialidad").val();
        var id_doctor = $("#id_doctor").val();
        var id_hospital = $("#id_hospital").val();
        var salario = $("#salario").val();

        var dataXML = formatoXML(apellido,especialidad,id_doctor,id_hospital,salario);
        var request = "api/Doctores";
        $.ajax({
            type: "POST",
            url: url+request,
            data: dataXML,
            contentType: "text/xml",
            success: function () {
                console.log("Insertado Doctor correctamente");
                informacion();
            }
        });
    });
    //Boton actualizar registro.
    $("#actualizar").click(function () { 
        var apellido = $("#apellido").val();
        var especialidad = $("#especialidad").val();
        var id_doctor = $("#id_doctor").val();
        var id_hospital = $("#id_hospital").val();
        var salario = $("#salario").val();

        var dataXML = formatoXML(apellido,especialidad,id_doctor,id_hospital,salario);
        var request = "api/Doctores";
        $.ajax({
            type: "PUT",
            url: url+request,
            data: dataXML,
            contentType: "text/xml",
            success: function () {
                console.log("Recurso actualizado");
                informacion();
            }
        });
    });
    //Boton eliminar registro.
    //En el caso de la funcion delete solo nos pide el id del objeto.
    $("#eliminar").click(function () { 
        var id_doctor = $("#id_doctor").val();
        var request = "api/Doctores/"+id_doctor;
        $.ajax({
            type: "DELETE",
            url: url+request,
            success: function () {
                console.log("Recurso eliminado correctamente");
                informacion();
            }
        });    
    });
});

//Funciones y Herramientas
//Funcion donde obtenemos informacion de cada etiqueta del recurso xml.
// y guardarlos en l¡variables . Despues se ponta en una tabla la informacion.
function informacion(){
    var request = "api/Doctores";
    html = "";
    $.get(url+request, function (data) {
        console.log("Entrando en get de la funcion informacion");
        $(data).find("Doctor").each(function(){
            var apellido = $(this).find("Apellido").text();
            var especialidad = $(this).find("Especialidad").text();
            var id_doctor = $(this).find("IdDoctor").text();
            var id_hospital = $(this).find("IdHospital").text();
            var salario = $(this).find("Salario").text();

            html += "<tr>";
            html += "<td>" + apellido + "</td>";
            html += "<td>" + especialidad + "</td>";
            html += "<td>" + id_doctor + "</td>";
            html += "<td>" + id_hospital + "</td>";
            html += "<td>" + salario + "</td>";
        });
        $("#tablainfo tbody").html(html);
    });
};
//Funcion donde pasamos por parametro algunos datos para posteriormente
//Convertirlos en un tipo de formato, en este caso xml. Y lo devolvemos.
function formatoXML(apellido,especialidad,id_doctor,id_hospital,salario){
    var dataXML =  
        "<Doctor>"
            + "<Apellido>" + apellido + "</Apellido>"  
            + "<Especialidad>" + especialidad + "</Especialidad>" 
            + "<IdDoctor>" + id_doctor + "</IdDoctor>" 
            + "<IdHospital>" + id_hospital + "</IdHospital>" 
            + "<Salario>" + salario + "</Salario>" 
        + "</Doctor>"; 
    return dataXML; 
};